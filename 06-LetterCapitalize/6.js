// Capitalize each word in a sentence 
function LetterCapitalize(str) { 
  return str.split(' ').map(function(str){
    return str[0].toUpperCase() + str.slice(1)
  }).join(' ')
}

console.log(LetterCapitalize("hello world") == "Hello World")
console.log(LetterCapitalize("this is A test case s s"))