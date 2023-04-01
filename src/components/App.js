import './App.css';
import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import { mainApi } from "../utils/MainApi";
import { bitFilmsApi } from "../utils/BitFilmsApi";
import * as auth from '../utils/auth';

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
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import ProtectedRouteWithFooter from "./ProtectedRouteWithFooter/ProtectedRouteWithFooter";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function App() {
  const [token, setToken] = React.useState('');
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({name: '', email: ''});

  const [isMainContentVisible, setIsMainContentVisible] = React.useState(false);
  const [isHeaderPopupOpen, setIsHeaderPopupOpen] = React.useState(false);

  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [searchPhrase, setSearchPhrase] = React.useState('');
  const [savedMoviesSearchPhrase, setSavedMoviesSearchPhrase] = React.useState('');

  const [isSpinner, setIsSpinner] = React.useState(false);
  const [isNotFound, setIsNotFound] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [isSavedMoviesSpinner, setIsSavedMoviesSpinner] = React.useState(false);
  const [isSavedMoviesNotFound, setIsSavedMoviesNotFound] = React.useState(false);
  const [isSavedMoviesError, setIsSavedMoviesError] = React.useState(false);

  const [pageSize, setPageSize] = React.useState(12);
  const [registerErrorMessage, setRegisterErrorMessage] = React.useState('');
  const [signInErrorMessage, setSignInErrorMessage] = React.useState('');
  const [editProfileMessage, setEditProfileMessage] = React.useState('');

  const [isShortMovies, setIsShortMovies] = React.useState(false);
  const [isShortSavedMovies, setIsShortSavedMovies] = React.useState(false);

  const [isSignInHold, setIsSignInHold] = React.useState(false);

  const history = useHistory();

  React.useEffect(() => {
    if (loggedIn) {
      mainApi.getUserInfo(token)
        .then(res => setCurrentUser(res))
        .catch(err => console.log(err));

      mainApi.getSavedMovies(token)
        .then(res => {
          setSavedMovies(res);
          localStorage.setItem('savedMovies', JSON.stringify(res));
        })
        .catch(err => console.log(err));

    } else {
      tokenCheck();
    }
    console.log(loggedIn);
  }, [loggedIn]);

  function onPageSizeChange() {
    setPageSize(pageSize + 4);
  }

  function handleMainContentClick() {
    setIsMainContentVisible(!isMainContentVisible);
  }

  function openHeaderPopup() {
    setIsHeaderPopupOpen(true);
  }

  function closeHeaderPopup() {
    setIsHeaderPopupOpen(false);
  }

  function register({ name, email, password }) {
    setRegisterErrorMessage('');
    auth.register(name, email, password)
      .then(() => {
        signIn({ email, password });
      })
      .catch((err) => {
        if (err === 'Ошибка: 409 Conflict') {
          setRegisterErrorMessage('Пользователь с таким email уже существует');
        } else {
          setRegisterErrorMessage('При регистрации пользователя произошла ошибка');
        }
        console.log(err);
      });
  }

  function signIn({ email, password }) {
    setIsSignInHold(true);
    auth.authorize(email, password)
      .then((data) => {
        localStorage.setItem("token", data.token);
        setToken(data.token);
        setLoggedIn(true);
        history.push('/movies');
      })
      .catch((err) => {
        if (err === 'Ошибка: 401 Unauthorized') {
          setSignInErrorMessage('Вы ввели неправильный логин или пароль');
        }
        console.log(err);
      })
      .finally(() => {
        setIsSignInHold(false);
      });
  }

  function signOut() {
    localStorage.removeItem('token');
    setLoggedIn(false);
    setMovies([]);
    setSavedMovies([]);
    setIsShortMovies(false);
    setIsShortSavedMovies(false);
    setSearchPhrase('');
    setSavedMoviesSearchPhrase('');
  }

  async function tokenCheck() {
    const token = localStorage.getItem('token');
    if (token) {
      await mainApi.getUserInfo(token)
        .then((userData) => {
          setLoggedIn(true);
          setToken(token);
          setCurrentUser(userData);
          return userData;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  async function handleMoviesSearch(searchPhrase) {
    setMovies([]);
    setIsNotFound(false);
    setIsError(false);
    setIsSpinner(true);
    setSearchPhrase(searchPhrase);
    let searchResult = [];

    await bitFilmsApi.getBitFilms()
      .then(res => {
        if (searchPhrase.trim().length > 0) {
          searchResult = res
            .filter((movie) => movie.nameRU.toLowerCase().includes(searchPhrase.toLowerCase().trim()));
        }
        if (isShortMovies) {
          searchResult = searchResult.filter((movie) => movie.duration < 40);
        }
        localStorage.setItem('search', searchPhrase);
        localStorage.setItem('movies', JSON.stringify(searchResult));
        localStorage.setItem('isShortMoviesOnly', isShortMovies);
        setIsSpinner(false);
        setMovies(searchResult);
        if (searchResult.length === 0) {
          setIsNotFound(true);
        }
      })
      .catch(err => {
        setMovies([]);
        setIsSpinner(false);
        setIsError(true);
    });
  }

  async function handleSavedMoviesSearch(searchPhrase) {
    setSavedMovies([]);
    setIsSavedMoviesNotFound(false);
    setIsSavedMoviesError(false);
    setIsSavedMoviesSpinner(true);
    setSavedMoviesSearchPhrase(searchPhrase);
    let searchResult = [];

    await mainApi.getSavedMovies(token)
      .then(res => {
        if (searchPhrase.trim().length > 0) {
          searchResult = res
            .filter((movie) => movie.nameRU.toLowerCase().includes(searchPhrase.toLowerCase().trim()));
        }
        if (isShortSavedMovies) {
          searchResult = searchResult.filter((movie) => movie.duration < 40);
        }
        localStorage.setItem('savedMoviesSearch', savedMoviesSearchPhrase);
        localStorage.setItem('savedMovies', JSON.stringify(searchResult));
        localStorage.setItem('isShortMoviesOnly', isShortSavedMovies);
        setIsSavedMoviesSpinner(false);
        setSavedMovies(searchResult);
        if (searchResult.length === 0) {
          setIsSavedMoviesNotFound(true);
        }
      })

      .catch(err => {
        setSavedMovies([]);
        setIsSavedMoviesSpinner(false);
        setIsSavedMoviesError(true);
      });
  }

  function saveMovie(movie) {
    const savedFilm = savedMovies.find(item => item.movieId === movie.movieId);
    if (!savedFilm) {
      mainApi.createMovie(movie, token)
        .then(res => {
          savedMovies.push(res);
          const movies = JSON.parse(localStorage.getItem('savedMovies'));
          movies.push(res);
          console.log(movies);
        })
        .catch(err => console.log(err));
    } else {
      mainApi.deleteMovie(savedFilm._id, token)
        .then((res) => {
          setSavedMovies(savedMovies.filter(item => item.movieId !== movie.movieId));
        })
        .catch(err => console.log(err));
    }
  }

  function handleDeleteMovie(movie) {
    mainApi.deleteMovie(movie._id, token)
      .then(res => {
        const newSavedMovies = savedMovies.filter(item => item.movieId !== movie.movieId);
        setSavedMovies(newSavedMovies);
      })
      .catch(err => console.log(err));
  }

  function editProfile({ name, email }) {
    setEditProfileMessage('');
    if (currentUser.name === name && currentUser.email === email) {
      setEditProfileMessage('Измените имя или адрес электронной почты');
      setTimeout(() => {
        setEditProfileMessage('');
      }, 5000);
      return;
    }
    mainApi.editUserInfo({ name, email }, token)
      .then(res => {
        setEditProfileMessage('Данные успешно отредактированы');
        setCurrentUser(res);
      })
      .catch(err => {
        if (err === 'Ошибка: 409') {
          setEditProfileMessage('Пользователь с таким email уже существует');
        } else {
          setEditProfileMessage('При регистрации пользователя произошла ошибка');
        }
      }
    );
    setTimeout(() => {
      setEditProfileMessage('');
    }, 5000);
  }

  function onShortMovies(isShortMovies) {
    setIsShortMovies(isShortMovies);
    const localStorageMovies = localStorage.getItem('movies');
    const movies = JSON.parse(localStorageMovies);
    if (isShortMovies) {
      const filter = movies.filter((movie) => movie.duration < 40);
      setMovies(filter);
    } else {
      setMovies(movies);
    }
  }

  function onShortSavedMovies(isShortMovies) {
    setIsShortSavedMovies(isShortMovies);
    const localStorageSavedMovies = localStorage.getItem('savedMovies');
    const movies = JSON.parse(localStorageSavedMovies);
    if (isShortMovies) {
      const filter = movies.filter((movie) => movie.duration < 40);
      setSavedMovies(filter);
    } else {
      setSavedMovies(movies);
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header
          loggedIn={loggedIn}
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
          <ProtectedRouteWithFooter
            path="/movies"
            component={Movies}
            movies={movies}
            savedMovies={savedMovies}
            searchPhrase={searchPhrase}
            loggedIn={loggedIn}
            onSearch={handleMoviesSearch}
            onMovieSave={saveMovie}
            isSpinner={isSpinner}
            isNotFound={isNotFound}
            isError={isError}
            pageSize={pageSize}
            onPageSizeChange={onPageSizeChange}
            isShortMovies={isShortMovies}
            onShortMovies={onShortMovies}
          />
          <ProtectedRouteWithFooter
            path="/saved-movies"
            component={SavedMovies}
            movies={savedMovies}
            savedMovies={savedMovies}
            searchPhrase={savedMoviesSearchPhrase}
            onSearch={handleSavedMoviesSearch}
            loggedIn={loggedIn}
            onMovieDelete={handleDeleteMovie}
            isSpinner={isSavedMoviesSpinner}
            isNotFound={isSavedMoviesNotFound}
            isError={isSavedMoviesError}
            isShortMovies={isShortSavedMovies}
            onShortMovies={onShortSavedMovies}
          />
          <ProtectedRoute
            path="/profile"
            component={Profile}
            loggedIn={loggedIn}
            onEditProfile={editProfile}
            message={editProfileMessage}
            signOut={signOut}
          />
          <Route path="/signup">
            <Register onRegister={register}
              registerErrorMessage={registerErrorMessage}
            />
          </Route>
          <Route path="/signin">
            <Login onSignIn={signIn}
              signInErrorMessage={signInErrorMessage}
              isSignInHold={isSignInHold}
            />
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
    </CurrentUserContext.Provider>
  );

}
