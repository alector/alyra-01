// Version originale: https://github.com/alector/alyra-01/blob/master/exam-js/isMagicSquare_v2.js
// Deux bugs corrigés:
// À la ligne 48 de la version originale, le  `let p = null` doit être remplacé par `let p = 0` .
// À la ligne 39 de la version originale, le `myArray.length - line` doit être remplacé par `myArray.length - line -1`.

const square1 = [
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
    }

    final[f] = sum
    f += 1
  }

  // diagonial 1
  let k = 0
  for (let line = 0; line < myArray.length; ++line) {
    k += myArray[line][myArray.length - line - 1]
  }

  final[f] = k
  f += 1

  // diagonial 2
  let p = 0
  for (let line = 0; line < myArray.length; ++line) {
    p += myArray[line][line]
  }
  final[f] = p

  console.log('\n\n', { final })
  // remove dubplicate numbers by creating a set
  let remove_duplicates = [...new Set(final)]

  // all items of a list are equal if the set creates a list with only ONE element
  let all_are_equal = remove_duplicates.length == 1

  return all_are_equal
}

// not a magic square
const square2 = [
  [2, 7, 6, 1],
  [9, 5, 1, 6],
  [4, 3, 8, 3],
  [1, 1, 1, 1]
]

// magic square
const square3 = [
  [17, 24, 1, 8, 15],
  [23, 5, 7, 14, 16],
  [4, 6, 13, 20, 22],
  [10, 12, 19, 21, 3],
  [11, 18, 25, 2, 9]
]

// not magic square
const square4 = [
  [11, 24, 1, 8, 15],
  [23, 5, 7, 14, 1],
  [4, 6, 6, 20, 22],
  [10, 12, 19, 21, 7],
  [11, 18, 25, 2, 9]
]

console.log(isMagicSquare(square1)) // output: true
console.log(isMagicSquare(square2)) // output: false
console.log(isMagicSquare(square3)) // output: true
console.log(isMagicSquare(square4)) // output: false
