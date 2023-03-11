import "./Main.css";
import React from "react";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";

const Main = React.memo((props) => {
  return (
    <>
      <div className="main-container">
        <Promo
          onMainContentClick={props.onMainContentClick}
        />
      </div>
      { props.isMainContentVisible &&
        <div>
          <AboutProject />
          <Techs />
        </div>
      }
    </>
  );
});

export default Main;
