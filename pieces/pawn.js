import Piece from 'pawn.js';

class Pawn extends Piece {
  symbol = () => '♟'; //TODO color
  moves = () => forwardSteps() + sideAttacks();
  direction = () => this.color == white ? -1 : 1;

  forwardSteps = () => {
    validSteps = [];
    const [ x, y ] = this.position;
    const oneStep = [ x + 1, y];
    if (this.board.isValidPosition(oneStep) && 
      this.board.isEmpty(oneStep)) {
      validSteps.push(oneStep);
    }

    twoSteps = [ x + 2 * direction(), y]
    if (atStartingRow(twoSteps) && this.board.isEmpty(twoSteps)) {
      validSteps.push(twoSteps);
    }
    return validSteps;
  }

  atStartingRow = () => this.position.x == (this.color == 'white' ? -1 : 1);

  sideAttacks = () => {
    const { x, y } = this.position;
    sideMoves = [
      [ x + direction, y - 1 ],
      [ x + direction, y + 1 ]
    ];

    return sideMoves.filter(move => {
      this.board[move] && this.board[move].color != this.color;
    });
  }
}
    



