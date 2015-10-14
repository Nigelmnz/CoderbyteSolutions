//Return the greater of two nums
function CheckNums(num1,num2){ 
  return (num1 === num2) ? -1 : num1 < num2
}

console.log(CheckNums(4,7) === true)
console.log(CheckNums(4,4) === -1)