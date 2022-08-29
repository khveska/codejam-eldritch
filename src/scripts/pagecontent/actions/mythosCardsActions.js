import {
  SHUFFLED_DECK_CARDS_WRAPPER,
  CARD_OPENED_WRAPPER,
  CARD_CLOSED_WRAPPER,
  CARD_OPENED,
  DECK_START,
  DECK_FINISH,
  INACTIVE,
} from '../constants/ClassNames';
import Deck from '../Deck';
import StageCounters from '../StageCounters';
import { updateStageCounter } from './stageCountersActions';

import setBackground from '../utils/setBackground';

const shuffledDeckCardsWrapper = document.querySelector(`.${SHUFFLED_DECK_CARDS_WRAPPER}`);
const cardClosedWrapper = document.querySelector(`.${CARD_CLOSED_WRAPPER}`);
const cardOpenedWrapper = document.querySelector(`.${CARD_OPENED_WRAPPER}`);
const cardOpened = document.querySelector(`.${CARD_OPENED}`);

export default function initMythosCardsEvents() {
  cardClosedWrapper.addEventListener('click', () => {
    if (Deck.isEnd()) {
      cardClosedWrapper.classList.add(DECK_FINISH);
      shuffledDeckCardsWrapper.classList.add(DECK_FINISH);
    }
    if (shuffledDeckCardsWrapper.classList.contains(DECK_START)) {
      shuffledDeckCardsWrapper.classList.remove(DECK_START);
      cardOpenedWrapper.classList.remove(DECK_START);
    }

    const curStage = Deck.getStage();
    const curCard = Deck.nextCard();

    setBackground(cardOpened, curCard.cardFace, () =>
      updateStageCounter(curCard.color, curStage, StageCounters.nextCounter(curCard.color, curStage))
    );
  });
}

export function showMythosCards() {
  shuffledDeckCardsWrapper.classList.remove(INACTIVE);
  shuffledDeckCardsWrapper.classList.remove(DECK_FINISH);
  shuffledDeckCardsWrapper.classList.add(DECK_START);
  cardClosedWrapper.classList.remove(DECK_FINISH);
  cardOpenedWrapper.classList.add(DECK_START);
  cardOpened.style.backgroundImage = 'none';
}

export function hideMythosCards() {
  shuffledDeckCardsWrapper.classList.add(INACTIVE);
}
