export default function Button(props) {
  return (
    <button
      onClick={props.typeLetter}
      value={props.letter}
      className={props.className}
    >
      {props.letter}
    </button>
  );
}
