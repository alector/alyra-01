// prenom: Sofiane
// nom: Akermoun
// age: 39
// vous êtes majeur depuis 21 ans

function information(name, surname, age) {
  let adulhood_age = 18
  let msg
  let age_gap
  let final

  if (age >= adulhood_age) {
    age_gap = age - adulhood_age
    msg = `vous êtes majeur depuis ${age_gap} ans`
  } else {
    age_gap = adulhood_age - age
    msg = `vous serez majeur dans ${age_gap} ans`
  }
  final = `prenom: ${name}
nom: ${surname}
age: ${age}
${msg}
`
  console.log(final)
}

information('Sofiane', 'Akermoun', 39)
information('Alice', 'Liddell', 7)
