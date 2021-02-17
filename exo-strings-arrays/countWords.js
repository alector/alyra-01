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

words_initial = myText.split(/[\'\s]/)
// console.log(words_initial)

console.log(`The UNCLEAN text has\t ${words_initial.length} words`)

remove = ['?', '...', '-', ';', ':', ' ', '']
words_clean = words_initial.filter(el => !remove.includes(el))
// console.log(words_clean)

let wordsNum = words_clean.length

console.log(`The CLEAN text has\t ${wordsNum} words`)
