const square = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8]
]

function isMagicSquare(myArray) {
  let final = []

  // horizontal
  final[0] = myArray[0].reduce((a, b) => a + b)
  final[1] = myArray[1].reduce((a, b) => a + b)
  final[2] = myArray[2].reduce((a, b) => a + b)

  // vertical
  final[3] = myArray[0][0] + myArray[1][0] + myArray[2][0]
  final[4] = myArray[0][1] + myArray[1][1] + myArray[2][1]
  final[5] = myArray[0][2] + myArray[1][2] + myArray[2][2]

  // diagonial
  final[6] = myArray[0][2] + myArray[1][1] + myArray[2][0]
  final[7] = myArray[0][0] + myArray[1][1] + myArray[2][2]

  // remove dubplicate numbers by creating a set
  let remove_duplicates = [...new Set(final)]

  // all items of a list are equal if the set creates a list with only ONE element
  let all_are_equal = remove_duplicates.length == 1

  return all_are_equal
}

console.log(isMagicSquare(square))
