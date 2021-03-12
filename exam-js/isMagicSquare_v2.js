// les dernieres étapes  sont inachevés

const square = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8]
]

function isMagicSquare(myArray) {
  let final = []
  let f = 0 // the final index of the final list

  // horizontal
  for (let line = 0; line < myArray.length; ++line) {
    final[f] = myArray[line].reduce((a, b) => a + b)

    f += 1
  }
  // vertical
  for (let column = 0; column < myArray.length; ++column) {
    let sum = 0
    for (let line = 0; line < myArray.length; ++line) {
      sum += myArray[line][column]
      console.log({ sum })
    }

    final[f] = sum
    f += 1
  }

  // final[3] = myArray[0][0] + myArray[1][0] + myArray[2][0]
  // final[4] = myArray[0][1] + myArray[1][1] + myArray[2][1]
  // final[5] = myArray[0][2] + myArray[1][2] + myArray[2][2]

  // final[6] = myArray[0][2] + myArray[1][1] + myArray[2][0]
  // diagonial 1
  let k = 0
  for (let line = 0; line < myArray.length; ++line) {
    k += myArray[line][myArray.length - line]
  }

  final[f] = k
  f += 1

  console.log('k', final[f])

  // diagonial 2
  let p = null
  for (let line = 0; line < myArray.length; ++line) {
    p += myArray[line][line]
  }
  final[f] = p

  // final[7] = myArray[0][0] + myArray[1][1] + myArray[2][2]

  // remove dubplicate numbers by creating a set
  let remove_duplicates = [...new Set(final)]

  // all items of a list are equal if the set creates a list with only ONE element
  let all_are_equal = remove_duplicates.length == 1

  return all_are_equal
}

console.log(isMagicSquare(square))
