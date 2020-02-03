import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

class Step2 extends React.Component {
  state = {
    user: this.props.user,
    theposition: window.pageYOffset,
    error: ""    
    // _3_1_1: "",
    // _3_1_2: "",
    // _3_1_3: "",
    // _3_1_4: "",
    // _3_1_5: "",
    // _3_1_6: "",
    // _3_1_7: "",
    // _3_2_1: "",
    // _3_2_2: "",
    // _3_2_3: "",
    // _3_2_4: "",
    // _3_2_5: "",
    // _3_2_6: "",
    // _3_2_7: "",
    // _3_2_8: "",
    // _3_2_9: "",
    // _3_2_10: "",
    // _3_3: "",
    // _3_4_1: "",
    // _3_4_2: "",
    // _3_4_3: "",
    // _3_4_4: "",
    // _3_4_5: "",
    // _3_5: "",
    // _3_6: "",
  };
  componentDidMount() {
    window.scrollTo(0, 0);
    axios
      .post("/api/datatransfer/results", this.state)
      .then(response => {
        // console.log("Results", response.data);
        this.setState({
          user: this.props.user, ...response.data[3]
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
    let idArr = id.split("_")
    idArr.pop()
    let mainId = idArr.join("_")
    this.setState({
      [mainId]: id
    });
  };

  submitHandler = (event, target) => {
    event.preventDefault();
    if (
      this.state._3_2_1 === "" ||
      this.state._3_2_2 === "" ||
      this.state._3_2_3 === "" ||
      this.state._3_2_4 === "" ||
      this.state._3_2_5 === "" ||
      this.state._3_2_6 === "" ||
      this.state._3_2_7 === "" ||
      this.state._3_2_8 === "" ||
      this.state._3_2_9 === "" ||
      this.state._3_2_10 === ""
    ) {
        this.setState({
        error: "Section 3.2 not complete"
        })
        return
    }
    axios
      .post("/api/datatransfer/step03push", this.state)
      .then(response => {
        // console.log("step03push Response", response.data);
        this.props.history.push(target);
      })
      .catch(error => {
        console.log(error.response.data.message);
        // this.setState({
        // error: error.response.data.message
        // })
      });
  };


  submitHandlerPrev = (event, target) => {
    event.preventDefault();
    axios
      .post("/api/datatransfer/step03push", this.state)
      .then(response => {
        // console.log("step03push Response", response.data);
        this.props.history.push(target);
      })
      .catch(error => {
        // console.log(error.response.data.message);
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
    })
  }

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
                  style={{opacity: "0.6"}}
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
                  className="form-nav-wrapper w-inline-block w--current"
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
          <div className="nav-bg" style={{opacity: "1", boxShadow: "none"}} />
        </div>
        <div className="section hero subpage steps">
          <div className="container">
            <div className="form-description">
              <img src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578511731/step3_j9hctt.svg" alt="" className="step-icon" />
              <div className="details-wrap">
                <h1 className="heading-jumbo step-headline">3</h1>
                <h1 className="step-headline-h2">Programma</h1>
              </div>
              <div className="paragraph-light subtext-steps">
                Op welke manier geeft jouw school het culturele programma voor
                de leerlingen vorm en inhoud? Op welke manier vullen jullie het
                programma in?
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
                      <div>3.1</div>
                    </div>
                    <h3 className="form-heading horizontal-center">
                      Beschrijven
                    </h3>
                  </div>
                  <div className="form-row first">
                    <div className="form-row-header long">
                      <h4>
                        Op welke manier wordt het programma cultuuronderwijs op
                        jullie school ingevuld?
                      </h4>
                      <div className="note-box medium">
                        <div className="label">
                          HULP – bij a<br />
                        </div>
                        <div className="paragraph-small note">
                          Bijvoorbeeld in projectweken, lessen of in excursies.
                          In de disciplines: dans, drama, muziek, beeldende
                          vormgeving, filosofie, media- of erfgoededucatie. Met
                          behulp van een kunst- of cultuurmenu.&nbsp;
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
                          defaultValue={this.state._3_1_1}
                          onChange={this.changeHandler}
                          id="_3_1_1"
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
                  <div className="form-row first">
                    <div className="form-row-header">
                      <h4>Brengen jullie hier bewust samenhang in aan?</h4>
                      <div className="note-box">
                        <div className="label">
                          HULP – bij B<br />
                        </div>
                        <div className="paragraph-small note">
                          U kunt denken aan samenhang in cultuuronderwijs als:
                          <br />
                        </div>
                        <ul className="list">
                          <li>
                            <div className="paragraph-small note">
                              De culturele activiteiten met elkaar samenhangen,
                              bijvoorbeeld rond een thema.
                              <br />
                            </div>
                          </li>
                          <li>
                            <div className="paragraph-small note">
                              Aansluit bij andere vakken (horizontaal), de
                              culturele omgeving van de leerling (horizontaal),
                              de leerontwikkeling van het kind(horizontaal),
                              andere leerjaren (verticaal, van groep 1 t/m 8)
                              en/of de kerndoelen van het leergebied
                              kunstzinnige oriëntatie.
                              <br />
                            </div>
                          </li>
                        </ul>
                      </div>
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
                            data-name="3-1yesno_1"
                            defaultValue="Radio"
                            name="3-1yesno_1"
                            className="w-form-formradioinput radio-button w-radio-input"
                            id="_3_1_2_1"
                            onChange={this.changeHandlerRadio}
                            checked={this.state._3_1_2 === '_3_1_2_1'} 
                            />
                          <span className="checkbox-label w-form-label">
                            Ja
                          </span>
                        </label>
                        <label className="radio-button-field w-radio">
                          <input
                            type="radio"
                            data-name="3-1yesno_1"
                            defaultValue="Radio"
                            name="3-1yesno_1"
                            className="w-form-formradioinput radio-button w-radio-input"
                            id="_3_1_2_2"
                            onChange={this.changeHandlerRadio}
                            checked={this.state._3_1_2 === '_3_1_2_2'} 
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
                  {this.state._3_1_2 === "" ? "" : (
                    this.state._3_1_2 === '_3_1_2_1' ? (
                      <div>
                  <div className="form-row first">
                    <div className="form-row-header">
                      <div className="label answertype yes">Indien ja</div>
                      <h4>
                        Heeft jullie school een doorgaande leerlijn
                        cultuuronderwijs uitgewerkt en vastgelegd (bijvoorbeeld
                        voor een van de kunstdisciplines)?
                      </h4>
                      <div className="note-box">
                        <div className="label">
                          HULP – bij C<br />
                        </div>
                        <div className="paragraph-small note">
                          Beschrijf in welke discipline(s) of voor welke
                          culturele vaardigheden jullie school een doorgaande
                          leerlijn heeft ontwikkeld. Of hoe jullie school met
                          een uitgewerkt programma zorgt voor horizontale en/of
                          verticale samenhang in culturele activiteiten en/of
                          lessen.
                          <br />
                        </div>
                      </div>
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
                            data-name="3-1yesno_2"
                            defaultValue="Radio"
                            name="3-1yesno_2"
                            className="w-form-formradioinput radio-button w-radio-input"
                            id="_3_1_3_1"
                            onChange={this.changeHandlerRadio}
                            checked={this.state._3_1_3 === '_3_1_3_1'} 
                          />
                          <span className="checkbox-label w-form-label">
                            Ja
                          </span>
                        </label>
                        <label className="radio-button-field w-radio">
                          <input
                            type="radio"
                            data-name="3-1yesno_2"
                            defaultValue="Radio"
                            name="3-1yesno_2"
                            className="w-form-formradioinput radio-button w-radio-input"
                            id="_3_1_3_2"
                            onChange={this.changeHandlerRadio}
                            checked={this.state._3_1_3 === '_3_1_3_2'} 
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
                  {this.state._3_1_3 === "" ? "" : (
                    this.state._3_1_3 === '_3_1_3_1' ? (
                  <div className="form-row">
                    <div className="form-row-header">
                      <div className="label answertype yes">Indien ja</div>
                      <h4>
                        Geef een korte omschrijving van de doorgaande leerlijn
                        cultuuronderwijs op jullie school.
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
                          defaultValue={this.state._3_1_4}
                          onChange={this.changeHandler}
                          id="_3_1_4"
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
                  ) : (
                    <div className="form-row">
                    <div className="form-row-header">
                      <div className="label answertype no">Indien Nee</div>
                      <h4>
                        Wat is jullie manier om samenhang aan te brengen in het
                        cultuuronderwijs?
                      </h4>
                      <div className="note-box">
                        <div className="label">
                          HULP – bij E<br />
                        </div>
                        <div className="paragraph-small note">
                          Bijvoorbeeld door te werken met een methode, door een
                          beredeneerde keuze te maken in het cultuuraanbod of
                          een menu af te nemen, door te werken in thema’s of
                          projecten, of op een eigen manier.
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
                          defaultValue={this.state._3_1_5}
                          onChange={this.changeHandler}
                          id="_3_1_5"
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
                  ) : ( 
                    <div>
                  <div className="form-row">
                    <div className="form-row-header">
                      <div className="label answertype no">Indien Nee</div>
                      <h4>Waarom wordt niet bewust samenhang aangebracht?</h4>
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
                          defaultValue={this.state._3_1_6}
                          onChange={this.changeHandler}
                          id="_3_1_6"
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
                  ))}
                  <div className="form-row">
                    <div className="form-row-header">
                      <h4>
                        Hoe volgen jullie de ontwikkeling van jullie leerlingen
                        in cultuuronderwijs?
                      </h4>
                      <div className="note-box medium">
                        <div className="label">
                          HULP – bij G<br />
                        </div>
                        <div className="paragraph-small note">
                          Je kunt de ontwikkeling van leerlingen bijvoorbeeld
                          volgen met behulp van fysieke of digitale portfolio’s
                          zoals Schoolfolio.
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
                          defaultValue={this.state._3_1_7}
                          onChange={this.changeHandler}
                          id="_3_1_7"
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
                      <div>3.2</div>
                    </div>
                    <div>
                      <h3 className="form-heading">Normeren/stellingen</h3>
                      <p>
                        In hoeverre passen de volgende stellingen bij de
                        invulling van jullie programma op jullie school?
                        <br />
                        Het programma voor cultuuronderwijs
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
                      <h6 id="w-node-dbe912245c37-38be1e11">1</h6>
                      <h6>2</h6>
                      <h6>3</h6>
                      <h6>4</h6>
                      <h6>5</h6>
                    </div>
                    <div className="form-block table w-form">
                      <form
                        id="wf-form-3-2table_1"
                        name="wf-form-3-2table_1"
                        data-name="3-2table_1"
                        className="table-row"
                      >
                        <p>
                          Biedt onderwerpen die onze leerlingen leren
                          betekenisgeven aan en reflecteren op zichzelf en de
                          wereld
                        </p>
                        <div
                          id="w-node-dbe912245c45-38be1e11"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="3-2table_1"
                              defaultValue="Radio"
                              name="3-2table_1"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_3_2_1_1"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._3_2_1 === '_3_2_1_1'}  
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-dbe912245c49-38be1e11"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="3-2table_1"
                              defaultValue="Radio"
                              name="3-2table_1"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_3_2_1_2"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._3_2_1 === '_3_2_1_2'}  
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-dbe912245c4d-38be1e11"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="3-2table_1"
                              defaultValue="Radio"
                              name="3-2table_1"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_3_2_1_3"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._3_2_1 === '_3_2_1_3'}  
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-dbe912245c51-38be1e11"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="3-2table_1"
                              defaultValue="Radio"
                              name="3-2table_1"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_3_2_1_4"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._3_2_1 === '_3_2_1_4'}  
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-dbe912245c55-38be1e11"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="3-2table_1"
                              defaultValue="Radio"
                              name="3-2table_1"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_3_2_1_5"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._3_2_1 === '_3_2_1_5'}  
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
                        id="wf-form-3-2table_2"
                        name="wf-form-3-2table_2"
                        data-name="3-2table_2"
                        className="table-row"
                      >
                        <p>
                          Geeft onze leerlingen de ruimte om zelfsturend te zijn
                          en <em>vanuit hun eigen vraag en interesse</em> te
                          kunnen werken
                        </p>
                        <div
                          id="w-node-dbe912245c63-38be1e11"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="3-2table_2"
                              defaultValue="Radio"
                              name="3-2table_2"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_3_2_2_1"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._3_2_2 === '_3_2_2_1'}  
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-dbe912245c67-38be1e11"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="3-2table_2"
                              defaultValue="Radio"
                              name="3-2table_2"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_3_2_2_2"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._3_2_2 === '_3_2_2_2'}  
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-dbe912245c6b-38be1e11"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="3-2table_2"
                              defaultValue="Radio"
                              name="3-2table_2"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_3_2_2_3"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._3_2_2 === '_3_2_2_3'}  
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-dbe912245c6f-38be1e11"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="3-2table_2"
                              defaultValue="Radio"
                              name="3-2table_2"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_3_2_2_4"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._3_2_2 === '_3_2_2_4'}  
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-dbe912245c73-38be1e11"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="3-2table_2"
                              defaultValue="Radio"
                              name="3-2table_2"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_3_2_2_5"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._3_2_2 === '_3_2_2_5'}  
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
                        id="wf-form-3-2table_3"
                        name="wf-form-3-2table_3"
                        data-name="3-2table_3"
                        className="table-row"
                      >
                        <p>
                          Draagt eraan bij dat onze leerlingen{" "}
                          <em>zich verbonden voelen</em> met hun eigen omgeving
                          en achtergrond
                        </p>
                        <div
                          id="w-node-dbe912245c81-38be1e11"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="3-2table_3"
                              defaultValue="Radio"
                              name="3-2table_3"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_3_2_3_1"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._3_2_3 === '_3_2_3_1'}  
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-dbe912245c85-38be1e11"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="3-2table_3"
                              defaultValue="Radio"
                              name="3-2table_3"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_3_2_3_2"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._3_2_3 === '_3_2_3_2'}  
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-dbe912245c89-38be1e11"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="3-2table_3"
                              defaultValue="Radio"
                              name="3-2table_3"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_3_2_3_3"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._3_2_3 === '_3_2_3_3'}  
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-dbe912245c8d-38be1e11"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="3-2table_3"
                              defaultValue="Radio"
                              name="3-2table_3"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_3_2_3_4"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._3_2_3 === '_3_2_3_4'}  
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-dbe912245c91-38be1e11"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="3-2table_3"
                              defaultValue="Radio"
                              name="3-2table_3"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_3_2_3_5"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._3_2_3 === '_3_2_3_5'}  
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
                        id="wf-form-3-2table_4"
                        name="wf-form-3-2table_4"
                        data-name="3-2table_4"
                        className="table-row"
                      >
                        <p>
                          Biedt onze leerlingen een zo breed mogelijk palet om{" "}
                          <em>culturele, en kunstzinnige activiteiten </em>te
                          maken en mee te maken
                        </p>
                        <div
                          id="w-node-dbe912245c9f-38be1e11"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="3-2table_4"
                              defaultValue="Radio"
                              name="3-2table_4"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_3_2_4_1"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._3_2_4 === '_3_2_4_1'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-dbe912245ca3-38be1e11"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="3-2table_4"
                              defaultValue="Radio"
                              name="3-2table_4"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_3_2_4_2"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._3_2_4 === '_3_2_4_2'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-dbe912245ca7-38be1e11"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="3-2table_4"
                              defaultValue="Radio"
                              name="3-2table_4"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_3_2_4_3"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._3_2_4 === '_3_2_4_3'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-dbe912245cab-38be1e11"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="3-2table_4"
                              defaultValue={4}
                              name="3-2table_4"
                              id="node"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_3_2_4_4"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._3_2_4 === '_3_2_4_4'}
                            />
                            <span
                              htmlFor="node"
                              className="checkbox-label hide w-form-label"
                            />
                          </label>
                        </div>
                        <div
                          id="w-node-dbe912245caf-38be1e11"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="3-2table_4"
                              defaultValue="Radio"
                              name="3-2table_4"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_3_2_4_5"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._3_2_4 === '_3_2_4_5'}
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
                        id="wf-form-3-2table_5"
                        name="wf-form-3-2table_5"
                        data-name="3-2table_5"
                        className="table-row"
                      >
                        <p>
                          Versterkt de taalontwikkeling en sociaal emotionele
                          ontwikkeling bij leerlingen
                        </p>
                        <div
                          id="w-node-dbe912245cbd-38be1e11"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="3-2table_5"
                              defaultValue="Radio"
                              name="3-2table_5"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_3_2_5_1"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._3_2_5 === '_3_2_5_1'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-dbe912245cc1-38be1e11"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="3-2table_5"
                              defaultValue="Radio"
                              name="3-2table_5"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_3_2_5_2"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._3_2_5 === '_3_2_5_2'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-dbe912245cc5-38be1e11"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="3-2table_5"
                              defaultValue="Radio"
                              name="3-2table_5"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_3_2_5_3"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._3_2_5 === '_3_2_5_3'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-dbe912245cc9-38be1e11"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="3-2table_5"
                              defaultValue="Radio"
                              name="3-2table_5"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_3_2_5_4"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._3_2_5 === '_3_2_5_4'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-dbe912245ccd-38be1e11"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="3-2table_5"
                              defaultValue="Radio"
                              name="3-2table_5"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_3_2_5_5"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._3_2_5 === '_3_2_5_5'}
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
                        id="wf-form-3-2table_6"
                        name="wf-form-3-2table_6"
                        data-name="3-2table_6"
                        className="table-row"
                      >
                        <p>
                          Biedt de mogelijkheid om{" "}
                          <em>ambachtelijke vaardigheden</em> te ontwikkelen in
                          uiteenlopende media (materialen, ICT-middelen,
                          voorwerpen, instrumenten, gesproken en geschreven
                          taal, het (eigen) lichaam)
                        </p>
                        <div
                          id="w-node-dbe912245cde-38be1e11"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="3-2table_6"
                              defaultValue="Radio"
                              name="3-2table_6"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_3_2_6_1"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._3_2_6 === '_3_2_6_1'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-dbe912245ce2-38be1e11"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="3-2table_6"
                              defaultValue="Radio"
                              name="3-2table_6"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_3_2_6_2"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._3_2_6 === '_3_2_6_2'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-dbe912245ce6-38be1e11"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="3-2table_6"
                              defaultValue="Radio"
                              name="3-2table_6"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_3_2_6_3"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._3_2_6 === '_3_2_6_3'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-dbe912245cea-38be1e11"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="3-2table_6"
                              defaultValue="Radio"
                              name="3-2table_6"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_3_2_6_4"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._3_2_6 === '_3_2_6_4'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-dbe912245cee-38be1e11"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="3-2table_6"
                              defaultValue="Radio"
                              name="3-2table_6"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_3_2_6_5"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._3_2_6 === '_3_2_6_5'}
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
                        id="wf-form-3-2table_7"
                        name="wf-form-3-2table_7"
                        data-name="3-2table_7"
                        className="table-row"
                      >
                        <p>
                          Daagt onze leerlingen uit om hun artistiek, creatief
                          en innovatief vermogen te ontwikkelen
                        </p>
                        <div
                          id="w-node-dbe912245cfc-38be1e11"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="3-2table_7"
                              defaultValue="Radio"
                              name="3-2table_7"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_3_2_7_1"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._3_2_7 === '_3_2_7_1'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-dbe912245d00-38be1e11"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="3-2table_7"
                              defaultValue="Radio"
                              name="3-2table_7"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_3_2_7_2"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._3_2_7 === '_3_2_7_2'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-dbe912245d04-38be1e11"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="3-2table_7"
                              defaultValue={3}
                              name="3-2table_7"
                              id="node-3"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_3_2_7_3"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._3_2_7 === '_3_2_7_3'}
                            />
                            <span
                              htmlFor="node"
                              className="checkbox-label hide w-form-label"
                            />
                          </label>
                        </div>
                        <div
                          id="w-node-dbe912245d08-38be1e11"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="3-2table_7"
                              defaultValue="Radio"
                              name="3-2table_7"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_3_2_7_4"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._3_2_7 === '_3_2_7_4'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-dbe912245d0c-38be1e11"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="3-2table_7"
                              defaultValue={5}
                              name="3-2table_7"
                              id="node-2"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_3_2_7_5"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._3_2_7 === '_3_2_7_5'}
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
                        id="wf-form-3-2table_8"
                        name="wf-form-3-2table_8"
                        data-name="3-2table_8"
                        className="table-row"
                      >
                        <p>
                          Biedt ruimte voor artistieke expressie en presentatie
                        </p>
                        <div
                          id="w-node-dbe912245d1a-38be1e11"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="3-2table_8"
                              defaultValue="Radio"
                              name="3-2table_8"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_3_2_8_1"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._3_2_8 === '_3_2_8_1'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-dbe912245d1e-38be1e11"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="3-2table_8"
                              defaultValue="Radio"
                              name="3-2table_8"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_3_2_8_2"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._3_2_8 === '_3_2_8_2'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-dbe912245d22-38be1e11"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="3-2table_8"
                              defaultValue="Radio"
                              name="3-2table_8"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_3_2_8_3"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._3_2_8 === '_3_2_8_3'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-dbe912245d26-38be1e11"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="3-2table_8"
                              defaultValue="Radio"
                              name="3-2table_8"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_3_2_8_4"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._3_2_8 === '_3_2_8_4'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-dbe912245d2a-38be1e11"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="3-2table_8"
                              defaultValue="Radio"
                              name="3-2table_8"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_3_2_8_5"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._3_2_8 === '_3_2_8_5'}
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
                        id="wf-form-3-2table_9"
                        name="wf-form-3-2table_9"
                        data-name="3-2table_9"
                        className="table-row"
                      >
                        <p>
                          Biedt ruimte voor <em>vakoverstijgend </em>verbinden
                          met andere vakken, leergebieden, overkoepelende
                          vaardigheden en thema’s
                        </p>
                        <div
                          id="w-node-dbe912245d38-38be1e11"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="3-2table_9"
                              defaultValue="Radio"
                              name="3-2table_9"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_3_2_9_1"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._3_2_9 === '_3_2_9_1'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-dbe912245d3c-38be1e11"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="3-2table_9"
                              defaultValue="Radio"
                              name="3-2table_9"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_3_2_9_2"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._3_2_9 === '_3_2_9_2'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-dbe912245d40-38be1e11"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="3-2table_9"
                              defaultValue="Radio"
                              name="3-2table_9"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_3_2_9_3"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._3_2_9 === '_3_2_9_3'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-dbe912245d44-38be1e11"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="3-2table_9"
                              defaultValue="Radio"
                              name="3-2table_9"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_3_2_9_4"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._3_2_9 === '_3_2_9_4'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-dbe912245d48-38be1e11"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="3-2table_9"
                              defaultValue="Radio"
                              name="3-2table_9"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_3_2_9_5"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._3_2_9 === '_3_2_9_5'}
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
                        id="wf-form-3-2table_10"
                        name="wf-form-3-2table_10"
                        data-name="3-2table_10"
                        className="table-row end"
                      >
                        <p>
                          Draagt er aan bij dat onze leerlingen hun
                          onderzoekende en open houding ontwikkelen
                        </p>
                        <div
                          id="w-node-dbe912245d56-38be1e11"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="3-2table_10"
                              defaultValue="Radio"
                              name="3-2table_10"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_3_2_10_1"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._3_2_10 === '_3_2_10_1'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-dbe912245d5a-38be1e11"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="3-2table_10"
                              defaultValue="Radio"
                              name="3-2table_10"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_3_2_10_2"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._3_2_10 === '_3_2_10_2'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-dbe912245d5e-38be1e11"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="3-2table_10"
                              defaultValue="Radio"
                              name="3-2table_10"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_3_2_10_3"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._3_2_10 === '_3_2_10_3'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-dbe912245d62-38be1e11"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="3-2table_10"
                              defaultValue="Radio"
                              name="3-2table_10"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_3_2_10_4"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._3_2_10 === '_3_2_10_4'}
                            />
                            <span className="checkbox-label hide w-form-label" />
                          </label>
                        </div>
                        <div
                          id="w-node-dbe912245d66-38be1e11"
                          className="table-cell bullet"
                        >
                          <label className="radio-button-field w-radio">
                            <input
                              type="radio"
                              data-name="3-2table_10"
                              defaultValue="Radio"
                              name="3-2table_10"
                              className="w-form-formradioinput radio-button table w-radio-input"
                              id="_3_2_10_5"
                              onChange={this.changeHandlerRadio}
                              checked={this.state._3_2_10 === '_3_2_10_5'}
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
                      <div>3.3</div>
                    </div>
                    <h3 className="form-heading horizontal-center">
                      Beoordelen
                    </h3>
                  </div>
                  <div className="form-row first">
                    <div className="form-row-header">
                      <h4>
                        In hoeverre zijn jullie tevreden over het programma
                        cultuuronderwijs op jullie school? Licht de beoordeling
                        toe.
                      </h4>
                      <div className="note-box">
                        <div className="label">
                          Hulp
                          <br />
                        </div>
                        <div className="paragraph-small note">
                          Is de samenhang naar wens? Is de doorgaande leerlijn
                          expliciet geformuleerd? <br />
                          Geeft zij voldoende houvast voor docenten? Is zij
                          voldoende zichtbaar in het cultuuronderwijs? <br />
                          Is zij (voldoende) verticaal? Is zij (voldoende)
                          horizontaal? Wat zijn de knelpunten?
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
                          defaultValue={this.state._3_3}
                          onChange={this.changeHandler}
                          id="_3_3"
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
                      <div>3.4</div>
                    </div>
                    <h3 className="form-heading horizontal-center">
                      Verder kijken
                    </h3>
                  </div>
                  <div className="form-row first">
                    <div className="form-row-header">
                      <h4>
                        Heeft jullie school de intentie om haar programma voor
                        cultuuronderwijs (inhoud, samenhang en doorlopende
                        leerlijn) verder te ontwikkelen?
                      </h4>
                    </div>
                    <div className="form-wrapper w-form">
                      <form
                        id="wf-form-3-4"
                        name="wf-form-3-4"
                        data-name="3 4"
                        className="form _2-col-row"
                      >
                        <label className="radio-button-field _2col w-radio">
                          <input
                            type="radio"
                            data-name="3-4yesno_1"
                            defaultValue="Radio"
                            name="3-4yesno_1"
                            className="w-form-formradioinput radio-button w-radio-input"
                            id="_3_4_1_1"
                            onChange={this.changeHandlerRadio}
                            checked={this.state._3_4_1 === '_3_4_1_1'}
                          />
                          <span className="checkbox-label w-form-label">
                            Ja
                          </span>
                        </label>
                        <label className="radio-button-field w-radio">
                          <input
                            type="radio"
                            data-name="3-4yesno_1"
                            defaultValue="Radio"
                            name="3-4yesno_1"
                            className="w-form-formradioinput radio-button w-radio-input"
                            id="_3_4_1_2"
                            onChange={this.changeHandlerRadio}
                            checked={this.state._3_4_1 === '_3_4_1_2'}
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
                  {this.state._3_4_1 === "" ? "" : (
                    this.state._3_4_1 === '_3_4_1_1' ? (
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
                          defaultValue={this.state._3_4_2}
                          onChange={this.changeHandler}
                          id="_3_4_2"
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
                            id="radio"
                            className="w-form-formradioinput radio-button w-radio-input"
                            id="_3_4_3_1"
                            onChange={this.changeHandlerRadio}
                            checked={this.state._3_4_3 === '_3_4_3_1'}
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
                            id="radio"
                            className="w-form-formradioinput radio-button w-radio-input"
                            id="_3_4_3_2"
                            onChange={this.changeHandlerRadio}
                            checked={this.state._3_4_3 === '_3_4_3_2'}
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
                  {this.state._3_4_3 === "" ? "" : (
                    this.state._3_4_3 === '_3_4_3_1' ? (
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
                          defaultValue={this.state._3_4_4}
                          onChange={this.changeHandler}
                          id="_3_4_4"
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
                    <div className="form-row-header">
                      <div className="label answertype no">Indien Nee</div>
                      <h4>
                        Kunnen jullie aangeven waarom jullie geen plannen hebben
                        voor verdere ontwikkeling van jullie programma
                        cultuuronderwijs? Licht het antwoord toe.
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
                          defaultValue={this.state._3_4_5}
                          onChange={this.changeHandler}
                          id="_3_4_5"
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
                      <div>3.5</div>
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
                        id="wf-form-3-5-scenario"
                        name="wf-form-3-5-scenario"
                        data-name="3 5 scenario"
                        className="form"
                      >
                        <label className="radio-button-field scenario _1 w-radio">
                          <input
                            type="radio"
                            data-name="3-5scenario_1"
                            defaultValue="Scenario 1"
                            name="3-5scenario_1"
                            id="Scenario "
                            className="w-form-formradioinput radio-button scenario w-radio-input"
                            id="_3_5_1"
                            onChange={this.changeHandlerRadio}
                            checked={this.state._3_5 === '_3_5_1'}
                          />
                          <div className="form-row-header scenario-header">
                            <h4 className="heading">Scenario 1</h4>
                            <p>
                              De culturele activiteiten, lessen of workshops
                              vertonen geen samenhang. Ze vinden incidenteel –
                              zonder structureel budget - plaats en worden
                              willekeurig gekozen.
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
                            data-name="3-5scenario_1"
                            defaultValue="Scenario 2"
                            name="3-5scenario_1"
                            id="Scenario -2"
                            className="w-form-formradioinput radio-button scenario w-radio-input"
                            id="_3_5_2"
                            onChange={this.changeHandlerRadio}
                            checked={this.state._3_5 === '_3_5_2'}
                          />
                          <div className="form-row-header scenario-header">
                            <h4>Scenario 2</h4>
                            <p>
                              De culturele activiteiten, lessen of workshops
                              zijn enigszins op elkaar afgestemd, bijvoorbeeld
                              in de vorm van een cultuurmenu of projectweek.
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
                        <label className="radio-button-field scenario _3 w-radio">
                          <input
                            type="radio"
                            data-name="3-5scenario_1"
                            defaultValue="Scenario 3"
                            name="3-5scenario_1"
                            id="Scenario -3"
                            className="w-form-formradioinput radio-button scenario w-radio-input"
                            id="_3_5_3"
                            onChange={this.changeHandlerRadio}
                            checked={this.state._3_5 === '_3_5_3'}
                          />
                          <div className="form-row-header scenario-header">
                            <h4>Scenario 3</h4>
                            <p>
                              De school brengt bewust samenhang aan - vanuit de
                              zelf benoemde doelen - in de culturele
                              activiteiten, lessen of workshops door
                              bijvoorbeeld samenhang met andere vakken en/of een
                              opbouw van groep 1 t/m 8. Hiervoor wordt
                              structureel voldoende tijd en middelen gezocht
                              en/of gereserveerd.
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
                            data-name="3-5scenario_1"
                            defaultValue="Scenario 4"
                            name="3-5scenario_1"
                            id="Scenario -4"
                            className="w-form-formradioinput radio-button scenario w-radio-input"
                            id="_3_5_4"
                            onChange={this.changeHandlerRadio}
                            checked={this.state._3_5 === '_3_5_4'}
                          />
                          <div className="form-row-header scenario-header">
                            <h4>Scenario 4</h4>
                            <p>
                              De school brengt bewust samenhang aan - vanuit de
                              zelf benoemde doelen - in de culturele
                              activiteiten, lessen of workshops door
                              bijvoorbeeld samenhang met andere vakken en/of een
                              opbouw van groep 1 t/m 8. Ook wordt een verbinding
                              gemaakt met buitenschoolse activiteiten, de
                              voorschoolse educatie, of het voortgezet
                              onderwijs. Tijd en middelen zijn structureel en
                              ruimschoots aanwezig.
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
                      <div>3.6</div>
                    </div>
                    <div>
                      <h3 className="form-heading horizontal-center">Extra</h3>
                    </div>
                  </div>
                  <div className="form-row first">
                    <div className="form-row-header long">
                      <h4>
                        Als jullie nog iets kwijt willen over het programma
                        cultuuronderwijs op jullie school, kan dat hier.
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
                          defaultValue={this.state._3_6}
                          onChange={this.changeHandler}
                          id="_3_6"
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
                        Sectie 3.2 alstublieft volledig invullen.

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
                  <div className="cta-btn-row">
                  {/* <Link
                    to={"/step02"}
                    className="link-block w-inline-block"
                  >
                      <img
                        src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578511729/small-arrowleft_kzja7a.svg"
                        alt=""
                        className="icon-arrow"
                      />
                      <div>Vorige stap</div>
                      </Link>
                    <Link
                    to={"/step04"}
                    className="button cc-jumbo-button w-inline-block"
                    onClick={this.submitHandler}
                  >
                    <div>Volgende stap</div>
                  </Link> */}

                  <Link
                      to={"/step02"}
                      className="link-block w-inline-block"
                      onClick={event => {
                        this.submitHandlerPrev(event, "/step02");
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
                      to={"/step04"}
                      className="button cc-jumbo-button w-inline-block"
                      onClick={event => {
                        this.submitHandler(event, "/step04");
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
      </div>
    );
  }
}

export default withRouter(Step2);
