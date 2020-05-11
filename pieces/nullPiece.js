import Piece from './piece.js';
export default class NullPiece extends Piece {
  constructor(board) {
    if (!NullPiece.instance) {
      super(board);
      this.symbol = " x "
      this.color = null
      NullPiece.instance = this;
    }
    return NullPiece.instance;
  }

  toString = () => this.symbol
  isEmpty = () => true;
  possibleMoves = () => [];
}
