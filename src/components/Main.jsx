import { useState, useEffect, useRef } from "react";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import Header from "./Header";
import LanguageList from "./LanguageList";
import Word from "./Word";
import Keyboard from "./Keyboard";
import words from "../data/words";
import GameStatus from "./GameStatus";
import language from "../data/language";
import NewGame from "./NewGame";

export default function Main() {
  const [targetWord, setTargetWord] = useState(generateRandomWord);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [lastGuess, setLastGuess] = useState({
    letter: "",
    mode: "",
  });
  const { width, height } = useWindowSize();
  let gameStatus;
  let gameWon = false;
  let gameLost = false;
  let wrongGuesses = 0;

  for (let letter of guessedLetters) {
    if (!targetWord.includes(letter)) {
      wrongGuesses += 1;
    }
  }

  if (
    targetWord.split("").every((letter) => {
      return guessedLetters.includes(letter);
    })
  ) {
    gameWon = true;
  }

  if (wrongGuesses >= 8) {
    gameLost = true;
  }

  function typeLetter(event) {
    const btn = event.currentTarget;
    const letter = btn.value;

    setGuessedLetters((prevletters) => {
      if (!prevletters.includes(letter)) {
        return [...prevletters, letter];
      } else {
        return [...prevletters];
      }
    });
    const mode = targetWord.includes(letter) ? "yes" : "no";
    setLastGuess({
      letter,
      correct: mode,
    });
  }

  function generateRandomWord() {
    const ind = Math.ceil(Math.random() * words.length);
    const random = words[ind];
    return random;
  }
  console.log(targetWord);
  function restartGame() {
    setGuessedLetters([]);
    setLastGuess({});
    setTargetWord(generateRandomWord());
  }
  return (
    <main>
      {gameWon && (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={180}
          style={{ pointerEvents: "none" }}
        />
      )}
      <Header wrongGuesses={wrongGuesses} />
      <GameStatus
        wrongGuesses={wrongGuesses}
        gameWon={gameWon}
        gameLost={gameLost}
        lastGuess={lastGuess}
      />
      <LanguageList wrongGuesses={wrongGuesses} />
      <Word
        targetWord={targetWord}
        guessedLetters={guessedLetters}
        gameLost={gameLost}
      />
      <Keyboard
        gameWon={gameWon}
        gameLost={gameLost}
        typeLetter={typeLetter}
        guessedLetters={guessedLetters}
        targetWord={targetWord}
      />
      {(gameLost || gameWon) && <NewGame restartGame={restartGame} />}
    </main>
  );
}
