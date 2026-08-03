export default function Button(props) {
  return (
    <button
      disabled={props.gameLost || props.gameWon ? true : null}
      onClick={props.typeLetter}
      value={props.letter}
      className={props.className}
    >
      {props.letter}
    </button>
  );
}
