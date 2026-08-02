import language from "../data/language";
export default function Header({ wrongGuesses }) {
  const lang = language[wrongGuesses];
  const gameStatus = `“Farewell ${lang.name}“`;
  return (
    <header className="header">
      <h1 className="heading">Assembly: Endgame</h1>
      <span className="title">
        Guess the word in under 8 attempts to keep the programming world safe
        from Assembly!
      </span>
      <span className="game-status">{gameStatus}</span>
    </header>
  );
}
