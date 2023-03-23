import "./AboutProject.css";

export default function AboutProject() {

  return (
    <section className="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__separator"></div>
      <div className="about-project__content">
        <div>
          <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__text about-project__text_type_space">
          Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
        </p>
        </div>
        <div>
          <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__text about-project__text_type_space">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__bar-container">
        <p className="about-project__text about-project__text_type_brand-bgcolor">1 неделя</p>
        <p className="about-project__text about-project__text_type_secondary-bgcolor">4 недели</p>
        <p className="about-project__text about-project__text_type_secondary">Back-end</p>
        <p className="about-project__text about-project__text_type_secondary">Front-end</p>
      </div>
    </section>
  );
}
