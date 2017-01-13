import _ from 'underscore';

export default class Dice {

  constructor(){
    this.die = [1, 2, 3, 4, 5, 6];
  }

  roll = () => {
    this.die = _.shuffle(this.die);
    return this.die[0];
  }

};
