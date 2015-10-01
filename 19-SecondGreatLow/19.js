// Given an list of #'s, print the second highest and lowest numbers of it

function SecondGreatLow(arr) { 
  var data = arr.sort(function(a,b){
    return a > b;
  }).reduce(function(acc,x){
    return (x !== acc[acc.length -1]) ? acc.concat(x) : acc;
  },[]); //Reduce will remove duplicate numbers from the sorted list
  
  if(data.length > 1){
    return data[1] + " " + data[data.length - 2];
  }else{ 
    return data[0] + " " + data[0];
  }
}

console.log(SecondGreatLow([32,10,5,23,1]) === "5 23")
console.log(SecondGreatLow([80,80]) === "80 80")
console.log(SecondGreatLow([80,30]) === "80 30")
