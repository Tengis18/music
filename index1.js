count = 2;
document.getElementById("button");

addEventListener("click", function () {
  var newBox = document.createElement("div");
  newBox.className = "box-1";
  newBox.innerText = count;
  document.getElementById("container").appendChild(newBox);
  count++;
});
// shalgah dasgal
var input1 = document.getElementById("number");
var input2 = document.getElementById("number1");
var input3 = document.getElementById("number2");
var generateButton = document.getElementById("shalgah");
var checkButton = document.getElementById("shinchleh");

function generateRandomNumbers() {
  var randomNum1 = Math.floor(Math.random() * 101);
  var randomNum2 = Math.floor(Math.random() * 101);
  input1.value = randomNum1;
  input2.value = randomNum2;
}
function checkSum() {
  var num1 = parseInt(input1.value);
  var num2 = parseInt(input2.value);
  var userInput = parseInt(input3.value);
  var sum = num1 + num2;

  if (userInput === sum) {
    alert("Correct! The sum is " + sum);
  } else {
    alert("Incorrect. The sum is " + sum);
  }
}
shalgah.addEventListener("click", generateRandomNumbers);
shinchleh.addEventListener("click", checkSum);
//ongo soiloh
var colorDiv = document.getElementById("colorDiv");
var changeColorButton = document.getElementById("changeColorButton");

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeDivColor() {
  colorDiv.style.backgroundColor = getRandomColor();
}

changeColorButton.addEventListener("click", changeDivColor);
// tic tac toe
const board = document.getElementById("board");
const message = document.getElementById("message");
const restartButton = document.getElementById("restartButton");
let currentPlayer = "X";
let gameActive = true;
let gameState = ["", "", "", "", "", "", "", "", ""];

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function createBoard() {
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.setAttribute("data-cell-index", i);
    cell.addEventListener("click", handleCellClick);
    board.appendChild(cell);
  }
}

function handleCellClick(event) {
  const clickedCell = event.target;
  const clickedCellIndex = parseInt(
    clickedCell.getAttribute("data-cell-index")
  );

  if (gameState[clickedCellIndex] !== "" || !gameActive) {
    return;
  }

  gameState[clickedCellIndex] = currentPlayer;
  clickedCell.textContent = currentPlayer;

  if (checkWin()) {
    gameActive = false;
    message.textContent = `${currentPlayer} wins!`;
    message.classList.remove("hidden");
    restartButton.classList.remove("hidden");
  } else if (gameState.indexOf("") === -1) {
    gameActive = false;
    message.textContent = "Draw!";
    message.classList.remove("hidden");
    restartButton.classList.remove("hidden");
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

function checkWin() {
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (
      gameState[a] &&
      gameState[a] === gameState[b] &&
      gameState[a] === gameState[c]
    ) {
      return true;
    }
  }
  return false;
}

function restartGame() {
  gameActive = true;
  currentPlayer = "X";
  gameState = ["", "", "", "", "", "", "", "", ""];
  message.classList.add("hidden");
  restartButton.classList.add("hidden");
  while (board.firstChild) {
    board.removeChild(board.firstChild);
  }
  createBoard();
}

restartButton.addEventListener("click", restartGame);
createBoard();
