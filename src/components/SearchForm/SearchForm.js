import "./SearchForm.css";
import React from "react";

const SearchForm = React.memo((props) => {
  const [searchPhrase, setSearchPhrase] = React.useState(props.searchPhrase);

  function handleSearch(evt) {
    setSearchPhrase(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onSearch(searchPhrase);
  }

  return (
      <form className="search-form" onSubmit={handleSubmit} name={"search"}>
        <input className="search-form__input"
          onChange={handleSearch}
          value={searchPhrase}
          name="search"
          type="text"
          placeholder="Фильм"
          required
        ></input>
        <button className="search-form__btn"
          aria-label="Кнопка поиска">Поиск
        </button>
      </form>
  );
});

export default SearchForm;
