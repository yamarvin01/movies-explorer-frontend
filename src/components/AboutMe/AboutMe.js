import "./AboutMe.css";
import imgMe from "../../images/img-me.png";

export default function AboutMe() {
  return (
    <div className="aboutme">
    <h2 className="aboutme__title">СтудентСтудентСтудентСтудентСтудентСтудентСтудентСтудентСтудентСтудентСтудентСтудентСтудентСтудент</h2>
      <div className="abotme__separator"></div>


      <div className="aboutme__content">
        <div className="aboutme__info">
          <h3 className="aboutme__subtitle">Марсель Марсель Марсель Марсель Марсель Марсель Марсель Марсель</h3>
          <p className="aboutme__text">Фронтенд-разработчик, 30 летФронтенд-разработчик, 30 летФронтенд-разработчик, 30 летФронтенд-разработчик, 30 летФронтенд-разработчик, 30 лет</p>
          <p className="aboutme__paragraph">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь.
            Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
            После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь.
            Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
            После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь.
            Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
            После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a className="aboutme__link" href="https://github.com/yamarvin01" target="blank">GitHubGitHub GitHubGitHubG itHubGitHubGitHub GitHubGitHubGitH bGitHubGitHubGitH ubGitHubGitH ubGitHub</a>
        </div>


        <div className="aboutme__img-container">
          <img className="aboutme__img" src={imgMe} alt="Изображение меня"></img>
        </div>
        <div className="aboutme__img-container">
          <img className="aboutme__img" src={imgMe} alt="Изображение меня"></img>
        </div>
        <div className="aboutme__img-container">
          <img className="aboutme__img" src={imgMe} alt="Изображение меня"></img>
        </div>
        <div className="aboutme__img-container">
          <img className="aboutme__img" src={imgMe} alt="Изображение меня"></img>
        </div>
      </div>
    </div>
  );
}
