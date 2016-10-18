console.log('Tic-Tac-Toe is up and running');
var board = [
  ["_", "_", "_"],
  ["_", "_", "_"],
  ["_", "_", "_"]
]
console.log(board);
var x = process.argv[2];
var y = process.argv[3];
var letter = process.argv[4];

board[x][y] = letter;

console.log(board);
