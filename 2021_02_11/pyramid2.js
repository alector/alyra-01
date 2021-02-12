/*

Simple code to print a pyramid with 8 lines 

*              *
**            **
***          ***
****        ****
*****      *****
******    ******
*******  *******
****************

*/

const star_symbol = '*'
const space_symbol = ' '
const lines = 8

for (let line = 1; line < lines + 1; ++line) {
  let stars = line
  let spaces = (lines - stars) * 2
  let stars_text = star_symbol.repeat(stars)
  let space_text = space_symbol.repeat(spaces)
  let msg = stars_text + space_text + stars_text
  console.log(msg)
}
