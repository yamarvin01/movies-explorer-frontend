import "./PopupHeader.css";
import { Link } from "react-router-dom";

export default function PopupHeader(props) {
  return (
    <div className={`popup ${props.isOpen && 'popup_opened'}`}>
      <button
        className="button button_type_close"
        onClick={props.onClose}
      ></button>
      <div className="popup__container">
        <Link className="popup__link" to="">Главная</Link>
        <Link className="popup__link" to="movies">Фильмы</Link>
        <Link className="popup__link" to="saved-movies">Сохранённые фильмы</Link>
      </div>

    </div>
  );
}
