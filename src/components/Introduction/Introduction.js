import "./Introduction.css";
import imgEarth from "../../images/img-earth.svg";

export default function Introduction() {
  return (
    <>
    <div className="introduction">
      <div className="introduction__container">
        <div className="introduction__content">
          <h1 className="introduction__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
          <p className="introduction__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <button className="introduction__btn">Узнать&nbsp;больше</button>
        </div>
        <img className="introduction__img" src={imgEarth} alt="Изображение планеты Земля"></img>
      </div>
    </div>
    </>
  );
}
