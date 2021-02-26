function print(a, b) {
  console.log(a + ': ' + b)
}

let tab = [
  [1, 2, 3],
  [4, -5, 7],
  [-3, -6],
  [10, -13]
]

// if (element instanceof Array) {

let final = []
for (const el of tab) {
  if (el instanceof Array) {
    for (const t of el) {
      // print('t', t)
      final.push(t)
    }
  } else {
    final.push(el)
  }
}

sum = final.reduce((a, b) => a + b, 0)

console.log(sum)
