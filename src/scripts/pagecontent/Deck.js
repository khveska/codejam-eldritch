class Deck {
  setDeck(deck) {
    this.deck = deck;
  }

  getDeck() {
    return this.deck;
  }

  getStage() {
    return (
      this.deck.length -
      ((this.deck[0].length !== 0) + (this.deck[1].length !== 0) + (this.deck[2].length !== 0))
    );
  }

  isEnd() {
    return this.deck[2].length === 1;
  }

  nextCard() {
    return this.deck[this.getStage()].pop();
  }
}

export default new Deck();
