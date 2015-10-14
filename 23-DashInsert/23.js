//Given a number, output a string that prints a dash next to every two odd numbers

function DashInsert(str) { 
  return (str + "").split("").reduce(function(acc,x,i,arr){
    return acc + ((parseInt(x)%2 === 1 && parseInt(arr[i-1])%2 === 1 ) ? '-' + x : x);
  },"");
}

function DashInsertRegex(str){ //regex, yay~
  return (str + "").replace(/([13579])(?=([13579]))/g, '$1-');
}

console.log(DashInsert(99999)  === "9-9-9-9-9");
console.log(DashInsert(2468)   === "2468");
console.log(DashInsert(454793) === "4547-9-3");
console.log(DashInsertRegex(99999)  === "9-9-9-9-9");
console.log(DashInsertRegex(2468)   === "2468");
console.log(DashInsertRegex(454793) === "4547-9-3");