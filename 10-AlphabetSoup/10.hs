import Data.List

alphabetSoupTrivial :: String -> String
alphabetSoupTrivial = sort

alphabetSoup :: String -> String
alphabetSoup = quicksort
  where quicksort "" = ""
        quicksort (x:xs) = small ++ [x] ++ large
          where small = quicksort $ filter (<=x) xs
                large = quicksort $ filter (>x) xs

main = do
  print $ alphabetSoup "hello" == "ehllo"
  print $ alphabetSoup "Test Case" == " CTaeesst"