exOh :: String -> Bool
exOh str = (foldr (\x acc -> acc + if x == 'x' then 1 else -1) 0 str) == 0 

main = do
  print $ exOh "xxooxoox" == True
  print $ exOh "xxoox"    == False