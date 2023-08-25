import renderStaticContent from "./dom";
import "../stylesheet/style.css";
import getGame from "./game";

renderStaticContent();
const game = getGame();
game.start();

const playAgain = document.querySelector('.play-again-btn')
playAgain.addEventListener("click", () => {
  game.restart();
});
