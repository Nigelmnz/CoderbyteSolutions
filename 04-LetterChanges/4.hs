--For each letter in a sentence, increment it (ex: a->b z->a) and then capitalize any vowels
import Data.Char

letterChanges :: String -> String
letterChanges = map rplChar

rplChar :: Char -> Char
rplChar c
  | elem c "Zz" = 'A'
  | elem c (['A'..'Z'] ++ ['a'..'z'])  = vowelChk . chr $ (ord c + 1)
  | otherwise = c
    where vowelChk x = if elem x "aeiou" then toUpper x else x

main = do
  print $ letterChanges "Argument goes here 123" == "BshvnfOU hpft Ifsf 123"
  print $ letterChanges "Test Case .1"