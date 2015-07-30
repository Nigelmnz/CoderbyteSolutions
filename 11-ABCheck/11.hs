--Is any part of a string in the form of a???b or b???a ?
abCheck :: String -> Bool

abCheck "" = False
abCheck ('a':x:y:z:'b':rest) = True
abCheck ('b':x:y:z:'a':rest) = True
abCheck (x:xs) = abCheck xs

main = do
  print $ abCheck "adkeb"   == True
  print $ abCheck "sadkaib" == False