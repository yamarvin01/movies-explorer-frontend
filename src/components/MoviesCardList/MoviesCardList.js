import "./MoviesCardList.css";
import React from "react";

import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = React.memo((props) => {
  const movies = props.movies;
  const pageSize = props.pageSize;
  const cardsToDisplay = movies.slice(0, pageSize);

  return (
    <ul className="movies-cardlist">
      {
        cardsToDisplay.map(movie => (
          <MoviesCard
            key={movie.movieId}
            movie={movie}
            savedMovies={props.savedMovies}
            onMovieSave={props.onMovieSave}
            onMovieDelete={props.onMovieDelete}
          />
        ))
      }
    </ul>
  );
});

export default MoviesCardList;
