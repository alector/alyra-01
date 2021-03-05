// Ecrire une fonction isOdd qui prend un nombre en paramètre et qui devra retourner true si le nombre passé en paramètre est impair, sinon la fonction retournera false.

const isOdd = num => {
  return num % 2 !== 0
}

console.log(isOdd(2))
console.log(isOdd(3))

// Ajouter au fichier précédent une fonction isEven qui prend un nombre en paramètre et qui devra retourner true si le nombre passé en paramètre est pair, sinon la fonction retournera false.
// la fonction isEven devra absolument utiliser la fonction isOdd pour effectuer sa vérification de parité.

const isEven = num => {
  return !isOdd(num)
}

console.log(isEven(2))
console.log(isEven(3))
