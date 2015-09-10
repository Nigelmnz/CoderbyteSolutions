import Data.List

--Uses arrays
secondGreatLow' :: [Int] -> String
secondGreatLow' arr = getResult $ getData
  where getData = sort . nub $ arr
        getResult [x] = show x ++ " " ++ show x
        getResult xs = (show $ xs !! 1) ++ " " ++ (show $ xs !! (length xs - 2))

--Avoids arrays. Folds through the list and keeps track of low and high numbers instead.
secondGreatLow :: [Int] -> String
secondGreatLow arr = (\((a,b),(c,d)) -> show b ++ " " ++ show d) results
  where results = foldr check ((max,max),(min,min)) arr
        max = maxBound :: Int
        min = minBound :: Int
        check x acc = checkGreat . checkLow $ acc
              where checkLow ((low,secLow),(great,secGreat))
                      | x < low      = ((x,low),(great,secGreat))
                      | x < secLow   = ((low,x),(great,secGreat))
                      | otherwise    = ((low,secLow),(great,secGreat))
                    checkGreat ((low,secLow),(great,secGreat))
                      | x > great    = ((low,secLow),(x,great))
                      | x > secGreat = ((low,secLow),(great,x))
                      | otherwise    = ((low,secLow),(great,secGreat))
main = do
  print $ secondGreatLow [32,10,5,23,1] == "5 23"
  print $ secondGreatLow [80,80]        == "80 80"
  print $ secondGreatLow [80,30]        == "80 30"