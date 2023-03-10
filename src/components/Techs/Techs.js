import "./Techs.css";

export default function Techs() {
  return (
    <div class="techs">
      <h2 class="techs__title">Технологии</h2>
      <div class="techs__separator"></div>
      <h3 class="techs__subtitle">7 технологий</h3>
      <p class="techs__paragraph">
        На&nbsp;курсе веб-разработки мы&nbsp;освоили технологии, которые применили в&nbsp;дипломном проекте.
      </p>
      <ul class="techs__list">
        <li class="techs__item"><h4 class="techs__text">HTML</h4></li>
        <li class="techs__item"><h4 class="techs__text">CSS</h4></li>
        <li class="techs__item"><h4 class="techs__text">JS</h4></li>
        <li class="techs__item"><h4 class="techs__text">React</h4></li>
        <li class="techs__item"><h4 class="techs__text">Git</h4></li>
        <li class="techs__item"><h4 class="techs__text">Express.js</h4></li>
        <li class="techs__item"><h4 class="techs__text">mongoDB</h4></li>
      </ul>
    </div>
  );
}
