import "./Header.css";
import React from "react";

import logo from "../../images/logo.svg";
import iconGroup from "../../images/icon-group.png";
import Navigation from "../Navigation/Navigation";
import { Link, Route, Switch } from "react-router-dom";

import useWindowDimensions from "../../hooks/useWindowDimensions";

const Header = React.memo((props) => {
  const { width } = useWindowDimensions();
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
          <Navigation />
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
              onClick={props.onHeaderPopupOpen}
              alt="Кнопка показа/скрытия части контента"
              src={iconGroup}/>
          </header>
        </Route>
      }
    </Switch>
    </>
  );
});

export default Header;
