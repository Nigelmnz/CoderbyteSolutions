// Given a list of numbers, find if the mean and mode are equal. If so, return 1. Otherwise, 0.
function MeanMode(arr) { 
  var sum = 0;
  var mode = {val: 0, maxfreq: -1, freqs:{}};
  for(var i = 0; i < arr.length; i++){
    var num = arr[i];
    
    //Set Freq
    mode.freqs[num] = (mode.freqs[num] === undefined) ? 0 : mode.freqs[num] + 1;
           
    if(mode.freqs[num] >= mode.maxfreq){
      mode.val = num;
      mode.maxfreq = mode.freqs[num];
    }
    
    //Set Sum
    sum += num;
  }
  
  return (mode.val === sum/arr.length) ? 1 : 0;
}

console.log(MeanMode([1,2,2,3])   === 1);
console.log(MeanMode([4,4,4,6,2]) === 1);
console.log(MeanMode([1,2,3])     === 0);
console.log(MeanMode([67,1,1])    === 0);
console.log(lol(2));