import "./MoviesCard.css";
import React from "react";
import { useLocation } from 'react-router-dom';
import { minutesToHourMinutes } from "../../utils/utils";

const MoviesCard = React.memo((props) => {
  const [isActive, setIsActive] = React.useState(false);
  const location = useLocation();
  const pathname = location.pathname;
  const cardBtnClass = `card__button ${isActive ? 'card__button_type_active' : 'card__button_type_inactive'}`;
  const cardBtnCrossClass = `card__button card__button_type_cross`;

  React.useEffect(() => {
    const savedCard = props.savedMovies.find((movie) => {
      return movie.movieId === props.movie.movieId;
    });
    if (savedCard) {
      setIsActive(true);
    }
  }, []);

  function handleSave(e) {
    setIsActive(!isActive);
    props.onMovieSave(props.movie);
  }

  function handleDelete(e) {
    props.onMovieDelete(props.movie);
  }

  return (
    <li className="card">
      <a className="card__link"
        href={props.movie.trailerLink}
        target="_blank"
        rel="noreferrer"
      >
        <img className="card__img" src={props.movie.thumbnail} alt={`Постер фильма ${props.movie.nameRU}`} />
      </a>
      <div className="card__info">
        <div className="card__description">
          <h2 className="card__title">{props.movie.nameRU}</h2>
          { pathname === '/movies' &&
            <button className={cardBtnClass}
              type="button"
              aria-label="Кнопка сохранить"
              onClick={handleSave}
            />
          }
          { pathname === '/saved-movies' &&
            <button className={cardBtnCrossClass}
              type="button"
              aria-label="Кнопка удаления"
              onClick={handleDelete}
            />
          }
        </div>
        <p className="card__text">{minutesToHourMinutes(props.movie.duration)}</p>
      </div>
    </li>
  );
});

export default MoviesCard;
