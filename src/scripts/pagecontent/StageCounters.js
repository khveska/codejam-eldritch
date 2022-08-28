import Colors from '../../data/cards/mythos/properties/Colors';

class StageCounters {
  constructor() {
    this.counters = {
      [Colors.GREEN]: [],
      [Colors.BROWN]: [],
      [Colors.BLUE]: [],
    }
  }

  setCounter(color, stage, counter) {
    this.counters[color][stage] = counter;
  }

  getCounter(color, stage) {
    return this.counters[color][stage];
  }

  nextCounter(color, stage) {
    this.setCounter(color, stage, this.getCounter(color, stage) - 1);
    return this.getCounter(color, stage);
  }
}

export default new StageCounters();
