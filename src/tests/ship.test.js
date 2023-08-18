import getShip from "../javascript/ship";

test("Factory returns a ship that is not sunk", () => {
  expect(getShip(2).isSunk()).toBeFalsy();
});

test("Ship of len 3 is hit once", () => {
  const ship = getShip(3);
  ship.hit();
  expect(ship.isSunk()).toBeFalsy();
});

test("Ship of len 3 is hit thrice", () => {
  const ship = getShip(3);
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBeTruthy();
});

test("Ship of len 3 is hit more than thrice", () => {
  const ship = getShip(3);
  ship.hit();
  ship.hit();
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBeTruthy();
});
