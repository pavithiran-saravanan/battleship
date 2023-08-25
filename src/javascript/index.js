import renderStaticContent from "./dom";
import "../stylesheet/style.css";
import getGame from "./game";

renderStaticContent();
const game = getGame();
game.placePlayerShips();

const playAgain = document.querySelector(".play-again-btn");
playAgain.addEventListener("click", () => {
  playAgain.parentElement.parentElement.classList.toggle("hide");
  game.restart();
});

const playAgainPrimary = document.querySelector(".play-again-btn-primary");
playAgainPrimary.addEventListener("click", () => game.restart());
