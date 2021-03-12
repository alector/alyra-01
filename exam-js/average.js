function average(myArray) {
  let sum = myArray.reduce((a, b) => a + b)
  return sum / myArray.length
}

console.log(average([1, 2, 3]))
