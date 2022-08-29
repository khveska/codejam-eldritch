import { shuffleCards, filterCardsWithDifficulties } from './cards.utils';
import Colors from '../../../data/cards/mythos/properties/Colors';

/**
 * Retrieve cards of one specific color respective to the level chosen for the game
 * @param {*} cardsOfColorArr - array of cards with specific color
 * @param {*} gameLevel - selected level, i.e. difficulty of the game
 * @param {*} cardsCount - count of cards of specific color needed for the whole game (depicted on the ancient card)
 * @returns shuffled array of cards with specific color required to finish the game
 */
function getCardsOfColorForLevel(cardsOfColorArr, gameLevel, cardsCount) {
  if (!gameLevel.primaryDifficulty) return shuffleCards(cardsOfColorArr).slice(0, cardsCount);

  const cardsWithPrimaryDifficulty = filterCardsWithDifficulties(cardsOfColorArr, gameLevel.primaryDifficulty);
  const cardsForLevelShortage = cardsCount - cardsWithPrimaryDifficulty.length;

  if (cardsForLevelShortage > 0) {
    const cardsWithSecondaryDifficulty = filterCardsWithDifficulties(cardsOfColorArr, gameLevel.secondaryDifficulty);
    return [
      ...shuffleCards(cardsWithPrimaryDifficulty),
      ...shuffleCards(cardsWithSecondaryDifficulty).slice(0, cardsForLevelShortage),
    ];
  }
  return shuffleCards(cardsWithPrimaryDifficulty);
}

/**
 * Returns total amount of cards required to beat the specified ancient
 * @param {*} ancient - eldritch that has to be beaten
 */
function getTotalCardsCountPerColorForGame(ancient) {
  const totalCardsOfColorForGame = (color) =>
    ancient.stages.reduce((acc, curStage) => acc + curStage[color], 0);
  return {
    [Colors.GREEN]: totalCardsOfColorForGame(Colors.GREEN),
    [Colors.BLUE]: totalCardsOfColorForGame(Colors.BLUE),
    [Colors.BROWN]: totalCardsOfColorForGame(Colors.BROWN),
  };
}

/**
 * Returns cards count with the specific color per certain stage, that are needed to beat particular ancient
 * @param {*} ancient - eldritch that has to be beaten
 * @param {*} stage - stage of the game (3 stages exist per ancient)
 * @param {*} color - cards color
 */
function getCardsCountOfColorForStage(ancient, stage, color) {
  return ancient.stages[stage][color];
}

/**
 * Returns an array divided into 3 subarrays (minidecks) with cards of specific color, required to beat
 * particular ancient on each stage of the game
 */
function splitDeckOfColorInStages(cardsArr, ancient, color) {
  return [
    cardsArr.splice(0, getCardsCountOfColorForStage(ancient, 0, color)),
    cardsArr.splice(0, getCardsCountOfColorForStage(ancient, 1, color)),
    cardsArr.splice(0, getCardsCountOfColorForStage(ancient, 2, color)),
  ];
}

export { getCardsOfColorForLevel, getTotalCardsCountPerColorForGame, splitDeckOfColorInStages };
