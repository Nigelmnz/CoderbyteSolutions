// Is any part of a string in the form of a???b or b???a ?
function ABCheck(str) { 
  return /(a...b)|(b...a)/gi.test(str)    
}

function ABCheckInvolved(str){
  for(var i=0; i<str.length; i++){
    if(str[i] === "a" && str[i+4] === "b" || str[i] === "b" && str[i+4] === "a"){
      return true;
    }
  }

  return false;
}

console.log(ABCheckInvolved("adkeb")  === true)
console.log(ABCheckInvolved("sadkaib") === false)   
