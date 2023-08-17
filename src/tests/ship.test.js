import getShip from "../javascript/ship";

test("Factory returns a ship of provided length", () => {
  expect(getShip(2).length).toBe(2);
  expect(getShip(2).hits).toBe(0);
  expect(getShip(2).isSunk()).toBeFalsy();
});

test("Ship is hit", () => {
  const len = 3;
  const ship = getShip(len);
  const initialHits = ship.hits;
  ship.hit();
  expect(ship.hits).toBe(initialHits + 1);
});

test("Is ship sunk", () => {
  const len = 3;
  const ship = getShip(len);
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});

test("Ship is hit after being sunk", () => {
  const len = 3;
  const ship = getShip(len);
  ship.hit();
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.hits).toBe(3);
});
