import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__separator"></div>
      <div className="footer__container">
        <p className="footer__paragraph">&copy; {new Date().getFullYear()}</p>
        <div className="footer__links">
          <a className="footer__text footer__text_type_link"
            href="https://practicum.yandex.ru"
            target="_blank"
            rel="noreferrer"
          >
            Яндекс.Практикум
          </a>
          <a className="footer__text footer__text_type_link"
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >Github</a>
        </div>
      </div>
    </footer>
  );
}
