export default function Word({ targetWord, guessedLetters }) {
  const buttonsArray = targetWord.split("").map((letter, index) => {
    if (guessedLetters.includes(letter)) {
      return (
        <div key={index} className="word-divs">
          {letter}
        </div>
      );
    } else {
      return <div key={index} className="word-divs"></div>;
    }
  });
  return <section className="word-box">{buttonsArray}</section>;
}
