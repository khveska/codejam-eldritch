import gameLevelObj from '../GameLevel';
import ancientObj from '../Ancient';
import deckObj from '../Deck';

import { ACTIVE, INACTIVE, SHUFFLE_DECK_BUTTON } from '../constants/ClassNames';

import buildDeck from '../../deckbuilder/buildDeck';
import { showMythosCards } from './mythosCardsActions';
import showStageCounters from './stageCountersActions';

const shuffleDeckButton = document.querySelector(`.${SHUFFLE_DECK_BUTTON}`);

export default function initShuffleDeckButtonEvents() {
  shuffleDeckButton.addEventListener('click', () => {
    if (shuffleDeckButton.classList.contains(ACTIVE)) return;

    if (gameLevelObj.getLevel() && ancientObj.getAncient()) {
      shuffleDeckButton.classList.add(ACTIVE);
      deckObj.setDeck(buildDeck(gameLevelObj.getLevel(), ancientObj.getAncient()));
      showMythosCards();
      showStageCounters(ancientObj.getAncient());
    }
  });
}

export function activateShuffleDeckButton() {
  if (gameLevelObj.getLevel() && ancientObj.getAncient()) {
    shuffleDeckButton.classList.remove(INACTIVE);
    shuffleDeckButton.classList.remove(ACTIVE);
  }
}
