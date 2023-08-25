import getComputer from "./computer";
import {
  announceWinner,
  clearDomShips,
  renderShips,
  setMessage,
  toggleAxisButton,
} from "./dom";
import getPlayer from "./player";

export default function getGame() {
  // Get Players
  const player = getPlayer();
  const computer = getComputer();
  let shipId = 0;
  let axis = 0;

  // Board matrices
  const pBoard = player.gameBoard.board;
  const cBoard = computer.gameBoard.board;

  // Computer Turn
  function computerTurn() {
    // const computerBoard = document.querySelector(".computer-board");
    // const playerBoard = document.querySelector(".player-board");
    let target = computer.play();
    while (!player.gameBoard.receiveAttack(target.row, target.col)) {
      target = computer.play();
    }
    renderShips(pBoard, null);
    if (player.gameBoard.allShipsSunk()) {
      announceWinner("Computer");
    } else {
      playerTurn();
      setMessage("Player's Turn");
    }
  }

  // Player Turn
  function playerTurn() {
    const computerBoard = document.querySelector(".computer-board");
    // const playerBoard = document.querySelector(".player-board");
    const cells = computerBoard.querySelectorAll(".cell");
    cells.forEach((cell) => {
      cell.addEventListener("click", () => {
        const row = cell.getAttribute("data-row");
        const col = cell.getAttribute("data-col");
        if (computer.gameBoard.receiveAttack(row, col)) {
          renderShips(null, cBoard);
          if (computer.gameBoard.allShipsSunk()) {
            announceWinner("Player");
          } else {
            setTimeout(computerTurn, 0);
          }
        }
      });
    });
  }

  function shipPlacementHandler(e) {
    const cell = e.target;
    const computerBoard = document.querySelector(".computer-board");
    const playerBoard = document.querySelector(".player-board");
    const cells = playerBoard.querySelectorAll(".cell");

    const row = cell.getAttribute("data-row");
    const col = cell.getAttribute("data-col");
    if (player.gameBoard.placeShip(+shipId, +row, +col, axis ? "y" : "x")) {
      shipId += 1;
      if (shipId < 5) {
        setMessage(`Place ${player.gameBoard.getShipName(shipId)}`);
      } else {
        computerBoard.style.pointerEvents = "all";
        playerBoard.style.pointerEvents = "none";
        cells.forEach((c) => {
          c.removeEventListener("click", shipPlacementHandler);
        });
        document.querySelector(".axis-button").classList.add("hidden");
        start();
      }
      renderShips(pBoard, null);
    }
  }

  function axisHandler() {
    axis = !axis;
    toggleAxisButton();
  }

  function placePlayerShips() {
    const computerBoard = document.querySelector(".computer-board");
    const playerBoard = document.querySelector(".player-board");
    computerBoard.style.pointerEvents = "none";
    setMessage(`Place ${player.gameBoard.getShipName(shipId)}`);

    // Add event listeners to player cells
    const cells = playerBoard.querySelectorAll(".cell");

    // Axis button click event handler
    const axisbutton = document.querySelector(".axis-button");
    axisbutton.addEventListener("click", axisHandler);

    cells.forEach((cell) => {
      cell.addEventListener("click", shipPlacementHandler);
    });
  }

  function start() {
    computer.placeShips();
    renderShips(pBoard, cBoard);
    setMessage("Player's Turn");
    setTimeout(playerTurn, 500);
  }

  function restart() {
    // Clear ships
    player.clearShips();
    computer.clearShips();
    clearDomShips();
    document.querySelector(".axis-button").removeEventListener('click', axisHandler);

    // Start
    shipId = 0;
    axis = 0;
    document.querySelector(".player-board").style.pointerEvents = "all";
    document.querySelector(".axis-button").classList.remove("hidden");
    document.querySelector(".axis-button").style.transform = "rotate(0deg)";
    placePlayerShips();
  }

  return {
    start,
    restart,
    placePlayerShips,
  };
}
