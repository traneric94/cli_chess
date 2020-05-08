export default class Piece {
  constructor(board, color, position) {
    this.board = board;
    this.color = color;
    this.position = position;
    board.addPiece(this);
  }

  symbol = () => {
    throw new NotImplementedError();
  }

  toString() {
    throw new NotImplementedError();
  }

  willBeInCheck(targetPosition) {
    const testBoard = Board.clone(this.board);
    testBoard.movePiece(position, targetPosition);
    testBoard.isInCheck(color);
}
