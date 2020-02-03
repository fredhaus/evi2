import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

class Step2 extends React.Component {
  state = {
    user: this.props.user,
    theposition: window.pageYOffset,
    error: ""
    // _2_1: "",
    // _2_2_1: "",
    // _2_2_2: "",
    // _2_2_3: "",
    // _2_2_4: "",
    // _2_2_5: "",
    // _2_2_6: "",
    // _2_2_7: "",
    // _2_2_8: "",
    // _2_2_9: "",
    // _2_2_10: "",
    // _2_3: "",
    // _2_4_1: "",
    // _2_4_2: "",
    // _2_4_3: "",
    // _2_4_4: "",
    // _2_4_5: "",
    // _2_4_6: "",
    // _2_5: "",
    // _2_6: ""
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    axios
      .post("/api/datatransfer/results", this.state)
      .then(response => {
        // console.log("Results", response.data);
        this.setState({
          user: this.props.user, ...response.data[2]
        }, () => {
          if(!this.state.user){
            this.props.history.push("/");
          }
        });
      })
  }

  changeHandler = event => {
    let id = event.target.id;
    let value = event.target.value;
    this.setState({
      [id]: value
    });
  };

  changeHandlerRadio_1_1_2 = event => {
    // console.log(this.state)
    let id = event.target.id;
    // console.log(id);
    this.setState({
      _1_1_2: id
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

  // submitHandler = (event, target) => {
  //   event.preventDefault();
  //   axios
  //     .post("/api/datatransfer/step02push", this.state)
  //     .then(response => {
  //       console.log("step02push Response", response.data);
  //       this.props.history.push("/step03");
  //     })
  //     .catch(error => {
  //       console.log(error.response.data.message);
  //       // this.setState({
  //       // error: error.response.data.message
  //       // })
  //     });
  // };

  submitHandler = (event, target) => {
    event.preventDefault();
    if (
      this.state._2_2_1 === "" ||
      this.state._2_2_2 === "" ||
      this.state._2_2_3 === "" ||
      this.state._2_2_4 === "" ||
      this.state._2_2_5 === "" ||
      this.state._2_2_6 === "" ||
      this.state._2_2_7 === "" ||
      this.state._2_2_8 === "" ||
      this.state._2_2_9 === "" ||
      this.state._2_2_10 === ""
    ) {
        this.setState({
        error: "Section 2.2 not complete"
        })
        return
    }
    axios
      .post("/api/datatransfer/step02push", this.state)
      .then(response => {
        // console.log("step02push Response", response.data);
        this.props.history.push(target);
      })
      .catch(error => {
        // console.log(error.response.data.message);
        // this.setState({
        // error: error.response.data.message
        // })
      });
  };

  submitHandlerPrev = (event, target) => {
    event.preventDefault();
    axios
      .post("/api/datatransfer/step02push", this.state)
      .then(response => {
        // console.log("step02push Response", response.data);
        this.props.history.push(target);
      })
      .catch(error => {
        // console.log(error.response.data.message);
        // this.setState({
        // error: error.response.data.message
        // })
      });
  };

  snackbarClose = () => {
    this.setState({
      error: ""
    })
  }

  consoleLog = () => {
    console.log("STATE: ", this.state);
  };

  render() {
    return (
      <div>
        <div className="mobilemessage">
          <div className="popup-block">
            <img
              src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578511729/moble-desktop_aaar9f.svg"
              alt=""
              className="step-icon popup-image"
            />
            <h4>
              Please open on a bigger screen such as tablet or laptop to fill in
              the form
            </h4>
          </div>
        </div>
        <div
          data-collapse="small"
          data-animation="default"
          data-duration={400}
          className="navigation sub-nav w-nav"
        >
          <div className="navigation-wrap sub">
            {/* <Link
              to={"/"}
              onClick={event => {
                this.submitHandler(event, "/");
              }}
              className="logo-link w-nav-brand"
            > */}
              <img
                src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578511729/Logo2_rkkhki.svg"
                width={108}
                alt=""
                className="logo-image"
              />
            {/* </Link> */}
            <div className="menu">
              <nav role="navigation" className="navigation-items w-nav-menu">
                <div
                  href="../form/stap-01.html"
                  className="form-nav-wrapper w-inline-block"
                  style={{ opacity: "0.6" }}
                >
                  <div className="navigation-item form header">Step 1</div>
                  <div className="navigation-item form">Visie</div>
                </div>

                <div
                  href="../form/stap-02-deskundigheid.html"
                  className="form-nav-wrapper w-inline-block w--current"
                >
                  <div className="navigation-item form header">Step 2</div>
                  <div className="navigation-item form">Deskundigheid</div>
                </div>

                <div
                  href="../form/stap-03-programma.html"
                  className="form-nav-wrapper w-inline-block"
                  style={{ opacity: "0.6" }}
                >
                  <div className="navigation-item form header">Step 3</div>
                  <div className="navigation-item form">Programma</div>
                </div>

                <div
                  href="../form/stap-04-samenwerking.html"
                  className="form-nav-wrapper w-inline-block"
                  style={{ opacity: "0.6" }}
                >
                  <div className="navigation-item form header">Step 4</div>
                  <div className="navigation-item form">Samenwerking</div>
                </div>
              </nav>
              <div className="menu-button w-nav-button">
                <img
                  src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578511729/menu-icon_1menu-icon_slnjqf.png"
                  width={22}
                  alt=""
                  className="menu-icon"
                />
              </div>
            </div>
          </div>
          <div className="nav-bg" style={{opacity: "1", boxShadow: "none"}}/>
        </div>
        <div className="section hero subpage steps">
          <div className="container">
            <div className="form-description">
              <img
                src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578511731/step2_md17pr.svg"
                alt=""
                className="step-icon"
              />
              <div className="details-wrap">
                <h1 className="heading-jumbo step-headline">2</h1>
                <h1 className="step-headline-h2">
                  Deskundigheid in cultuuronderwijs
                </h1>
              </div>
              <div className="paragraph-light subtext-steps">
                Hoe staat het met de deskundigheid op het gebied van
                cultuuronderwijs binnen jouw school? Wat hebben jullie in huis?{" "}
              </div>
            </div>
          </div>
        </div>
        <div
          data-w-id="d6cb0154-cd02-de5b-804e-26aafaeb5fe1"
          className="section-content"
        >
          <div className="section">
            <div className="container">
              <div className="w-layout-grid project-details-wrapper">
                <div className="form-section">
                  <div className="form-section-header horizontal-center">
                    <div className="form-section-number">
                      <div>2.1</div>
                    </div>
                    <h3 className="form-heading horizontal-center">
                      Beschrijven
                    </h3>
                  </div>
                  <div className="form-row first">
                    <div className="form-row-header">
                      <h4>Welke deskundigheid is in jullie school aanwezig?</h4>
                      <div className="note-box">
                        <div className="label">
                          Hulp
                          <br />
                        </div>
                        <ul className="list">
                          <li>
                            <div className="paragraph-small note">
                              Welke functies zijn er voor cultuuronderwijs?
                              Bijvoorbeeld ‘leerkracht’, ‘vakdocent’,
                              ‘directielid’, ‘icc’er’, ‘vrijwilliger’, ‘ouder’,
                              ‘onderwijsondersteunend personeelslid’,
                              <br />
                            </div>
                          </li>
                          <li>
                            <div className="paragraph-small note">
                              Welk specialisme&nbsp; is er op het gebied van
                              organisatie, inhoud, specifieke discipline
                              (muziek, beeldende vormgeving, drama, dans,
                              media-, filosofie- of erfgoededucatie),
                              pedagogisch-didactische deskundigheid of
                              financiële deskundigheid.&nbsp;
                              <br />
                            </div>
                          </li>
                          <li>
                            <div className="paragraph-small note">
                              Welke opleidingen worden door collega’s gevolgd of
                              zijn door collega’s behaald? Bijvoorbeeld
                              icc-module, de post-HBO opleiding
                              cultuurbegeleider of andere relevante opleiding.
                              <br />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="form-wrapper w-form">
                      <form
                        id="email-form"
                        name="email-form"
                        data-name="Email Form"
                        className="form"
                      >
                        <textarea
                          placeholder="Antwoord"
                          maxLength={5000}
                          name="field-2"
                          data-name="Field 2"
                          className="text-field field-textarea w-input"
                          defaultValue={this.state._2_1}
                          onChange={this.changeHandler}
                          id="_2_1"
                        />
                      </form>
                      <div className="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div className="w-form-fail">
                        <div>
                          Oops! Something went wrong while submitting the form.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-section">
                  <div className="form-section-header">
                    <div className="form-section-number">
                      <div>2.2</div>
                    </div>
                    <div>
                      <h3 className="form-heading">Normeren/stellingen</h3>
                      <p>
                        In hoeverre passen de volgende stellingen bij
                        ‘deskundigheid’ op jullie school?
                        <br />
                        Voor cultuuronderwijs hebben wij deskundigen in onze
                        school die
                        <br />
                      </p>
                      <p className="paragraph-small note table">
                        1: geen deskundigheid in school aanwezig
                        <br />
                        5: deskundigheid in school aanwezig
                        <br />
                      </p>
                    </div>
                  </div>
                  <div className="table">
                    <div className="table-header">
                      <div className="table-empty-cell" />
                      <h6 id="w-node-b43db9980a2d-1ebdf05b">1</h6>
                      <h6>2</h6>
                      <h6>3</h6>
                      <h6>4</h6>
                      <h6>5</h6>
                    </div>
                    <div className="form-block table w-form">
                      <form
                        id="wf-form-2-2table_1"
                        name="wf-form-2-2table_1"
                        data-name="2-2table_1"
                        className="table-row"
                      >
                        <p>
                          Leerlingen stimuleren om betekenis te geven aan en te
                          reflecteren op zichzelf en de wereld
                        </p>
                        <div
                          id="w-node-b43db9980a3b-1ebdf05b"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="2-2table_1"
                              defaultValue="Radio"
                              name="2-2table_1"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_2_2_1_1"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._2_2_1 === "_2_2_1_1"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-b43db9980a3f-1ebdf05b"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="2-2table_1"
                              defaultValue="Radio"
                              name="2-2table_1"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_2_2_1_2"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._2_2_1 === "_2_2_1_2"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-b43db9980a43-1ebdf05b"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="2-2table_1"
                              defaultValue="Radio"
                              name="2-2table_1"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_2_2_1_3"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._2_2_1 === "_2_2_1_3"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-b43db9980a47-1ebdf05b"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="2-2table_1"
                              defaultValue="Radio"
                              name="2-2table_1"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_2_2_1_4"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._2_2_1 === "_2_2_1_4"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-b43db9980a4b-1ebdf05b"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="2-2table_1"
                              defaultValue="Radio"
                              name="2-2table_1"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_2_2_1_5"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._2_2_1 === "_2_2_1_5"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                      </form>
                      <div className="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div className="w-form-fail">
                        <div>
                          Oops! Something went wrong while submitting the form.
                        </div>
                      </div>
                    </div>
                    <div className="form-block table w-form">
                      <form
                        id="wf-form-2-2table_2"
                        name="wf-form-2-2table_2"
                        data-name="2-2table_2"
                        className="table-row"
                      >
                        <p>
                          Leerlinggestuurd, op basis van de eigen vraag en
                          interesse van de leerling, werken
                        </p>
                        <div
                          id="w-node-b43db9980a5c-1ebdf05b"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="2-2table_2"
                              defaultValue="Radio"
                              name="2-2table_2"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_2_2_2_1"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._2_2_2 === "_2_2_2_1"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-b43db9980a60-1ebdf05b"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="2-2table_2"
                              defaultValue="Radio"
                              name="2-2table_2"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_2_2_2_2"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._2_2_2 === "_2_2_2_2"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-b43db9980a64-1ebdf05b"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="2-2table_2"
                              defaultValue="Radio"
                              name="2-2table_2"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_2_2_2_3"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._2_2_2 === "_2_2_2_3"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-b43db9980a68-1ebdf05b"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="2-2table_2"
                              defaultValue="Radio"
                              name="2-2table_2"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_2_2_2_4"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._2_2_2 === "_2_2_2_4"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-b43db9980a6c-1ebdf05b"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="2-2table_2"
                              defaultValue="Radio"
                              name="2-2table_2"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_2_2_2_5"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._2_2_2 === "_2_2_2_5"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                      </form>
                      <div className="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div className="w-form-fail">
                        <div>
                          Oops! Something went wrong while submitting the form.
                        </div>
                      </div>
                    </div>
                    <div className="form-block table w-form">
                      <form
                        id="wf-form-2-2table_3"
                        name="wf-form-2-2table_3"
                        data-name="2-2table_3"
                        className="table-row"
                      >
                        <p>
                          De link kunnen leggen tussen cultuuronderwijs en de
                          omgeving en achtergrond van onze leerlingen
                        </p>
                        <div
                          id="w-node-b43db9980a7d-1ebdf05b"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="2-2table_3"
                              defaultValue="Radio"
                              name="2-2table_3"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_2_2_3_1"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._2_2_3 === "_2_2_3_1"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-b43db9980a81-1ebdf05b"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="2-2table_3"
                              defaultValue="Radio"
                              name="2-2table_3"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_2_2_3_2"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._2_2_3 === "_2_2_3_2"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-b43db9980a85-1ebdf05b"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="2-2table_3"
                              defaultValue="Radio"
                              name="2-2table_3"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_2_2_3_3"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._2_2_3 === "_2_2_3_3"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-b43db9980a89-1ebdf05b"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="2-2table_3"
                              defaultValue="Radio"
                              name="2-2table_3"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_2_2_3_4"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._2_2_3 === "_2_2_3_4"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-b43db9980a8d-1ebdf05b"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="2-2table_3"
                              defaultValue="Radio"
                              name="2-2table_3"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_2_2_3_5"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._2_2_3 === "_2_2_3_5"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                      </form>
                      <div className="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div className="w-form-fail">
                        <div>
                          Oops! Something went wrong while submitting the form.
                        </div>
                      </div>
                    </div>
                    <div className="form-block table w-form">
                      <form
                        id="wf-form-2-2table_4"
                        name="wf-form-2-2table_4"
                        data-name="2-2table_4"
                        className="table-row"
                      >
                        <p>
                          Leerlingen een zo breed mogelijk palet aan culturele
                          en kunstzinnige activiteiten laten maken en meemaken
                        </p>
                        <div
                          id="w-node-b43db9980a9d-1ebdf05b"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="2-2table_4"
                              defaultValue="Radio"
                              name="2-2table_4"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_2_2_4_1"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._2_2_4 === "_2_2_4_1"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-b43db9980aa1-1ebdf05b"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="2-2table_4"
                              defaultValue="Radio"
                              name="2-2table_4"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_2_2_4_2"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._2_2_4 === "_2_2_4_2"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-b43db9980aa5-1ebdf05b"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="2-2table_4"
                              defaultValue="Radio"
                              name="2-2table_4"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_2_2_4_3"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._2_2_4 === "_2_2_4_3"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-b43db9980aa9-1ebdf05b"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="2-2table_4"
                              defaultValue={4}
                              name="2-2table_4"
                              id="node"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_2_2_4_4"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._2_2_4 === "_2_2_4_4"}
                            />
                            <span
                              htmlFor="node"
                              className="checkbox-label hide w-form-label"
                            />
                          </label>
                        </div>
                        <div
                          id="w-node-b43db9980aad-1ebdf05b"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="2-2table_4"
                              defaultValue="Radio"
                              name="2-2table_4"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_2_2_4_5"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._2_2_4 === "_2_2_4_5"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                      </form>
                      <div className="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div className="w-form-fail">
                        <div>
                          Oops! Something went wrong while submitting the form.
                        </div>
                      </div>
                    </div>
                    <div className="form-block table w-form">
                      <form
                        id="wf-form-2-2table_5"
                        name="wf-form-2-2table_5"
                        data-name="2-2table_5"
                        className="table-row"
                      >
                        <p>
                          Weten hoe via cultuuronderwijs taalontwikkeling en
                          sociaal emotionele ontwikkeling kunnen worden
                          versterkt
                        </p>
                        <div
                          id="w-node-b43db9980abb-1ebdf05b"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="2-2table_5"
                              defaultValue="Radio"
                              name="2-2table_5"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_2_2_5_1"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._2_2_5 === "_2_2_5_1"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-b43db9980abf-1ebdf05b"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="2-2table_5"
                              defaultValue="Radio"
                              name="2-2table_5"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_2_2_5_2"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._2_2_5 === "_2_2_5_2"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-b43db9980ac3-1ebdf05b"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="2-2table_5"
                              defaultValue="Radio"
                              name="2-2table_5"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_2_2_5_3"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._2_2_5 === "_2_2_5_3"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-b43db9980ac7-1ebdf05b"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="2-2table_5"
                              defaultValue="Radio"
                              name="2-2table_5"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_2_2_5_4"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._2_2_5 === "_2_2_5_4"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-b43db9980acb-1ebdf05b"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="2-2table_5"
                              defaultValue="Radio"
                              name="2-2table_5"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_2_2_5_5"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._2_2_5 === "_2_2_5_5"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                      </form>
                      <div className="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div className="w-form-fail">
                        <div>
                          Oops! Something went wrong while submitting the form.
                        </div>
                      </div>
                    </div>
                    <div className="form-block table w-form">
                      <form
                        id="wf-form-2-2table_6"
                        name="wf-form-2-2table_6"
                        data-name="2-2table_6"
                        className="table-row"
                      >
                        <p>
                          Onze leerlingen<em> ambachtelijke vaardigheden</em>{" "}
                          aanleren in uiteenlopende media (materialen,
                          ICT-middelen, voorwerpen, instrumenten, gesproken en
                          geschreven taal, het (eigen) lichaam)
                        </p>
                        <div
                          id="w-node-b43db9980adc-1ebdf05b"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="2-2table_6"
                              defaultValue="Radio"
                              name="2-2table_6"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_2_2_6_1"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._2_2_6 === "_2_2_6_1"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-b43db9980ae0-1ebdf05b"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="2-2table_6"
                              defaultValue="Radio"
                              name="2-2table_6"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_2_2_6_2"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._2_2_6 === "_2_2_6_2"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-b43db9980ae4-1ebdf05b"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="2-2table_6"
                              defaultValue="Radio"
                              name="2-2table_6"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_2_2_6_3"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._2_2_6 === "_2_2_6_3"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-b43db9980ae8-1ebdf05b"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="2-2table_6"
                              defaultValue="Radio"
                              name="2-2table_6"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_2_2_6_4"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._2_2_6 === "_2_2_6_4"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-b43db9980aec-1ebdf05b"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="2-2table_6"
                              defaultValue="Radio"
                              name="2-2table_6"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_2_2_6_5"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._2_2_6 === "_2_2_6_5"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                      </form>
                      <div className="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div className="w-form-fail">
                        <div>
                          Oops! Something went wrong while submitting the form.
                        </div>
                      </div>
                    </div>
                    <div className="form-block table w-form">
                      <form
                        id="wf-form-2-2table_7"
                        name="wf-form-2-2table_7"
                        data-name="2-2table_7"
                        className="table-row"
                      >
                        <p>
                          Het artistiek, creatief en innovatief vermogen bij
                          leerlingen ontwikkelen en stimuleren
                        </p>
                        <div
                          id="w-node-b43db9980afa-1ebdf05b"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="2-2table_7"
                              defaultValue="Radio"
                              name="2-2table_7"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_2_2_7_1"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._2_2_7 === "_2_2_7_1"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-b43db9980afe-1ebdf05b"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="2-2table_7"
                              defaultValue="Radio"
                              name="2-2table_7"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_2_2_7_2"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._2_2_7 === "_2_2_7_2"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-b43db9980b02-1ebdf05b"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="2-2table_7"
                              defaultValue={3}
                              name="2-2table_7"
                              id="node-3"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_2_2_7_3"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._2_2_7 === "_2_2_7_3"}
                            />
                            <span
                              htmlFor="node-3"
                              className="checkbox-label hide w-form-label"
                            />
                          </label>
                        </div>
                        <div
                          id="w-node-b43db9980b06-1ebdf05b"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="2-2table_7"
                              defaultValue="Radio"
                              name="2-2table_7"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_2_2_7_4"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._2_2_7 === "_2_2_7_4"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-b43db9980b0a-1ebdf05b"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="2-2table_7"
                              defaultValue={5}
                              name="2-2table_7"
                              id="node-2"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_2_2_7_5"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._2_2_7 === "_2_2_7_5"}
                            />
                            <span
                              htmlFor="node-2"
                              className="checkbox-label hide w-form-label"
                            />
                          </label>
                        </div>
                      </form>
                      <div className="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div className="w-form-fail">
                        <div>
                          Oops! Something went wrong while submitting the form.
                        </div>
                      </div>
                    </div>
                    <div className="form-block table w-form">
                      <form
                        id="wf-form-2-2table_8"
                        name="wf-form-2-2table_8"
                        data-name="2-2table_8"
                        className="table-row"
                      >
                        <p>
                          Onze leerlingen kunnen begeleiden in hun artistieke
                          expressie en de presentatie daarvan
                        </p>
                        <div
                          id="w-node-b43db9980b1b-1ebdf05b"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="2-2table_8"
                              defaultValue="Radio"
                              name="2-2table_8"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_2_2_8_1"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._2_2_8 === "_2_2_8_1"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-b43db9980b1f-1ebdf05b"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="2-2table_8"
                              defaultValue="Radio"
                              name="2-2table_8"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_2_2_8_2"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._2_2_8 === "_2_2_8_2"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-b43db9980b23-1ebdf05b"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="2-2table_8"
                              defaultValue="Radio"
                              name="2-2table_8"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_2_2_8_3"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._2_2_8 === "_2_2_8_3"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-b43db9980b27-1ebdf05b"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="2-2table_8"
                              defaultValue="Radio"
                              name="2-2table_8"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_2_2_8_4"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._2_2_8 === "_2_2_8_4"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-b43db9980b2b-1ebdf05b"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="2-2table_8"
                              defaultValue="Radio"
                              name="2-2table_8"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_2_2_8_5"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._2_2_8 === "_2_2_8_5"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                      </form>
                      <div className="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div className="w-form-fail">
                        <div>
                          Oops! Something went wrong while submitting the form.
                        </div>
                      </div>
                    </div>
                    <div className="form-block table w-form">
                      <form
                        id="wf-form-2-2table_9"
                        name="wf-form-2-2table_9"
                        data-name="2-2table_9"
                        className="table-row"
                      >
                        <p>
                          Weten hoe ze cultuuronderwijs kunnen verbinden met
                          andere vakken, leergebieden, overkoepelende
                          vaardigheden en thema’s
                        </p>
                        <div
                          id="w-node-b43db9980b3c-1ebdf05b"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="2-2table_9"
                              defaultValue="Radio"
                              name="2-2table_9"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_2_2_9_1"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._2_2_9 === "_2_2_9_1"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-b43db9980b40-1ebdf05b"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="2-2table_9"
                              defaultValue="Radio"
                              name="2-2table_9"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_2_2_9_2"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._2_2_9 === "_2_2_9_2"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-b43db9980b44-1ebdf05b"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="2-2table_9"
                              defaultValue="Radio"
                              name="2-2table_9"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_2_2_9_3"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._2_2_9 === "_2_2_9_3"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-b43db9980b48-1ebdf05b"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="2-2table_9"
                              defaultValue="Radio"
                              name="2-2table_9"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_2_2_9_4"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._2_2_9 === "_2_2_9_4"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-b43db9980b4c-1ebdf05b"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="2-2table_9"
                              defaultValue="Radio"
                              name="2-2table_9"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_2_2_9_5"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._2_2_9 === "_2_2_9_5"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                      </form>
                      <div className="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div className="w-form-fail">
                        <div>
                          Oops! Something went wrong while submitting the form.
                        </div>
                      </div>
                    </div>
                    <div className="form-block table w-form">
                      <form
                        id="wf-form-2-2table_10"
                        name="wf-form-2-2table_10"
                        data-name="2-2table_10"
                        className="table-row end"
                      >
                        <p>
                          Onze leerlingen door cultuuronderwijs stimuleren om
                          met een onderzoekende en open houding
                          in de wereld te staan
                        </p>
                        <div
                          id="w-node-b43db9980b5a-1ebdf05b"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="2-2table_10"
                              defaultValue="Radio"
                              name="2-2table_10"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_2_2_10_1"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._2_2_10 === "_2_2_10_1"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-b43db9980b5e-1ebdf05b"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="2-2table_10"
                              defaultValue="Radio"
                              name="2-2table_10"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_2_2_10_2"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._2_2_10 === "_2_2_10_2"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-b43db9980b62-1ebdf05b"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="2-2table_10"
                              defaultValue="Radio"
                              name="2-2table_10"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_2_2_10_3"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._2_2_10 === "_2_2_10_3"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-b43db9980b66-1ebdf05b"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="2-2table_10"
                              defaultValue="Radio"
                              name="2-2table_10"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_2_2_10_4"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._2_2_10 === "_2_2_10_4"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-b43db9980b6a-1ebdf05b"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="2-2table_10"
                              defaultValue="Radio"
                              name="2-2table_10"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_2_2_10_5"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._2_2_10 === "_2_2_10_5"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                      </form>
                      <div className="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div className="w-form-fail">
                        <div>
                          Oops! Something went wrong while submitting the form.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-section">
                  <div className="form-section-header horizontal-center">
                    <div className="form-section-number">
                      <div>2.3</div>
                    </div>
                    <h3 className="form-heading horizontal-center">
                      Beoordelen
                    </h3>
                  </div>
                  <div className="form-row first">
                    <div className="form-row-header">
                      <h4>
                        In hoeverre zijn jullie tevreden met de aanwezige
                        deskundigheid voor cultuuronderwijs op jullie school?
                        Licht de beoordeling toe.
                      </h4>
                      <div className="note-box">
                        <div className="label">
                          Hulp
                          <br />
                        </div>
                        <div className="paragraph-small note">
                          Is er voldoende deskundigheid? Voldoende op elk
                          gebied? Is het waardevol, vruchtbaar, <br />
                          duurzaam en van voldoende niveau? Wat zijn nog wensen
                          en knelpunten?
                          <br />
                        </div>
                      </div>
                    </div>
                    <div className="form-wrapper w-form">
                      <form
                        id="email-form"
                        name="email-form"
                        data-name="Email Form"
                        className="form"
                      >
                        <textarea
                          placeholder="Antwoord"
                          maxLength={5000}
                          name="field-2"
                          data-name="Field 2"
                          className="text-field field-textarea w-input"
                          defaultValue={this.state._2_3}
                          onChange={this.changeHandler}
                          id="_2_3"
                        />
                      </form>
                      <div className="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div className="w-form-fail">
                        <div>
                          Oops! Something went wrong while submitting the form.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-section">
                  <div className="form-section-header horizontal-center">
                    <div className="form-section-number">
                      <div>2.4</div>
                    </div>
                    <h3 className="form-heading horizontal-center">
                      Verder kijken
                    </h3>
                  </div>
                  <div className="form-row first">
                    <div className="form-row-header">
                      <h4>
                        Heeft jullie school de intentie om meer deskundigheid voor cultuuronderwijs binnen de school te halen?
                      </h4>
                    </div>
                    <div className="form-wrapper w-form">
                      <form
                        id="wf-form-2-4"
                        name="wf-form-2-4"
                        data-name="2 4"
                        className="form _2-col-row"
                      >
                        <label className="radio-button-field _2col w-radio">
                          <input
                            type="radio"
                            data-name="2-4yesno_1"
                            defaultValue="Radio"
                            name="2-4yesno_1"
                            className="w-form-formradioinput radio-button w-radio-input"
                            id="_2_4_1_1"
                            onChange={this.changeHandlerRadio}
                            checked={this.state._2_4_1 === "_2_4_1_1"}
                          />
                          <span className="checkbox-label w-form-label">
                            Ja
                          </span>
                        </label>
                        <label className="radio-button-field w-radio">
                          <input
                            type="radio"
                            data-name="2-4yesno_1"
                            defaultValue="Radio"
                            name="2-4yesno_1"
                            id="radio"
                            className="w-form-formradioinput radio-button w-radio-input"
                            id="_2_4_1_2"
                            onChange={this.changeHandlerRadio}
                            checked={this.state._2_4_1 === "_2_4_1_2"}
                          />
                          <span className="checkbox-label w-form-label">
                            Nee
                          </span>
                        </label>
                      </form>
                      <div className="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div className="w-form-fail">
                        <div>
                          Oops! Something went wrong while submitting the form.
                        </div>
                      </div>
                    </div>
                  </div>
                  {this.state._2_4_1 === "" ? "" : (
                    this.state._2_4_1 === '_2_4_1_1' ? (
                      <div>
                  <div className="form-row">
                    <div className="form-row-header">
                      <div className="label answertype yes">Indien ja</div>
                      <h4>Op welk vlak?</h4>
                    </div>
                    <div className="form-wrapper w-form">
                      <form
                        id="email-form"
                        name="email-form"
                        data-name="Email Form"
                        className="form"
                      >
                        <textarea
                          placeholder="Antwoord"
                          maxLength={5000}
                          name="field-2"
                          data-name="Field 2"
                          className="text-field field-textarea w-input"
                          defaultValue={this.state._2_4_2}
                          onChange={this.changeHandler}
                          id="_2_4_2"
                        />
                      </form>
                      <div className="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div className="w-form-fail">
                        <div>
                          Oops! Something went wrong while submitting the form.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-row-header">
                      <div className="label answertype yes">Indien ja</div>
                      <h4>Hoe willen jullie dat aanpakken?</h4>
                    </div>
                    <div className="form-wrapper w-form">
                      <form
                        id="email-form"
                        name="email-form"
                        data-name="Email Form"
                        className="form"
                      >
                        <textarea
                          placeholder="Antwoord"
                          maxLength={5000}
                          name="field-2"
                          data-name="Field 2"
                          className="text-field field-textarea w-input"
                          defaultValue={this.state._2_4_3}
                          onChange={this.changeHandler}
                          id="_2_4_3"
                        />
                      </form>
                      <div className="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div className="w-form-fail">
                        <div>
                          Oops! Something went wrong while submitting the form.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-row-header">
                      <div className="label answertype yes">Indien ja</div>
                      <h4>Hebben jullie daar hulp bij nodig?</h4>
                    </div>
                    <div className="form-wrapper w-form">
                      <form
                        id="evi-form-1-4"
                        name="wf-form-1-4"
                        data-name="1 4"
                        className="form _2-col-row"
                      >
                        <label className="radio-button-field _2col w-radio">
                          <input
                            type="radio"
                            data-name="1-4yesno_1"
                            defaultValue="Radio"
                            name="1-4yesno_1"
                            className="w-form-formradioinput radio-button w-radio-input"
                            id="_2_4_4_1"
                            onChange={this.changeHandlerRadio}
                            checked={this.state._2_4_4 === "_2_4_4_1"}
                          />
                          <span className="checkbox-label w-form-label">
                            Ja
                          </span>
                        </label>
                        <label className="radio-button-field w-radio">
                          <input
                            type="radio"
                            data-name="1-4yesno_1"
                            defaultValue="Radio"
                            name="1-4yesno_1"
                            className="w-form-formradioinput radio-button w-radio-input"
                            id="_2_4_4_2"
                            onChange={this.changeHandlerRadio}
                            checked={this.state._2_4_4 === "_2_4_4_2"}
                          />
                          <span className="checkbox-label w-form-label">
                            Nee
                          </span>
                        </label>
                      </form>
                      <div className="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div className="w-form-fail">
                        <div>
                          Oops! Something went wrong while submitting the form.
                        </div>
                      </div>
                    </div>
                  </div>
                  {this.state._2_4_4 === "" ? "" : (
                    this.state._2_4_4 === '_2_4_4_1' ? (
                  <div className="form-row">
                    <div className="form-row-header">
                      <div className="label answertype yes">Indien ja</div>
                      <h4>Wat is je hulpvraag?</h4>
                    </div>
                    <div className="form-wrapper w-form">
                      <form
                        id="email-form"
                        name="email-form"
                        data-name="Email Form"
                        className="form"
                      >
                        <textarea
                          placeholder="Antwoord"
                          maxLength={5000}
                          name="field-2"
                          data-name="Field 2"
                          className="text-field field-textarea w-input"
                          defaultValue={this.state._2_4_5}
                          onChange={this.changeHandler}
                          id="_2_4_5"
                        />
                      </form>
                      <div className="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div className="w-form-fail">
                        <div>
                          Oops! Something went wrong while submitting the form.
                        </div>
                      </div>
                    </div>
                  </div>
                    ):(""))}
                  </div>
                  ) : ( 
                  <div className="form-row end">
                    <div className="form-row-header">
                      <div className="label answertype no">Indien nee</div>
                      <h4>
                        Kunnen jullie aangeven waarom jullie geen plannen of
                        wensen hebben voor meer deskundigheid? Licht het
                        antwoord toe.
                      </h4>
                    </div>
                    <div className="form-wrapper w-form">
                      <form
                        id="email-form"
                        name="email-form"
                        data-name="Email Form"
                        className="form"
                      >
                        <textarea
                          placeholder="Antwoord"
                          maxLength={5000}
                          name="field-2"
                          data-name="Field 2"
                          className="text-field field-textarea w-input"
                          defaultValue={this.state._2_4_6}
                          onChange={this.changeHandler}
                          id="_2_4_6"
                        />
                      </form>
                      <div className="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div className="w-form-fail">
                        <div>
                          Oops! Something went wrong while submitting the form.
                        </div>
                      </div>
                    </div>
                  </div>
                  ))}
                </div>
                <div className="form-section">
                  <div className="form-section-header">
                    <div className="form-section-number">
                      <div>2.5</div>
                    </div>
                    <div>
                      <h3 className="form-heading">Scenario</h3>
                      <p>
                        Geef aan welke scenariobeschrijving op dit moment (!)
                        geheel overeenkomt met de situatie op jullie school.
                      </p>
                    </div>
                  </div>
                  <div className="form-row first">
                    <div className="form-wrapper form-scenario w-form">
                      <form
                        id="wf-form-2-5-scenario"
                        name="wf-form-2-5-scenario"
                        data-name="2 5 scenario"
                        className="form"
                      >
                        <label className="radio-button-field scenario _1 w-radio">
                          <input
                            type="radio"
                            data-name="2-5scenario_1"
                            defaultValue="Scenario 1"
                            name="2-5scenario_1"
                            className="w-form-formradioinput radio-button scenario w-radio-input"
                            id="_2_5_1"
                            onChange={this.changeHandlerRadio}
                            checked={this.state._2_5 === "_2_5_1"}
                          />
                          <div className="form-row-header scenario-header">
                            <h4 className="heading">Scenario 1</h4>
                            <p>
                              De school coördineert en bevordert de interne
                              deskundigheid niet bewust op het gebied van
                              cultuuronderwijs.
                            </p>
                          </div>
                          <span
                            htmlFor="Scenario "
                            className="checkbox-label hide w-form-label"
                          >
                            Custom radio
                          </span>
                        </label>
                        <label className="radio-button-field scenario _2 w-radio">
                          <input
                            type="radio"
                            data-name="2-5scenario_1"
                            defaultValue="Scenario 2"
                            name="2-5scenario_1"
                            id="Scenario -2"
                            className="w-form-formradioinput radio-button scenario w-radio-input"
                            id="_2_5_2"
                            onChange={this.changeHandlerRadio}
                            checked={this.state._2_5 === "_2_5_2"}
                          />
                          <div className="form-row-header scenario-header">
                            <h4>Scenario 2</h4>
                            <p>
                              De school coördineert de deskundigheid op het
                              gebied van cultuuronderwijs in haar school wel
                              (bijvoorbeeld door een icc’er), maar stimuleert
                              deze niet. Er is zicht op waar de deskundigheid
                              zit voor cultuuronderwijs.
                            </p>
                          </div>
                          <span
                            htmlFor="Scenario "
                            className="checkbox-label hide w-form-label"
                          >
                            Custom radio
                          </span>
                        </label>
                        <label className="radio-button-field scenario _3 w-radio">
                          <input
                            type="radio"
                            data-name="2-5scenario_1"
                            defaultValue="Scenario 3"
                            name="2-5scenario_1"
                            id="Scenario -3"
                            className="w-form-formradioinput radio-button scenario w-radio-input"
                            id="_2_5_3"
                            onChange={this.changeHandlerRadio}
                            checked={this.state._2_5 === "_2_5_3"}
                          />
                          <div className="form-row-header scenario-header">
                            <h4>Scenario 3</h4>
                            <p>
                              De school coördineert en bevordert de
                              deskundigheid op het gebied van cultuuronderwijs.
                              Er is organisatorische deskundigheid in de school
                              (bijvoorbeeld een icc-er/cultuurbegeleider) die
                              deskundigheid bewust en gericht inzet en bovendien
                              incidentele professionalisering stimuleert,
                              coördineert en organiseert (bijv. teamscholingen).
                              Hiervoor worden voldoende tijd en middelen
                              gereserveerd.
                            </p>
                          </div>
                          <span
                            htmlFor="Scenario "
                            className="checkbox-label hide w-form-label"
                          >
                            Custom radio
                          </span>
                        </label>
                        <label className="radio-button-field scenario _4 w-radio">
                          <input
                            type="radio"
                            data-name="2-5scenario_1"
                            defaultValue="Scenario 4"
                            name="2-5scenario_1"
                            id="Scenario -4"
                            className="w-form-formradioinput radio-button scenario w-radio-input"
                            id="_2_5_4"
                            onChange={this.changeHandlerRadio}
                            checked={this.state._2_5 === "_2_5_4"}
                          />
                          <div className="form-row-header scenario-header">
                            <h4>Scenario 4</h4>
                            <p>
                              De school coördineert en bevordert planmatig en
                              structureel de deskundigheid van het hele team op
                              het gebied van cultuuronderwijs. Kwaliteiten van
                              teamleden worden gestimuleerd en ingezet. De
                              school is, ook op het vlak van cultuuronderwijs,
                              een lerende organisatie hiervoor zijn ruimschoots
                              middelen beschikbaar.
                            </p>
                          </div>
                          <span
                            htmlFor="Scenario "
                            className="checkbox-label hide w-form-label"
                          >
                            Custom radio
                          </span>
                        </label>
                      </form>
                      <div className="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div className="w-form-fail">
                        <div>
                          Oops! Something went wrong while submitting the form.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-section">
                  <div className="form-section-header horizontal-center">
                    <div className="form-section-number">
                      <div>2.6</div>
                    </div>
                    <div>
                      <h3 className="form-heading horizontal-center">Extra</h3>
                    </div>
                  </div>
                  <div className="form-row first">
                    <div className="form-row-header long">
                      <h4>
                        Als jullie nog iets kwijt willen over ‘deskundigheid op
                        jullie school, kan dat hier.
                      </h4>
                    </div>
                    <div className="form-wrapper w-form">
                      <form
                        id="email-form"
                        name="email-form"
                        data-name="Email Form"
                        className="form"
                      >
                        <textarea
                          placeholder="Antwoord"
                          maxLength={5000}
                          name="field-2"
                          data-name="Field 2"
                          className="text-field field-textarea w-input"
                          defaultValue={this.state._2_6}
                          onChange={this.changeHandler}
                          id="_2_6"
                        />
                      </form>
                      <div className="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div className="w-form-fail">
                        <div>
                          Oops! Something went wrong while submitting the form.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {this.state.error ? (
                    <div className="snackbar-wrapper steps">
                      <div className="snackbar red">
                        <p className="paragraph-small snackbar-text">
                        Sectie 2.2 alstublieft volledig invullen.

                        </p>
                        <a
                          onClick={this.snackbarClose}
                          className="icon-close_wrapper w-inline-block"
                        >
                          <img src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578862225/evi2_120120/small-close_lxq29o.svg" alt="" className="icon-close"/>
                        </a>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                <div className="cta-wrap form-bottom">
                  <div className="cta-btn-row div-block">
                    <Link
                      to={"/step01"}
                      className="link-block w-inline-block"
                      onClick={event => {
                        this.submitHandlerPrev(event, "/step01");
                      }}
                    >
                      <img
                        src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578511729/small-arrowleft_kzja7a.svg"
                        alt=""
                        className="icon-arrow"
                      />
                      <div>Vorige stap</div>
                    </Link>
                    <Link
                      to={"/step03"}
                      className="button cc-jumbo-button w-inline-block"
                      onClick={event => {
                        this.submitHandler(event, "/step03");
                      }}
                    >
                      <div>Volgende stap</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* [if lte IE 9]><![endif] */}
      </div>
    );
  }
}

export default withRouter(Step2);
