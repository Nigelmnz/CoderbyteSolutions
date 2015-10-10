-- Given two numbers, find the quotient and print it with commas

divisionStringified :: Int -> Int -> String --Via Pattern Matching
divisionStringified a b = commafy . reverse $ show $ div' a b
  where commafy (a:b:c:d:xs) = (commafy $ d:xs) ++  ',':c:b:a:[] 
        commafy xs = reverse xs 

divisionStringifiedMod :: Int -> Int -> String -- Via div and mods
divisionStringifiedMod a b = commafy $ div' a b
  where commafy n 
          | n <= 999 = show n
          | otherwise = commafy (div n 1000) ++ "," ++ addZeros (show $ mod n 1000)
              where addZeros x = (replicate (3 - length x) '0') ++ x

divisionStringifiedFold :: Int -> Int -> String -- Via Fold
divisionStringifiedFold a b = commafy $ show $ div' a b
  where commafy str = foldr f "" (zip [length str - 1, length str - 2 .. 0] str)
        f x acc -- After a set of three characters, add a characers with a comma
          | (fst x) > 0 && mod (fst x) 3 == 0 = (snd x):',':acc
          | otherwise          = (snd x):acc

div' :: Int -> Int -> Int --A div that rounds up
div' a b = round (fromIntegral a / fromIntegral b)

main = do
  print $ divisionStringified 503394930 43     == "11,706,859"
  print $ divisionStringified 45 50            == "1"
  print $ divisionStringifiedMod 503394930 43  == "11,706,859"  
  print $ divisionStringifiedMod 45 50         == "1"
  print $ divisionStringifiedFold 503394930 43 == "11,706,859"  
  print $ divisionStringifiedFold 45 50        == "1"