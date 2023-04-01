import "./Movies.css";
import React from "react";

import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Spinner from "../Spinner/Spinner";
import NotFound from "../NotFound/NotFound";
import Error from "../Error/Error";

const Movies = React.memo((props) => {
  const isBtnHidden = props.pageSize >= props.movies.length;
  return (
    <section className="movies">
      <SearchForm
        onSearch={props.onSearch}
        searchPhrase={props.searchPhrase}
      />
      <FilterCheckbox
        isShortMovies={props.isShortMovies}
        onShortMovies={props.onShortMovies}
      />
      <div className="movies__separator"></div>
      <MoviesCardList
        movies={props.movies}
        savedMovies={props.savedMovies}
        onMovieSave={props.onMovieSave}
        pageSize={props.pageSize}
      />
      <Spinner isVisible={props.isSpinner} />
      <NotFound isVisible={props.isNotFound} />
      <Error isVisible={props.isError} />
      <div className={`movies__btn-container ${isBtnHidden && "movies__btn-container_type_hidden"}`}>
        <button className="movies__btn"
          onClick={props.onPageSizeChange}
          aria-label="Кнопка показа ещё"
        >Ещё
        </button>
      </div>
    </section>
  );
});

export default Movies;
