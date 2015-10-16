//Given a string, swap the cases of each letter in the string

function SwapCase(str) { 
  return str.split('').reduce(function(acc,x){
      return acc + ((x === x.toUpperCase()) ? x.toLowerCase() : x.toUpperCase());
    },'');  
}

console.log(SwapCase("Hello World") === "hELLO wORLD");
console.log(SwapCase("Wow. WOW!") === "wOW. wow!");
