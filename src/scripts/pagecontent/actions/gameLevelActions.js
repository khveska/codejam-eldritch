import gameLevelObj from '../GameLevel';
import GameLevels from '../../../data/GameLevels';
import { ACTIVE, INACTIVE, COMPLEXITIES_SECTION, COMPLEXITY_BUTTON, BUTTON } from '../constants/ClassNames';

import { activateShuffleDeckButton } from './shuffleDeckActions';
import { hideMythosCards } from './mythosCardsActions';
import showStageCounters from './stageCountersActions';
import Ancient from '../Ancient';

const complexitiesSection = document.querySelector(`.${COMPLEXITIES_SECTION}`);

export default function showGameLevelButtons() {
  Object.values(GameLevels).forEach((gameLevel) => {
    const complexityButton = document.createElement('button');

    complexityButton.classList.add(BUTTON);
    complexityButton.classList.add(COMPLEXITY_BUTTON);
    complexityButton.textContent = gameLevel.name;
    complexitiesSection.appendChild(complexityButton);

    initGameLevelButtonsEvents(complexityButton, gameLevel);
  });
}

function initGameLevelButtonsEvents(complexityButton, gameLevel) {
  complexityButton.addEventListener('click', () => {
    document.querySelectorAll(`.${COMPLEXITY_BUTTON}`).forEach((button) => {
      button.classList.remove(ACTIVE);
      if (!button.classList.contains(INACTIVE)) button.classList.add(INACTIVE);
    });

    complexityButton.classList.remove(INACTIVE);
    complexityButton.classList.add(ACTIVE);
    gameLevelObj.setLevel(gameLevel);

    showStageCounters(Ancient.getAncient());
    activateShuffleDeckButton();
    hideMythosCards();
  });
}
