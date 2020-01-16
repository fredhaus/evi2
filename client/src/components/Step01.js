import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

class Step1 extends React.Component {
  state = {
    user: this.props.user,
    theposition: window.pageYOffset,
    // _1_1_1: "",
    // _1_1_2: "",
    // _1_1_3: "",
    // _1_2_1: "",
    // _1_2_2: "",
    // _1_2_3: "",
    // _1_2_4: "",
    // _1_2_5: "",
    // _1_2_6: "",
    // _1_2_7: "",
    // _1_2_8: "",
    // _1_2_9: "",
    // _1_2_10: "",
    // _1_3: "",
    // _1_4_1: "",
    // _1_4_2: "",
    // _1_4_3: "",
    // _1_4_4: "",
    // _1_4_5: "",
    // _1_5: "",
    // _1_6: "",

  };

  componentDidMount() {
    window.scrollTo(0, 0);
    axios
      .post("/api/datatransfer/results", this.state)
      .then(response => {
        console.log("Results", response.data);
        this.setState({
          user: this.props.user, ...response.data[1]
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
    console.log(id);
    this.setState({
      _1_1_2: id
    });
  };

  changeHandlerRadio = event => {
    // console.log(this.state)
    let id = event.target.id;
    let idArr = id.split("_")
    idArr.pop()
    let mainId = idArr.join("_")
    this.setState({
      [mainId]: id
    });
  };


  submitHandler = (event, target) => {
    event.preventDefault();
    axios
      .post("/api/datatransfer/step01push", this.state)
      .then(response => {
        console.log("step01push Response", response.data);
        this.props.history.push(target);
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
                  className="form-nav-wrapper w-inline-block w--current"
                >
                  <div className="navigation-item form header">Step 1</div>
                  <div className="navigation-item form">Visie</div>
                </div>
                <div
                  href="../form/stap-02-deskundigheid.html"
                  className="form-nav-wrapper w-inline-block"
                  style={{opacity: "0.6"}}
                >
                  <div className="navigation-item form header">Step 2</div>
                  <div className="navigation-item form">Deskundigheid</div>
                </div>
                <div
                  href="../form/stap-03-programma.html"
                  className="form-nav-wrapper w-inline-block"
                  style={{opacity: "0.6"}}
                >
                  <div className="navigation-item form header">Step 3</div>
                  <div className="navigation-item form">Programma</div>
                </div>
                <div
                  href="../form/stap-04-samenwerking.html"
                  className="form-nav-wrapper w-inline-block"
                  style={{opacity: "0.6"}}
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
                src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578511729/step1_boejhz.svg"
                alt=""
                className="step-icon"
              />
              <div className="details-wrap">
                <h1 className="heading-jumbo step-headline">1</h1>
                <h1 className="step-headline-h2">Visie op cultuuronderwijs</h1>
              </div>
              <div className="paragraph-light subtext-steps">
                Waar zou cultuuronderwijs op jouw school aan moeten bijdragen?
                Wat vind je als school belangrijk? En wat wil je je leerlingen
                meegeven?{" "}
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
                      <div>1.1</div>
                    </div>
                    <h3 className="form-heading horizontal-center">
                      Beschrijven
                    </h3>
                  </div>
                  <div className="form-row first">
                    <div className="form-row-header">
                      <h4>Wat is jullie visie op cultuuronderwijs?</h4>
                    </div>
                    <div className="form-wrapper w-form">
                      <form
                        id="email-form"
                        name="email-form"
                        data-name="Email Form"
                        className="form"
                      >
                        <textarea
                          data-name="visie op cultuuronderwijs"
                          onChange={this.changeHandler}
                          maxLength={5000}
                          id="_1_1_1"
                          name="visie-op-cultuuronderwijs"
                          placeholder="Antwoord"
                          className="text-field field-textarea w-input"
                          defaultValue={this.state._1_1_1}
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
                      <h4>Is deze visie vastgelegd in een beleidsstuk?</h4>
                    </div>
                    <div className="form-wrapper w-form">
                      <form
                        id="email-form"
                        name="email-form"
                        data-name="Email Form"
                        className="form _2-col-row"
                      >
                        <label className="radio-button-field _2col w-radio">
                          <input
                            type="radio"
                            data-name="1-1yesno_1"
                            defaultValue="Radio"
                            name="1-1yesno_1"
                            className="w-form-formradioinput radio-button w-radio-input"
                            id="_1_1_2_1"
                            onChange={this.changeHandlerRadio}
                            checked={this.state._1_1_2 === '_1_1_2_1'}  

                          />
                          <span className="checkbox-label w-form-label">
                            Ja
                          </span>
                        </label>
                        <label className="radio-button-field w-radio">
                          <input
                            type="radio"
                            data-name="1-1yesno_1"
                            defaultValue="Radio"
                            name="1-1yesno_1"
                            id="_1_1_2_2"
                            className="w-form-formradioinput radio-button w-radio-input"
                            onChange={this.changeHandlerRadio}
                            checked={this.state._1_1_2 === '_1_1_2_2'}  
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
                  <div className="form-row">
                    <div className="form-row-header">
                      <h4>
                        Wat willen jullie met het cultuuronderwijs op jullie
                        school bereiken?
                      </h4>
                      <div className="note-box">
                        <div className="label">
                          Hulp
                          <br />
                        </div>
                        <div className="paragraph-small note">
                          Wat zijn de doelstellingen van jullie school met
                          betrekking tot cultuuronderwijs? <br />
                          Waar gaan jullie voor als het gaat om
                          cultuuronderwijs?
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
                          id="_1_1_3"
                          name="field-2"
                          data-name="Field 2"
                          className="text-field field-textarea w-input"
                          defaultValue={this.state._1_1_3}
                          onChange={this.changeHandler}
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
                  <div className="form-row hide">
                    <div className="form-row-header">
                      <h6>
                        Het cultuurbeleidsplan kunt je aan het einde van de
                        vragenlijst uploaden
                      </h6>
                    </div>
                    <a
                      href="#"
                      className="button button-outline w-inline-block"
                    >
                      <div>upload</div>
                    </a>
                  </div>
                </div>
                <div className="form-section">
                  <div className="form-section-header">
                    <div className="form-section-number">
                      <div>1.2</div>
                    </div>
                    <div>
                      <h3 className="form-heading">Normeren/stellingen</h3>
                      <p>
                        In hoeverre passen de volgende stellingen bij wat jullie
                        leerlingen willen meegeven?
                        <br />
                        Wij vinden het belangrijk dat in ons cultuuronderwijs..
                        <br />
                      </p>
                      <p className="paragraph-small note table">
                        1: onbelangrijk
                        <br />
                        5: zeer belangrijk
                        <br />
                      </p>
                    </div>
                  </div>
                  <div className="table">
                    <div className="table-header">
                      <div className="table-empty-cell" />
                      <h6 id="w-node-a8c96fbf667c-b209e895">1</h6>
                      <h6>2</h6>
                      <h6>3</h6>
                      <h6>4</h6>
                      <h6>5</h6>
                    </div>
                    <div className="form-block table w-form">
                      <form
                        id="wf-form-1-2table_1"
                        name="wf-form-1-2table_1"
                        data-name="1-2table_1"
                        className="table-row"
                      >
                        <p>
                          Onze leerlingen leren betekenis geven aan en
                          reflecteren op zichzelf en de wereld
                        </p>
                        <div
                          id="w-node-b820c8d3cbb8-b209e895"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="1-2table_1"
                              defaultValue="Radio"
                              name="1-2table_1"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_1_2_1_1"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._1_2_1 === '_1_2_1_1'}  
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-bd1b56702b4d-b209e895"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="1-2table_1"
                              defaultValue="Radio"
                              name="1-2table_1"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_1_2_1_2"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._1_2_1 === '_1_2_1_2'}  
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-2bc9ce60c030-b209e895"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="1-2table_1"
                              defaultValue="Radio"
                              name="1-2table_1"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_1_2_1_3"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._1_2_1 === '_1_2_1_3'}  
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-b2779ee762ed-b209e895"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="1-2table_1"
                              defaultValue="Radio"
                              name="1-2table_1"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_1_2_1_4"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._1_2_1 === '_1_2_1_4'}  
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-93d99f924a6d-b209e895"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="1-2table_1"
                              defaultValue="Radio"
                              name="1-2table_1"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_1_2_1_5"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._1_2_1 === '_1_2_1_5'}  
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
                        id="wf-form-1-2table_2"
                        name="wf-form-1-2table_2"
                        data-name="1-2table_2"
                        className="table-row"
                      >
                        <p>
                          Onze leerlingen zelfsturend zijn en{" "}
                          <em>vanuit hun eigen vraag en interesse</em> werken
                        </p>
                        <div
                          id="w-node-fb2a5475ac2c-b209e895"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="1-2table_2"
                              defaultValue="Radio"
                              name="1-2table_2"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_1_2_2_1"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._1_2_2 === '_1_2_2_1'}  
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-fb2a5475ac30-b209e895"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="1-2table_2"
                              defaultValue="Radio"
                              name="1-2table_2"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_1_2_2_2"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._1_2_2 === '_1_2_2_2'}  
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-fb2a5475ac34-b209e895"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="1-2table_2"
                              defaultValue="Radio"
                              name="1-2table_2"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_1_2_2_3"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._1_2_2 === '_1_2_2_3'}  
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-fb2a5475ac38-b209e895"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="1-2table_2"
                              defaultValue="Radio"
                              name="1-2table_2"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_1_2_2_4"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._1_2_2 === '_1_2_2_4'}  
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-fb2a5475ac3c-b209e895"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="1-2table_2"
                              defaultValue="Radio"
                              name="1-2table_2"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_1_2_2_5"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._1_2_2 === '_1_2_2_5'}  
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
                        id="wf-form-1-2table_3"
                        name="wf-form-1-2table_3"
                        data-name="1-2table_3"
                        className="table-row"
                      >
                        <p>
                          Onze leerlingen <em>zich verbonden voelen</em> met hun
                          eigen omgeving en achtergrond
                        </p>
                        <div
                          id="w-node-255b53ac21a5-b209e895"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="1-2table_3"
                              defaultValue="Radio"
                              name="1-2table_3"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_1_2_3_1"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._1_2_3 === '_1_2_3_1'}  
                              
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-255b53ac21a9-b209e895"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="1-2table_3"
                              defaultValue="Radio"
                              name="1-2table_3"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_1_2_3_2"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._1_2_3 === '_1_2_3_2'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-255b53ac21ad-b209e895"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="1-2table_3"
                              defaultValue="Radio"
                              name="1-2table_3"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_1_2_3_3"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._1_2_3 === '_1_2_3_3'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-255b53ac21b1-b209e895"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="1-2table_3"
                              defaultValue="Radio"
                              name="1-2table_3"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_1_2_3_4"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._1_2_3 === '_1_2_3_4'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-255b53ac21b5-b209e895"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="1-2table_3"
                              defaultValue="Radio"
                              name="1-2table_3"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_1_2_3_5"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._1_2_3 === '_1_2_3_5'}
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
                        id="wf-form-1-2table_4"
                        name="wf-form-1-2table_4"
                        data-name="1-2table_4"
                        className="table-row"
                      >
                        <p>
                          Onze leerlingen een{" "}
                          <em>
                            zo breed mogelijk pallet aan culturele en
                            kunstzinnige activiteiten maken en meemaken
                          </em>
                        </p>
                        <div
                          id="w-node-337b294cae37-b209e895"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="1-2table_4"
                              defaultValue="Radio"
                              name="1-2table_4"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_1_2_4_1"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._1_2_4 === '_1_2_4_1'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-337b294cae3b-b209e895"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="1-2table_4"
                              defaultValue="Radio"
                              name="1-2table_4"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_1_2_4_2"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._1_2_4 === '_1_2_4_2'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-337b294cae3f-b209e895"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="1-2table_4"
                              defaultValue="Radio"
                              name="1-2table_4"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_1_2_4_3"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._1_2_4 === '_1_2_4_3'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-337b294cae43-b209e895"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="1-2table_4"
                              defaultValue="Radio"
                              name="1-2table_4"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_1_2_4_4"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._1_2_4 === '_1_2_4_4'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-337b294cae47-b209e895"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="1-2table_4"
                              defaultValue="Radio"
                              name="1-2table_4"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_1_2_4_5"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._1_2_4 === '_1_2_4_5'}
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
                        id="wf-form-1-2table_5"
                        name="wf-form-1-2table_5"
                        data-name="1-2table_5"
                        className="table-row"
                      >
                        <p>
                          Taalontwikkeling of sociaal-emotionele ontwikkeling
                          wordt versterkt
                        </p>
                        <div
                          id="w-node-1417987d651f-b209e895"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="1-2table_5"
                              defaultValue="Radio"
                              name="1-2table_5"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_1_2_5_1"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._1_2_5 === '_1_2_5_1'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-1417987d6523-b209e895"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="1-2table_5"
                              defaultValue="Radio"
                              name="1-2table_5"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_1_2_5_2"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._1_2_5 === '_1_2_5_2'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-1417987d6527-b209e895"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="1-2table_5"
                              defaultValue="Radio"
                              name="1-2table_5"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_1_2_5_3"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._1_2_5 === '_1_2_5_3'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-1417987d652b-b209e895"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="1-2table_5"
                              defaultValue="Radio"
                              name="1-2table_5"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_1_2_5_4"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._1_2_5 === '_1_2_5_4'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-1417987d652f-b209e895"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="1-2table_5"
                              defaultValue="Radio"
                              name="1-2table_5"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_1_2_5_5"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._1_2_5 === '_1_2_5_5'}
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
                        id="wf-form-1-2table_6"
                        name="wf-form-1-2table_6"
                        data-name="1-2table_6"
                        className="table-row"
                      >
                        <p>
                          Onze leerlingen<em> ambachtelijke vaardigheden</em>{" "}
                          ontwikkelen in uiteenlopende media (materialen,
                          ICT-middelen, voorwerpen, instrumenten, gesproken en
                          geschreven taal, het (eigen) lichaam)
                        </p>
                        <div
                          id="w-node-cab996aeedf5-b209e895"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="1-2table_6"
                              defaultValue="Radio"
                              name="1-2table_6"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_1_2_6_1"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._1_2_6 === '_1_2_6_1'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-cab996aeedf9-b209e895"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="1-2table_6"
                              defaultValue="Radio"
                              name="1-2table_6"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_1_2_6_2"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._1_2_6 === '_1_2_6_2'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-cab996aeedfd-b209e895"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="1-2table_6"
                              defaultValue="Radio"
                              name="1-2table_6"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_1_2_6_3"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._1_2_6 === '_1_2_6_3'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-cab996aeee01-b209e895"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="1-2table_6"
                              defaultValue="Radio"
                              name="1-2table_6"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_1_2_6_4"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._1_2_6 === '_1_2_6_4'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-cab996aeee05-b209e895"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="1-2table_6"
                              defaultValue="Radio"
                              name="1-2table_6"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_1_2_6_5"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._1_2_6 === '_1_2_6_5'}
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
                        id="wf-form-1-2table_7"
                        name="wf-form-1-2table_7"
                        data-name="1-2table_7"
                        className="table-row"
                      >
                        <p>
                          Onze leerlingen hun artistiek, creatief en innovatief
                          vermogen ontwikkelen
                        </p>
                        <div
                          id="w-node-439294edf079-b209e895"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="1-2table_7"
                              defaultValue="Radio"
                              name="1-2table_7"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_1_2_7_1"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._1_2_7 === '_1_2_7_1'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-439294edf07d-b209e895"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="1-2table_7"
                              defaultValue="Radio"
                              name="1-2table_7"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_1_2_7_2"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._1_2_7 === '_1_2_7_2'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-439294edf081-b209e895"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="1-2table_7"
                              defaultValue="Radio"
                              name="1-2table_7"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_1_2_7_3"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._1_2_7 === '_1_2_7_3'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-439294edf085-b209e895"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="1-2table_7"
                              defaultValue="Radio"
                              name="1-2table_7"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_1_2_7_4"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._1_2_7 === '_1_2_7_4'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-439294edf089-b209e895"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="1-2table_7"
                              defaultValue="Radio"
                              name="1-2table_7"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_1_2_7_5"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._1_2_7 === '_1_2_7_5'}
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
                        id="wf-form-1-2table_8"
                        name="wf-form-1-2table_8"
                        data-name="1-2table_8"
                        className="table-row"
                      >
                        <p>
                          Onze leerlingen <em>zich kunnen uiten</em> door
                          artistieke expressie en dit kunnen presenteren
                        </p>
                        <div
                          id="w-node-debb4ca53e28-b209e895"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="1-2table_8"
                              defaultValue="Radio"
                              name="1-2table_8"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_1_2_8_1"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._1_2_8 === '_1_2_8_1'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-debb4ca53e2c-b209e895"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="1-2table_8"
                              defaultValue="Radio"
                              name="1-2table_8"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_1_2_8_2"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._1_2_8 === '_1_2_8_2'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-debb4ca53e30-b209e895"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="1-2table_8"
                              defaultValue="Radio"
                              name="1-2table_8"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_1_2_8_3"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._1_2_8 === '_1_2_8_3'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-debb4ca53e34-b209e895"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="1-2table_8"
                              defaultValue="Radio"
                              name="1-2table_8"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_1_2_8_4"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._1_2_8 === '_1_2_8_4'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-debb4ca53e38-b209e895"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="1-2table_8"
                              defaultValue="Radio"
                              name="1-2table_8"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_1_2_8_5"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._1_2_8 === '_1_2_8_5'}
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
                        id="wf-form-1-2table_9"
                        name="wf-form-1-2table_9"
                        data-name="1-2table_9"
                        className="table-row"
                      >
                        <p>
                          Aandacht is voor <em>vakoverstijgend </em>verbinden
                          met andere vakken, leergebieden, overkoepelende
                          vaardigheden en thema’s
                        </p>
                        <div
                          id="w-node-fa33e18184c1-b209e895"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="1-2table_9"
                              defaultValue="Radio"
                              name="1-2table_9"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_1_2_9_1"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._1_2_9 === '_1_2_9_1'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-fa33e18184c5-b209e895"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="1-2table_9"
                              defaultValue="Radio"
                              name="1-2table_9"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_1_2_9_2"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._1_2_9 === '_1_2_9_2'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-fa33e18184c9-b209e895"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="1-2table_9"
                              defaultValue="Radio"
                              name="1-2table_9"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_1_2_9_3"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._1_2_9 === '_1_2_9_3'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-fa33e18184cd-b209e895"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="1-2table_9"
                              defaultValue="Radio"
                              name="1-2table_9"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_1_2_9_4"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._1_2_9 === '_1_2_9_4'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-fa33e18184d1-b209e895"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="1-2table_9"
                              defaultValue="Radio"
                              name="1-2table_9"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_1_2_9_5"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._1_2_9 === '_1_2_9_5'}
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
                        id="wf-form-1-2table_10"
                        name="wf-form-1-2table_10"
                        data-name="1-2table_10"
                        className="table-row end"
                      >
                        <p>
                          Wij onze leerlingen een onderzoekende en open houding
                          meegeven
                        </p>
                        <div
                          id="w-node-81cae4c39863-b209e895"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="1-2table_10"
                              defaultValue="Radio"
                              name="1-2table_10"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_1_2_10_1"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._1_2_10 === '_1_2_10_1'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-81cae4c39867-b209e895"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="1-2table_10"
                              defaultValue="Radio"
                              name="1-2table_10"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_1_2_10_2"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._1_2_10 === '_1_2_10_2'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-81cae4c3986b-b209e895"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="1-2table_10"
                              defaultValue="Radio"
                              name="1-2table_10"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_1_2_10_3"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._1_2_10 === '_1_2_10_3'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-81cae4c3986f-b209e895"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="1-2table_10"
                              defaultValue="Radio"
                              name="1-2table_10"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_1_2_10_4"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._1_2_10 === '_1_2_10_4'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-81cae4c39873-b209e895"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="1-2table_10"
                              defaultValue="Radio"
                              name="1-2table_10"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_1_2_10_5"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._1_2_10 === '_1_2_10_5'}
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
                      <div>1.3</div>
                    </div>
                    <h3 className="form-heading horizontal-center">
                      Beoordelen
                    </h3>
                  </div>
                  <div className="form-row first">
                    <div className="form-row-header">
                      <h4>
                        In hoeverre zijn jullie tevreden over de
                        cultuuronderwijsvisie van jullie school zoals bij vraag
                        1.1 ingevuld? Licht de beoordeling toe.
                      </h4>
                      <div className="note-box medium">
                        <div className="label">
                          Hulp
                          <br />
                        </div>
                        <div className="paragraph-small note">
                          Is er ‘voldoende’ visie? Is het voldoende zichtbaar?
                          Is de visie helder, duidelijk en onderbouwd? Is de
                          visie leidend en bindend voor het beleid in de school?{" "}
                          <br />
                          Helpt de visie om keuzes te maken voor
                          cultuuronderwijs? Zijn de doelstellingen duidelijk en
                          leidend? Wat zijn de knelpunten?
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
                          defaultValue={this.state._1_3}
                          id="_1_3"
                          onChange={this.changeHandler}
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
                      <div>1.4</div>
                    </div>
                    <h3 className="form-heading horizontal-center">
                      Verder kijken
                    </h3>
                  </div>
                  <div className="form-row first">
                    <div className="form-row-header">
                      <h4>
                        Heeft jullie school de intentie om haar visie en beleid
                        op het gebied van cultuuronderwijs verder te
                        ontwikkelen?
                      </h4>
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
                            id="_1_4_1_1"
                            onChange={this.changeHandlerRadio}
                            checked={this.state._1_4_1 === '_1_4_1_1'}
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
                            id="_1_4_1_2"
                            onChange={this.changeHandlerRadio}
                            checked={this.state._1_4_1 === '_1_4_1_2'}
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
                  {this.state._1_4_1 === "" ? "" : (
                    this.state._1_4_1 === '_1_4_1_1' ? (
                  <div>  
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
                          defaultValue={this.state._1_4_2}
                          id="_1_4_2"
                          onChange={this.changeHandler}
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
                            id="_1_4_3_1"
                            onChange={this.changeHandlerRadio}
                            checked={this.state._1_4_3 === '_1_4_3_1'}
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
                            id="_1_4_3_2"
                            onChange={this.changeHandlerRadio}
                            checked={this.state._1_4_3 === '_1_4_3_2'}
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
                  {this.state._1_4_3 === "" ? "" : (
                    this.state._1_4_3 === '_1_4_3_1' ? (
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
                          defaultValue={this.state._1_4_4}
                          id="_1_4_4"
                          onChange={this.changeHandler}
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
                  ) : (""))}
                  </div>
                  ) : ( 
                   
                  <div className="form-row end">
                    <div className="label answertype no">Indien nee</div>
                    <div className="form-row-header">
                      <h4>
                        Kunnen jullie aangeven waarom jullie geen intentie
                        hebben om jullie visie en/of beleid verder te
                        ontwikkelen? Licht het antwoord toe.
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
                          defaultValue={this.state._1_4_5}
                          id="_1_4_5"
                          onChange={this.changeHandler}
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
                      <div>1.5</div>
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
                        id="wf-form-1.5-scenario"
                        name="wf-form-1.5-scenario"
                        data-name="1 5 scenario"
                        className="form"
                      >
                        <label className="radio-button-field scenario _1 w-radio">
                          <input
                            type="radio"
                            data-name="1-5scenario_1"
                            defaultValue="Scenario 1"
                            name="1-5scenario_1"
                            className="w-form-formradioinput radio-button scenario w-radio-input"
                            id="_1_5_1"
                            onChange={this.changeHandlerRadio}
                            checked={this.state._1_5 === '_1_5_1'}
                          />
                          <div className="form-row-header scenario-header">
                            <h4 className="heading">Scenario 1</h4>
                            <p>
                              De school heeft geen visie vastgelegd op
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
                            data-name="1-5scenario_1"
                            defaultValue="Scenario 2"
                            name="1-5scenario_1"
                            className="w-form-formradioinput radio-button scenario w-radio-input"
                            id="_1_5_2"
                            onChange={this.changeHandlerRadio}
                            checked={this.state._1_5 === '_1_5_2'}
                            
                          />
                          <div className="form-row-header scenario-header">
                            <h4>Scenario 2</h4>
                            <p>
                              De school heeft een eigen visie op
                              cultuuronderwijs vastgelegd in een cultuurplan. De
                              visie wordt gedragen en geëvalueerd door de
                              directeur en iemand met cultuur onder haar hoede
                              (bv cultuurcontactpersoon, icc-er of leerkracht
                              cultuur), zij houden het team op de hoogte en waar
                              mogelijk praat het team mee.
                            </p>
                          </div>
                          <span
                            htmlFor="Scenario -2"
                            className="checkbox-label hide w-form-label"
                          >
                            Custom radio
                          </span>
                        </label>
                        <label className="radio-button-field scenario _3 w-radio">
                          <input
                            type="radio"
                            data-name="1-5scenario_1"
                            defaultValue="Scenario 3"
                            name="1-5scenario_1"
                            className="w-form-formradioinput radio-button scenario w-radio-input"
                            id="_1_5_3"
                            onChange={this.changeHandlerRadio}
                            checked={this.state._1_5 === '_1_5_3'}
                            
                          />
                          <div className="form-row-header scenario-header">
                            <h4>Scenario 3</h4>
                            <p>
                              De school heeft een eigen visie op
                              cultuuronderwijs die als apart onderdeel is
                              opgenomen in een schoolplan. De visie is
                              mede-ontwikkeld door het team en zij beslissen
                              mee.
                            </p>
                          </div>
                          <span
                            htmlFor="Scenario -3"
                            className="checkbox-label hide w-form-label"
                          >
                            Custom radio
                          </span>
                        </label>
                        <label className="radio-button-field scenario _4 w-radio">
                          <input
                            type="radio"
                            data-name="1-5scenario_1"
                            defaultValue="Scenario 4"
                            name="1-5scenario_1"
                            className="w-form-formradioinput radio-button scenario w-radio-input"
                            id="_1_5_4"
                            onChange={this.changeHandlerRadio}
                            checked={this.state._1_5 === '_1_5_4'}
                            
                          />
                          <div className="form-row-header scenario-header">
                            <h4>Scenario 4</h4>
                            <p>
                              De school heeft een visie op cultuuronderwijs
                              geïntegreerd in haar bredere onderwijsvisie en
                              opgenomen in het schoolplan. Deze brede visie, met
                              aandacht voor cultuuronderwijs, is ontwikkeld door
                              het team. Het team voelt zich eigenaar van de
                              visie en plannen, deze zijn een vast onderdeel
                              worden van de jaarlijkse evaluatie.
                            </p>
                          </div>
                          <span
                            htmlFor="Scenario -4"
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
                      <div>1.6</div>
                    </div>
                    <div>
                      <h3 className="form-heading horizontal-center">Extra</h3>
                    </div>
                  </div>
                  <div className="form-row first">
                    <div className="form-row-header long">
                      <h4>
                        Als jullie nog iets kwijt willen over ‘visie op
                        cultuuronderwijs’, kan dat hier.
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
                          defaultValue={this.state._1_6}
                          id="_1_6"
                          onChange={this.changeHandler}
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
                <div className="cta-wrap form-bottom">
                  <div className="cta-btn-row first">
{/* 
                    <Link
                    to={"/step02"}
                    className="button cc-jumbo-button w-inline-block"
                    onClick={this.submitHandler}
                  >
                    <div>Volgende stap</div>
                  </Link> */}

                  <Link
                      to={"/step02"}
                      className="button cc-jumbo-button w-inline-block"
                      onClick={event => {
                        this.submitHandler(event, "/step02");
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

        <br />
        <br />
        <br />
        <br />
        <button onClick={this.consoleLog}>ConsoleLog</button>
        <button onClick={this.getResults}>RESULTS</button>
      </div>
    );
  }
}

export default withRouter(Step1);
