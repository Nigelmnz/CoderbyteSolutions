-- Bascially the solution to subset sum. Determine if any subset in an array sums to its largest element

import Data.List
import Data.Function

--Standard Solution
arrayAdditionI :: [Int] -> Bool
arrayAdditionI arr = subsetSum largest (delete largest arr)
  where largest = maximum arr
        subsetSum 0 _         = True
        subsetSum targ []      = False
        subsetSum targ (x:xs)  = subsetSum targ xs || subsetSum (targ - x) xs

--Monadic Solution
arrayAdditionIMonad :: [Int] -> Bool
arrayAdditionIMonad arr = not $ null $ subsetSum largest (delete largest arr)
  where largest = maximum arr
        subsetSum targ = filter ((== targ) . sum) . mapM (\x -> [0, x])

main = do
  print $ arrayAdditionI [4, 1, 45, 33, -2, 5, 1, 22, 12] == True
  print $ arrayAdditionI [2, -3, 9, 10, -5, 3] == False
  print $ arrayAdditionIMonad [4, 1, 45, 33, -2, 5, 1, 22, 12] == True
  print $ arrayAdditionIMonad [2, -3, 9, 10, -5, 3] == False
