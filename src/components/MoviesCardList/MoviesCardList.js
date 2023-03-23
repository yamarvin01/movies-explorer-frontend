import "./MoviesCardList.css";
import React from "react";

import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = React.memo((props) => {
  return (
    <ul className="movies-cardlist">
      {
        props.movies.map(movie => (
          <MoviesCard
            key={movie._id}
            movie={movie}
          />
        ))
      }
    </ul>
  );
});

export default MoviesCardList;
