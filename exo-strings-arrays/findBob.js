let str = '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '

let sanitised_txt = str.trim().toLowerCase()

let word = 'Bob'

if (sanitised_txt.includes(word.toLowerCase())) {
  msg = `L'occurence ${word} est présente.`
} else {
  msg = `l'occurence ${word} n'est pas présente.`
}

console.log(msg)
