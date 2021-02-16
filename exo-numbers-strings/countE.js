/* 

Le texte comporte: 

e: 58
é: 15
è: 1
ê: 1
------------------
en totale: 75


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

let e_simple = myText.split('e').length - 1
let e_accent1 = myText.split('é').length - 1
let e_accent2 = myText.split('è').length - 1
let e_accent3 = myText.split('ê').length - 1

let msg = `Le texte comporte: 

e: ${e_simple}
é: ${e_accent1}
è: ${e_accent2}
ê: ${e_accent3}
------------------
en totale: ${e_simple + e_accent1 + e_accent2 + e_accent3}
`
console.log(msg)
