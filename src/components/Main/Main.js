import "./Main.css";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";

export default function Main(props) {
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
}
