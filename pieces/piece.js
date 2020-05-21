import Colors from 'colors';

export default class Piece {
  constructor(board, color, position) {
    this.board = board;
    this.color = color;
    this.position = position;
  }

  toString = () => {
    Colors.setTheme({custom: [this.color]});
    return this.symbol.custom;
  }

  willBeInCheck(targetPosition) {
    const testBoard = Board.clone(this.board);
    testBoard.movePiece(position, targetPosition);
    testBoard.isInCheck(this.color);
  }
}
