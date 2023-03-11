import "./Portfolio.css";
import iconArrow from "../../images/icon-arrow.svg";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <div className="portfolio__container">
        <div className="portfolio__link-container">
          <a className="portfolio__link"
            href="https://yamarvin01.github.io/how-to-learn/"
            target="_blank"
            rel="noreferrer"
          >
            Статичный сайт
          </a>
          <img className="portfolio__icon" src={iconArrow} alt="Иконка стрелка"/>
        </div>
        <div className="portfolio__separator"></div>
        <div className="portfolio__link-container">
          <a className="portfolio__link"
            href="https://yamarvin01.github.io/russian-travel/"
            target="_blank"
            rel="noreferrer"
          >
            Адаптивный сайт
          </a>
          <img className="portfolio__icon" src={iconArrow} alt="Иконка стрелка"/>
        </div>
        <div className="portfolio__separator"></div>
        <div className="portfolio__link-container">
          <a className="portfolio__link"
            href="https://yamarvin01.nomoredomains.club/"
            target="_blank"
            rel="noreferrer"
          >
            Одностраничное приложение
          </a>
          <img className="portfolio__icon" src={iconArrow} alt="Иконка стрелка"/>
        </div>
        <div className="portfolio__separator"></div>

      </div>
    </div>
  );
}
