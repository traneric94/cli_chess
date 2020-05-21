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
import { InvalidMoveError } from './errors/invalidMoveError.js';

class Board {
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
    if (shouldFill) {
      for(let i = 0; i < 9; i++) this.grid[i] = new Array(9);
      this.fillCoordinateSystem();
      this.fillNullPlaceholders();
      this.fillPawns();
      this.fillSpecialists();
    }
  }

  fillCoordinateSystem = () => {
    this.grid[0][0] = '@'.yellow;
    for (let i = 1; i < 9; i++) {
      this.grid[i][0] = (String(9 - i)).magenta;
      this.grid[0][i] = ` ${String.fromCharCode(i + 'a'.charCodeAt(0) - 1).magenta} `;
    }
  }

  fillNullPlaceholders = () => {
    for (let i = 1; i < 9; i++) {
      for (let j = 1; j < 9; j++) {
        this.grid[i][j] = this.nullPiece;
      }
    }
  }

  fillPawns = () => {
    for (let i = 1; i < 9; i++) {
      this.grid[2][i] = new Pawn(this, RED, [2, i]);
      this.grid[7][i] = new Pawn(this, GREEN, [7, i]);
    }
  }

  fillSpecialists = () => {
    for (let i = 1; i < 9; i++) {
      this.grid[1][i] = eval(`new ${SPECIALISTS[i-1]}(this, RED, [1,i])`);
      this.grid[8][i] = eval(`new ${SPECIALISTS[i-1]}(this, GREEN, [8,i])`);
    }
  }

  toString = () => {
    return this.grid.reduce((acc, row) => {
      return acc + row.reduce((acc1, cell) => acc1 + cell.toString(), '') + '\n';
    }, '');
  }

  validateMove = (turnColor, piece, endPosition) => {
    if (piece.color !== turnColor) throw new InvalidMoveError('Wrong color');
    if (this.isEmptyCell(endPosition)) throw new InvalidMoveError('Starting position is empty');
    //const piece = this.grid[startPosition.x, startPosition.y];
    //if (!piece.moves.includes(endPosition)) throw new InvalidMoveError('Invalid move.');
    //if (piece.movedIntoCheck(endPosition)) throw new InvalidMoveError('In check');
    //find piece on rank
    // if not distinct, find piece on file, check by file
    
  };

  makeMove = () => {
    console.log('making move');
  }
  isEmptyCell = ([x, y]) => this.grid[x][y] === this.nullPiece
}
export default Board;