import { winMessages, loseMessages } from "../data/messages";
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
    className = "game-status correct";
  } else if (gameLost) {
    gameStatus = loseMessages[Math.floor(Math.random() * loseMessages.length)];
    className = "game-status lost";
  } else if (lastGuess.correct === "yes") {
    gameStatus = "Correct Guess! Well done! 🎉";
    className = "game-status";
  } else if (lastGuess.correct === "no") {
    gameStatus = `“Farewell ${language[wrongGuesses - 1].name}”`;
    className = "game-status";
  } else {
    className = "game-status";
    gameStatus = "Lesgo! Guess the word to save programming world";
  }
  return <span className={className}>{gameStatus}</span>;
}
