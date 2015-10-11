import Data.List.Split
import Text.Regex.Posix

countingMinutesI :: String -> Int --Without regex
countingMinutesI str = mod (60*24 + time2 - time1) 60*24--1440 mins in a day
  where splitTimes = (\(x:y:[]) -> (x,y)) . (splitOn "-")
        time1      = parseTime . fst . splitTimes $ str
        time2      = parseTime . snd . splitTimes $ str
        parseTime time = hr + min + period
            where hr     = ((read $ takeWhile (/= ':') time) `mod` 12) * 60 --Parse first 1-2 digts
                  min    = read . take 2 . drop 1 . dropWhile(/= ':') $ time --Parse next 2 after ':'
                  period = if (elem 'a' time) then 0 else 60*12 --Check for am/pm

countingMinutesIRegex :: String -> Int --With regex!
countingMinutesIRegex str = mod (60*24 + time2 - time1) 60*24 --1440 mins in a day
  where splitTimes = (\(x:y:[]) -> (x,y)) . (splitOn "-")
        time1      = parseTime . fst . splitTimes $ str
        time2      = parseTime . snd . splitTimes $ str
        parseTime time =
          let (_,_,_,[hr,min,period]) = time =~ "([0-9]{1,2}):([0-9]{1,2})(am|pm)" :: (String,String,String,[String]) --yay,regex
          in (read hr `mod` 12) * 60 + (read min) + (if (elem 'a' period) then 0 else 60*12) -- modded hrs + mins + period

main = do
  print $ countingMinutesI "11:59pm-12:00am" == 1
  print $ countingMinutesI "5:20pm-6:30pm" == 70
  print $ countingMinutesI "12:30pm-12:00am" == 690
  print $ countingMinutesI "1:23am-1:08am" == 1425
  print $ countingMinutesIRegex "11:59pm-12:00am" == 1
  print $ countingMinutesIRegex "5:20pm-6:30pm" == 70
  print $ countingMinutesIRegex "12:30pm-12:00am" == 690
  print $ countingMinutesIRegex "1:23am-1:08am" == 1425