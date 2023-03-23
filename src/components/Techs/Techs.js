import "./Techs.css";

export default function Techs() {
  return (
    <section className="techs">
      <h2 className="techs__title">Технологии</h2>
      <div className="techs__separator"></div>
      <h3 className="techs__subtitle">7 технологий</h3>
      <p className="techs__paragraph">
        На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые применили в&nbsp;дипломном проекте.
      </p>
      <ul className="techs__list">
        <li className="techs__item"><h4 className="techs__text">HTML</h4></li>
        <li className="techs__item"><h4 className="techs__text">CSS</h4></li>
        <li className="techs__item"><h4 className="techs__text">JS</h4></li>
        <li className="techs__item"><h4 className="techs__text">React</h4></li>
        <li className="techs__item"><h4 className="techs__text">Git</h4></li>
        <li className="techs__item"><h4 className="techs__text">Express.js</h4></li>
        <li className="techs__item"><h4 className="techs__text">mongoDB</h4></li>
      </ul>
    </section>
  );
}
