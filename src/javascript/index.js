import renderStaticContent from "./dom";
import "../stylesheet/style.css";
import getGame from "./game";

renderStaticContent();
const game = getGame();
game.start();
