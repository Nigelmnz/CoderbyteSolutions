// Asumming no zeros, detect if an array of numbers follows a artihmetic or geometric pattern

function ArithGeo(arr){
  if(arr[0] + (arr[2]-arr[1]) === arr[1] && (arr.length === 3 || ArithGeo(arr.splice(1)) === "Arithmetic")) return "Arithmetic"
  if(arr[0] * (arr[2]/arr[1]) === arr[1] && (arr.length === 3 || ArithGeo(arr.splice(1)) === "Geometric")) return "Geometric"
  return -1
}

console.log(ArithGeo([2,4,6,8])   === "Arithmetic")
console.log(ArithGeo([2,4,6,10])  === -1)
console.log(ArithGeo([3,9,27,81]) === "Geometric")
console.log(ArithGeo([1,4,16,20])  === -1)

[x,x+c,(x+c*2) = (x+c)*d,(x+c*2)*d*d != (x+c*3c)]