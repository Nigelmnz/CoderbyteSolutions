import Data.Traversable

checkNums :: Int -> Int -> Either Int Bool
checkNums a b 
  | a == b    = Left  (-1)
  | otherwise = Right (a < b)

main = do 
  print $ checkNums 4 7
