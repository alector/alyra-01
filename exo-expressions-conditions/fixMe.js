let list = ['Alice', 'Bob', 'Charlie', 'Craig', 'Eva']
for (let i = 0; i < list.length; ++i) {
  console.log(list[i])
  let nom = list[i].toLowerCase()
  switch (nom) {
    case 'Alice':
      consol.log('Alice want to exchange with Bob')
    case 'Bob':
      console.log('Bob want to exchange with Alice')
    case 'Charlie':
      console.log('Charlie is a generic third participant')
    case 'Craig':
      console.log('Craig is a password cracker')
    case 'Eve':
      console.log('Eve is an eavesdropper')
  }
}
