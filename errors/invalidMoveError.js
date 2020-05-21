export function InvalidMoveError(message) {
  const error = new Error(message);
  return error;
}
InvalidMoveError.prototype = Object.create(Error.prototype);
