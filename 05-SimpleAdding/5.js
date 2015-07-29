function SimpleAdding(num) { 
  var ans = 0;
  for(var i = num; i >= 0; i--){
    ans += i;
  }    
  
  return ans;
}

function SimpleAddingFun(num){
  if(num === 0){
    return 0
  }else{
    return num + SimpleAdding(num-1)
  }
}

console.log(SimpleAdding(10) == 55)
console.log(SimpleAdding(123))