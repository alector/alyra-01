/*

Vowels (lowercase or uppercase) without accents: 205 
All vowels in all accents: 229

*/

const myText = `Je suis le ténébreux, - le veuf, - l'inconsolé,
Le prince d'Aquitaine à la tour abolie :
Ma seule étoile est morte, - et mon luth constellé
Porte le soleil noir de la Mélancolie.

Dans la nuit du tombeau, toi qui m'as consolé,
Rends-moi le Pausilippe et la mer d'Italie,
La fleur qui plaisait tant à mon cœur désolé,
Et la treille où le pampre à la rose s'allie.

Suis-je Amour ou Phébus ? ... Lusignan ou Biron ?
Mon front est rouge encor du baiser de la reine ;
J'ai rêvé dans la grotte où nage la sirène...

Et j'ai deux fois vainqueur traversé l'Achéron ;
Modulant tour à tour sur la lyre d'Orphée
Les soupirs de la sainte et les cris de la fée.`

let regex1 = /a|e|i|o|u|A|E|I|O|U/g
let vowels = myText.match(regex1)

let regex2 = /æ|œ|a|e|i|o|u|A|E|I|O|U|à|è|ì|ò|ù|À|È|Ì|Ò|Ù|á|é|í|ó|ú|ý|Á|É|Í|Ó|Ú|Ý|â|ê|î|ô|û|Â|Ê|Î|Ô|Û|ã|õ|Ã|Õ|ä|ë|ï|ö|ü|ÿ|Ä|Ë|Ï|Ö|Ü|Ÿ/g
let fullVowels = myText.match(regex2)

let msg = `
Vowels (lowercase or uppercase) without accents: ${vowels.length} 
All vowels in all accents: ${fullVowels.length}

`
console.log(msg)
