import '../assets/styles/style.css';

import showAncients from './pagecontent/actions/ancientsActions';
import showGameLevelButtons from './pagecontent/actions/gameLevelActions';
import initMythosCardsEvents from './pagecontent/actions/mythosCardsActions';
import initShuffleDeckButtonEvents from './pagecontent/actions/shuffleDeckActions';

showAncients();
showGameLevelButtons();
initShuffleDeckButtonEvents();
initMythosCardsEvents();
