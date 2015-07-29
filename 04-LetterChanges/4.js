function LetterChanges(str) {
  function rplChar(c){
    if(/[zZ]/gi.test(c)){
     c = "a"
    }else{
      c = String.fromCharCode(c.charCodeAt(0)+1)
    }

    if(/[aeiou]/gi.test(c)) c = c.toUpperCase() 
    return c
  }

  return str.replace(/[a-z]/gi, function(c){
    return rplChar(c)
  })
}

console.log(LetterChanges("Argument goes here 123") == "BshvnfOU hpft Ifsf 123")
console.log(LetterChanges("Test Case"))