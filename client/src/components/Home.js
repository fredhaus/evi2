import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { withRouter } from "react-router-dom";

class Home extends React.Component {
  state = {
    user: this.props.user,
    NaamSchool: "",
    Adres: "",
    NaamInvuller: "",
    Functie: "",
    Postcode: "",
    Email: "",
    Plaats: "",
    Telefoon: "",
    error: ""
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  changeHandler = event => {
    let id = event.target.id;
    let value = event.target.value;
    this.setState({
      [id]: value
    });
  };

  consoleLog = () => {
    console.log("STATE: ", this.state);
    
  };

  render() {
    return (
      <div>
        <div className="center">
        <h1 className="h1_center">Moin</h1>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
