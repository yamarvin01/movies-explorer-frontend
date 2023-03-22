import "./Main.css";
import React from "react";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";

const Main = React.memo((props) => {
  return (
    <main className="main">
      <div className="main-container">
        <Promo
          onMainContentClick={props.onMainContentClick}
        />
      </div>
      {props.isMainContentVisible &&
        <>
          <AboutProject />
          <Techs />
          <AboutMe />
          <Portfolio />
        </>
      }
    </main>
  );
});

export default Main;
