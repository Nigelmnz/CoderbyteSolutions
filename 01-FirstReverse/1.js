//Goal: Reverse a string!
"use strict";

function FirstReverseTrivial(str){
  return str.split('').reverse().join('')
}

function FirstReverse(str){ 
  return (str.length === 0) ? "" : FirstReverse(str.slice(1)) + str[0]
}

function FirstReverseFunctional(str){
  return str.split('').reduce(function(a,b){
    return b + a
  },[])
}

print(FirstReverseFunctional("Test String"))          
