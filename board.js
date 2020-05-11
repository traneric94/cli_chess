import NullPiece from './pieces/nullPiece.js';
import Pawn from './pieces/pawn.js';

export class Board {
  constructor(shouldFill = true) {
    this.grid = new Array(8);
    this.nullPiece = new NullPiece(this);
    this.setup(shouldFill);
  }
  // What should the board keep track of?
  // Valid Positions
  // checkmate?

  setup = (shouldFill) => {
    // Fill with placeholder pieces
    for (let i = 0; i < 8; i++) {
      this.grid[i] = new Array(8);
      for (let j = 0; j < 8; j++) {
        this.grid[i][j] = this.nullPiece;
      }
    }

    // fill pawns
    for (let i = 0; i < 8; i++) {
      this.grid[1][i] = new Pawn(this, 'red', [6, i]);
      this.grid[6][i] = new Pawn(this, 'green', [6, i]);
    }
  }

  toString = () => {
    return this.grid.reduce((acc, row) => {
      return acc + row.reduce((acc1, cell) => acc1 + cell.toString(), '') + '\n';
    }, '');
  }
  addPiece = () => {};

}
