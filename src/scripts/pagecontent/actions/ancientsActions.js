import ancientObj from '../Ancient';
import AncientsData from '../../../data/cards/ancients';
import { INACTIVE, ANCIENTS_SECTION, ANCIENTS_CARD_WRAPPER, ANCIENTS_CARD } from '../constants/ClassNames';

import showStageCounters from './stageCountersActions';
import { activateShuffleDeckButton } from './shuffleDeckActions';
import { hideMythosCards } from './mythosCardsActions';

import setBackground from '../utils/setBackground';

const ancientsSection = document.querySelector(`.${ANCIENTS_SECTION}`);

export default function showAncients() {
  Object.values(AncientsData).forEach((ancient) => {
    const ancientWrapper = document.createElement('div');
    const ancientCard = document.createElement('div');
    ancientWrapper.classList.add(ANCIENTS_CARD_WRAPPER);
    ancientCard.classList.add(ANCIENTS_CARD);

    setBackground(ancientCard, ancient.cardFace);

    ancientWrapper.appendChild(ancientCard);
    ancientsSection.appendChild(ancientWrapper);

    initAncientEvents(ancientWrapper, ancient);
  });
}

function initAncientEvents(ancientWrapper, ancient) {
  ancientWrapper.addEventListener('click', () => {
    document.querySelectorAll(`.${ANCIENTS_CARD_WRAPPER}`).forEach((ancientCardWrapper) => {
      if (!ancientCardWrapper.classList.contains(INACTIVE)) ancientCardWrapper.classList.add(INACTIVE);
    });

    ancientWrapper.classList.remove(INACTIVE);
    ancientObj.setAncient(ancient);

    showStageCounters(ancient);
    activateShuffleDeckButton();
    hideMythosCards();
  });
}
