export default function Button(props) {
  return (
    <button
      disabled={props.gameLost || props.gameWon ? true : null}
      onClick={props.typeLetter}
      value={props.letter}
      className={
        props.gameLost || props.gameWon
          ? `${props.className} eliminated`
          : `${props.className}`
      }
    >
      {props.letter}
    </button>
  );
}
