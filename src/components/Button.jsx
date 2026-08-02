export default function Button(props) {
  return (
    <button onClick={props.typeLetter} value={props.letter}>
      {props.letter}
    </button>
  );
}
