import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

class Step2 extends React.Component {
  state = {
    user: this.props.user,
    theposition: window.pageYOffset,
    error: ""
    //   _4_1: "",
    //   _4_2_1: "",
    //   _4_2_2: "",
    //   _4_2_3: "",
    //   _4_2_4: "",
    //   _4_2_5: "",
    //   _4_2_6: "",
    //   _4_2_7: "",
    //   _4_2_8: "",
    //   _4_2_9: "",
    //   _4_2_10: "",
    //   _4_3: "",
    //   _4_4_1: "",
    //   _4_4_2: "",
    //   _4_4_3: "",
    //   _4_4_4: "",
    //   _4_4_5: "",
    //   _4_4_6: "",
    //   _4_5: "",
    //   _4_6: ""
  };
  componentDidMount() {
    window.scrollTo(0, 0);
    axios.post("/api/datatransfer/results", this.state).then(response => {
      // console.log("Results", response.data);
      this.setState({
        user: this.props.user,
        ...response.data[4]
      }, () => {
        if(!this.state.user){
          this.props.history.push("/");
        }
      });
    });
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

  submitHandler = (event, target) => {
    event.preventDefault();
    if (
      this.state._4_2_1 === "" ||
      this.state._4_2_2 === "" ||
      this.state._4_2_3 === "" ||
      this.state._4_2_4 === "" ||
      this.state._4_2_5 === "" ||
      this.state._4_2_6 === "" ||
      this.state._4_2_7 === "" ||
      this.state._4_2_8 === "" ||
      this.state._4_2_9 === "" ||
      this.state._4_2_10 === ""
    ) {
      this.setState({
        error: "Section 4.2 not complete"
      });
      return;
    }
    axios
      .post("/api/datatransfer/step04push", this.state)
      .then(response => {
        
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
    if (
      this.state._4_2_1 === "" ||
      this.state._4_2_2 === "" ||
      this.state._4_2_3 === "" ||
      this.state._4_2_4 === "" ||
      this.state._4_2_5 === "" ||
      this.state._4_2_6 === "" ||
      this.state._4_2_7 === "" ||
      this.state._4_2_8 === "" ||
      this.state._4_2_9 === "" ||
      this.state._4_2_10 === ""
    ) {
      this.setState({
        error: "Section 4.2 not complete"
      });
      return;
    }
    axios
      .post("/api/datatransfer/step04push", this.state)
      .then(response => {
        
        this.props.history.push(target);
      })
      .catch(error => {
        
        // this.setState({
        // error: error.response.data.message
        // })
      });
  };

  consoleLog = () => {
    console.log("STATE: ", this.state);
  };

  snackbarClose = () => {
    this.setState({
      error: ""
    });
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
                  className="form-nav-wrapper w-inline-block"
                  style={{ opacity: "0.6" }}
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
                  className="form-nav-wrapper w-inline-block w--current"
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
          <div className="nav-bg" style={{ opacity: "1", boxShadow: "none" }} />
        </div>
        <div className="section hero subpage steps">
          <div className="container">
            <div className="form-description">
              <img
                src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578511731/step4_xeg55b.svg"
                alt=""
                className="step-icon"
              />
              <div className="details-wrap">
                <h1 className="heading-jumbo step-headline">4</h1>
                <h1 className="step-headline-h2">Samenwerking</h1>
              </div>
              <div className="paragraph-light subtext-steps">
                Met welke externe partners en deskundigen werkt je school samen?
                En met welk doel werk je met deze partijen samen?
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
                      <div>4.1</div>
                    </div>
                    <h3 className="form-heading horizontal-center">
                      Beschrijven
                    </h3>
                  </div>
                  <div className="form-row first">
                    <div className="form-row-header">
                      <h4>
                        Met welke externe partners en - deskundigen heeft jullie
                        school het afgelopen jaar samengewerkt in het kader van
                        cultuuronderwijs?
                      </h4>
                      <div className="note-box">
                        <div className="label">
                          HULP – bij a<br />
                        </div>
                        <div className="paragraph-small note">
                          Bij externe partners en - deskundigen kunnen jullie
                          denken aan kunstinstellingen (musea, theaters, etc.),
                          zelfstandige kunstenaars, cultuurcoaches,
                          ondersteunende instellingen, verenigingen (orkest,
                          theatergroep), de gemeente en andere icc-ers of
                          scholen (uit netwerken of VCPS-PO).
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
                          defaultValue={this.state._4_1}
                          onChange={this.changeHandler}
                          id="_4_1"
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
                      <div>4.2</div>
                    </div>
                    <div>
                      <h3 className="form-heading">Normeren/stellingen</h3>
                      <p>
                        In hoeverre passen de volgende stellingen bij
                        ‘samenwerking’ met externe partners en - deskundigen op
                        jullie school? <br />
                        De inhoudelijke samenwerking (= afstemming en gesprek)
                        van onze school met externe partners en - deskundigen is
                        gericht op de realisatie van cultuuronderwijs dat:
                        <br />
                      </p>
                      <p className="paragraph-small note table">
                        1: niet passend
                        <br />
                        5: volledig passend
                        <br />
                      </p>
                    </div>
                  </div>
                  <div className="table">
                    <div className="table-header">
                      <div className="table-empty-cell" />
                      <h6 id="w-node-6cec769064db-d8ada0dd">1</h6>
                      <h6>2</h6>
                      <h6>3</h6>
                      <h6>4</h6>
                      <h6>5</h6>
                    </div>
                    <div className="form-block table w-form">
                      <form
                        id="wf-form-4-2table_1"
                        name="wf-form-4-2table_1"
                        data-name="4-2table_1"
                        className="table-row"
                      >
                        <p>
                          Leerlingen stimuleert om betekenis te geven aan en te
                          reflecteren op zichzelf en de wereld
                        </p>
                        <div
                          id="w-node-6cec769064e9-d8ada0dd"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="4-2table_1"
                              defaultValue="Radio"
                              name="4-2table_1"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_4_2_1_1"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._4_2_1 === "_4_2_1_1"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-6cec769064ed-d8ada0dd"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="4-2table_1"
                              defaultValue="Radio"
                              name="4-2table_1"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_4_2_1_2"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._4_2_1 === "_4_2_1_2"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-6cec769064f1-d8ada0dd"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="4-2table_1"
                              defaultValue="Radio"
                              name="4-2table_1"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_4_2_1_3"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._4_2_1 === "_4_2_1_3"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-6cec769064f5-d8ada0dd"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="4-2table_1"
                              defaultValue="Radio"
                              name="4-2table_1"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_4_2_1_4"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._4_2_1 === "_4_2_1_4"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-6cec769064f9-d8ada0dd"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="4-2table_1"
                              defaultValue="Radio"
                              name="4-2table_1"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_4_2_1_5"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._4_2_1 === "_4_2_1_5"}
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
                        id="wf-form-4-2table_2"
                        name="wf-form-4-2table_2"
                        data-name="4-2table_2"
                        className="table-row"
                      >
                        <p>
                          Leerlinggestuurd werken stimuleert, op basis van de
                          eigen vraag en interesse van de leerling
                        </p>
                        <div
                          id="w-node-6cec7690650a-d8ada0dd"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="4-2table_2"
                              defaultValue="Radio"
                              name="4-2table_2"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_4_2_2_1"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._4_2_2 === "_4_2_2_1"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-6cec7690650e-d8ada0dd"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="4-2table_2"
                              defaultValue="Radio"
                              name="4-2table_2"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_4_2_2_2"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._4_2_2 === "_4_2_2_2"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-6cec76906512-d8ada0dd"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="4-2table_2"
                              defaultValue="Radio"
                              name="4-2table_2"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_4_2_2_3"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._4_2_2 === "_4_2_2_3"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-6cec76906516-d8ada0dd"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="4-2table_2"
                              defaultValue="Radio"
                              name="4-2table_2"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_4_2_2_4"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._4_2_2 === "_4_2_2_4"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-6cec7690651a-d8ada0dd"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="4-2table_2"
                              defaultValue="Radio"
                              name="4-2table_2"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_4_2_2_5"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._4_2_2 === "_4_2_2_5"}
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
                        id="wf-form-4-2table_3"
                        name="wf-form-4-2table_3"
                        data-name="4-2table_3"
                        className="table-row"
                      >
                        <p>
                          De link legt tussen cultuuronderwijs en de omgeving en
                          achtergrond van onze leerlingen
                        </p>
                        <div
                          id="w-node-6cec7690652b-d8ada0dd"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="4-2table_3"
                              defaultValue="Radio"
                              name="4-2table_3"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_4_2_3_1"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._4_2_3 === "_4_2_3_1"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-6cec7690652f-d8ada0dd"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="4-2table_3"
                              defaultValue="Radio"
                              name="4-2table_3"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_4_2_3_2"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._4_2_3 === "_4_2_3_2"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-6cec76906533-d8ada0dd"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="4-2table_3"
                              defaultValue="Radio"
                              name="4-2table_3"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_4_2_3_3"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._4_2_3 === "_4_2_3_3"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-6cec76906537-d8ada0dd"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="4-2table_3"
                              defaultValue="Radio"
                              name="4-2table_3"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_4_2_3_4"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._4_2_3 === "_4_2_3_4"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-6cec7690653b-d8ada0dd"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="4-2table_3"
                              defaultValue="Radio"
                              name="4-2table_3"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_4_2_3_5"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._4_2_3 === "_4_2_3_5"}
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
                        id="wf-form-4-2table_4"
                        name="wf-form-4-2table_4"
                        data-name="4-2table_4"
                        className="table-row"
                      >
                        <p>
                          Leerlingen een zo breed mogelijk palet aan culturele
                          en kunstzinnige activiteiten laten maken en meemaken
                        </p>
                        <div
                          id="w-node-6cec7690654c-d8ada0dd"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="4-2table_4"
                              defaultValue="Radio"
                              name="4-2table_4"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_4_2_4_1"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._4_2_4 === "_4_2_4_1"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-6cec76906550-d8ada0dd"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="4-2table_4"
                              defaultValue="Radio"
                              name="4-2table_4"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_4_2_4_2"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._4_2_4 === "_4_2_4_2"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-6cec76906554-d8ada0dd"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="4-2table_4"
                              defaultValue="Radio"
                              name="4-2table_4"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_4_2_4_3"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._4_2_4 === "_4_2_4_3"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-6cec76906558-d8ada0dd"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="4-2table_4"
                              defaultValue={4}
                              name="4-2table_4"
                              id="node"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_4_2_4_4"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._4_2_4 === "_4_2_4_4"}
                            />
                            <span
                              htmlFor="node"
                              className="checkbox-label hide w-form-label"
                            />
                          </label>
                        </div>
                        <div
                          id="w-node-6cec7690655c-d8ada0dd"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="4-2table_4"
                              defaultValue="Radio"
                              name="4-2table_4"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_4_2_4_5"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._4_2_4 === "_4_2_4_5"}
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
                        id="wf-form-4-2table_5"
                        name="wf-form-4-2table_5"
                        data-name="4-2table_5"
                        className="table-row"
                      >
                        <p>
                          De taalontwikkeling en sociaal emotionele ontwikkeling
                          bij leerlingen versterkt
                        </p>
                        <div
                          id="w-node-6cec7690656a-d8ada0dd"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="4-2table_5"
                              defaultValue="Radio"
                              name="4-2table_5"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_4_2_5_1"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._4_2_5 === "_4_2_5_1"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-6cec7690656e-d8ada0dd"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="4-2table_5"
                              defaultValue="Radio"
                              name="4-2table_5"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_4_2_5_2"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._4_2_5 === "_4_2_5_2"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-6cec76906572-d8ada0dd"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="4-2table_5"
                              defaultValue="Radio"
                              name="4-2table_5"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_4_2_5_3"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._4_2_5 === "_4_2_5_3"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-6cec76906576-d8ada0dd"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="4-2table_5"
                              defaultValue="Radio"
                              name="4-2table_5"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_4_2_5_4"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._4_2_5 === "_4_2_5_4"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-6cec7690657a-d8ada0dd"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="4-2table_5"
                              defaultValue="Radio"
                              name="4-2table_5"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_4_2_5_5"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._4_2_5 === "_4_2_5_5"}
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
                        id="wf-form-4-2table_6"
                        name="wf-form-4-2table_6"
                        data-name="4-2table_6"
                        className="table-row"
                      >
                        <p>
                          De mogelijkheid biedt om{" "}
                          <em>ambachtelijke vaardigheden</em> te ontwikkelen in
                          uiteenlopende media (materialen, ICT-middelen,
                          voorwerpen, instrumenten, gesproken en geschreven
                          taal, het (eigen) lichaam)
                        </p>
                        <div
                          id="w-node-6cec7690658b-d8ada0dd"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="4-2table_6"
                              defaultValue="Radio"
                              name="4-2table_6"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_4_2_6_1"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._4_2_6 === "_4_2_6_1"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-6cec7690658f-d8ada0dd"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="4-2table_6"
                              defaultValue="Radio"
                              name="4-2table_6"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_4_2_6_2"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._4_2_6 === "_4_2_6_2"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-6cec76906593-d8ada0dd"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="4-2table_6"
                              defaultValue="Radio"
                              name="4-2table_6"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_4_2_6_3"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._4_2_6 === "_4_2_6_3"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-6cec76906597-d8ada0dd"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="4-2table_6"
                              defaultValue="Radio"
                              name="4-2table_6"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_4_2_6_4"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._4_2_6 === "_4_2_6_4"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-6cec7690659b-d8ada0dd"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="4-2table_6"
                              defaultValue="Radio"
                              name="4-2table_6"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_4_2_6_5"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._4_2_6 === "_4_2_6_5"}
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
                        id="wf-form-4-2table_7"
                        name="wf-form-4-2table_7"
                        data-name="4-2table_7"
                        className="table-row"
                      >
                        <p>
                          Onze leerlingen uitdaagt om hun artistiek, creatief en
                          innovatief vermogen te ontwikkelen
                        </p>
                        <div
                          id="w-node-6cec769065a9-d8ada0dd"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="4-2table_7"
                              defaultValue="Radio"
                              name="4-2table_7"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_4_2_7_1"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._4_2_7 === "_4_2_7_1"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-6cec769065ad-d8ada0dd"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="4-2table_7"
                              defaultValue="Radio"
                              name="4-2table_7"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_4_2_7_2"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._4_2_7 === "_4_2_7_2"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-6cec769065b1-d8ada0dd"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="4-2table_7"
                              defaultValue={3}
                              name="4-2table_7"
                              id="node-3"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_4_2_7_3"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._4_2_7 === "_4_2_7_3"}
                            />
                            <span
                              htmlFor="node"
                              className="checkbox-label hide w-form-label"
                            />
                          </label>
                        </div>
                        <div
                          id="w-node-6cec769065b5-d8ada0dd"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="4-2table_7"
                              defaultValue="Radio"
                              name="4-2table_7"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_4_2_7_4"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._4_2_7 === "_4_2_7_4"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-6cec769065b9-d8ada0dd"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="4-2table_7"
                              defaultValue={5}
                              name="4-2table_7"
                              id="node-2"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_4_2_7_5"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._4_2_7 === "_4_2_7_5"}
                            />
                            <span
                              htmlFor="node"
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
                        id="wf-form-4-2table_8"
                        name="wf-form-4-2table_8"
                        data-name="4-2table_8"
                        className="table-row"
                      >
                        <p>
                          Ruimte biedt voor artistieke expressie en presentatie
                        </p>
                        <div
                          id="w-node-6cec769065c7-d8ada0dd"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="4-2table_8"
                              defaultValue="Radio"
                              name="4-2table_8"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_4_2_8_1"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._4_2_8 === "_4_2_8_1"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-6cec769065cb-d8ada0dd"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="4-2table_8"
                              defaultValue="Radio"
                              name="4-2table_8"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_4_2_8_2"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._4_2_8 === "_4_2_8_2"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-6cec769065cf-d8ada0dd"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="4-2table_8"
                              defaultValue="Radio"
                              name="4-2table_8"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_4_2_8_3"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._4_2_8 === "_4_2_8_3"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-6cec769065d3-d8ada0dd"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="4-2table_8"
                              defaultValue="Radio"
                              name="4-2table_8"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_4_2_8_4"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._4_2_8 === "_4_2_8_4"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-6cec769065d7-d8ada0dd"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="4-2table_8"
                              defaultValue="Radio"
                              name="4-2table_8"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_4_2_8_5"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._4_2_8 === "_4_2_8_5"}
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
                        id="wf-form-4-2table_9"
                        name="wf-form-4-2table_9"
                        data-name="4-2table_9"
                        className="table-row"
                      >
                        <p>
                          Ruimte biedt voor <em>vakoverstijgend </em>verbinden
                          met andere vakken, leergebieden, overkoepelende
                          vaardigheden en thema’s
                        </p>
                        <div
                          id="w-node-6cec769065e8-d8ada0dd"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="4-2table_9"
                              defaultValue="Radio"
                              name="4-2table_9"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_4_2_9_1"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._4_2_9 === "_4_2_9_1"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-6cec769065ec-d8ada0dd"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="4-2table_9"
                              defaultValue="Radio"
                              name="4-2table_9"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_4_2_9_2"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._4_2_9 === "_4_2_9_2"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-6cec769065f0-d8ada0dd"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="4-2table_9"
                              defaultValue="Radio"
                              name="4-2table_9"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_4_2_9_3"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._4_2_9 === "_4_2_9_3"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-6cec769065f4-d8ada0dd"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="4-2table_9"
                              defaultValue="Radio"
                              name="4-2table_9"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_4_2_9_4"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._4_2_9 === "_4_2_9_4"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-6cec769065f8-d8ada0dd"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="4-2table_9"
                              defaultValue="Radio"
                              name="4-2table_9"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_4_2_9_5"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._4_2_9 === "_4_2_9_5"}
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
                        id="wf-form-4-2table_10"
                        name="wf-form-4-2table_10"
                        data-name="4-2table_10"
                        className="table-row end"
                      >
                        <p>
                          Er aan bijdraagt dat onze leerlingen hun onderzoekende
                          en open houding ontwikkelen
                        </p>
                        <div
                          id="w-node-6cec76906606-d8ada0dd"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="4-2table_10"
                              defaultValue="Radio"
                              name="4-2table_10"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_4_2_10_1"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._4_2_10 === "_4_2_10_1"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-6cec7690660a-d8ada0dd"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="4-2table_10"
                              defaultValue="Radio"
                              name="4-2table_10"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_4_2_10_2"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._4_2_10 === "_4_2_10_2"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-6cec7690660e-d8ada0dd"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="4-2table_10"
                              defaultValue="Radio"
                              name="4-2table_10"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_4_2_10_3"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._4_2_10 === "_4_2_10_3"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-6cec76906612-d8ada0dd"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="4-2table_10"
                              defaultValue="Radio"
                              name="4-2table_10"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_4_2_10_4"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._4_2_10 === "_4_2_10_4"}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-6cec76906616-d8ada0dd"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="4-2table_10"
                              defaultValue="Radio"
                              name="4-2table_10"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_4_2_10_5"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._4_2_10 === "_4_2_10_5"}
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
                      <div>4.3</div>
                    </div>
                    <h3 className="form-heading horizontal-center">
                      Beoordelen
                    </h3>
                  </div>
                  <div className="form-row first">
                    <div className="form-row-header">
                      <h4>
                        In hoeverre zijn jullie tevreden over de samenwerking
                        met externe partners en – deskundigen met de voor
                        cultuuronderwijs op jullie school? Licht de beoordeling
                        toe.
                      </h4>
                      <div className="note-box medium">
                        <div className="label">
                          Hulp
                          <br />
                        </div>
                        <div className="paragraph-small note">
                          Zijn er voldoende samenwerkingspartners? Krijgt jullie
                          school van de partners wat ze verwacht? Verloopt de
                          samenwerking(en) naar wens? Missen jullie nog een
                          bepaalde samenwerking? Zijn jullie tevreden over het
                          inhoudelijke gesprek?
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
                          defaultValue={this.state._4_3}
                          onChange={this.changeHandler}
                          id="_4_3"
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
                      <div>4.4</div>
                    </div>
                    <h3 className="form-heading horizontal-center">
                      Verder kijken
                    </h3>
                  </div>
                  <div className="form-row first">
                    <div className="form-row-header">
                      <h4>
                        Heeft jullie school de intentie voor meer samenwerking
                        met externe partners?
                      </h4>
                    </div>
                    <div className="form-wrapper w-form">
                      <form
                        id="wf-form-4-4"
                        name="wf-form-4-4"
                        data-name="4 4"
                        className="form _2-col-row"
                      >
                        <label className="radio-button-field _2col w-radio">
                          <input
                            type="radio"
                            data-name="4-4yesno_1"
                            defaultValue="Radio"
                            name="4-4yesno_1"
                            className="w-form-formradioinput radio-button w-radio-input"
                            id="_4_4_1_1"
                            onChange={this.changeHandlerRadio}
                            checked={this.state._4_4_1 === "_4_4_1_1"}
                          />
                          <span className="checkbox-label w-form-label">
                            Ja
                          </span>
                        </label>
                        <label className="radio-button-field w-radio">
                          <input
                            type="radio"
                            data-name="4-4yesno_1"
                            defaultValue="Radio"
                            name="4-4yesno_1"
                            className="w-form-formradioinput radio-button w-radio-input"
                            id="_4_4_1_2"
                            onChange={this.changeHandlerRadio}
                            checked={this.state._4_4_1 === "_4_4_1_2"}
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
                  {this.state._4_4_1 === "" ? (
                    ""
                  ) : this.state._4_4_1 === "_4_4_1_1" ? (
                    <div>
                      <div className="form-row">
                        <div className="form-row-header">
                          <div className="label answertype yes">Indien ja</div>
                          <h4>Met wie en op welk vlak?</h4>
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
                              defaultValue={this.state._4_4_2}
                              onChange={this.changeHandler}
                              id="_4_4_2"
                            />
                          </form>
                          <div className="w-form-done">
                            <div>
                              Thank you! Your submission has been received!
                            </div>
                          </div>
                          <div className="w-form-fail">
                            <div>
                              Oops! Something went wrong while submitting the
                              form.
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
                              defaultValue={this.state._4_4_3}
                              onChange={this.changeHandler}
                              id="_4_4_3"
                            />
                          </form>
                          <div className="w-form-done">
                            <div>
                              Thank you! Your submission has been received!
                            </div>
                          </div>
                          <div className="w-form-fail">
                            <div>
                              Oops! Something went wrong while submitting the
                              form.
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
                                id="_4_4_4_1"
                                onChange={this.changeHandlerRadio}
                                checked={this.state._4_4_4 === "_4_4_4_1"}
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
                                id="_4_4_4_2"
                                onChange={this.changeHandlerRadio}
                                checked={this.state._4_4_4 === "_4_4_4_2"}
                              />
                              <span className="checkbox-label w-form-label">
                                Nee
                              </span>
                            </label>
                          </form>
                          <div className="w-form-done">
                            <div>
                              Thank you! Your submission has been received!
                            </div>
                          </div>
                          <div className="w-form-fail">
                            <div>
                              Oops! Something went wrong while submitting the
                              form.
                            </div>
                          </div>
                        </div>
                      </div>
                      {this.state._4_4_4 === "" ? (
                        ""
                      ) : this.state._4_4_4 === "_4_4_4_1" ? (
                        <div className="form-row">
                          <div className="label answertype yes">Indien Ja</div>
                          <div className="form-row-header">
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
                                defaultValue={this.state._4_4_5}
                                onChange={this.changeHandler}
                                id="_4_4_5"
                              />
                            </form>
                            <div className="w-form-done">
                              <div>
                                Thank you! Your submission has been received!
                              </div>
                            </div>
                            <div className="w-form-fail">
                              <div>
                                Oops! Something went wrong while submitting the
                                form.
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  ) : (
                    <div className="form-row end">
                      <div className="form-row-header">
                        <div className="label answertype no">Indien Nee</div>
                        <h4>
                          Kunnen jullie aangeven waarom jullie geen plannen of
                          wensen hebben voor meer samenwerking met externe
                          partners? Licht het antwoord toe.
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
                            defaultValue={this.state._4_4_6}
                            onChange={this.changeHandler}
                            id="_4_4_6"
                          />
                        </form>
                        <div className="w-form-done">
                          <div>
                            Thank you! Your submission has been received!
                          </div>
                        </div>
                        <div className="w-form-fail">
                          <div>
                            Oops! Something went wrong while submitting the
                            form.
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="form-section">
                  <div className="form-section-header">
                    <div className="form-section-number">
                      <div>4.5</div>
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
                        id="wf-form-4-5-scenario"
                        name="wf-form-4-5-scenario"
                        data-name="4 5 scenario"
                        className="form"
                      >
                        <label className="radio-button-field scenario _1 w-radio">
                          <input
                            type="radio"
                            data-name="4-5scenario_1"
                            defaultValue="Scenario 1"
                            name="4-5scenario_1"
                            className="w-form-formradioinput radio-button scenario w-radio-input"
                            id="_4_5_1"
                            onChange={this.changeHandlerRadio}
                            checked={this.state._4_5 === "_4_5_1"}
                          />
                          <div className="form-row-header scenario-header">
                            <h4 className="heading">Scenario 1</h4>
                            <p>
                              De school heeft incidentele samenwerking en/of
                              contacten met externe partners en – deskundigen.
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
                            data-name="4-5scenario_1"
                            defaultValue="Scenario 2"
                            name="4-5scenario_1"
                            className="w-form-formradioinput radio-button scenario w-radio-input"
                            id="_4_5_2"
                            onChange={this.changeHandlerRadio}
                            checked={this.state._4_5 === "_4_5_2"}
                          />
                          <div className="form-row-header scenario-header">
                            <h4>Scenario 2</h4>
                            <p>
                              De school werkt regelmatig samen met externe
                              partners en – deskundigen. De inhoudelijke keuzes
                              liggen bij de externe partner (afnemen
                              cultuuraanbod).
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
                            data-name="4-5scenario_1"
                            defaultValue="Scenario 3"
                            name="4-5scenario_1"
                            className="w-form-formradioinput radio-button scenario w-radio-input"
                            id="_4_5_3"
                            onChange={this.changeHandlerRadio}
                            checked={this.state._4_5 === "_4_5_3"}
                          />
                          <div className="form-row-header scenario-header">
                            <h4>Scenario 3</h4>
                            <p>
                              De school onderzoekt en bespreekt met de externe
                              partner hoe het aanbod optimaal kan aansluiten bij
                              wat zij leerlingen willen meegeven.&nbsp;
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
                            data-name="4-5scenario_1"
                            defaultValue="Scenario 4"
                            name="4-5scenario_1"
                            className="w-form-formradioinput radio-button scenario w-radio-input"
                            id="_4_5_4"
                            onChange={this.changeHandlerRadio}
                            checked={this.state._4_5 === "_4_5_4"}
                          />
                          <div className="form-row-header scenario-header">
                            <h4>Scenario 4</h4>
                            <p>
                              De school onderzoekt met externe partners en deskundigen hoe de inhoud van het cultuuronderwijs zo optimaal mogelijk aansluit bij de culturele ontwikkeling van alle leerlingen. De school legt de afspraken over samenwerking met externe partners en deskundigen vast. 
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
                      <div>4.6</div>
                    </div>
                    <div>
                      <h3 className="form-heading horizontal-center">Extra</h3>
                    </div>
                  </div>
                  <div className="form-row first">
                    <div className="form-row-header long">
                      <h4>
                        Als jullie nog iets kwijt willen over samenwerking met
                        externe partners en deskundigen, kan dat hier.
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
                          defaultValue={this.state._4_6}
                          onChange={this.changeHandler}
                          id="_4_6"
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
                        Sectie 4.2 alstublieft volledig invullen.
                      </p>
                      <a
                        onClick={this.snackbarClose}
                        className="icon-close_wrapper w-inline-block"
                      >
                        <img
                          src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578862225/evi2_120120/small-close_lxq29o.svg"
                          alt=""
                          className="icon-close"
                        />
                      </a>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {/* <div className="cta-wrap form-bottom">
                  <div className="cta-btn-row">
                    <div className="submit-note-wrapper">
                      <Link
                        to={"/step03"}
                        className="link-block w-inline-block"
                        onClick={event => {
                          this.submitHandlerPrev(event, "/step03");
                        }}
                      >
                        <img
                          src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578511729/small-arrowleft_kzja7a.svg"
                          alt=""
                          className="icon-arrow"
                        />
                        <div>Vorige stap</div>
                      </Link> */}
                      {/* <p className="paragraph-small note cta">
                        Dit is het eind van de vragenlijst.
                        <br />
                        Zodra je op de knop &#x27;terugkoppeling&#x27; klikt is
                        het niet meer mogelijk om terug te gaan.
                      </p> */}
                      {/* <Link
                        to={"/results"}
                        className="button cc-jumbo-button w-inline-block"
                        onClick={event => {
                          this.submitHandler(event, "/results");
                        }}
                      >
                        <div>
                          Naar <strong>TERUGKOPPELING</strong>
                        </div>
                      </Link> */}

                      <div className="cta-wrap form-bottom">
                        <div className="cta-btn-row">
                          <Link
                            to={"/step03"}
                            className="link-block w-inline-block"
                            onClick={event => {
                              this.submitHandlerPrev(event, "/step03");
                            }}
                          >
                            {" "}
                            <img
                              src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578511729/small-arrowleft_kzja7a.svg"
                              alt=""
                              className="icon-arrow"
                            />
                            <div>Vorige stap</div>
                          </Link>
                          <div className="submit-note-wrapper">
                            <p className="paragraph-small note cta">
                              Dit is het eind van de vragenlijst.
                              <br />
                              Zodra je op de knop 'terugkoppeling' klikt is het
                              niet meer mogelijk om terug te gaan.
                            </p>
                            <Link
                              to={"/results"}
                              onClick={event => {
                                this.submitHandler(event, "/results");
                              }}
                              className="button cc-jumbo-button w-inline-block"
                            >
                              <div>
                                Naar <strong>TERUGKOPPELING</strong>
                              </div>
                            </Link>
                          {/* </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    );
  }
}

export default withRouter(Step2);
