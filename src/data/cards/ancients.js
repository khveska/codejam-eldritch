import AncientsCards from '../../assets/img/cards/ancients';
import Colors from './mythos/properties/Colors';

const Ancients = Object.freeze({
  AZATHOTH: {
    id: 'azathoth',
    name: 'azathoth',
    cardFace: AncientsCards.azathoth,
    stages: [
      {
        [Colors.GREEN]: 1,
        [Colors.BLUE]: 1,
        [Colors.BROWN]: 2,
      },
      {
        [Colors.GREEN]: 2,
        [Colors.BLUE]: 1,
        [Colors.BROWN]: 3,
      },
      {
        [Colors.GREEN]: 2,
        [Colors.BLUE]: 0,
        [Colors.BROWN]: 4,
      },
    ],
  },
  CTHULHU: {
    id: 'cthulhu',
    name: 'cthulhu',
    cardFace: AncientsCards.cthulhu,
    stages: [
      {
        [Colors.GREEN]: 0,
        [Colors.BLUE]: 2,
        [Colors.BROWN]: 2,
      },
      {
        [Colors.GREEN]: 1,
        [Colors.BLUE]: 0,
        [Colors.BROWN]: 3,
      },
      {
        [Colors.GREEN]: 3,
        [Colors.BLUE]: 0,
        [Colors.BROWN]: 4,
      },
    ],
  },
  IOG_SOTHOTH: {
    id: 'iogSothoth',
    name: 'iogSothoth',
    cardFace: AncientsCards.iogSothoth,
    stages: [
      {
        [Colors.GREEN]: 0,
        [Colors.BLUE]: 1,
        [Colors.BROWN]: 2,
      },
      {
        [Colors.GREEN]: 2,
        [Colors.BLUE]: 1,
        [Colors.BROWN]: 3,
      },
      {
        [Colors.GREEN]: 3,
        [Colors.BLUE]: 0,
        [Colors.BROWN]: 4,
      },
    ],
  },
  SHUB_NIGGURATH: {
    id: 'shubNiggurath',
    name: 'shubNiggurath',
    cardFace: AncientsCards.shubNiggurath,
    stages: [
      {
        [Colors.GREEN]: 1,
        [Colors.BLUE]: 1,
        [Colors.BROWN]: 2,
      },
      {
        [Colors.GREEN]: 3,
        [Colors.BLUE]: 1,
        [Colors.BROWN]: 2,
      },
      {
        [Colors.GREEN]: 2,
        [Colors.BLUE]: 0,
        [Colors.BROWN]: 4,
      },
    ],
  },
});

export default Ancients;
