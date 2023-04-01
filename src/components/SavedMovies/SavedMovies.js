import "./SavedMovies.css";
import React from "react";

import SearchForm from "../SearchForm/SearchForm";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Spinner from "../Spinner/Spinner";
import NotFound from "../NotFound/NotFound";
import Error from "../Error/Error";

const SavedMovies = React.memo((props) => {
  return (
    <section className="saved-movies">
      <SearchForm
        searchPhrase={props.searchPhrase}
        onSearch={props.onSearch}
      />
      <FilterCheckbox
        isShortMovies={props.isShortMovies}
        onShortMovies={props.onShortMovies}
      />
      <div className="saved-movies__separator"></div>
      <MoviesCardList
        movies={props.movies}
        savedMovies={props.savedMovies}
        savedMoviesSearchResult={props.savedMoviesSearchResult}
        onMovieDelete={props.onMovieDelete}
        pageSize={props.pageSize}
      />
      <Spinner isVisible={props.isSpinner} />
      <NotFound isVisible={props.isNotFound} />
      <Error isVisible={props.isError} />
      <div className="saved-movies__space"></div>
    </section>
  );
});

export default SavedMovies;
