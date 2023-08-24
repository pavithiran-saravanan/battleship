import getComputer from "./computer";
import renderStaticContent, { renderShips } from "./dom";
import getPlayer from "./player";
import "../stylesheet/style.css";

renderStaticContent();

// Get Players
const player = getPlayer();
const computer = getComputer();

// Get Ships
player.placeShips();
computer.placeShips();

// Get board matrices
const pBoard = player.gameBoard.board;
const cBoard = computer.gameBoard.board;

// Add boards to dom
renderShips(pBoard, cBoard);

// Computer's dom board
const computerBoard = document.querySelector(".computer-board");

function playerTurn() {
  const cells = computerBoard.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      const row = cell.getAttribute("data-row");
      const col = cell.getAttribute("data-col");
      if (computer.gameBoard.receiveAttack(row, col)) {
        console.log(row, col);
        console.log("valid attack");
        renderShips(null, cBoard);
        if (computer.gameBoard.allShipsSunk()) {
          console.log("*** GAME OVER. PLAYER WON ***");
        } else {
          setTimeout(computerTurn, 500);
        }
        computerBoard.style.pointerEvents = "none";
      }
    });
  });
}

function computerTurn() {
  let target = computer.play();
  while (!player.gameBoard.receiveAttack(target.row, target.col)) {
    target = computer.play();
  }
  renderShips(pBoard, null);
  if (player.gameBoard.allShipsSunk()) {
    console.log("*** GAME OVER. COMPUTER WON ***");
  } else {
    computerBoard.style.pointerEvents = "auto";
    playerTurn();
  }
}

setTimeout(playerTurn, 1000);
