import './App.css';

import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./Header/Header";
import Main from "./Main/Main";

import HeaderPopup from "./HeaderPopup/HeaderPopup";

export default function App() {
  const [isMainContentVisible, setIsMainContentVisible] = React.useState(false);

  const [isHeaderPopupOpen, setIsHeaderPopupOpen] = React.useState(false);

  function handleMainContentClick() {
    setIsMainContentVisible(!isMainContentVisible);
  }

  function openHeaderPopup() {
    setIsHeaderPopupOpen(true);
  }

  function closeHeaderPopup() {
    setIsHeaderPopupOpen(false);
  }

  return (
    <>
    <div className="page">
      <Header
        onHeaderPopupOpen={openHeaderPopup}
      />
      <Switch>
        <Route exact path="/">
          {/* <Main
            isMainContentVisible={isMainContentVisible}
            onMainContentClick={handleMainContentClick}
          /> */}
          <h1>Route /</h1>
        </Route>
        <Route exact path="/movies">
          <h1>Route /movies</h1>
        </Route>
        <Route exact path="/saved-movies">
          <h1>Route /saved-movies</h1>
        </Route>
        <Route exact path="/profile">
          <h1>Route /profile</h1>
        </Route>
        <Route path="/signin">
          <h1>Route /signin</h1>
        </Route>
        <Route path="/signup">
          <h1>Route /signup</h1>
        </Route>
      </Switch>

      <HeaderPopup
        isOpen={isHeaderPopupOpen}
        onClose={closeHeaderPopup}
      />
    </div>
    </>
  );

}
