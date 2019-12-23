import React from "react";
import { Link, Redirect, Switch, Route } from "react-router-dom";
// import Navbar from "./components/Navbar"
import "typeface-roboto";
import "./App.css";
import axios from "axios";
import Home from "./components/Home"


class App extends React.Component {
  state = {
    loggedInUser: this.props.user,
  };


  render() {
    return (
      <div>
        <strong>EVI 2.0</strong><br/>
        ___________________
        <br/><br/>
         <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <div>
                  <Home></Home>     
                </div>
              )}
            ></Route>
          </Switch>

      </div>
    );
  }
}

export default App;
