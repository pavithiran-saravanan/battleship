import getComputer from "./computer";
import renderStaticContent, { placeShips } from "./dom";
import getPlayer from "./player";
import "../stylesheet/style.css";

renderStaticContent();

const player = getPlayer();
const computer = getComputer();
player.placeShips();
computer.placeShips();
placeShips(player.gameBoard.board, computer.gameBoard.board);
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

while (true) {
  console.log(`TURN ${turns}`);

  // Player's turn
  const playerTarget = playerAttacks();
  console.log(`Player's Turn (${playerTarget.row}, ${playerTarget.col})`);
  console.log(`Comp Ships Sunk: ${shipsSunk(computer)}`);
  if (computer.gameBoard.allShipsSunk()) {
    console.log("*** GAME OVER. PLAYER WON ***");
    break;
  }

  // Computer's turn
  const computerTarget = computerAttacks();
  console.log(`Computer's Turn (${computerTarget.row}, ${computerTarget.col})`);
  console.log(`Player Ships Sunk: ${shipsSunk(player)}`);
  if (player.gameBoard.allShipsSunk()) {
    console.log("*** GAME OVER. COMPUTER WON ***");
    break;
  }

  console.log("--------------------------------------------------------");
  turns += 1;
}
