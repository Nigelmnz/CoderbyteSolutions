--Given a string, swap the cases of each letter in the string
import Data.Char

swapCase :: String -> String
swapCase = map (\x -> if isUpper x then toLower x else toUpper x) 

main = do
  print $ swapCase "Hello World" == "hELLO wORLD"
  print $ swapCase "Wow. WOW!"   == "wOW. wow!"