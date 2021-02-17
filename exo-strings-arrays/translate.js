/*

RESULTAT

mot: ALICE
mot: ET
mot: BOB
mot: ESSAYENT
mot: DE
mot: COMMUNIQUER
mot: SECRETEMENT,
mot: MAIS
mot: EVE
mot: VEILLE

*/

let str = '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '

// create a sanitised list
let str_list = []
let phrase_started = false
spaces_count = 0
for (let index = 0; index < str.length; ++index) {
  if (str[index] !== '\t' && str[index] !== '\n') {
    if (str[index] === ' ') {
      if (phrase_started) {
        ++spaces_count
        if (spaces_count < 2) {
          str_list.push(str[index].toUpperCase())
        }
      }
    } else {
      phrase_started = true
      spaces_count = 0
      str_list.push(str[index].toUpperCase())
    }
  }
}

/* 
example of str_list: 
[
  'A', 'L', 'I', 'C', 'E', ' ', 'E', 'T', ' ',
  'B', 'O', 'B', ' ', 'E', 'S', 'S', 'A', 'Y',
  'E', 'N', 'T', ' ', 'D', 'E', ' ', 'C', 'O',
  'M', 'M', 'U', 'N', 'I', 'Q', 'U', 'E', 'R',
  ' ', 'S', 'E', 'C', 'R', 'E', 'T', 'E', 'M',
  'E', 'N', 'T', ',', ' ', 'M', 'A', 'I', 'S',
  ' ', 'E', 'V', 'E', ' ', 'V', 'E', 'I', 'L',
  'L', 'E', ' '
]
*/

// now print the words

let wordlist = []
for (let i = 0; i < str_list.length; ++i) {
  if (str_list[i] === ' ') {
    console.log('mot: ' + wordlist.join(''))
    wordlist = []
  } else {
    wordlist.push(str_list[i])
  }
}
