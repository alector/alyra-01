// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = ''

const crackme12 = password => {
  if (password.length > 10 && password[0] === '@' && password[password.length - 1] === '!') {
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}

crackme12(password)
