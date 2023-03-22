import "./Login.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <section className="login">
      <div className="login__container">
        <img className="login__logo" src={logo} alt="Логотип Movies Explorer"/>
        <h2 className="login__greeting">Рады видеть!</h2>
        <form className="login__form">
          <label className="login__label" for="email">E-mail
            <input className="login__input"
              id="email"
              name="email"
              type="email"
              required
              placeholder="E-mail"
            ></input>
          </label>
          <label className="login__label" for="password">Пароль
            <input className="login__input"
              id="password"
              name="password"
              type="password"
              required
              placeholder="Пароль"
            ></input>
          </label>
          <button className="login__button"
            type="submit"
            aria-label="Кнопка зарегестрироваться">Войти
          </button>
        </form>
        <div className="login__footer-container">
          <p className="login__text login__text_type_secondary">Ещё не зарегистрированы?</p>
          <Link className="login__text login__text_type_link" to="signup">Регистрация</Link>
        </div>
      </div>
    </section>
  );
}
