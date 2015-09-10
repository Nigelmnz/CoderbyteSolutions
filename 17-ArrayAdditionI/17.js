// Bascially the solution to subset sum. Determine if any subset in an array sums to its largest element

// Standard Solution
function ArrayAdditionI(input) { 
  var arr = input.slice(0)
  var largest = arr.sort(function(a,b){return a-b}).pop()
  function add(sum,a){
    if(a.length === 0 || sum === largest) return sum === largest
    return add(sum,a.slice(1)) || add(a[0] + sum,a.slice(1))
  }
  
  return add(0,arr)
}

//Dynamic programming solution
function ArrayAdditionIDynamic(input){
  var arr = input.slice(0)
  var data = {}
  var largest = arr.sort(function(a,b){return a-b}).pop()
  function add(i,sum){
    if(i >= arr.length || sum === largest){
      return sum === largest
    }else if(data[i] !== undefined && data[i][sum] !== undefined){
      return data[i][sum]
    }else{
      save(i,sum,(function(){
        return add(i+1,sum) || add(i+1,arr[i] + sum)
      })())

      return data[i][sum]
    }
  }

  function save(i,sum,result){
    if(data[i]){
      data[i][sum] = result
    }else{
      var obj = {}
      obj[sum] = result 
      data[i] = obj
    }
  }
  
  return add(0,0)
}

//Iterative Solution. Just simluates the recursive solution with a stack.
function ArrayAdditionIIterative(input){
  var arr = input.slice(0)
  var largest = arr.sort(function(a,b){return a-b}).pop()
  var stack = [newBlock(0,0)]

  while(stack.length !== 0){
    var block = stack.pop()
    if(block.sum === largest){
      return true
    }else if(block.index < arr.length){
      //For each block, make two blocks that check the case where either the index is included or not
      stack.push(
        newBlock(block.index + 1, block.sum + arr[block.index]) 
      );
      stack.push(
        newBlock(block.index + 1, block.sum)
      );
    }
  }

  return false

  function newBlock(i,s){
    return {index:i, sum:s}
  }
}

console.log(ArrayAdditionIDynamic([4, 1, 45, 33, -2, 5, 1, 22, 12]) === true)
console.log(ArrayAdditionIDynamic([2, -3, 9, 10, -5, 3]) === false)
console.log(ArrayAdditionIIterative([4, 1, 45, 33, -2, 5, 1, 22, 12]) === true)
console.log(ArrayAdditionIIterative([2, -3, 9, 10, -5, 3]) === false)
console.log(ArrayAdditionIDynamic([2845056, 355104, 476077, 476303, 224658, -17532, -183480, -286788, 238271, 231845, -227454, 226199, 105438, 316870, 353652, 173563, 244958, 367896, 105046, 495797, 447209, 397810, -394348, 242527, 17532, -57224, -38084, 82375, 445376, -297793, 368660, -65413, 96325, -472195, -23826, -113982, -355574, 331821] === true))


