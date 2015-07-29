def FirstReverse(str):
  if len(str) == 0:
    return ""
  else:
    return FirstReverse(str[1:]) + str[0]

def FirstReverseFancy(str):
  return str[::-1]

print(FirstReverseFancy("Test String")) 