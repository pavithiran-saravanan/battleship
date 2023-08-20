import comp from "./comp";

function getBoard() {
  const board = comp("div", "game-board");
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const cell = comp("div", `cell`, { "data-row": i }, { "data-col": j });
      board.append(cell);
    }
  }
  return board;
}

export default function renderStaticContent() {
  const content = document.querySelector(".content");
  const boards = comp("div", "boards");
  content.append(boards);

  const playerBoard = getBoard();
  playerBoard.classList.add("player-board");
  const computerBoard = getBoard();
  computerBoard.classList.add("computer-board");
  boards.append(playerBoard, computerBoard);
}

export function placeShips(pBoard, cBoard) {
  const playerBoard = document.querySelector(".player-board");
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const cell = pBoard[i][j];
      if (cell.hasShip) {
        const domCell = playerBoard.querySelector(
          `[data-row = "${i}"][data-col = "${j}"]`,
        );
        domCell.classList.add("ship");
      }
    }
  }

  const computerBoard = document.querySelector(".computer-board");
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const cell = cBoard[i][j];
      if (cell.hasShip) {
        const domCell = computerBoard.querySelector(
          `[data-row = "${i}"][data-col = "${j}"]`,
        );
        domCell.classList.add("ship");
      }
    }
  }
}
