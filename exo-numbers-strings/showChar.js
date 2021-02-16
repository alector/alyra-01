const myText = "C'était à Mégara, faubourg de Carthage, dans les jardins d'Hamilcar."
const auteur = 'Gustave Flaubert'

console.log(`Le texte est ecrit par ${auteur} et contient ${myText.length} caractères\n\n `)

myText.split('').forEach((char, index) => {
  let msg = `Le caractère  ${char} est à l'index ${index}`
  console.log(msg)
})
