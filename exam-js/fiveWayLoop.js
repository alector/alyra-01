const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve']

let i = 0

do {
  str = tab[i]
  length = str.length
  console.log(`${str}, length: ${length}`)

  i = i + 1
} while (i < tab.length)

console.log(`\n\n\n`)

let k = 0
while (k < tab.length) {
  str = tab[k]
  length = str.length
  console.log(`${str}, length: ${length}`)

  k = k + 1
}
