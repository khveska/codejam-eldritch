import Difficulties from './cards/mythos/properties/Difficulties';

const GameLevels = Object.freeze({
  EASIEST: {
    name: 'Очень лёгкий',
    description: 'Из набора берутся все карты со снежинками, если карт не хватает то добираются обычные карты',
    primaryDifficulty: [Difficulties.EASY],
    secondaryDifficulty: [Difficulties.NORMAL],
  },
  EASY: {
    name: 'Лёгкий',
    description: 'Из набора убираются карты с щупальцами',
    primaryDifficulty: [Difficulties.EASY, Difficulties.NORMAL],
  },
  NORMAL: {
    name: 'Средний',
    description: 'Набор остается нетронутым',
  },
  HARD: {
    name: 'Высокий',
    description: 'Из набора убираются карты со снежинками',
    primaryDifficulty: [Difficulties.NORMAL, Difficulties.HARD],
  },
  HARDEST: {
    name: 'Очень высокий',
    description: 'Из набора берутся все карты со щупальцами, если карт не хватает то добираются обычные карты',
    primaryDifficulty: [Difficulties.HARD],
    secondaryDifficulty: [Difficulties.NORMAL],
  },
});

export default GameLevels;
