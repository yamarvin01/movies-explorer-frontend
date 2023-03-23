import "./AboutMe.css";
import imgMe from "../../images/img-me.png";

export default function AboutMe() {
  return (
    <section className="aboutme">
      <h2 className="aboutme__heading aboutme__heading_type_title">Студент</h2>
      <div className="aboutme__separator"></div>
      <div className="aboutme__content">
        <div className="aboutme__info">
          <h3 className="aboutme__heading aboutme__heading_type_subtitle">Марсель</h3>
          <h4 className="aboutme__heading aboutme__heading_type_text">Фронтенд-разработчик</h4>
          <p className="aboutme__paragraph">
            Я родился в городе Нефтекамск, закончил факультет Информационных технологий в МГТУ, гор. Москва.
            У меня есть жена и двое детей.
            Начал кодить в январе 2020 года. Сейчас работю Фронтенд разработчиков в Сбербанке, фреймворк Angular.
          </p>
          <a className="aboutme__heading aboutme__heading_type_link" href="https://github.com/yamarvin01" target="blank">Github GithubGithub GithubGithub GithubGithub GithubGithub Github</a>
        </div>
        <img className="aboutme__img" src={imgMe} alt="Фото человека" />
      </div>
    </section>
  );
}
