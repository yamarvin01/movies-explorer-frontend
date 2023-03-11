import "./Promo.css";
import imgEarth from "../../images/img-earth.svg";

export default function Promo(props) {
  return (
    <>
    <div className="promo">
      <div className="promo__container">
        <div className="promo__content">
          <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
          <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <button className="promo__btn" onClick={props.onMainContentClick}>Узнать&nbsp;больше</button>
        </div>
        <img className="promo__img" src={imgEarth} alt="Изображение планеты Земля"></img>
      </div>
    </div>
    </>
  );
}
