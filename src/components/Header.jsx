// import language from "../data/language";
export default function Header() {
  // let gameStatus;
  // if (!(wrongGuesses > 0)) {
  //   const lang = language[wrongGuesses];
  //   gameStatus = `“Farewell ${lang.name}“`;
  // } else gameStatus = `Hi`;
  return (
    <header className="header">
      <h1 className="heading">Assembly: Endgame</h1>
      <span className="title">
        Guess the word in under 8 attempts to keep the programming world safe
        from Assembly!
      </span>
    </header>
  );
}
