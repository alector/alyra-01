const filter = (myArray, myFunction) => {
  const filtered = []
  for (index = 0, len = myArray.length; index < len; ++index) {
    filtered.push(myFunction(myArray[index]))
  }

  return filtered
}

const test2 = [1, 2, 3]

new_list = filter(test2, el => el * 2)
console.log(new_list)
