function LongestWord(sen) { 
  function rmPunct(s){ return s.replace(/[^\w\s]/g,"")}

  var words = sen.split(' ').sort(function(a,b){
    return rmPunct(b).length-rmPunct(a).length
  })
  return rmPunct(words[0])
}

console.log(LongestWord("I love!!!...$$$ frosting.") == "frosting")