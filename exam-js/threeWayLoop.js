const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve']

// Alice, length: 5
// Bob, length: 3
// Charlie, length: 7
// Dan, length: 3
// Eve, length: 3
let str = ''
for (let i = 0; i < tab.length; i++) {
  str = tab[i]
  length = str.length
  console.log(`${str}, length: ${length}`)
}

for (const el of tab) {
  console.log(`${el}, length: ${el.length}`)
}

tab.forEach(el => {
  console.log(`${el}, length" ${el.length}`)
})
