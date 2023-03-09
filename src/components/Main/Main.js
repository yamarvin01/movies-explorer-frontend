import "./Main.css";
import Introduction from "../Introduction/Introduction";
import AboutProject from "../AboutProject/AboutProject";

export default function Main() {
  return (
    <>
      <div className="main-container">
        <Introduction />
      </div>
      <AboutProject />
    </>
  );
}
