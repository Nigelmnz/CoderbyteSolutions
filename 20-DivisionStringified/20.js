// Given two numbers, find the quotient and print it with commas

function DivisionStringified(num1,num2){ //Functional
  return commafy(Math.round(num1/num2));

  function commafy(num){
    var input = (num + '').split('').reverse();
    return input.reduce(function(acc,x,i){
      return (i > 0 && i % 3 === 0) ? (x + ',' + acc) : (x + acc);
    },'');
  }
}

function DivisionStringifiedMods(num1,num2){ //Uses mods and div
  return commafy(Math.round(num1/num2));

  function commafy(num){
      if(num > 999){
        return commafy(Math.floor(num/1000)) + ',' + ('000' + num % 1000).slice(-3)
      }else{
        return num + '';
      }
  }
}


console.log(DivisionStringified(45,50) === '1');
console.log(DivisionStringified(6300,3) === '2,100');
console.log(DivisionStringified(503394930,43) === '11,706,859');
console.log(DivisionStringifiedMods(45,50) === '1');
console.log(DivisionStringifiedMods(6300,3) === '2,100');
console.log(DivisionStringifiedMods(503394930,43) === '11,706,859');


