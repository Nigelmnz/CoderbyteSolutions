--Count the number of vowels in a word
vowelCount :: String -> Int
vowelCount = foldr (\x acc -> if elem x "aeiou" then acc + 1 else acc) 0

main = do
  print $ vowelCount "helloo" == 3
  print $ vowelCount "ghjk"   == 0