function SimpleSymbols(str) { 
  for(var i=0; i < str.length; i++){
    if((/[a-z]/gi.test(str[i])) && (i === 0 || i === str.length-1 || (str[i-1] !== str[i+1]) || str[i-1] !== "+")){
        return false
    }
  }
  
  return true;
}

function SimpleSymbolsRegex(str){
  return !/(^|[^+])[a-z]|[a-z]([^+]|$)/gi.test(str)
}

console.log(SimpleSymbols("+a++b+===+") === true);