nom = 'Bob'
genre = 'female'

// const msg = 'male' ? `Bonjour ${nom}, vous êtes entré sur le chan` : `Bonjour ${nom}, vous êtes entrée sur le chan`

console.log(`Bonjour ${nom}, vous êtes entré${genre === 'female' ? 'é' : ''} sur le chan`)
