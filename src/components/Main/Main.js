import "./Main.css";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";

export default function Main() {
  return (
    <>
      <div className="main-container">
        <Promo />
      </div>
      <AboutProject />
      <Techs />
    </>
  );
}
