"use strict";

function FirstFactorial(num) { 
  if(num <= 1){
    return 1
  }else{
    return num * FirstFactorial(num-1)
  }
}
   
console.log(FirstFactorial(8) === 40320)