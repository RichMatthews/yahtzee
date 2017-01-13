import React from 'react';
import ReactDOM from 'react-dom';
import Dice from '../dice/index';
import _ from 'underscore';

class Yahtzee extends React.Component{

  // constructor(props) {
  //   super(props);
  //   this.props.Dice.roll();
  //   this.state = {
  //     dice: this.props.Dice
  //   }
  // }

  createNewDice = () => {
    let diceArray = [];
    for(var i=0; i < 6; i++){
      diceArray[i] = new Dice();
    }
    return diceArray;
  }

  keepNumber = (dice) => {
    console.log(dice, 'number');
  }


  render(){
    this.createNewDice();
    return (
      <div>
      Yahtzee
      {this.createNewDice().map(function(diceArray, index){
        debugger;
        return <div key={index}>dice:{diceArray.roll()} <button onClick={() => this.keepNumber(dice.roll())}>Keep</button></div>
      }, this)}
      <br />
      </div>
  )
 }
};

  ReactDOM.render(
    <Yahtzee />, document.getElementById('content')
  );
