function CheckNums(num1,num2) { 
  if(num1 === num2){
    return -1;
  }
  
  return num1 < num2;
}

console.log(CheckNums(4,7) === true)
console.log(CheckNums(4,4) === -1)