import "./Navigation.css";

import logoAccount from "../../images/logo-account.svg";
import { Link } from "react-router-dom";

export default function Navigation() {

  return (
    <div className="navigation">
      <div className="navigation__container">
        <Link className="navigation__link" to="movies">Фильмы</Link>
        <Link className="navigation__link" to="saved-movies">Сохранённые фильмы</Link>
      </div>
      <Link className="navigation__account-container" to="profile">
        <p className="navigation__link navigation__link_type_account" to="profile">Аккаунт</p>
        <div className="navigation__logo-account">
          <img className="navigation__logo-account-image" src={logoAccount} alt="Логотип пользователь" />
        </div>
      </Link>
    </div>
  );

}
