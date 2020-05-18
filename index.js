import { Board } from './board.js';
import MovePrompter from './movePrompter.js';

class Game {
  constructor() {
    // board
    this.board = new Board();
    // display to pretty print to CLI
    // players
    this.turnColor = 'white';
  }

  play = async () => {
    let i = 1;
    while (i > 0) { //until checkmate
      //prompt move
      try {
      const {startPosition, endPosition } = await MovePrompter.promptNextMove();
      //this.board.makeMove(this.turnColor, startPosition, endPosition);
      
      } catch (e) {
        console.log(e.message.yellow);
      }
      // move piece
      // swap turn
      this.swapTurn();
      // notify players
      console.log(this.board.toString());
      i--;
    }
  }

  swapTurn = () => {
    this.turnPlayer = this.turnPlayer == 'white' ? 'black' : 'white';
  }

}
new Game().play();
