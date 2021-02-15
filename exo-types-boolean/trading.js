function myTrade(bitcoin_prix) {
  if (bitcoin_prix < 39379) {
    console.log('buy!')
  } else {
    console.log("don't buy!")
  }
}

myTrade(40000)
