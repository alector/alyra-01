function numberPyramid(n) {
  for (i = 0; i <= n; ++i) {
    let str = i.toString()
    console.log(str.repeat(i))
  }
}
numberPyramid(5)
numberPyramid(8)
