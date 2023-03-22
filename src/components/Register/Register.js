import "./Register.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <section className="register">
      <div className="register__container">
        <img className="register__logo" src={logo} alt="Логотип Movies Explorer"/>
        <h2 className="register__greeting">Добро пожаловать!</h2>
        <form className="register__form">
          <label className="register__label" for="name">Имя
            <input className="register__input"
              id="name"
              name="name"
              type="text"
              minLength="2"
              maxLength="30"
              required
              placeholder="Имя"
            ></input>
          </label>
          <label className="register__label" for="email">E-mail
            <input className="register__input"
              id="email"
              name="email"
              type="email"
              required
              placeholder="E-mail"
            ></input>
          </label>
          <label className="register__label" for="password">Пароль
            <input className="register__input"
              id="password"
              name="password"
              type="password"
              required
              placeholder="Пароль"
            ></input>
          </label>
          <button className="register__button"
            type="submit"
            aria-label="Кнопка зарегестрироваться">Зарегистрироваться
          </button>
        </form>
        <div className="register__footer-container">
          <p className="register__text register__text_type_secondary">Уже зарегистрированы?</p>
          <Link className="register__text register__text_type_link" to="signin">Войти</Link>
        </div>
      </div>
    </section>
  );
}
