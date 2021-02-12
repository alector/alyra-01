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

======================================
EXPLANATION OF THE CODE
======================================
The most difficult part of the code is to understand this statement: 
      let spaces = (lines - stars) * 2

We have a pyramid with 8 lines (lines = 8).
Let's imagine that the pyramid has two parts, the LEFT part, and the RIGHT part.
For now, we will only focus on the RIGHT part.
So, focus only on the RIGHT part, forget about the LEFT.

spaces_right: the empty spaces on the right part of the pyramid. 

LEFT       RIGHT
*       [       *] = 1st line: 7 spaces_right + 1 stars (7 + 1 = 8)
**      [      **] = 2d  line: 6 spaces_right + 2 stars (6 + 2 = 8)
***     [     ***] = 3d  line: 5 spaces_right + 3 stars (5 + 3 = 8)
****    [    ****] = 4th line: 4 spaces_right + 4 stars (4 + 2 = 8)
*****   [   *****] = 5th line: 3 spaces_right + 5 stars (3 + 5 = 8)
******  [  ******] = 6th line: 2 spaces_right + 6 stars (2 + 6 = 8)
******* [ *******] = 7th line: 1 spaces_right + 7 stars (7 + 1 = 8)
********[********] = 8th line: 0 spaces_right + 8 stars (8 + 0 = 8)


Do you see a pattern here? 

(1) spaces_right + stars =  8
(2) lines = 8

From (1) and (2) we get: 
spaces_right + stars =  lines
and
spaces_right = lines - stars 

We just calculated the spaces for the RIGHT part. 
We also need to add the same number of spaces for th LEFT part (spaces_left).
That's why we have tou double this number.


(1) spaces = spaces_left + spaces_right
(2) spaces_left = spaces_right

From (1) and (2) we get:

spaces = spaces_right * 2

in other words:

spaces = (lines - stars) * 2


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


