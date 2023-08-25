import getComputer from "./computer";
import { clearDomShips, renderShips } from "./dom";
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

  // Player Turn
  function playerTurn() {
    const computerBoard = document.querySelector(".computer-board");
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
            setTimeout(computerTurn, 10);
          }
          computerBoard.style.pointerEvents = "none";
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
    clearDomShips()

    // Start
    start()
  }

  return {
    start,
    restart
  };
}
