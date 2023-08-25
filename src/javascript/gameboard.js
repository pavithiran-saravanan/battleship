import getShip from "./ship";

function createCell() {
  return {
    isHit: false,
    hasShip: false,
    ship: undefined,
  };
}

function createBoard() {
  const board = [];
  for (let i = 0; i < 10; i += 1) {
    const row = [];
    for (let j = 0; j < 10; j += 1) {
      row.push(createCell());
    }
    board.push(row);
  }
  return board;
}

function getShips() {
  return [getShip(5), getShip(4), getShip(3), getShip(3), getShip(2)];
}

export function randNum() {
  return Math.floor(Math.random() * 10);
}

export default function getGameBoard() {
  const ships = getShips();
  const placement = Array(5).fill(null);
  const board = createBoard();

  // Returns the name of ship given the Ship Id
  // function getShipName(id) {
  //   switch (id) {
  //     case 0:
  //       return "Carrier";
  //     case 1:
  //       return "Battleship";
  //     case 2:
  //       return "Cruiser";
  //     case 3:
  //       return "Submarine";
  //     case 4:
  //       return "Destroyer";
  //     default:
  //       return "Ship";
  //   }
  // }

  // Check if given postition lies on board
  function isOnBoard(row, col) {
    if (row < 0 || col < 0 || row > 9 || col > 9) return false;
    return true;
  }

  // Check if the requested placement is valid
  function isPlacementValid(row, col, axis, length) {
    if (axis === "x") {
      for (let i = col; i < col + length; i += 1) {
        if (!isOnBoard(row, i) || board[row][i].hasShip) return false;
      }
    } else {
      for (let i = row; i < row + length; i += 1) {
        if (!isOnBoard(i, col) || board[i][col].hasShip) return false;
      }
    }
    return true;
  }

  // Place a given ship at specified position along specified direction
  function placeShip(id, row, col, axis) {
    if (!isPlacementValid(row, col, axis, ships[id].length)) return false;
    placement[id] = { row, col, axis };
    if (axis === "x") {
      for (let i = col; i < col + ships[id].length; i += 1) {
        board[row][i].hasShip = true;
        board[row][i].ship = id;
      }
    } else {
      for (let i = row; i < row + ships[id].length; i += 1) {
        board[i][col].hasShip = true;
        board[i][col].ship = id;
      }
    }
    return true;
  }

  // Place all ships at random positions
  function randDir() {
    return Math.floor(Math.random() * 2) === 1 ? "x" : "y";
  }

  function placeShipsRandom() {
    ships.forEach((ship, shipId) => {
      while (true) {
        if (placeShip(shipId, randNum(), randNum(), randDir())) break;
      }
    });
  }

  // Receive Attack
  function receiveAttack(row, col) {
    const cell = board[row][col];
    if (cell.isHit) return false;
    cell.isHit = true;
    if (cell.hasShip) {
      const shipId = cell.ship;
      ships[shipId].hit();
    }
    return true;
  }

  // Check if all ships have been sunk
  function allShipsSunk() {
    for (let i = 0; i < ships.length; i += 1) {
      if (!ships[i].isSunk()) return false;
    }
    return true;
  }

  function clearShips() {
    for (let i = 0; i < 10; i += 1){
      for (let j = 0; j < 10; j += 1){
        const cell = board[i][j];
        cell.isHit = false;
        cell.hasShip = false;
        cell.ship = undefined;
        // console.log(cell);
      }
    }
    for (let i = 0; i < 5; i += 1){
      placement[i] = null;
    }
  }

  return {
    board,
    ships,
    placeShip,
    placeShipsRandom,
    receiveAttack,
    allShipsSunk,
    clearShips
  };
}
