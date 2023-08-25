import getGameBoard, { randNum } from "./gameboard";

export default function getPlayer() {
  const gameBoard = getGameBoard();

  function placeShips() {
    gameBoard.placeShipsRandom();
  }

  function getCoordinates() {
    const row = randNum();
    const col = randNum();
    return { row, col };
  }

  function play() {
    return getCoordinates();
  }

  function clearShips() {
    gameBoard.clearShips();
  }

  return {
    gameBoard,
    placeShips,
    play,
    clearShips
  };
}
