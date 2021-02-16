n1 = 0x123 // HexIntegerLiteral
n2 = 0123 // OctalIntegerLiteral
n3 = 0b10011001 // BinaryIntegerLiteral
n4 = 0xdeadbeef // HexIntegerLiteral
n5 = 0xea7beef // HexIntegerLiteral
n6 = 0b1111111111111111 // BinaryIntegerLiteral
n7 = 0777 // OctalIntegerLiteral

d1 = n1.toString()
d2 = n2.toString()
d3 = n3.toString()
d4 = n4.toString()
d5 = n5.toString()
d6 = n6.toString()
d7 = n7.toString()

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
