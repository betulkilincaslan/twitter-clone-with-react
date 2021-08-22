import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { TheLayout } from "./container";
import { Login } from "./view";
import "./app.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("isLoggedIn"))
  );

  return (
    <Router>
      <Switch>
        <Route exact path="/404">
          <div>404</div>
        </Route>
        <Route exact path="/login">
          <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route path="/">
          {!isLoggedIn ? <Redirect to="/login" /> : <TheLayout />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
