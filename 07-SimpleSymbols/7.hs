--Given a string with alphabet [A-z],+,=: Does every letter have two "+"'s around it?
simpleSymbols :: String -> Bool
simpleSymbols "" = True
simpleSymbols xs@('+':x:'+':rest)
  | elem x "=+" = simpleSymbols $ tail xs
  | otherwise   = simpleSymbols ('+':rest)
simpleSymbols (x:xs) 
  | elem x "=+" = simpleSymbols xs
  | otherwise   = False

main = do
  print $ simpleSymbols "+a++b+===+" == True
  print $ simpleSymbols "++abc++"    == False