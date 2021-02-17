/*
The result 

----------------
caesar_plus_move: 	9
caesar_minus_move:  	17

HAVE YOU EVER HAD A DREAM NEO THAT YOU WERE SO SURE WAS REAL WHAT IF YOU WERE UNABLE TO WAKE FROM THAT DREAM HOW WOULD YOU KNOW THE DIFFERENCE BETWEEN THE DREAM WORLD AND THE REAL WORLD


*/

let str = 'YRMV PFL VMVI YRU R UIVRD EVF KYRK PFL NVIV JF JLIV NRJ IVRC NYRK ZW PFL NVIV LERSCV KF NRBV WIFD KYRK UIVRD YFN NFLCU PFL BEFN KYV UZWWVIVETV SVKNVVE KYV UIVRD NFICU REU KYV IVRC NFICU'
let wordlist = str.split(' ')

let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let alphabet_list = alphabet.repeat(2).split('')

for (i = 1; i < 26; ++i) {
  caesar_plus_move = i
  caesar_minus_move = 26 - i

  caesarWordList = []
  wordlist.forEach(myword => {
    caesarlist = []
    myword.split('').forEach(char => {
      alphabet_index = alphabet_list.indexOf(char)
      new_index = alphabet_index + caesar_plus_move
      newChar = alphabet_list[new_index]
      caesarlist.push(newChar)
    })
    caesarWordList.push(caesarlist.join(''))
  })

  caesarphrase = caesarWordList.join(' ')
  msg = `----------------
caesar_plus_move: \t${caesar_plus_move}
caesar_minus_move:  \t${caesar_minus_move}

${caesarphrase}

`
  console.log(msg)
}
