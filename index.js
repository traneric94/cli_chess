import { Board } from './board.js';
import  Inquirer  from 'inquirer';
import Colors from 'colors';


class Game {
  constructor() {
    // board
    this.board = new Board();
    // display to pretty print to CLI
    // players
    this.currentPlayer = 'white';
  }

  play = () => {
    let i = 2;
    while (i > 0) { //until checkmate
      // make move
      // move piece
      // swap turn
      swapTurn();
      // notify players
      console.log(`okay, ${i}`)
      //
    }
  }

  swapTurn = () => {
    this.turnPlayer = this.turnPlayer == 'white' ? 'black' : 'white';
  }
}

//TODO pull in helper file
Inquirer.prompt([
  {
    type: 'input',
    name: 'move',
    message: 'Whats your move ?'.cyan,
    choices: ['apple', 'banana', 'kiwi']
  }
]).then(function(data) {
  const response = data.move.toUpperCase();
  console.log(response, response == 'APPLE');
}).catch(function(err) { 
  console.log("oops", err);
})

