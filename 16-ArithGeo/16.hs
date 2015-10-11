--Asumming no zeros, detect if an array of numbers follows a artihmetic or geometric pattern

arithGeo :: (Eq a, Fractional a) => [a] -> Maybe String
arithGeo list@(x:y:z:rest)
  | x + (z-y) == y = arith list
  | otherwise      = geo list
    where arith (x:y:z:rest)
            | x + (z-y) == y   = if null rest then Just "Arithmetic" else arith (y:z:rest)
            | otherwise        = Nothing
          geo (x:y:z:rest)
            | x * (z/y) == y   = if null rest then Just "Geometric" else geo (y:z:rest)
            | otherwise        = Nothing

arithGeo arr = Nothing

main = do
  print $ arithGeo [2,4,6,8]   == Just "Arithmetic"
  print $ arithGeo [2,4,6,10]  == Nothing
  print $ arithGeo [3,9,27,81] == Just "Geometric"
  print $ arithGeo [1,4,16,20] == Nothing
  print $ arithGeo [1,2,3,4.5] == Nothing 