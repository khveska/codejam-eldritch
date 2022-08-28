function randomInt(maxInclusive) {
  return Math.floor(Math.random() * (maxInclusive + 1));
}

/**
 * Shuffle cards with the use of Durstenfeld algorithm
 */
function shuffleCards(cardsArr) {
  const cardsLastIndex = cardsArr.length - 1;

  for (let cardI = cardsLastIndex; cardI > 0; cardI--) {
    const indexToSwap = randomInt(cardI);
    if (cardI === indexToSwap) continue;
    const temp = cardsArr[cardI];
    cardsArr[cardI] = cardsArr[indexToSwap];
    cardsArr[indexToSwap] = temp;
  }
  return cardsArr;
}

/**
 * Filter out cards with given difficulties
 */
function filterCardsWithDifficulties(cardsArr, difficulties) {
  return cardsArr.filter((card) => difficulties.includes(card.difficulty));
}

export { shuffleCards, filterCardsWithDifficulties };
