import "./Profile.css";

export default function Profile() {
  return (
    <section className="profile">
      <div className="profile__container">
        <div className="profile__main">
          <h2 className="profile__greeting">Привет, Виталий!</h2>
          <form className="profile__form">
            <label className="profile__label" for="name">Имя
              <input className="profile__input"
                id="name"
                name="name"
                type="text"
                minLength="2"
                maxLength="30"
                required
                placeholder="Имя"
              ></input>
            </label>
            <label className="profile__label">E-mail
              <input className="profile__input"
                id="email"
                name="email"
                type="email"
                required
                placeholder="E-mail"
              ></input>
            </label>
          </form>
        </div>
        <div className="profile__edit">
          <button className="profile__btn" type="button"
            aria-label="Кнопка редактировать профиль"
          >Редактировать
          </button>
          <button className="profile__btn profile__btn_type_secondary" type="button"
            aria-label="Кнопка выхода"
          >Выйти из аккаунта
          </button>
        </div>
      </div>
    </section>
  );
}
