import Data.List

firstFactorial :: Int -> Int
firstFactorial x = foldl' (*) 1 [1..x]

firstFactorialTrivial :: Int -> Int
firstFactorialTrivial x = product [1..x] 

main = do
  print $ firstFactorial 8 == 40320