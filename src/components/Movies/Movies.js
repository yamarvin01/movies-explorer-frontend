import "./Movies.css";

import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

export default function Movies(props) {
  return (
    <section className="movies">
      <SearchForm />
      <FilterCheckbox />
      <div className="movies__separator"></div>
      <MoviesCardList
        movies={props.movies}
      />
      <div className="movies__btn-container">
        <button className="movies__btn"
          aria-label="Кнопка показа ещё контента">Ещё
        </button>
      </div>
    </section>
  );
}
