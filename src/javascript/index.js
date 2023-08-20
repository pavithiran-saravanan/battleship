import getComputer from "./computer";
import renderStaticContent, { renderShips } from "./dom";
import getPlayer from "./player";
import "../stylesheet/style.css";

renderStaticContent();

const player = getPlayer();
const computer = getComputer();
player.placeShips();
computer.placeShips();
const pBoard = player.gameBoard.board;
const cBoard = computer.gameBoard.board;
renderShips(pBoard, cBoard);
let turns = 1;
console.log(player.gameBoard.board, computer.gameBoard.board);

function computerAttacks() {
  let target = player.play();
  while (!computer.gameBoard.receiveAttack(target.row, target.col))
    target = player.play();
  return target;
}

function playerAttacks() {
  let target = computer.play();
  while (!player.gameBoard.receiveAttack(target.row, target.col))
    target = computer.play();
  return target;
}

function shipsSunk(obj) {
  return obj.gameBoard.ships.filter((ship) => ship.isSunk()).length;
}

let turn = 1;

function game() {
  if (turn) {
    // Player's turn
    const playerTarget = playerAttacks();
    renderShips(null, cBoard);
    console.log(`Player's Turn (${playerTarget.row}, ${playerTarget.col})`);
    console.log(`Comp Ships Sunk: ${shipsSunk(computer)}`);
    if (computer.gameBoard.allShipsSunk()) {
      console.log("*** GAME OVER. PLAYER WON ***");
      return;
    }
  } else {
    // Computer's turn
    const computerTarget = computerAttacks();
    renderShips(pBoard, null);
    console.log(
      `Computer's Turn (${computerTarget.row}, ${computerTarget.col})`,
    );
    console.log(`Player Ships Sunk: ${shipsSunk(player)}`);
    if (player.gameBoard.allShipsSunk()) {
      console.log("*** GAME OVER. COMPUTER WON ***");
      return;
    }
    console.log("--------------------------------------------------------");
  }

  turn = !turn;
  setTimeout(game, 500);
}

game();
