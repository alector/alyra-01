// Ecrivez une fonction biggest qui retourne le plus grand élément d'une liste de nombre.
// biggest([99, 100, 101, 1]) // returns 101

function biggest(myArray) {
  return Math.max.apply(Math, myArray)
}

console.log(biggest([1, 2, 3]))
// Ajouter au fichier précédent une fonction sortAscend qui prend comme paramètre une liste de nombres et retourne une nouvelle liste dont les nombres sont classés par ordre croissant.
// sortAscend([99, 100, 101, 1]) // returns [1, 99, 100, 101]

// PANOS NOTES:
//1. Insertion Sort Algorithm - compaire every element with the element before it
//2. representation visuelle  https://miro.medium.com/max/1400/1*X78qSPfXtjwMzPmUvv_4nQ.png

function sortAscend(myArray) {
  for (let current = 1; current < myArray.length; current++) {
    // previous > -1 means current > 0
    for (let previous = current - 1; previous > -1; previous--) {
      // ascending order = previous is lower than next
      // if previous is greater than previous
      // Swap previous with current
      if (myArray[current] < myArray[previous]) {
        ;[myArray[current], myArray[previous]] = [myArray[previous], myArray[current]]
      }
    }
  }
  return myArray
}

let test = sortAscend([99, 100, 101, 1])
console.log(test)

// Ajouter au fichier précédent une fonction makeUnique qui prend comme paramètre une liste de nombre et retourne une nouvelle liste sans doublons, classée par ordre croissant.

// makeUnique([1, 2, 1, 3, 2, 4, 5, 7, 5, 1]) //returns [1, 2, 3, 4, 5, 7]

function makeUnique(a) {
  return [...new Set(a)]
}

// makeUnique([1, 2, 1, 3, 2, 4, 5, 7, 5, 1]) //returns [1, 2, 3, 4, 5, 7]

test1 = makeUnique([1, 2, 1, 3, 2, 4, 5, 7, 5, 1])
console.log(test1)
