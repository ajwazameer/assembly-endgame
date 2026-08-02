import language from "../data/language";
export default function LanguageList({ wrongGuesses }) {
  const languages = language.map((lang, ind) => {
    return (
      <li
        className={ind < wrongGuesses ? "eliminated" : ""}
        style={{
          backgroundColor: lang.backgroundColor,
          color: lang.color,
        }}
        key={lang.name}
      >
        {lang.name}
        {ind < wrongGuesses && <span className="skull">💀</span>}
      </li>
    );
  });

  return (
    <section className="language-list">
      <ul>{languages}</ul>
    </section>
  );
}
