import './App.css';

import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import Movies from "./Movies/Movies";
import SavedMovies from "./SavedMovies/SavedMovies";
import Profile from "./Profile/Profile";
import Register from "./Register/Register";
import Login from "./Login/Login";
import NotFoundPage from "./NotFoundPage/NotFoundPage";

import HeaderPopup from "./HeaderPopup/HeaderPopup";

// Test data
import { moviesData, savedMoviesData } from "../data/data";
//

export default function App() {
  const [isMainContentVisible, setIsMainContentVisible] = React.useState(true);
  const [isHeaderPopupOpen, setIsHeaderPopupOpen] = React.useState(false);

  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);

  // Test data
  React.useEffect(() => {
    setMovies(moviesData);
    setSavedMovies(savedMoviesData);
  }, []);
  //

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
          <Main
            isMainContentVisible={isMainContentVisible}
            onMainContentClick={handleMainContentClick}
          />
          <Footer />
        </Route>
        <Route exact path="/movies">
          <Movies
            movies={movies}
          />
          <Footer />
        </Route>
        <Route exact path="/saved-movies">
          <SavedMovies
            movies={savedMovies}
          />
          <Footer />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="*">
          <NotFoundPage />
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
