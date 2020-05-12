import NullPiece from './pieces/nullPiece.js';
import Pawn from './pieces/pawn.js';
import Knight from './pieces/steppingPieces/knight.js';
import Rook from './pieces/slidingPieces/rook.js';
import Bishop from './pieces/slidingPieces/bishop.js';
import Queen from './pieces/slidingPieces/queen.js';
import King from './pieces/steppingPieces/king.js';
import { 
  GREEN,
  RED,
  SPECIALISTS,
} from './constants/constants.js';

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
    this.fillPawns();
    this.fillSpecialists();
  }

  fillPawns = () => {
    for (let i = 0; i < 8; i++) {
      this.grid[1][i] = new Pawn(this, RED, [6, i]);
      this.grid[6][i] = new Pawn(this, GREEN, [6, i]);
    }
  }

  fillSpecialists = () => {
    for (let i = 0; i < 8; i++) {
      this.grid[0][i] = eval(`new ${SPECIALISTS[i]}(this, RED, [0,i])`);
      this.grid[7][i] = eval(`new ${SPECIALISTS[i]}(this, GREEN, [7,i])`);
    }
  }

  toString = () => {
    return this.grid.reduce((acc, row) => {
      return acc + row.reduce((acc1, cell) => acc1 + cell.toString(), '') + '\n';
    }, '');
  }
  addPiece = () => {};

}
