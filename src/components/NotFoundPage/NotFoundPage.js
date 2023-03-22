import "./NotFoundPage.css";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="notfoundpage">
      <h2 className="notfoundpage__title">404</h2>
      <p className="notfoundpage__text">Страница не найдена</p>
      <Link className="notfoundpage__link" to="/">Назад</Link>
    </section>
  );
}
