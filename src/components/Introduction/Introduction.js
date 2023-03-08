import "./Introduction.css";
import imgEarth from "../../images/img-earth.svg";

export default function Introduction() {
  return (
    <>
    <div className="introduction">
      <div className="introduction__container">
        <div className="introduction__content">
          <h1 className="introduction__title">Учебный&nbsp;проект&nbsp;студента факультета Веб&#8209;разработки.</h1>
          <p className="introduction__text">Листайте&nbsp;ниже, чтобы&nbsp;узнать&nbsp;больше про&nbsp;этот&nbsp;проект и его&nbsp;создателя.</p>
          <button className="introduction__btn">Узнать&nbsp;больше</button>
        </div>
        <img className="introduction__img" src={imgEarth}></img>
      </div>
    </div>
    </>
  );
}
