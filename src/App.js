import React from "react";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import Account from "./components/Account";

const styles = {
  AppWrapper: {
    margin: "50px auto",
    width: "80%"
  }
};

function App() {
  return (
    <div className="App" style={styles.AppWrapper}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/account">
            <Account />
          </Route>
          <Route exact path="/sign_in">
            <SignIn />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
