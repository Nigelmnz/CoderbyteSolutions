"use strict";

function FirstFactorial(num) { 
  return (num <= 1) ? 1 : num * FirstFactorial(num-1)
}
   
console.log(FirstFactorial(8) === 40320)
console.log(FirstFactorial(1) === 1)