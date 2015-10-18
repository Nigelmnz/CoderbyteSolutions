//Given a string, add all the numbers in the string

function NumberAddition(str){ //yay regex~
  var matches = str.match(/([0-9]+)/g);
  return (matches) ? matches.reduce(function(acc,x){
    return acc + parseInt(x);
  },0) : 0;
}

function NumberAdditionNonRegex(str){
  var build = "";
  return str.split('').reduce(function(acc,x){
    if(/[0-9]/.test(x)){
      build += x;
      return acc;
    }else if(build !== ""){
      var parse = parseInt(build);
      build = "";
      return acc + parse;
    }else{
      return acc;
    }
  },0) + ((build !== "") ? parseInt(build) : 0);
}

console.log(NumberAddition("5Hello 5") === 10);
console.log(NumberAddition("123t* 1*") === 124);
console.log(NumberAddition("nothing"));