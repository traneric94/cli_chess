import Piece from '../piece.js'; 

class Knight extends Piece {
  symbol = ' ♞ ';
  possibleRelativeMoves = [
    [-2, -1],
    [-1, -2],
    [-2, 1],
    [-1, 2],
    [1, -2],
    [2, -1],
    [1, 2],
    [2, 1]
  ];
}
export default Knight;
