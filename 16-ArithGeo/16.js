// Asumming no zeros, detect if an array of numbers follows a artihmetic or geometric pattern

function ArithGeo(arr){
  return (arr[0] + (arr[2]-arr[1]) === arr[1]) ? arith(arr) : geo(arr)

  function arith(arr){
    return (arr[0] + (arr[2]-arr[1]) === arr[1] && (arr.length === 3 || arith(arr.slice(1)) === "Arithmetic")) ? "Arithmetic" : -1
  }

  function geo(arr){
    return (arr[0] * (arr[2]/arr[1]) === arr[1] && (arr.length === 3 || geo(arr.slice(1)) === "Geometric")) ?  "Geometric" : -1
  }
}

console.log(ArithGeo([2,4,6,8])   === "Arithmetic")
console.log(ArithGeo([2,4,6,10])  === -1)
console.log(ArithGeo([3,9,27]) === "Geometric")
console.log(ArithGeo([1,4,16,20])  === -1)
console.log(ArithGeo([1,2,3,4.5])  === -1)