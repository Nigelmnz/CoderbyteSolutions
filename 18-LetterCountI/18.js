// In a sentence, find the word with the most number of repeat characters. Return -1 if none exist.

function LetterCountI(str){
  var result = str.split(' ').sort(function(word,next){
    return maxReps(word) < maxReps(next);
  })[0]; //If the first result is -1, that means that all others must be -1

  return (maxReps(result) > 0) ? result : -1;
}

function maxReps(str){
  var reps = str.match(/([a-z])(?=.*\1)/gi);
  return (reps) ? reps.length : -1;
}

console.log(LetterCountI('Today is the greatest day ever!') === 'greatest');
console.log(LetterCountI('aaa sssdsdss qwertyuiopasdf') === 'sssdsdss');
console.log(LetterCountI('zxcv asdfg qwertyuiopasdf') === -1);