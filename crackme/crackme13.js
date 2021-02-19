// Vous devez assigner la bonne string à la variable password ci dessous
// Et obtenir le message 'OK' en éxecutant le programme
let password = ''
let pass = false

const crackme13 = password => {
  ;['a', 'e', 'u'].forEach(el => {
    if (password.split(el).length - 1 > 3) {
      if (parseInt(password.slice(1, 3), 10) % 2 === 0 && password.split('.').length - 1 === 1) {
        pass = true
      }
    }
  })

  if (pass) {
    console.log('GOOD')
  } else {
    console.log('BAD')
  }
}
crackme13(password)
