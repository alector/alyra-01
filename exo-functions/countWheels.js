function countWheels(nb_monocycle, nb_moto, nb_voiture, nb_limousine) {
  return nb_monocycle + 2 * nb_moto + 4 * nb_voiture + 6 * nb_limousine
}

test = countWheels(10, 20, 7, 2) //returns 90

console.log(test)
