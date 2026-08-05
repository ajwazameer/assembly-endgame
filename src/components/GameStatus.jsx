import { winMessages, loseMessages, farewellMessages } from "../data/messages";
import language from "../data/language";
export default function GameStatus({
  gameLost,
  gameWon,
  lastGuess,
  wrongGuesses,
}) {
  let gameStatus;
  let className;
  if (gameWon) {
    gameStatus = winMessages[Math.floor(Math.random() * winMessages.length)];
    className = "game-status won";
  } else if (gameLost) {
    gameStatus = loseMessages[Math.floor(Math.random() * loseMessages.length)];
    className = "game-status lost";
  } else if (lastGuess.correct === "yes") {
    gameStatus = "Correct Guess! Well done! 🎉";
    className = "game-status correct";
  } else if (lastGuess.correct === "no") {
    const message = farewellMessages[
      Math.floor(Math.random() * farewellMessages.length)
    ].replace("{language}", language[wrongGuesses - 1].name);
    gameStatus = message;
    className = "game-status initial-incorrect";
  } else {
    className = "game-status initial-incorrect";
    gameStatus = "Lesgo! Guess the word to save programming world";
  }
  return <span className={className}>{gameStatus}</span>;
}
