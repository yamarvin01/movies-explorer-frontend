import { Route, Redirect } from "react-router-dom";
import Footer from "../Footer/Footer";

const ProtectedRouteWithFooter = ({ component: Component, ...props }) => {
  return (
    <Route>
      {() =>
        props.loggedIn
          ? <><Component {...props} /><Footer /></>
          : <Redirect to="/signin" />
      }
    </Route>
  );
};

export default ProtectedRouteWithFooter;
