-- Given a list of numbers, find if the mean and mode are equal. If so, return 1. Otherwise, 0.
import Data.List
import Data.Ord

meanMode :: [Int] -> Int
meanMode list = if mean == mode then 1 else 0
  where mean = div (sum list) (length list) 
        --Group lets us make frequency lists easily. We just grab the mode from there.
        mode = snd . head . sortBy (comparing $ negate.fst) . map (\x -> (length x, head x)) . group . sort $ list

main = do
  print $ meanMode [1,2,2,3]   == 1
  print $ meanMode [4,4,4,6,2] == 1
  print $ meanMode [1,2,3]     == 0
  print $ meanMode [67,1,1]    == 0