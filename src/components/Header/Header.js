import logo from "../../images/logo.svg";
import logoAccount from "../../images/logo-account.svg";
import { Link, Route, Switch } from "react-router-dom";
import "./Header.css";
import React from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import PopupHeader from "../PopupHeader/PopupHeader";

export default function Header() {

  const [ isOpen, setIsOpen ] = React.useState(false);
  const { width } = useWindowDimensions();

  function onOpen() {
    setIsOpen(true);
  }

  function onClose() {
    setIsOpen(false);
  }

  return (
    <>

    <Switch>
      <Route exact path="/">
        <header className="header">
          <Link className="header__link-logo" to="/">
            <img className="header__logo" src={logo} alt="Логотип Movies Explorer"/>
          </Link>
          <div className="header__content">
            <Link className="header__link header__link_type_auth" to="signup">Регистрация</Link>
            <Link className="header__link header__link_type_auth header__link_type_btn" to="signin">Войти</Link>
          </div>
        </header>
      </Route>

      {(width > 800) &&
      <Route path={["/movies", "/saved-movies", "/profile"]}>
        <header className="header">
          <Link className="header__link-logo" to="/">
            <img className="header__logo" src={logo} alt="Логотип Movies Explorer"/>
          </Link>
          <div className="header__content">
            <div className="header__container">
              <Link className="header__link header__link_type_content" to="movies">Фильмы</Link>
              <Link className="header__link header__link_type_content" to="saved-movies">Сохранённые фильмы</Link>
            </div>
            <Link className="header__account-container" to="profile">
              <p className="header__link header__link_type_account" to="profile">Аккаунт</p>
              <div className="header__logo-account">
                <img className="header__logo-account-image" src={logoAccount} alt="Логотип пользователь" />
              </div>
            </Link>
          </div>
        </header>
      </Route>
      }

      {(width <= 800) &&
        <Route path={["/movies", "/saved-movies", "/profile"]}>
          <header className="header-compact">
            <Link className="header__link-logo" to="/">
              <img className="header__logo" src={logo} alt="Логотип Movies Explorer"/>
            </Link>
            <img className="header__icon-group"
              onClick={onOpen}
              alt="Кнопка показа/скрытия части контента"
              src={require(`../../images/icon-group.png`)} />
          </header>
        </Route>
      }

    </Switch>

    <PopupHeader
      isOpen={isOpen}
      onClose={onClose}
    />

    </>
  );
}
