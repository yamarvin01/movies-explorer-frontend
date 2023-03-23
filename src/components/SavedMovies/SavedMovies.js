import "./SavedMovies.css";
import React from "react";

import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

const SavedMovies = React.memo((props) => {
  return (
    <section className="saved-movies">
      <SearchForm />
      <FilterCheckbox />
      <div className="saved-movies__separator"></div>
      <MoviesCardList
        movies={props.movies}
      />
      <div className="saved-movies__space"></div>
    </section>
  );
});

export default SavedMovies;
