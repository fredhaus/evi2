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
    axios.post("/api/datatransfer/results", this.state).then(response => {
      console.log("Results", response.data);
      this.setState({
        user: this.props.user,
        ...response.data[3]
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

  snackbarClose = () => {
    this.setState({
      error: ""
    })
  }

  submitHandler = event => {
    event.preventDefault();
    let reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
    if (this.state.Email === "") {
      this.setState({
        error: "We hebben je email nodig."
      });
      return;
    }

    if (this.state.Email !== "" && !reeamil.test(this.state.Email)) {
      this.setState({
        error:
          "Email adres is ongeldig. Graag dit formaat aanhouden: voorbeeld@mail.nl"
      });
      return;
    }
    axios
      .post("/api/datatransfer/homepush", this.state)
      .then(response => {
        console.log("Homepush Response", response.data);
        this.props.updateUser(this.state.Email);
        this.props.history.push("/step01");
      })
      .catch(error => {
        console.log(error.response.data.message);
        this.setState({
          error: "Email adres al in gebruik."
        });
      });
  };

  consoleLog = () => {
    console.log("STATE: ", this.state);
  };

  render() {
    return (
      <div>
        <div
          data-collapse="medium"
          data-animation="default"
          data-duration={400}
          className="navigation w-nav"
        >
          <div className="navigation-wrap">
            <a href="https://evi2.herokuapp.com" className="logo-link w-nav-brand w--current">
              <img
                src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578511729/Logo2_rkkhki.svg"
                width={108}
                alt=""
                className="logo-image"
              />
            </a>
            <div className="menu">
              <nav role="navigation" className="navigation-items w-nav-menu">
                <Link
                  to={"/overons"}
                  className="navigation-item whitetext w-nav-link"
                >
                  over ons
                </Link>
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
        </div>
        <div className="section hero">
          <div className="container home-hero">
            <div className="intro-header">
              <div
                id="w-node-76c147234d1f-f609e887"
                className="intro-content cc-homepage"
              >
                <div className="intro-text">
                  <h1 className="heading-jumbo">Welkom bij EVI 2.0</h1>
                  <div className="paragraph-bigger hero">
                    Evi is een zelfevaluatie-instrument. <br />
                    <br />
                    Evi geeft inzicht in waar de school staat en brengt de
                    ontwikkeling van het cultuuronderwijs in beeld. <br />
                    <br />
                    Evi is voor en van de school, die hiermee een eigen dossier
                    opbouwt en haar eigen ontwikkeling inzichtelijk maakt.{" "}
                    <br />
                    <br />
                    Evi helpt om achterom en vooruit te kijken, de koers te
                    bepalen en die ook te varen.
                    <br />
                  </div>
                </div>
              </div>
              <div
                id="w-node-ed8869eaea25-f609e887"
                className="hero-image-wrapper"
              >
                <div className="hero-image" />
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="container">
            <h2>Wie is Evi?</h2>
            <div className="intro-text-block">
              <p>
                Welkom, ik ben Evi. Evi is een digitale vragenlijst over
                cultuuronderwijs. Evi helpt je in kaart te brengen wat er in het
                afgelopen jaar is gebeurd op het gebied van cultuuronderwijs op
                je school, en wat de plannen zijn voor het komende jaar. Je kunt
                geen foute antwoorden geven. Evi is een hulp: ze helpt je om
                zelf te bepalen wat goed is gegaan, en wat beter zou kunnen. Zo
                kan Evi inzichtelijk maken in welk van de vier scenario’s je
                school zich op dit moment bevindt, of de keuzes die je maakt
                goed op elkaar zijn afgestemd en wat je school zou kunnen doen
                om in een volgend scenario terecht te komen. <br />
              </p>
              <p>
                Je kunt je ervaringen bij Evi kwijt. Daarom willen we je vragen
                om zo eerlijk en volledig mogelijk te antwoorden. Wij vragen je
                om de vragenlijst in zijn geheel in te vullen. Het invullen van
                de vragen neemt ongeveer één uur in beslag. Het is handig om
                relevante documenten bij de hand te houden, zoals het schoolplan
                en eventueel andere beleidsstukken. Wanneer je de vragen hebt
                ingevuld en op 'terugkoppeling' hebt gedrukt, kunnen er geen
                wijzigingen meer worden doorgevoerd.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="section topbottom-border">
          <div className="container">
            <h2>Instructies</h2>
            <div className="intro-text-block">
              <div>
                <h5>Deel 1 – Vragenlijst</h5>
                <p>
                  De vragenlijst bevat vier onderwerpen, die in deze volgorde
                  worden behandeld:
                </p>
                <ol className="list margin20">
                  <li className="list-item">
                    <p>Visie op cultuuronderwijs</p>
                  </li>
                  <li className="list-item">
                    <p>Deskundigheid in cultuuronderwijs</p>
                  </li>
                  <li className="list-item">
                    <p>Programma</p>
                  </li>
                  <li className="list-item">
                    <p>Samenwerking</p>
                  </li>
                </ol>
                <p>
                  Elk onderwerp bevat open vragen, gesloten vragen en een
                  scenariovraag. De open vragen hebben de opbouw:
                  &nbsp;‘beschrijven’, ‘normeren van stellingen’, ‘beoordelen’
                  en ‘verder kijken’. Met de beschrijvende vraag breng je de
                  huidige situatie in kaart. Met de ‘normerende’ vraag geef je
                  waardering aan een aantal stellingen passend bij het onderwerp
                  en met de beoordelende vraag geef je aan of je tevreden bent
                  over de situatie, wat goed ging en wat beter kan. De vraag
                  waarin je verder kijkt, helpt je te bepalen hoe je school
                  verder wil, en wat daarvoor nodig is. Bij de vraag over het
                  scenario bepaal je in welk scenario je school zich op dit
                  moment bevindt. Bij ‘Extra’ vind je extra uitleg en hulp bij
                  het antwoorden.
                </p>
              </div>
              <div>
                <h5>Deel 2 – Terugkoppeling en advies</h5>
                <p>
                  Als alle vragen zijn ingevuld krijg je een 'EVI-Dossier'. Dit
                  biedt een overzicht van:
                </p>
                <ul className="list margin20">
                  <li className="list-item">
                    <p>Antwoorden op de open vragen.</p>
                  </li>
                  <li className="list-item">
                    <p>
                      Een terugkoppeling van jullie score op de stellingen –
                      doorvertaald naar een scenario - met daarbij een advies.
                    </p>
                  </li>
                  <li className="list-item">
                    <p>Een reflectie op het ontstane consistentie-beeld</p>
                  </li>
                  <li className="list-item">
                    <p>
                      En uiteindelijk een Evi-Scenario: een scenario score die
                      aangeeft in welk scenario jullie school zich op dit moment
                      (gemiddeld genomen) bevindt.
                    </p>
                  </li>
                </ul>
                <div className="note-box medium">
                  <div className="paragraph-small note">
                    <strong>LET OP:</strong> Met jouw deelname aan deze pilot
                    geef je toestemming om je ingevulde gegevens te delen met de
                    ontwikkelaars en de ondersteuningsinstelling die jouw school
                    begeleidt. &nbsp;Deze gegevens worden uitsluitend gebruikt
                    voor de evaluatie van de pilot van Evi 2.0. Je gegevens
                    zullen vertrouwelijk worden behandeld. <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section cc-cta">
          <div className="container">
            <div className="cta-wrap">
              <div>
                <div className="cta-text">
                  <h3 className="marginbottom20">En wie ben jij?</h3>
                  <div className="paragraph-bigger cc-bigger-light">
                    Dit is het begin van de digitale vragenlijst over
                    cultuuronderwijs.
                    <br />
                  </div>
                </div>
                <div className="form w-form">
                  <form
                    id="wf-form-Home-start-form"
                    name="wf-form-Home-start-form"
                    data-name="Home start form"
                    className="form cta"
                  >
                    <div className="input-field">
                      <label htmlFor="School" className="field-label">
                        Naam school
                      </label>
                      <input
                        type="text"
                        className="text-field w-input"
                        maxLength={256}
                        name="School"
                        data-name="School"
                        id="NaamSchool"
                        onChange={this.changeHandler}
                      />
                    </div>
                    <div className="input-field">
                      <label htmlFor="Naam-2" className="field-label">
                        Naam invuller
                      </label>
                      <input
                        type="text"
                        maxLength={256}
                        name="Naam"
                        data-name="Naam"
                        id="NaamInvuller"
                        className="text-field w-input"
                        onChange={this.changeHandler}
                      />
                    </div>
                    <div className="input-field">
                      <label htmlFor="Adres-2" className="field-label">
                        Adres
                      </label>
                      <input
                        type="text"
                        className="text-field w-input"
                        maxLength={256}
                        name="Adres"
                        data-name="Adres"
                        id="Adres"
                        onChange={this.changeHandler}
                      />
                    </div>
                    <div className="input-field">
                      <label htmlFor="Functie-2" className="field-label">
                        Functie invuller
                      </label>
                      <input
                        type="text"
                        className="text-field w-input"
                        maxLength={256}
                        name="Functie"
                        data-name="Functie"
                        id="Functie"
                        onChange={this.changeHandler}
                      />
                    </div>
                    <div className="input-field">
                      <label htmlFor="Postcode-2" className="field-label">
                        Postcode
                      </label>
                      <input
                        type="text"
                        className="text-field w-input"
                        maxLength={256}
                        name="Postcode"
                        data-name="Postcode"
                        id="Postcode"
                        onChange={this.changeHandler}
                      />
                    </div>
                    <div className="input-field">
                      <label htmlFor="E-Mail-2" className="field-label">
                        E-mail
                      </label>
                      <input
                        type="email"
                        className="text-field w-input"
                        maxLength={256}
                        name="E-Mail"
                        data-name="E-Mail"
                        id="Email"
                        required
                        onChange={this.changeHandler}
                      />
                    </div>
                    <div className="input-field">
                      <label htmlFor="Plaats-2" className="field-label">
                        Plaats
                      </label>
                      <input
                        type="text"
                        className="text-field w-input"
                        maxLength={256}
                        name="Plaats"
                        data-name="Plaats"
                        id="Plaats"
                        onChange={this.changeHandler}
                      />
                    </div>
                    <input
                      type="submit"
                      defaultValue="Submit"
                      data-wait="Please wait..."
                      className="hide w-button"
                    />
                    <div className="input-field">
                      <label htmlFor="Telefoon" className="field-label">
                        Telefoonnummer
                      </label>
                      <input
                        type="tel"
                        className="text-field w-input"
                        maxLength={256}
                        name="Telefoon"
                        data-name="Telefoon"
                        id="Telefoon"
                        onChange={this.changeHandler}
                      />
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
                {this.state.error ? (
                    <div className="snackbar-wrapper home">
                      <div className="snackbar red">
                        <p className="paragraph-small snackbar-text">
                          {this.state.error}
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
                <Link
                  to={"/step01"}
                  type="submit"
                  className="button cc-jumbo-button w-inline-block"
                  onClick={this.submitHandler}
                >
                  <div>Volgende stap</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
