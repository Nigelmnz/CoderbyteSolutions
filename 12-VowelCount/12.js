function VowelCountRegex(str){
  var result = str.match(/[aeiou]/gi)
  return (result) ? result.length : 0
}

function VowelCount(str) { 
  return str.split('').reduce(function(acc,c){
      return acc + (/[aeiou]/gi.test(c) ? 1 : 0)
    },0)
}

console.log(VowelCount("helloo") === 3)
console.log(VowelCount("sdjk")   === 0)