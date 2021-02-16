const InitialNums = [10, 15, 16, 5005, 52390903]
let FinalNums = []

InitialNums.forEach(decimal => {
  let numObj = new Object()
  numObj.dec = decimal
  numObj.bin = decimal.toString(2)
  numObj.hex = decimal.toString(16)
  numObj.oct = decimal.toString(8)

  FinalNums.push(numObj)
})

console.log(FinalNums)
