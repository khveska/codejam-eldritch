import allCards from '../../data/cards/mythos/allCards';
import { shuffleCards } from './utils/cards.utils';
import {
  getCardsOfColorForLevel,
  getTotalCardsCountPerColorForGame,
  splitDeckOfColorInStages,
} from './utils/mythosCards.utils';

export default function buildDeck(gameLevel, ancient) {
  const totalCardsCountPerColorForGame = getTotalCardsCountPerColorForGame(ancient);
  let miniDeckFirstStage = [];
  let miniDeckSecondStage = [];
  let miniDeckThirdStage = [];

  for (const cardsColor in allCards) {
    const miniDeckOfColor = getCardsOfColorForLevel(
      allCards[cardsColor],
      gameLevel,
      totalCardsCountPerColorForGame[cardsColor]
    );

    const miniDeckOfColorPerStage = splitDeckOfColorInStages(shuffleCards(miniDeckOfColor), ancient, cardsColor);
    miniDeckFirstStage = miniDeckFirstStage.concat(miniDeckOfColorPerStage[0]);
    miniDeckSecondStage = miniDeckSecondStage.concat(miniDeckOfColorPerStage[1]);
    miniDeckThirdStage = miniDeckThirdStage.concat(miniDeckOfColorPerStage[2]);
  }
  return [shuffleCards(miniDeckFirstStage), shuffleCards(miniDeckSecondStage), shuffleCards(miniDeckThirdStage)];
}
