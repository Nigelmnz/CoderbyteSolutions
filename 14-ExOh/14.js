function ExOh(str) { 
  return str.split('').reduce(function(acc,c){
    return acc + (c === 'x' ? 1 : -1)
  },0) === 0
}

console.log(ExOh("xxooxoox") === true)
console.log(ExOh("ooxox")    === false)