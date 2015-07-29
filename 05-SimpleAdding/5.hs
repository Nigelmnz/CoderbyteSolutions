simpleAdding :: Int -> Int
simpleAdding 0 = 0
simpleAdding x = x + simpleAdding (x-1)

simpleAddingTrivial :: Int -> Int
simpleAddingTrivial x = sum [1..x]

main = do
  print $ simpleAdding 10 == 55
  print $ simpleAdding 123