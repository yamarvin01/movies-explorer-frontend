import "./Login.css";
import React from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { useFormWithValidation } from "../Validation/Validation";

const Login = React.memo((props) => {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  function handleFormChange(evt) {
    handleChange(evt);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onSignIn(values);
  }

  return (
    <section className="login">
      <div className="login__container">
        <Link className="header__link-logo" to="/">
          <img className="login__logo" src={logo} alt="Логотип Movies Explorer"/>
        </Link>
        <h2 className="login__greeting">Рады видеть!</h2>
        <form className="login__form" onSubmit={handleSubmit} onChange={handleFormChange} name={"login"}>
          <label className="login__label" htmlFor="email">E-mail
            <input className="login__input"
              id="email"
              name="email"
              type="email"
              placeholder="E-mail"
              autoComplete="off"
              required
            ></input>
            <span className="login__error">{ errors.email }</span>
          </label>
          <label className="login__label" htmlFor="password">Пароль
            <input className="login__input"
              id="password"
              name="password"
              type="password"
              placeholder="Пароль"
              autoComplete="off"
              required
            ></input>
            <span className="login__error">{ errors.password }</span>
          </label>
          <span className="login__error login__error_type_common">{props.signInErrorMessage}</span>
          <button className={`login__button ${(!isValid || props.isSignInHold) && 'login__button_type_disabled'}`}
            type="submit"
            aria-label="Кнопка зарегестрироваться"
            disabled={!isValid || props.isSignInHold}>Войти
          </button>
        </form>
        <div className="login__footer-container">
          <p className="login__text login__text_type_secondary">Ещё не зарегистрированы?</p>
          <Link className="login__text login__text_type_link" to="signup">Регистрация</Link>
        </div>
      </div>
    </section>
  );
});

export default Login;
