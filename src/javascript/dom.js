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

function getGameOver() {
  const container = comp("div", "gameover-container");
  const options = comp("div", "gameover-options");
  const announceWinner = comp("div", "announce-winner");
  announceWinner.textContent = "Player Won";
  const playAgain = comp("button", "play-again-btn");
  playAgain.textContent = "Play Again";

  options.append(announceWinner, playAgain);
  container.append(options);
  return container;
}

export default function renderStaticContent() {
  const content = document.querySelector(".content");
  const boards = comp("div", "boards");
  content.append(getGameOver(), boards);

  const playerBoard = getBoard();
  playerBoard.classList.add("player-board");

  const computerBoard = getBoard();
  computerBoard.classList.add("computer-board");

  const playerContainer = comp("div", "player-container");
  const computerContainer = comp("div", "computer-container");
  const playerTitle = comp("div", "player-title title");
  playerTitle.textContent = "Player";
  const computerTitle = comp("div", "computer-title");
  computerTitle.textContent = "Computer";

  playerContainer.append(playerTitle, playerBoard);
  computerContainer.append(computerTitle, computerBoard);

  boards.append(playerContainer, computerContainer);
}

function renderHelper(domBoard, board, hideShips = false) {
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const cell = board[i][j];
      const domCell = domBoard.querySelector(
        `[data-row = "${i}"][data-col = "${j}"]`,
      );
      if (cell.hasShip) {
        if (cell.isHit) domCell.classList.add("hit");
        else {
          domCell.classList.add("ship");
          if (hideShips) domCell.classList.add("hidden");
        }
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
    renderHelper(computerBoard, cBoard, true);
  }
}

export function clearDomShips() {
  const playerCells = document.querySelector('.player-board').querySelectorAll('.cell');
  playerCells.forEach(cell => {
    cell.classList.remove('ship');
    cell.classList.remove("hit");
    cell.classList.remove("miss");
    cell.classList.remove("hidden");
  })

  const computerCells = document
    .querySelector(".computer-board")
    .querySelectorAll(".cell");
  computerCells.forEach((cell) => {
    cell.classList.remove("ship");
    cell.classList.remove("hit");
    cell.classList.remove("miss");
    cell.classList.remove("hidden");
  });
}

