import React from "react";
import { withRouter, useParams } from "react-router-dom";
import axios from "axios";
import PDFResultsTab1 from "./PDFResultsTab1";
import PDFResultsTab2 from "./PDFResultsTab2Step1";
import PDFResultsTab3 from "./PDFResultsTab3Step2";
import PDFResultsTab4 from "./PDFResultsTab4Step3";
import PDFResultsTab5 from "./PDFResultsTab5Step4";
class paramsTest extends React.Component {
  state = {};

  componentWillMount() {
    const {
      match: { params }
    } = this.props;
    this.setState({
      user: params.Id
    });
  }

  componentDidMount() {
    axios.post("/api/datatransfer/results", this.state).then(response => {
      this.setState({
        ...response.data[0]
      });
      console.log("State pdf render: ", this.state);
    });
  }

  render() {
    return (
      <div>
        <div className="section hero subpage steps results pdf">
          <div className="container">
            <div className="navigation-wrap sub results pdf">
              <a href="../index.html" className="logo-link w-nav-brand">
                <img
                  src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578862224/evi2_120120/Logo2_cxbg8z.svg"
                  width={108}
                  alt=""
                  className="logo-image"
                />
              </a>
            </div>
            <div className="intro-text results">
              <img
                src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578862225/evi2_120120/step1_uvi01u.svg"
                alt=""
                className="step-icon hide"
              />
              <div className="details-wrap">
                <h1 className="heading-jumbo">Resultaten</h1>
              </div>
              <div className="paragraph-light">
                Hier vind je de resultaten van jouw school. In dit rapport vind
                je de samenvatting. Kijk daaronder voor de uitgebreide
                resultaten, analyse en advies per onderwerp.
                <br />
              </div>
              <div className="note-box results pdf">
                <div className="label">Naam school</div>
                <div className="paragraph-small note">
                  {this.state.NaamSchool}
                </div>
                <div className="divider note pdf" />
                <div className="label">Naam invuller</div>
                <div className="paragraph-small note">
                  {this.state.NaamInvuller}
                </div>
                <div className="divider note pdf" />
                <div className="label">Functie invuller</div>
                <div className="paragraph-small note">{this.state.Functie}</div>
                <div className="divider note pdf" />
                <div className="label">E-mail</div>
                <div className="paragraph-small note">{this.state.Email}</div>
              </div>
            </div>
          </div>
        </div>
        <PDFResultsTab1 user={this.state.user} />
        <PDFResultsTab2 user={this.state.user} />
        <PDFResultsTab3 user={this.state.user} />
        <PDFResultsTab4 user={this.state.user} />
        <PDFResultsTab5 user={this.state.user} />
      </div>
    );
  }
}

export default withRouter(paramsTest);
