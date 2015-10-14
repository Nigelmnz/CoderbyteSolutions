--Check if something is a palindrome
palindrome :: String -> Bool
palindrome str = cStr == reverse cStr
  where cStr = filter (/= ' ') str 

main = do
  print $ palindrome "ot eri ddir eto" == True
  print $ palindrome "test" == False
  print $ palindrome "  " == True