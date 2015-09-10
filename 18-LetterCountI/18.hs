--In a sentence, find the word with the most number of repeat characters. Return -1 if none exist.
import Data.List

letterCountI :: String -> Either Int String
letterCountI = repResult . head . (sortBy repCompare) . words
  where maxReps s = length $ s \\ (nub s)
        repCompare a b
          | maxReps a > maxReps b = LT
          | maxReps b > maxReps a = GT
          | otherwise = EQ 
        repResult s
          | maxReps s == 0 = Left (-1)
          | otherwise      = Right s


main = do
  print $ letterCountI "Today is the greatest day ever!" == Right "greatest"
  print $ letterCountI "aaa sssdsdss qwertyuiopasdf"     == Right "sssdsdss"
  print $ letterCountI "zxcv asdfg qwertyuiopasdf"       == Left (-1)