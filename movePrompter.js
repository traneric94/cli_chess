import Inquirer from 'inquirer';
import { PIECE_SHORTHAND } from './constants/constants.js';
import { InvalidMoveError } from './errors/invalidMoveError.js';

class MoveParser {
    static promptNextMove = () => {
        return Inquirer.prompt([
          {
            type: 'input',
            name: 'input',
            message: 'Enter your move'.cyan,
          }
        ]).then(data => this.validateInput(data))
        .catch(err => console.log(`Error ${err}`));
      }
      
    static validateInput = ({input}) => {
      input = 'c5';
      const chars = input.split('');

      const destinationRank = chars.pop();
      const destinationFile = chars.pop();
      const endPosition = [destinationRank, destinationFile];
      const piece = chars.shift() ?? '';
      console.log('rank', destinationRank);
      console.log('file', destinationFile);
      console.log('piece', piece);
      this.checkCoordinate(
        endPosition,
        piece
      );
      return {
        endPosition,
        piece
      };
    }

    static checkCoordinate = ([rank, file], piece) => {
      this.checkRank(rank);
      this.checkFile(file);
      this.checkPiece(piece); 
    }

    static checkPiece = (piece) => {
      if (piece !== '' && !Object.keys(PIECE_SHORTHAND).includes(piece)) {
        throw new InvalidMoveError(`${piece} is invalid.`);
      }
    }

    static checkRank = (rank) => {
      const xCoord = rank - 1;
      if (xCoord > 7 || xCoord < 0) {
        throw new InvalidMoveError(`${rank} is out of bounds.`);
      }
    }

    static checkFile = (file) => {
      const yCoord = file.charCodeAt(0) - 'a'.charCodeAt(0);
      if (yCoord > 7 || yCoord < 0) {
        throw new InvalidMoveError(`${file} is out of bounds.`);
      }
    }
}
export default MoveParser;