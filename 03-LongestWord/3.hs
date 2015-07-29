--Find the longest word in a sentence while excluding punctuation
import Data.List

longestWord :: String -> String
longestWord str = head . sortBy wordLen . map rmvPunct . words $ str
  where wordLen x y = compare (length y) (length x) 
        rmvPunct = filter (`notElem` ".?!-;\"@#$%^&*():,/\'{}[]")

main = do
  print $ longestWord "i love$..! bacon" == "bacon"