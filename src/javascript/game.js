import getComputer from "./computer";
import { announceWinner, clearDomShips, renderShips } from "./dom";
import getPlayer from "./player";

export default function getGame() {
  // Get Players
  const player = getPlayer();
  const computer = getComputer();

  // Board matrices
  const pBoard = player.gameBoard.board;
  const cBoard = computer.gameBoard.board;

  // Computer Turn
  function computerTurn() {
    const computerBoard = document.querySelector(".computer-board");
    const playerBoard = document.querySelector(".player-board");
    let target = computer.play();
    while (!player.gameBoard.receiveAttack(target.row, target.col)) {
      target = computer.play();
    }
    renderShips(pBoard, null);
    if (player.gameBoard.allShipsSunk()) {
      announceWinner("Computer");
    } else {
      // setTimeout(() => {
      //     computerBoard.classList.remove("focus");
      //     playerBoard.classList.add("focus");
      // }, 100);
      playerTurn();
    }
  }

  // Player Turn
  function playerTurn() {
    const computerBoard = document.querySelector(".computer-board");
    const playerBoard = document.querySelector(".player-board");
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
            announceWinner("Player");
          } else {
            setTimeout(computerTurn, 0);
          }
          // setTimeout(() => {
          //   computerBoard.classList.add('focus');
          //   playerBoard.classList.remove('focus');
          // }, 100);
        }
      });
    });
  }

  function start() {
    player.placeShips();
    computer.placeShips();
    renderShips(pBoard, cBoard);
    setTimeout(playerTurn, 500);
  }

  function restart() {
    // Clear ships
    player.clearShips();
    computer.clearShips();
    clearDomShips();
    document.querySelector(".computer-board").classList.remove("focus");
    document.querySelector(".player-board").classList.remove("focus");

    // Start
    start();
  }

  return {
    start,
    restart,
  };
}
