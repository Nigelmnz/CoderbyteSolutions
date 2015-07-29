function TimeConvert(num) { 
  return Math.floor(num/60) + ":" + num % 60
}

console.log(TimeConvert(150) === "2:30")
console.log(TimeConvert(33)  === "0:33")