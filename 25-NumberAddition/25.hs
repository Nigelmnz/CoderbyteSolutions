--Given a string, add all the numbers in the string
import Data.Char

numberAddition :: String -> Int
numberAddition ""  = 0
numberAddition str@(x:xs)
  | isNum x   = (toInt $ takeWhile isNum str) + numberAddition (dropWhile isNum str)
  | otherwise = numberAddition xs
  where isNum x = elem x ['0'..'9']
        toInt xs = if xs == "" then 0 else read xs

main = do
  print $ numberAddition "5Hello 5" == 10
  print $ numberAddition "123t* 1*" == 124
  print $ numberAddition "nothing"  == 0