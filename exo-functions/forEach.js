
const forEach = (myArray, myFunction) => {
  for (index = 0, len = myArray.length; index < len; ++index) {
    myFunction(myArray[index])
  }
}


let test = ['a', 'b', 'c']

forEach(test, el => console.log(el))
