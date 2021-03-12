// - si l'année est divisible par 4 et non divisible par 100 ;
// - si l'année est divisible par 400 (« divisible » signifie que la division donne un nombre entier, sans reste).

function isLeapYear(y) {
  let div_by_4 = y % 4 == 0
  let div_by_100 = y % 100 == 0
  let div_by_400 = y % 400 == 0

  return (div_by_4 && !div_by_100) || div_by_400
}

// value%2 == 0)
console.log(isLeapYear(2024)) // true
console.log(isLeapYear(2025)) // false
console.log(isLeapYear(2076)) // true
