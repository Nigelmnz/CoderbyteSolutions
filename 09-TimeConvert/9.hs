--Convert minutes to HH:MM
timeConvert :: Int -> String
timeConvert x = (show $ quot x 60) ++ ":" ++ (show $ mod x 60)

main = do
  print $ timeConvert 150 == "2:30"
  print $ timeConvert 33  == "0:33"