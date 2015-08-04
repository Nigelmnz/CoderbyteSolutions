function WordCount(str) { 
  var s = str.match(/\S+/g)
  return s ? s.length : 0      
}

console.log(WordCount("hello how are you") === 4)
console.log(WordCount("test") === 1)
console.log(WordCount("   ") === 0)