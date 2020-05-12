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

  play = async () => {
    let i = 1;
    while (i > 0) { //until checkmate
      //prompt move
      //const result = await this.promptNextMove();
      // make move
      // move piece
      // swap turn
      this.swapTurn();
      // notify players
      console.log(this.board.toString());
      //
      i--;
    }
  }

  swapTurn = () => {
    this.turnPlayer = this.turnPlayer == 'white' ? 'black' : 'white';
  }

  promptNextMove = () => {
    return Inquirer.prompt([
      {
        type: 'input',
        name: 'move',
        message: 'Enter your move'.cyan,
        choices: ['p3']
      }
    ]).then(data => data.move.toLowerCase())
    .catch(err => console.log(`Error ${err}`));
  }
}
new Game().play();
