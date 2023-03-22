import "./HeaderPopup.css";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import logoAccount from "../../images/logo-account.svg";

const HeaderPopup = React.memo((props) => {
  return (
    <div className={`popup ${props.isOpen && 'popup_opened'}`}>
      <button
        className="button button_type_close"
        onClick={props.onClose}
        aria-label="Кнопка закрытия навигации"
      ></button>
      <div className="popup__container">
        <NavLink className="popup__link" activeClassName="popup__link_active" exact to="">Главная</NavLink>
        <NavLink className="popup__link" activeClassName="popup__link_active" to="movies">Фильмы</NavLink>
        <NavLink className="popup__link" activeClassName="popup__link_active" to="saved-movies">Сохранённые фильмы</NavLink>
      </div>

      <Link className="popup__link popup__link_type_bottom" to="profile">
        <p className="popup__text" to="profile">Аккаунт</p>
        <div className="popup__logo-container">
          <img className="popup__logo-account" src={logoAccount} alt="Логотип пользователь" />
        </div>
      </Link>
    </div>
  );
});

export default HeaderPopup;
