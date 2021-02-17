let str = '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '

let sanitised_txt = str.trim().toLowerCase()

// Show first letter in capital
let firstLetterCapitalized = sanitised_txt.charAt(0).toUpperCase() + sanitised_txt.slice(1)

console.log(firstLetterCapitalized)
// Alice et bob essayent de communiquer secretement, mais eve veille
