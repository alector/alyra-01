//  exclusive disjunction (XOR)

function xor(a, b) {
  if ((a && !b) || (!a && b)) {
    return true
  } else {
    return false
  }
}

console.log(xor(true, true)) // false
console.log(xor(false, false)) // false

console.log(xor(true, false)) // true
console.log(xor(false, true)) // true
