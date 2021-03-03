// Ecrire une fonction reverseStr qui prend en paramètre une string et qui retourne cette string inversé. Si le paramètre passé est 'Hello!' la fonction devra retourné '!olleH'

const reverseStr = str => {
  return str.split('').reverse().join('')
}

console.log(reverseStr('Hello!'))

// Ajouter au fichier précédent une fonction isPalindrome qui prend une string en paramètre et qui retourne true si la string est un palindrome, sinon la fonction devra retourner false. Vous devrez utiliser la fonction reverseStr pour effectuer cette vérification.

const isPalindrome = str => {
  return str === reverseStr(str)
}

console.log(isPalindrome('1441'))
console.log(isPalindrome('1223'))
