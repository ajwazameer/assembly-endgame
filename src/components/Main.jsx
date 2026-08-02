import { useState, useEffect, useRef } from "react";
import Header from "./Header";
import LanguageList from "./LanguageList";
import Word from "./Word";
import Keyboard from "./Keyboard";
import words from "../data/words";
export default function Main() {
  const [targetWord, setTargetWord] = useState(generateRandomWord);
  const [guessedLetters, setGuessedLetters] = useState([]);

  function typeLetter(event) {
    const letter = event.currentTarget.value;
    setGuessedLetters((prevletters) => {
      if (!prevletters.includes(letter)) return [...prevletters, letter];
      else {
        return [...prevletters];
      }
    });

    if (targetWord.includes(letter)) {
    }
  }
  console.log(guessedLetters);
  function generateRandomWord() {
    const ind = Math.ceil(Math.random() * 20);
    const random = words[ind];
    return random;
  }
  console.log(targetWord);
  return (
    <main>
      <Header />
      <LanguageList />
      <Word targetWord={targetWord} guessedLetters={guessedLetters} />
      <Keyboard
        typeLetter={typeLetter}
        guessedLetters={guessedLetters}
        targetWord={targetWord}
      />
    </main>
  );
}
