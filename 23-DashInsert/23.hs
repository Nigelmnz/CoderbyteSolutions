--Given a number, output a string that prints a dash next to every two odd numbers
import Data.Char
import Text.Regex

dashInsert :: Int -> String
dashInsert num = splitOdds $ show num 
  where splitOdds (x:y:zs)
          | odd (digitToInt x) && odd (digitToInt y) = x:'-':splitOdds(y:zs)
          | otherwise                                = x:splitOdds(y:zs)
        splitOdds xs = xs

main = do
  print $ dashInsert 99999  == "9-9-9-9-9"
  print $ dashInsert 2468   == "2468"
  print $ dashInsert 454793 == "4547-9-3"