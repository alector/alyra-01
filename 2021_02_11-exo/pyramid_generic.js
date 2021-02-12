/*
Generic function to print a pyramid.
Lines: the number of lines for the pyramid

Example of a pyramid
  lines: 8
  star_symbol: "*"
  space_symbol: " "
 
*              *
**            **
***          ***
****        ****
*****      *****
******    ******
*******  *******
****************


*/

function pyramid_generator(lines, star_symbol, space_symbol) {
  if (lines < 3) {
    console.log('For a pyramid we need at least 3 lines! ')
    return
  }

  for (let line = 1; line < lines + 1; ++line) {
    let stars = line
    let spaces = (lines - stars) * 2
    let stars_text = star_symbol.repeat(stars)
    let space_text = space_symbol.repeat(spaces)
    let msg = stars_text + space_text + stars_text
    console.log(msg)
  }
}

pyramid_generator(8, 'A', ' ')
