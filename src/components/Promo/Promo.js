import "./Promo.css";
import React from "react";
import imgEarth from "../../images/img-earth.svg";

const Promo = React.memo((props) => {
  return (
    <section className="promo">
      <div className="promo__container">
        <div className="promo__content">
          <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
          <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
          <button className="promo__btn" onClick={props.onMainContentClick}
            aria-label="Кнопка показа дополнительной информации о проекте"
          >Узнать&nbsp;больше
          </button>
        </div>
        <img className="promo__img" src={imgEarth} alt="Изображение планеты Земля"></img>
      </div>
    </section>
  );
});

export default Promo;
