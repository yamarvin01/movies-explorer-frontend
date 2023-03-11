import "./AboutMe.css";
import imgMe from "../../images/img-me.png";

export default function AboutMe() {
  return (
    <div className="aboutme">
    <h2 className="aboutme__title">Студент</h2>
      <div className="abotme__separator"></div>
      <div className="aboutme__content">
        <div className="aboutme__info">
          <h3 className="aboutme__subtitle">Марсель</h3>
          <p className="aboutme__text">Фронтенд-разработчик, 35 лет</p>
          <p className="aboutme__paragraph">
            Я родился в городе Нефтекамск, закончил факультет Информационных технологий в МГТУ, гор. Москва.
            У меня есть жена и двое детей.
            Начал кодить в январе 2020 года. Сейчас работю Фронтенд разработчиков в Сбербанке, фреймворк Angular.
          </p>
          <a className="aboutme__link" href="https://github.com/yamarvin01" target="blank">Git</a>
        </div>
        <div className="aboutme__img-container">
          <img className="aboutme__img" src={imgMe} alt="Фото человека"></img>
        </div>
      </div>
    </div>
  );
}
