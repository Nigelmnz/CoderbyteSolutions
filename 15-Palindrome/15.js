function PalindromeTrivial(str){
  str = str.replace(/\s/g,'')
  return str.split('').reverse().join('') === str;
}

function Palindrome(str) { 
  str = str.replace(/\s/g,'')
  for(var i = 0; i < str.length/2; i++){
    if(str[i] !== str[str.length-i-1]) return false
  }
  return true
}

console.log(Palindrome("hello ds d e w") === false)
console.log(Palindrome("otdee dto") === true)
console.log(Palindrome(" ") === true)