import { STAGE_CARD_COLOR_COUNTER } from '../constants/ClassNames';
import Colors from '../../../data/cards/mythos/properties/Colors';
import StageCounters from '../StageCounters';

const stageCountersButtons = {
  [Colors.GREEN]: document.querySelectorAll(`.${STAGE_CARD_COLOR_COUNTER}.${Colors.GREEN}`),
  [Colors.BROWN]: document.querySelectorAll(`.${STAGE_CARD_COLOR_COUNTER}.${Colors.BROWN}`),
  [Colors.BLUE]: document.querySelectorAll(`.${STAGE_CARD_COLOR_COUNTER}.${Colors.BLUE}`),
};

export default function showStageCounters(ancient) {
  if (!ancient) return;
  ancient.stages.forEach((stage, index) => {
    updateStageCounter(Colors.GREEN, index, stage[Colors.GREEN]);
    updateStageCounter(Colors.BROWN, index, stage[Colors.BROWN]);
    updateStageCounter(Colors.BLUE, index, stage[Colors.BLUE]);

    StageCounters.setCounter(Colors.GREEN, index, stage[Colors.GREEN]);
    StageCounters.setCounter(Colors.BROWN, index, stage[Colors.BROWN]);
    StageCounters.setCounter(Colors.BLUE, index, stage[Colors.BLUE]);
  });
}

export function updateStageCounter(color, stage, newValue) {
  stageCountersButtons[color][stage].textContent = newValue;
}
