import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import ResultsTab1 from "./ResultsTab1";
import ResultsTab2 from "./ResultsTab2Step1";
import ResultsTab3 from "./ResultsTab3Step2";
import ResultsTab4 from "./ResultsTab4Step3";
import ResultsTab5 from "./ResultsTab5Step4";

class Step2 extends React.Component {
  state = {
    user: this.props.user,
    theposition: window.pageYOffset,
    tab: "1",
    loading: true
  };
  componentDidMount() {
    window.scrollTo(0, 0);
    axios.post("/api/datatransfer/results/pdf", this.state).then(response => {
      console.log(response);
    });
    console.log("WEBHOOK HAS BEEN TRIGGERED FRONTEND");
    
    this.loadinghandler()

  }

   loadinghandler = async () => {
    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    await sleep(2800).then(() => {
      this.setState({
        loading: false
      })
    });
  }
  changeHandler = event => {
    let id = event.target.id;
    let value = event.target.value;
    this.setState({
      [id]: value
    });
  };

  tabHandler = event => {
    let tabId = event.currentTarget.id;
    let tabIdNr = tabId.split(" ");
    console.log(tabIdNr);
    this.setState({
      tab: tabIdNr[1]
    });
  };

  changeHandlerRadio = event => {
    // console.log(this.state)
    let id = event.target.id;
    let idArr = id.split("_");
    idArr.pop();
    let mainId = idArr.join("_");
    this.setState({
      [mainId]: id
    });
  };

  submitHandler = event => {
    event.preventDefault();
    axios
      .post("/api/datatransfer/step04push", this.state)
      .then(response => {
        console.log("step04push Response", response.data);
        this.props.history.push("/result");
      })
      .catch(error => {
        console.log(error.response.data.message);
        // this.setState({
        // error: error.response.data.message
        // })
      });
  };

  consoleLog = () => {
    console.log("STATE: ", this.state);
  };

  render() {
    return (
      <div>
        {this.state.loading ? (
          <div className="loader">
            <div className="loader-content">
              <img
                src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578862224/evi2_120120/loader_ok66oe.gif"
                alt=""
                className="loader-gif"
              />
              <h4>Eventjes geduld, </h4>
              <p>de terugkoppeling wordt nu aangemaakt!</p>
            </div>
          </div>
        ) : (
          <div>
            <div className="mobilemessage">
              <div className="popup-block">
                <img
                  src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578862224/evi2_120120/moble-desktop_oaegjn.svg"
                  alt=""
                  className="step-icon popup-image"
                />
                <h4>
                  Please open on a bigger screen such as tablet or laptop to
                  fill in the form
                </h4>
              </div>
            </div>
            <div
              data-collapse="medium"
              data-animation="default"
              data-duration={400}
              className="navigation sub-nav results w-nav"
            >
              <div className="navigation-wrap sub results">
                <div className="logo-link w-nav-brand">
                  <img
                    src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578511729/Logo2_rkkhki.svg"
                    width={108}
                    alt=""
                    className="logo-image"
                  />
                </div>
              </div>
              <div style={{ opacity: 0 }} className="nav-bg" />
            </div>
            <div className="section hero subpage steps results">
              <div className="container">
                <div className="intro-text results">
                  <img
                    src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578862225/evi2_120120/step1_uvi01u.svg"
                    alt=""
                    className="step-icon hide"
                  />
                  <h1 className="heading-jumbo">Resultaten</h1>
                  <div className="paragraph-light">
                    Hier vind je de resultaten van jouw school. Op deze pagina
                    vind je de samenvatting. Voor de uitgebreide resultaten,
                    analyse en advies per onderwerp kun je op de tabbladen
                    klikken.
                    <br />
                  </div>
                  <div className="note-box results">
                    <div className="note-box-results-wrapper">
                      <img
                        src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578862223/evi2_120120/email-small_vtqbzr.svg"
                        alt=""
                        className="results-note-icon"
                      />
                      <div>We sturen het rapport ook naar je e-mail.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-w-id="d6cb0154-cd02-de5b-804e-26aafaeb5fe1"
              className="section-content"
            >
              <div className="section results">
                <div
                  data-duration-in={300}
                  data-duration-out={100}
                  className="tab-wrapper w-tabs"
                >
                  <div
                    style={{ height: "90PX" }}
                    className="navigation results-tab w-tab-menu"
                  >
                    {this.state.tab === "1" ? (
                      <a
                        datatab="Tab 1"
                        id="Tab 1"
                        className="tab-link w-inline-block w-tab-link w--current"
                        onClick={this.tabHandler}
                      >
                        <div>Totaal</div>
                      </a>
                    ) : (
                      <a
                        datatab="Tab 1"
                        id="Tab 1"
                        className="tab-link w-inline-block w-tab-link"
                        onClick={this.tabHandler}
                      >
                        <div>Totaal</div>
                      </a>
                    )}

                    {this.state.tab === "2" ? (
                      <a
                        datatab="Tab 2"
                        id="Tab 2"
                        className="tab-link w-inline-block w-tab-link w--current"
                        onClick={this.tabHandler}
                      >
                        <div>Visie</div>
                      </a>
                    ) : (
                      <a
                        datatab="Tab 2"
                        id="Tab 2"
                        className="tab-link w-inline-block w-tab-link"
                        onClick={this.tabHandler}
                      >
                        <div>Visie</div>
                      </a>
                    )}

                    {this.state.tab === "3" ? (
                      <a
                        datatab="Tab 3"
                        id="Tab 3"
                        className="tab-link w-inline-block w-tab-link w--current"
                        onClick={this.tabHandler}
                      >
                        <div>Deskundigheid</div>
                      </a>
                    ) : (
                      <a
                        datatab="Tab 3"
                        id="Tab 3"
                        className="tab-link w-inline-block w-tab-link"
                        onClick={this.tabHandler}
                      >
                        <div>Deskundigheid</div>
                      </a>
                    )}

                    {this.state.tab === "4" ? (
                      <a
                        datatab="Tab 4"
                        id="Tab 4"
                        className="tab-link w-inline-block w-tab-link w--current"
                        onClick={this.tabHandler}
                      >
                        <div>Programma</div>
                      </a>
                    ) : (
                      <a
                        datatab="Tab 4"
                        id="Tab 4"
                        className="tab-link w-inline-block w-tab-link"
                        onClick={this.tabHandler}
                      >
                        <div>Programma</div>
                      </a>
                    )}

                    {this.state.tab === "5" ? (
                      <a
                        datatab="Tab 5"
                        id="Tab 5"
                        className="tab-link w-inline-block w-tab-link w--current"
                        onClick={this.tabHandler}
                      >
                        <div>Samenwerking</div>
                      </a>
                    ) : (
                      <a
                        datatab="Tab 5"
                        id="Tab 5"
                        className="tab-link w-inline-block w-tab-link"
                        onClick={this.tabHandler}
                      >
                        <div>Samenwerking</div>
                      </a>
                    )}
                  </div>
                  <div className="w-tab-content">
                    {/* {this.state.tab === "1" ? <ResultsTab1 allResults="moin"/> : ""}  */}
                    {this.state.tab === "1" ? (
                      <ResultsTab1 user={this.state.user} />
                    ) : (
                      ""
                    )}
                    {this.state.tab === "2" ? (
                      <ResultsTab2 user={this.state.user} />
                    ) : (
                      ""
                    )}
                    {this.state.tab === "3" ? (
                      <ResultsTab3 user={this.state.user} />
                    ) : (
                      ""
                    )}
                    {this.state.tab === "4" ? (
                      <ResultsTab4 user={this.state.user} />
                    ) : (
                      ""
                    )}
                    {this.state.tab === "5" ? (
                      <ResultsTab5 user={this.state.user} />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Step2);
