function guess(userGuess, secret) {
  if (userGuess === secret) {
    console.log('You win!')
  } else if (userGuess > secret) {
    console.log('Too big!')
  } else {
    console.log('Too small!')
  }
}

guess(1, 2)
guess(2, 3)
guess(2, 2)
