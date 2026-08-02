import language from "../data/language";
export default function LanguageList() {
  const languages = language.map((lang) => {
    return (
      <li
        style={{
          backgroundColor: lang.backgroundColor,
          color: lang.color,
        }}
        key={lang.name}
      >
        {lang.name}
      </li>
    );
  });

  return (
    <section className="language-list">
      <ul>{languages}</ul>
    </section>
  );
}
