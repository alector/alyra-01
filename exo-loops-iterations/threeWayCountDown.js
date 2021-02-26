for (i = 101; i > 0; i -= 2) {
  console.log(i)
}

for (i = 101; i > 0; --i) {
  if (i % 2 !== 0) {
    console.log(i)
  }
}

for (i = 101; i > 0; --i) {
  const print = i % 2 !== 0 ? true : false

  if (print) {
    console.log(i)
  }
}
