import './App.css';
import Header from "./Header/Header";
import { Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <>
    <div className="page">
      <Header/>
    </div>
    <Switch>
      <Route exact path="/">
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
    </>
  );

}
