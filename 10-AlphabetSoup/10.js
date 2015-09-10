// Sort the characters in a string.

function AlphabetSoupTrivial(str){ 
  return str.split('').sort().join('')
}

//Functional implementation of quicksort. Works with characters only.
function AlphabetSoupFunctional(str){
  return sort(str.split(''))

  function sort(arr){
    if(arr.length === 0) return []

    var pivot = arr.pop()
    var small = sort(arr.filter(function(x){ return x <= pivot }))
    var large = sort(arr.filter(function(x){ return x > pivot }))

    return small + pivot + large
  }
}

//In-place implementation of quicksort. Works with characters only.
function AlphabetSoup(str){
  var arr = str.split('')
  sort(0, arr.length - 1)
  return arr.join('')

  function sort(left,right){
    if(left < right){
      var pivot = partition(left,right)
      sort(left,pivot)
      sort(pivot + 1, right)
    }
  }

  // Seperate the array into two sides, less than and grater the pivot
  function partition(left,right){
    var pVal = arr[left]
    while(left < right){
      while(arr[right] > pVal) right-- //Find the first thing smaller than p
      while(arr[left] < pVal)  left++ //Find the first thing larger than p

      if(left < right){
        swap(left,right)
        right--
        left++
      }
    }

    return right
  }

  function swap(a,b){
    var t  = arr[a]
    arr[a] = arr[b]
    arr[b] = t
  }
}

console.log(AlphabetSoup("hello") === "ehllo")
console.log(AlphabetSoup("Test Case") === " CTaeesst")
console.log(AlphabetSoupFunctional("Test Case") === " CTaeesst")




