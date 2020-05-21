import Board from './board.js';
import MovePrompter from './movePrompter.js';
import MoveValidator from './moveValidator.js';

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
      // const { destinationRank, destinationFile, piece } = await MovePrompter.promptNextMove();
      const { endPosition, piece } = MovePrompter.validateInput('TODO');
      this.board.makeMove(this.turnColor, piece, endPosition);

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
