import "./SearchForm.css";

export default function SearchForm() {
  return (
    <form className="search-form">
      <input className="search-form__input" placeholder="Фильм" required></input>
      <button className="search-form__btn"
        aria-label="Кнопка поиска">Поиск
      </button>
    </form>
  );
}
