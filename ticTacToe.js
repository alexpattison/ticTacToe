console.log('Tic-Tac-Toe is up and running');
var board = [
  ["_", "_", "_"],
  ["_", "_", "_"],
  ["_", "_", "_"]
]
console.log(board[0]);
console.log(board[1]);
console.log(board[2]);

var player = 1;

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    if (player % 2 === 1) {
      board[chunk[0]][chunk[1]] = 'x';
    } else {
      board[chunk[0]][chunk[1]] = 'o';
    }
    console.log(board[0]);
    console.log(board[1]);
    console.log(board[2]);
  }

  player += 1;
});
