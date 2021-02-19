// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = ''

const crackme11 = password => {
  if (password.length > 3 && password.length < 10) {
    if (password.includes('3')) {
      console.log('GOOD')
    } else {
      console.log('BAD')
    }
  } else {
    console.log('BAD')
  }
}

crackme11(password)
