function AlphabetSoupTrivial(str) { 
  return str.split('').sort().join('')
}

//Implementation of quicksort
function AlphabetSoup(input){
  var str = input.split('')
  function sort(left,right){
        
      var pivot = Math.floor((left+right)/2)
      var pVal  = str[pivot]
      var l     = left
      var r     = right

      while(l <= r){
        while(str[l] < pVal){ //Find the first thing larger than p
          l++
        }

        while(str[r] > pVal){ //Find the first thing smaller than p
          r--
        }

        if(l <= r){ //Swap em
          swap(l,r)
          l++
          r--
        }
      }

      pivot = l

      if(left < pivot - 1){
        sort(left,pivot-1) //Left
      }

      if(pivot < right){
        sort(pivot,right) //Right
      }

  }

  function swap(a,b){
    var t  = str[a]
    str[a] = str[b]
    str[b] = t
  }

  sort(0,str.length-1)
  return str.join('')
}

console.log(AlphabetSoup("hello") === "ehllo")
console.log(AlphabetSoup("Test Case") === " CTaeesst")




