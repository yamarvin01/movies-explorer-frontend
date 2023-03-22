import "./Portfolio.css";
import iconArrow from "../../images/icon-arrow.svg";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__container">
        <li className="portfolio__link-container">
          <a className="portfolio__link"
            href="https://yamarvin01.github.io/how-to-learn/"
            target="_blank"
            rel="noreferrer">Статичный сайт
          </a>
        </li>
        <div className="portfolio__separator"></div>
        <li className="portfolio__link-container">
          <a className="portfolio__link"
            href="https://yamarvin01.github.io/russian-travel/"
            target="_blank"
            rel="noreferrer">Адаптивный сайт
          </a>
        </li>
        <div className="portfolio__separator"></div>
        <li className="portfolio__link-container">
          <a className="portfolio__link"
            href="https://yamarvin01.nomoredomains.club/"
            target="_blank"
            rel="noreferrer">Одностраничное приложение
          </a>
        </li>
        <div className="portfolio__separator"></div>
      </ul>
    </section>
  );
}
