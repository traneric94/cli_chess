import NullPiece from './pieces/nullPiece.js';

export class Board {
  constructor(shouldFill = true) {
    this.grid = new Array(8);
    this.nullPiece = new NullPiece();
    setup(shouldFill);
  }
  // What should the board keep track of?
  // Valid Positions
  // checkmate?

  setup = (shouldFill) => {
    for (let i = 0; i < this.grid.length; i++) {
      this.grid[i] = 

}
