import React from "react";
import { Link, Redirect, Switch, Route, useParams } from "react-router-dom";

// import Navbar from "./components/Navbar"

import Home from "./components/Home";
import Step01 from "./components/Step01";
import Step02 from "./components/Step02";
import Step03 from "./components/Step03";
import Step04 from "./components/Step04";
import Results from "./components/Results";
import pdfRender from "./components/pdfRender"

// {/* <link href="css/normalize.css" rel="stylesheet" type="text/css" />
// <link href="css/webflow.css" rel="stylesheet" type="text/css" />
// <link href="css/evi-2-0.webflow.css" rel="stylesheet" type="text/css" />
// {/* [if lt IE 9]><![endif] */}
// <link href="images/favicon.ico" rel="shortcut icon" type="image/x-icon" />
// <link href="images/webclip.png" rel="apple-touch-icon" /> */}

class App extends React.Component {
  state = {
    user: this.props.user
  };

  updateUser = userObj => {
    this.setState({
      user: userObj
    });
  };

  consoleLog = () => {
    console.log("APP STATE: ", this.state)
  }


  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <div>
                <Home user={this.state.user} updateUser={this.updateUser}></Home>
              </div>
            )}
          ></Route>
          <Route
            exact
            path="/step01"
            render={() => (
              <div>
                <Step01 user={this.state.user}></Step01>
              </div>
            )}
          ></Route>
          <Route
            exact
            path="/step02"
            render={() => (
              <div>
                <Step02 user={this.state.user}></Step02>
              </div>
            )}
          ></Route>
          <Route
            exact
            path="/step03"
            render={() => (
              <div>
                <Step03 user={this.state.user}></Step03>
              </div>
            )}
          ></Route>
          <Route
            exact
            path="/step04"
            render={() => (
              <div>
                <Step04 user={this.state.user}></Step04>
              </div>
            )}
          ></Route>
          <Route
            exact
            path="/results"
            render={() => (
              <div>
                <Results user={this.state.user}></Results>
              </div>
            )}
          ></Route>
           <Route path="/print/:Id" component={pdfRender} />


        </Switch>
        <br/>      
        <button onClick={this.consoleLog}>ConsoleLog APP</button>
      </div>
    );
  }
}




export default App;
