--Capitalize each word in a sentence 

import Data.Char

letterCapitalize :: String -> String
letterCapitalize str = unwords . map (\(x:xs) -> (toUpper x):xs) . words $ str

main = do
  print $ letterCapitalize "hello world" == "Hello World"
  print $ letterCapitalize "this is a test"