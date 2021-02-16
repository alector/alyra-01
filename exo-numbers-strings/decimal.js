let n1 = 0x123 // HexIntegerLiteral
let n2 = 0123 // OctalIntegerLiteral
let n3 = 0b10011001 // BinaryIntegerLiteral
let n4 = 0xdeadbeef // HexIntegerLiteral
let n5 = 0xea7beef // HexIntegerLiteral
let n6 = 0b1111111111111111 // BinaryIntegerLiteral
let n7 = 0777 // OctalIntegerLiteral

let d1 = n1.toString()
let d2 = n2.toString()
let d3 = n3.toString()
let d4 = n4.toString()
let d5 = n5.toString()
let d6 = n6.toString()
let d7 = n7.toString()

msg = `
CONVERSION

0x123               ==> ${d1} en decimal
0123                ==> ${d2} en decimal
0b10011001          ==> ${d3} en decimal
0xdeadbeef          ==> ${d4} en decimal
0xea7beef           ==> ${d5} en decimal
0b1111111111111111  ==> ${d6} en decimal
0777                ==> ${d7} en decimal

`
console.log(msg)
