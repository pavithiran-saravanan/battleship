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

function renderHelper(domBoard, board) {
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const cell = board[i][j];
      const domCell = domBoard.querySelector(
        `[data-row = "${i}"][data-col = "${j}"]`,
      );
      if (cell.hasShip) {
        if (cell.isHit) domCell.classList.add("hit");
        else domCell.classList.add("ship");
      } else if (cell.isHit) domCell.classList.add("miss");
    }
  }
}

export function renderShips(pBoard, cBoard) {
  if (pBoard) {
    const playerBoard = document.querySelector(".player-board");
    renderHelper(playerBoard, pBoard);
  }
  if (cBoard) {
    const computerBoard = document.querySelector(".computer-board");
    renderHelper(computerBoard, cBoard);
  }
}
