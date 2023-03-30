import "./Register.css";
import React from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { useFormWithValidation } from "../Validation/Validation";

const Register = React.memo((props) => {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  function handleFormChange(evt) {
    handleChange(evt);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onRegister(values);
  }

  return (
    <section className="register">
      <div className="register__container">
        <img className="register__logo" src={logo} alt="Логотип Movies Explorer"/>
        <h2 className="register__greeting">Добро пожаловать!</h2>
        <form className="register__form"
          onSubmit={handleSubmit}
          onChange={handleFormChange}
          name="register"
        >
          <label className="register__label" htmlFor="name">Имя
            <input className="register__input"
              id="name"
              name="name"
              type="text"
              minLength="2"
              maxLength="30"
              required
              placeholder="Имя"
            ></input>
            <span className="register__error">{ errors.name }</span>
          </label>
          <label className="register__label" htmlFor="email">E-mail
            <input className="register__input"
              id="email"
              name="email"
              type="email"
              required
              placeholder="E-mail"
            ></input>
            <span className="register__error">{ errors.email }</span>
          </label>
          <label className="register__label" htmlFor="password">Пароль
            <input className="register__input"
              id="password"
              name="password"
              type="password"
              required
              placeholder="Пароль"
            ></input>
            <span className="register__error">{ errors.password }</span>
          </label>
          <span className="register__error register__error_type_common">{props.registerErrorMessage}</span>
          <button className={`register__button ${!isValid && 'register__button_disabled'}`}
            type="submit"
            aria-label="Кнопка зарегестрироваться"
            disabled={!isValid}
          >Зарегистрироваться
          </button>
        </form>
        <div className="register__footer-container">
          <p className="register__text register__text_type_secondary">Уже зарегистрированы?</p>
          <Link className="register__text register__text_type_link" to="signin">Войти</Link>
        </div>
      </div>
    </section>
  );
});

export default Register;
