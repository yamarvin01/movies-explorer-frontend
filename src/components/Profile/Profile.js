import "./Profile.css";
import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../Validation/Validation";

const Profile = React.memo((props) => {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState(currentUser.name);
  const [email, setEmail] = React.useState(currentUser.email);
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  function handleFormChange(evt) {
    handleChange(evt);
  }

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onEditProfile({name, email});
  }

  return (
    <section className="profile">
      <div className="profile__container">
        <div className="profile__main">
          <h2 className="profile__greeting">Привет, {currentUser.name}!</h2>
          <form className="profile__form"
            onSubmit={handleSubmit}
            onChange={handleFormChange}
            name="profile"
          >
            <label className="profile__label" htmlFor="name">Имя
              <input className="profile__input"
                value={name}
                onChange={handleNameChange}
                id="name"
                name="name"
                type="text"
                minLength="2"
                maxLength="30"
                required
                placeholder="Имя"
              ></input>
            </label>
            <span className="profile__error">{ errors.name }</span>
            <label className="profile__label">E-mail
              <input className="profile__input"
                value={email}
                onChange={handleEmailChange}
                id="email"
                name="email"
                type="email"
                required
                placeholder="E-mail"
              ></input>
            </label>
            <span className="profile__error">{ errors.email }</span>
            <button className={`profile__btn ${!isValid && 'profile__btn_disabled'}`}
              type="submit"
              aria-label="Кнопка редактировать профиль"
              disabled={!isValid}
            >Редактировать
            </button>
          </form>
        </div>
        <div className="profile__edit">
          <button className="profile__btn profile__btn_type_secondary"
            type="button"
            aria-label="Кнопка выхода"
            onClick={props.signOut}
          >Выйти из аккаунта
          </button>
        </div>
      </div>
    </section>
  );
});

export default Profile;
