import letters from "../data/letters";
import Button from "./Button";
export default function Keyboard() {
  function typeLetter(event) {
    console.log(event.target.value);
  }
  const buttons = letters.map((letter) => {
    return <Button key={letter} letter={letter} typeLetter={typeLetter} />;
  });
  return <section className="keyboard">{buttons}</section>;
}
