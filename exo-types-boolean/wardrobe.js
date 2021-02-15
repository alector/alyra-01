/*
According to Washington Post, there is a list of clothes
recommended for different temperatures. 

- Winter jacket: Less than 25F (-4C)
- Light to medium coat: 25 to 44F (-4 - 7C).
- Fleece: 45 to 64F (8C - 18C)
- Short sleeves: 65 to 79F (19 - 26C).
- Shorts: 80F (27C) and above.

source: https://www.washingtonpost.com/weather/2018/10/30/weather-is-what-you-wear-unpacking-clothing-connected-different-climate-conditions-united-states/

Let's implement this to our code (Temperature in Celsius)

*/

let isRainy = true
let temperature = 10 // temperature in Celcius
let clothes = ''

if (isRainy) {
  clothes += 'umbrella, ' // concatenation de string
}
if (temperature < -4) {
  clothes += 'Winter jacket, '
} else if (temperature >= -4 && temperature <= -7) {
  clothes += 'Coat (light to medium), '
} else if (temperature >= 8 && temperature <= 18) {
  clothes += 'Fleece, '
} else if (temperature >= 19 && temperature <= 26) {
  clothes += 'Short sleeves, '
} else if (temperature >= 27) {
  clothes += 'Shorts, '
}
console.log(`Je vous recommande de porter: ${clothes}`)
