import letters from "../data/letters";
import Button from "./Button";
export default function Keyboard({ typeLetter, guessedLetters, targetWord }) {
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
        className={btnClass}
        key={letter}
        letter={letter}
        typeLetter={typeLetter}
      />
    );
  });
  return <section className="keyboard">{buttons}</section>;
}
// import letters from "../data/letters";
// import Button from "./Button";
// export default function Keyboard({ typeLetter, guessedLetters, targetWord }) {
//   const buttons = letters.map((letter) => {
//     if (guessedLetters.includes(letter)) {
//       if (targetWord.includes(letter)) {
//         return (
//           <Button
//             className="correct"
//             typeLetter={typeLetter}
//             key={letter}
//             letter={letter}
//             typeLetter={typeLetter}
//           />
//         );
//       } else {
//         return (
//           <Button
//             className="incorrect"
//             typeLetter={typeLetter}
//             key={letter}
//             letter={letter}
//             typeLetter={typeLetter}
//           />
//         );
//       }
//     } else {
//       return (
//         <Button
//           typeLetter={typeLetter}
//           key={letter}
//           letter={letter}
//           typeLetter={typeLetter}
//         />
//       );
//     }
//   });
//   return <section className="keyboard">{buttons}</section>;
// }
