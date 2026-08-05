export default function NewGame(props) {
  return (
    <button className="new-game" onClick={props.restartGame}>
      New Game
    </button>
  );
}
