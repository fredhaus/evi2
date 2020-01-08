import React from "react";
import { Link, Redirect, Switch, Route } from "react-router-dom";
// import Navbar from "./components/Navbar"
import "typeface-roboto";
import "./App.css";
import "./normalize.css"
import "./webflow.css"
import "./evi-2-0.webflow.css"
import axios from "axios";
import Home from "./components/Home"

// {/* <link href="css/normalize.css" rel="stylesheet" type="text/css" />
// <link href="css/webflow.css" rel="stylesheet" type="text/css" />
// <link href="css/evi-2-0.webflow.css" rel="stylesheet" type="text/css" />
// {/* [if lt IE 9]><![endif] */}
// <link href="images/favicon.ico" rel="shortcut icon" type="image/x-icon" />
// <link href="images/webclip.png" rel="apple-touch-icon" /> */}


class App extends React.Component {
  state = {
    loggedInUser: this.props.user,
  };


  render() {
    return (
      <div>

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
