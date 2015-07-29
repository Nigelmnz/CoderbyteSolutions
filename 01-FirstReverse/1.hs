import Data.List

firstReverseTrivial :: String -> String
firstReverseTrival = reverse

firstReverse :: String -> String
firstReverse = foldl (\acc x -> x : acc) []

main = print $ firstReverse "Test String"
