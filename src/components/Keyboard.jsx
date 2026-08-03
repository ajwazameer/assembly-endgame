import letters from "../data/letters";
import Button from "./Button";
export default function Keyboard({
  gameWon,
  gameLost,
  typeLetter,
  guessedLetters,
  targetWord,
  wrongGuesses,
}) {
  const buttons = letters.map((letter) => {
    let btnClass;
    if (guessedLetters.includes(letter)) {
      if (targetWord.includes(letter)) {
        btnClass = "correct";
      } else {
        btnClass = "incorrect";
      }
    } else {
      btnClass = "default";
    }
    return (
      <Button
        gameWon={gameWon}
        gameLost={gameLost}
        className={btnClass}
        key={letter}
        letter={letter}
        typeLetter={typeLetter}
      />
    );
  });
  return <section className="keyboard">{buttons}</section>;
}
