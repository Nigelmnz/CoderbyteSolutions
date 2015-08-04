wordCount :: String -> Int
wordCount = length . words

main = do
  print $ wordCount "hello how are you" == 4
  print $ wordCount "test" == 1
  print $ wordCount "   "  == 0