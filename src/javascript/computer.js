import getGameBoard, { randNum } from "./gameboard";

export default function getComputer() {
  const gameBoard = getGameBoard();

  function placeShips() {
    gameBoard.placeShipsRandom();
  }

  function getCoordinates() {
    // Listen for a click event on the dom DOM Board
    // Return the selected cell's position
    // For now let the selection be randomly generated
    const row = randNum();
    const col = randNum();
    return { row, col };
  }

  function play() {
    return getCoordinates();
  }

  return {
    gameBoard,
    placeShips,
    play,
  };
}
