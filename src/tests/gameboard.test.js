import getGameBoard from "../javascript/gameboard";

test("10x10 Board", () => {
  const gameboard = getGameBoard();
  const obj = {
    isHit: false,
    hasShip: false,
    ship: undefined,
  };
  expect(gameboard.board[0][0]).toEqual(obj);
  expect(gameboard.board[4][4]).toEqual(obj);
  expect(gameboard.board[9][9]).toEqual(obj);
});

test("Placing ship at a valid position along x axis", () => {
  const gameboard = getGameBoard();
  expect(gameboard.placeShip(0, 0, 0, "x")).toBeTruthy();
});

test("Placing ship at a valid position along y axis", () => {
  const gameboard = getGameBoard();
  expect(gameboard.placeShip(0, 1, 0, "y")).toBeTruthy();
});

test("Attempt to place ship out of the board", () => {
  const gameboard = getGameBoard();
  expect(gameboard.placeShip(0, 0, 8, "x")).toBeFalsy();
  expect(gameboard.placeShip(1, 7, 0, "y")).toBeFalsy();
});

test("Attempt to place a ship at a position that is being occupied by another ship", () => {
  const gameboard = getGameBoard();
  expect(gameboard.placeShip(0, 0, 0, "x")).toBeTruthy();
  expect(gameboard.placeShip(1, 0, 0, "x")).toBeFalsy();
  expect(gameboard.placeShip(1, 0, 4, "x")).toBeFalsy();
  expect(gameboard.placeShip(1, 0, 4, "y")).toBeFalsy();
});

test("Random ships placement", () => {
  const gameboard = getGameBoard();
  gameboard.placeShipsRandom();
  let occupiedPositions = 0;
  gameboard.board.forEach((row) => {
    row.forEach((cell) => {
      if (cell.hasShip) occupiedPositions += 1;
    });
  });
  expect(occupiedPositions).toBe(17);
});

test("Attack: Hit and Miss", () => {
  const gameboard = getGameBoard();
  gameboard.placeShip(0, 0, 0, "x");
  expect(gameboard.receiveAttack(0, 0)).toBeTruthy();
  expect(gameboard.receiveAttack(0, 0)).toBeFalsy();
  expect(gameboard.receiveAttack(1, 0)).toBeFalsy();
});

test("Ship is sunk", () => {
  const gameboard = getGameBoard();
  gameboard.placeShip(0, 0, 0, "x");
  for (let i = 0; i < 5; i += 1) gameboard.receiveAttack(0, i);
  expect(gameboard.ships[0].isSunk()).toBeTruthy();
});

test("All Ships are sunk", () => {
  const gameboard = getGameBoard();
  const { ships } = gameboard;
  ships.forEach((ship, index) => {
    gameboard.placeShip(index, index, 0, "x");
  });
  ships.forEach((ship, index) => {
    const len = ship.length;
    for (let i = 0; i < len; i += 1) {
      gameboard.receiveAttack(index, i);
    }
  });
  expect(gameboard.allShipsSunk()).toBeTruthy();
  console.log(ships);
});
