--Asumming no zeros, detect if an array of numbers follows a artihmetic or geometric pattern

arithGeo :: (Eq a, Fractional a) => [a] -> Maybe String
arithGeo (x:y:z:rest)
  | x + (z-y) == y = if null rest then Just "Arithmetic" else arithGeo (y:z:rest)
  | x * (z/y) == y = if null rest then Just "Geometric" else arithGeo (y:z:rest)
arithGeo arr = Nothing

main = do
  print $ arithGeo [2,4,6,8]   == Just "Arithmetic"
  print $ arithGeo [2,4,6,10]  == Nothing
  print $ arithGeo [3,9,27,81] == Just "Geometric"
  print $ arithGeo [1,4,16,20] == Nothing