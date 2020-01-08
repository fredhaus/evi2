import React from "react";
import { withRouter } from "react-router-dom";

class About extends React.Component {
  state = {};

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
            <a href="index.html" className="logo-link w-nav-brand w--current">
              <img
                src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578511729/Logo2_rkkhki.svg"
                width={108}
                alt=""
                className="logo-image"
              />
            </a>
            <div className="menu">
              <nav role="navigation" className="navigation-items w-nav-menu">
                <a
                  href="about.html"
                  className="navigation-item whitetext w-nav-link"
                >
                  over ons
                </a>
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
                  <div className="heading-jumbo">
                    Doe mee aan de EVI&nbsp;2.0 vragenlijst
                  </div>
                  <div className="paragraph-bigger cc-bigger-white-light">
                    Ontvang een gepersonaliseerd en geautomatiseerd
                    bewustzijnsrapport met advies voor groei.
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
                om in een volgend scenario terecht te komen. Je kunt je
                ervaringen bij Evi kwijt. Daarom willen we je vragen om zo
                eerlijk en volledig mogelijk te antwoorden.
                <br />
                De vragenlijst is van en voor jou en je team. De vragenlijst is
                niet anoniem, maar de gegevens worden vertrouwelijk behandeld en
                zijn alleen toegankelijk voor de onderzoeker van de
                Rijksuniversiteit Groningen.{" "}
              </p>
              <p>
                Wij vragen je om de vragenlijst met twee personen in te vullen:
                de cultuurcontactpersoon/icc’er/leerkracht en een directielid.
                Dit neemt ongeveer één uur in beslag. De gegeven antwoorden
                blijven opgeslagen, zodat je er samen met je collega en op
                meerdere momenten aan kunt werken. Het is handig om relevante
                documenten bij de hand te houden, zoals het schoolplan en
                eventueel andere beleidsstukken. Als je wilt, kunt je deze
                documenten aan het eind van de vragenlijst uploaden. Wanneer de
                tweede invuller haar handtekening heeft gezet, zijn de
                antwoorden definitief en kunnen er geen wijzigingen meer worden
                doorgevoerd. De vragenlijst wordt volgend jaar opnieuw
                opengesteld. <br />
                Zo bouw je een dossier op waarin de ontwikkeling van het
                cultuuronderwijs op jullie school zichtbaar wordt.
              </p>
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
                      <label htmlFor="name" className="field-label">
                        Naam school
                      </label>
                      <input
                        type="text"
                        className="text-field w-input"
                        maxLength={256}
                        name="name"
                        data-name="Name"
                        id="name"
                      />
                    </div>
                    <div className="form-radio-wrapper">
                      <label htmlFor="email-2" className="field-label">
                        Ambitiescenario school
                      </label>
                      <div className="form-radio-row">
                        <label className="radio-button-field _2col home w-radio">
                          <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button home w-radio-input" />
                          <input
                            type="radio"
                            data-name="home-ambitiescenario"
                            defaultValue="Radio"
                            name="home-ambitiescenario"
                            id="radio"
                            style={{
                              opacity: 0,
                              position: "absolute",
                              zIndex: -1
                            }}
                          />
                          <span className="checkbox-label w-form-label">1</span>
                        </label>
                        <label className="radio-button-field _2col home w-radio">
                          <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button home w-radio-input" />
                          <input
                            type="radio"
                            data-name="home-ambitiescenario"
                            defaultValue="Radio"
                            name="home-ambitiescenario"
                            id="radio"
                            style={{
                              opacity: 0,
                              position: "absolute",
                              zIndex: -1
                            }}
                          />
                          <span className="checkbox-label w-form-label">2</span>
                        </label>
                        <label className="radio-button-field _2col home w-radio">
                          <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button home w-radio-input" />
                          <input
                            type="radio"
                            data-name="home-ambitiescenario"
                            defaultValue="Radio"
                            name="home-ambitiescenario"
                            id="radio"
                            style={{
                              opacity: 0,
                              position: "absolute",
                              zIndex: -1
                            }}
                          />
                          <span className="checkbox-label w-form-label">3</span>
                        </label>
                        <label className="radio-button-field _2col home end w-radio">
                          <div className="w-form-formradioinput w-form-formradioinput--inputType-custom radio-button home w-radio-input" />
                          <input
                            type="radio"
                            data-name="home-ambitiescenario"
                            defaultValue="Radio"
                            name="home-ambitiescenario"
                            id="radio"
                            style={{
                              opacity: 0,
                              position: "absolute",
                              zIndex: -1
                            }}
                          />
                          <span className="checkbox-label w-form-label">4</span>
                        </label>
                      </div>
                    </div>
                    <div className="input-field">
                      <label htmlFor="email" className="field-label">
                        Adres
                      </label>
                      <input
                        type="email"
                        className="text-field w-input"
                        maxLength={256}
                        name="email"
                        data-name="Email"
                        id="email"
                        required
                      />
                    </div>
                    <div className="input-field">
                      <label htmlFor="name-5" className="field-label">
                        Naam invuller 1
                      </label>
                      <input
                        type="text"
                        className="text-field w-input"
                        maxLength={256}
                        name="name-3"
                        data-name="Name 3"
                        id="name-3"
                      />
                    </div>
                    <div className="input-field">
                      <label htmlFor="name-2" className="field-label">
                        Postcode
                      </label>
                      <input
                        type="text"
                        className="text-field w-input"
                        maxLength={256}
                        name="name-2"
                        data-name="Name 2"
                        id="name-2"
                      />
                    </div>
                    <div className="input-field">
                      <label htmlFor="name-5" className="field-label">
                        Functie invuller 1
                      </label>
                      <input
                        type="text"
                        className="text-field w-input"
                        maxLength={256}
                        name="name-2"
                        data-name="Name 2"
                        id="name-2"
                      />
                    </div>
                    <div className="input-field">
                      <label htmlFor="name-3" className="field-label">
                        Plaats
                      </label>
                      <input
                        type="text"
                        className="text-field w-input"
                        maxLength={256}
                        name="name-3"
                        data-name="Name 3"
                        id="name-3"
                      />
                    </div>
                    <div className="input-field">
                      <label htmlFor="name-5" className="field-label">
                        Naam invuller 2
                      </label>
                      <input
                        type="text"
                        className="text-field w-input"
                        maxLength={256}
                        name="name-3"
                        data-name="Name 3"
                        id="name-3"
                      />
                    </div>
                    <div className="input-field">
                      <label htmlFor="name-4" className="field-label">
                        Telefoonnummer
                      </label>
                      <input
                        type="tel"
                        className="text-field w-input"
                        maxLength={256}
                        name="name-3"
                        data-name="Name 3"
                        id="name-3"
                      />
                    </div>
                    <div className="input-field">
                      <label htmlFor="name-5" className="field-label">
                        Functie invuller 2
                      </label>
                      <input
                        type="text"
                        className="text-field w-input"
                        maxLength={256}
                        name="name-3"
                        data-name="Name 3"
                        id="name-3"
                      />
                    </div>
                    <div className="input-field">
                      <label htmlFor="name-5" className="field-label">
                        Naam bovenschoolse stichting
                      </label>
                      <input
                        type="text"
                        className="text-field w-input"
                        maxLength={256}
                        name="name-4"
                        data-name="Name 4"
                        id="name-4"
                      />
                    </div>
                    <input
                      type="submit"
                      defaultValue="Submit"
                      data-wait="Please wait..."
                      className="hide w-button"
                    />
                    <div className="input-field">
                      <label htmlFor="name-5" className="field-label">
                        E-mail
                      </label>
                      <input
                        type="email"
                        className="text-field w-input"
                        maxLength={256}
                        name="name-4"
                        data-name="Name 4"
                        id="name-4"
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
                <a
                  href="form/step-01.html"
                  className="button cc-jumbo-button w-inline-block"
                >
                  <div>Volgende stap</div>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* [if lte IE 9]><![endif] */}
      </div>
    );
  }
}

export default withRouter(About);
