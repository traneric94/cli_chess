import Piece from 'piece.js';
class NullPiece extends Piece {
  constructor() {
    if (!NullPiece.instance) {
      this.symbol = " "
      this.color = null
      NullPiece.instance = this;
    }
    return NullPiece.instance;
  }

  isEmpty = () => true;
  possibleMoves = () => [];
}
