export default function getShip(len) {
  function hit() {
    if (this.hits < this.length) this.hits += 1;
    if (this.hits === this.length) this.sunk = true;
  }

  function isSunk() {
    return this.sunk;
  }

  return {
    length: len,
    hits: 0,
    sunk: false,
    hit,
    isSunk,
  };
}
