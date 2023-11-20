let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let gameActive = true;

function makeMove(index) {
  if (gameBoard[index] === "" && gameActive) {
    gameBoard[index] = currentPlayer;
    document.getElementById("board").children[index].innerText = currentPlayer;

    if (checkWinner()) {
      document.getElementById(
        "result"
      ).innerText = `¡Jugador ${currentPlayer} ha ganado!`;
      gameActive = false;
    } else if (gameBoard.every((cell) => cell !== "")) {
      document.getElementById("result").innerText = "¡Empate!";
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

function checkWinner() {
  return winningCombos.some((combo) => {
    return combo.every((index) => gameBoard[index] === currentPlayer);
  });
}

function resetGame() {
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameActive = true;

  const cells = document.getElementById("board").children;
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = "";
  }

  document.getElementById("result").innerText = "";
}
