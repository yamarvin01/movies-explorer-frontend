import "./MoviesCard.css";
import React from "react";
import { useLocation } from 'react-router-dom';
import { mlsecToHm } from "../../utils/utils";

const MoviesCard = React.memo((props) => {
  const [isActive, setIsActive] = React.useState(false);

  const location = useLocation();
  const pathname = location.pathname;

  const cardBtnClass = `card__button ${isActive ? 'card__button_type_active' : 'card__button_type_inactive'}`;
  const cardBtnCrossClass = `card__button card__button_type_cross`;

  function handleClick(e) {
    setIsActive(!isActive);
  }

  return (
    <li className="card">
      <img className="card__img" src={props.movie.thumbnail} alt={`Постер фильма ${props.movie.nameRU}`} />
      <div className="card__info">
        <div className="card__description">
          <h2 className="card__title">{props.movie.nameRU}</h2>
          { pathname !== '/saved-movies' &&
            <button className={cardBtnClass}
              type="button"
              aria-label="Кнопка лайк"
              onClick={handleClick}
            />
          }
          { pathname === '/saved-movies' &&
            <button className={cardBtnCrossClass}
              type="button"
              aria-label="Кнопка удаления"
            />
          }
        </div>
        <p className="card__text">{mlsecToHm(props.movie.duration)}</p>
      </div>
    </li>
  );
});

export default MoviesCard;
