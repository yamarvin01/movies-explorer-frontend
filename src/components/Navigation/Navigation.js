import "./Navigation.css";

import logoAccount from "../../images/logo-account.svg";
import { NavLink } from "react-router-dom";

export default function Navigation() {

  return (
    <div className="navigation">
      <div className="navigation__container">
        <NavLink
          className="navigation__link"
          activeClassName="navigation__link_active"
          to="movies">Фильмы
        </NavLink>
        <NavLink
          className="navigation__link"
          activeClassName="navigation__link_active"
          to="saved-movies">Сохранённые фильмы
        </NavLink>
      </div>
      <NavLink
        className="navigation__account-container"
        activeClassName="navigation__account-container_active"
        to="profile"
      >
        <p className="navigation__link navigation__link_type_account" to="profile">Аккаунт</p>
        <div className="navigation__logo-account">
          <img className="navigation__logo-account-image" src={logoAccount} alt="Логотип пользователь" />
        </div>
      </NavLink>
    </div>
  );

}
