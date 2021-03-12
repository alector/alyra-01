myArray = [100, 2, 3, 67, 22, 22, 100, 1]

function pondium(myArray) {
  // remove doubles from array
  unique_array = [...new Set(myArray)]

  // sort array
  sorted_array = unique_array.sort(function (a, b) {
    return b - a
  })

  if (sorted_array.length < 3) {
    console.log("This array doesn't have more than 3 unique numbers")
  } else {
    final = `1st: ${sorted_array[0]}
2nd: ${sorted_array[1]}
3rd: ${sorted_array[2]}`

    console.log(final)
  }
}

pondium(myArray)
