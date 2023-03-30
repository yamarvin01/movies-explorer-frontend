import "./FilterCheckbox.css";
import React from "react";

export default function FilterCheckbox(props) {
  const [isShortMovies, setIsShortMovies] = React.useState(props.isShortMovies);

  function toggle(evt) {
    setIsShortMovies(!isShortMovies);
    props.onShortMovies(!isShortMovies);
  }

  return (
    <form className="filter-checkbox">
      <button
        className={`filter-checkbox__btn ${isShortMovies && 'filter-checkbox__btn_type_active'}`}
        type="button"
        onClick={toggle}
        aria-label="Кнопка переключения"
        >
      </button>
      <h2 className="filter-checkbox__title">Короткометражки</h2>
    </form>
  );
}
