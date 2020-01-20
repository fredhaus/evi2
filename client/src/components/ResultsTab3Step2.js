import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class ResultsTab3 extends React.Component {
  state = {
    user: this.props.user
  };

  componentDidMount() {
    
    window.scrollTo(0, 0);
    axios.post("/api/datatransfer/results", this.state).then(response => {
      

      let _2_2_1 = parseInt(response.data[2]._2_2_1.split("_").pop());
      let _2_2_2 = parseInt(response.data[2]._2_2_2.split("_").pop());
      let _2_2_3 = parseInt(response.data[2]._2_2_3.split("_").pop());
      let _2_2_4 = parseInt(response.data[2]._2_2_4.split("_").pop());
      let _2_2_5 = parseInt(response.data[2]._2_2_5.split("_").pop());
      let _2_2_6 = parseInt(response.data[2]._2_2_6.split("_").pop());
      let _2_2_7 = parseInt(response.data[2]._2_2_7.split("_").pop());
      let _2_2_8 = parseInt(response.data[2]._2_2_8.split("_").pop());
      let _2_2_9 = parseInt(response.data[2]._2_2_9.split("_").pop());
      let _2_2_10 = parseInt(response.data[2]._2_2_10.split("_").pop());

      let meanStep2 =
        (_2_2_1 +
          _2_2_2 +
          _2_2_3 +
          _2_2_4 +
          _2_2_5 +
          _2_2_6 +
          _2_2_7 +
          _2_2_8 +
          _2_2_9 +
          _2_2_10) /
        10;

      let meanStep2Scenario;
      if (meanStep2 <= 2) {
        meanStep2Scenario = "1";
      } else if (meanStep2 > 2 && meanStep2 <= 3) {
        meanStep2Scenario = "2";
      } else if (meanStep2 > 3 && meanStep2 <= 4) {
        meanStep2Scenario = "3";
      } else {
        meanStep2Scenario = "4";
      }

      this.setState({
        user: this.props.user,
        meanStep2Scenario: meanStep2Scenario,
        ...response.data[2]
      });
    });
  }

  render() {
    return (
      <div data-w-tab="Tab 3" className="tab-pane w-tab-pane w--tab-active">
        <div className="container marginbottom80">
          <div className="intro-text results">
            <img
              src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578862225/evi2_120120/step1_uvi01u.svg"
              alt=""
              className="step-icon hide"
            />
            <div className="details-wrap">
              <h1>Analyse deskundigheid</h1>
            </div>
            <div className="paragraph-light">
              Hoe staat het met de deskundigheid op het gebied van
              cultuuronderwijs binnen jouw school? Wat hebben jullie in huis?
              <br />
            </div>
          </div>
        </div>
        <div className="container results-sub">
          <div className="results-subcontent-sidebar">
            <a href="#2-analyse" className="sidebar-menu w-inline-block">
              <div>Advies</div>
            </a>
            <a href="#2-replies" className="sidebar-menu w-inline-block">
              <div>Antwoorden</div>
            </a>
          </div>
          <div className="results-subcontent-wrapper">
            <div
              id="2-analyse"
              className="w-layout-grid project-details-wrapper first"
            >
              <h2 className="results-heading first">Advies</h2>
              <div className="level_blocks-wrapper">
                {this.state.meanStep2Scenario === "1" ? (
                  <div className="content-block ratings">
                    <div className="results-score-wrapper small">
                      <h6 className="label">scenario</h6>
                      <div className="rating-row">
                        <div className="rating-bar-wrapper">
                          <div className="rating-rectangle" />
                          <div className="rating-rectangle empty" />
                          <div className="rating-rectangle empty" />
                          <div className="rating-rectangle empty" />
                        </div>
                        <div className="results-score-number small">
                          <div className="score-number _1 small">1</div>
                          <div className="score-per small" />
                          <div className="score-number _2 small">4</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {this.state.meanStep2Scenario === "2" ? (
                  <div className="content-block ratings">
                    <div className="results-score-wrapper small">
                      <h6 className="label">scenario</h6>
                      <div className="rating-row">
                        <div className="rating-bar-wrapper">
                          <div className="rating-rectangle" />
                          <div className="rating-rectangle" />
                          <div className="rating-rectangle empty" />
                          <div className="rating-rectangle empty" />
                        </div>
                        <div className="results-score-number small">
                          <div className="score-number _1 small">2</div>
                          <div className="score-per small" />
                          <div className="score-number _2 small">4</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {this.state.meanStep2Scenario === "3" ? (
                  <div className="content-block ratings">
                    <div className="results-score-wrapper small">
                      <h6 className="label">scenario</h6>
                      <div className="rating-row">
                        <div className="rating-bar-wrapper">
                          <div className="rating-rectangle" />
                          <div className="rating-rectangle" />
                          <div className="rating-rectangle" />
                          <div className="rating-rectangle empty" />
                        </div>
                        <div className="results-score-number small">
                          <div className="score-number _1 small">3</div>
                          <div className="score-per small" />
                          <div className="score-number _2 small">4</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {this.state.meanStep2Scenario === "4" ? (
                  <div className="content-block ratings">
                    <div className="results-score-wrapper small">
                      <h6 className="label">scenario</h6>
                      <div className="rating-row">
                        <div className="rating-bar-wrapper">
                          <div className="rating-rectangle" />
                          <div className="rating-rectangle" />
                          <div className="rating-rectangle" />
                          <div className="rating-rectangle" />
                        </div>
                        <div className="results-score-number small">
                          <div className="score-number _1 small">4</div>
                          <div className="score-per small" />
                          <div className="score-number _2 small">4</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="content-block">
                <div className="form-section-header">
                  <h3>Deskundigheid</h3>
                </div>
                {this.state.meanStep2Scenario === "1" ? (
                  <div className="scenario-wrapper-static">
                    <img
                      src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578862224/evi2_120120/scenario-arrow-small_wn2ou9.svg"
                      alt=""
                      className="step-icon small"
                    />
                    <div className="form-row-header scenario-header">
                      <h4 className="heading">Scenario 1</h4>
                      <p>
                        Wat betreft <em>Deskundigheid </em>zit jullie school in
                        scenario 1. Mogelijk willen jullie meer coördinatie in
                        de deskundigheid aanbrengen en een stap zetten naar het
                        niveau van scenario 2. In dat geval kunnen jullie de
                        volgende dingen doen:
                        <br />
                      </p>
                      <ul className="list margin20">
                        <li className="list-item">
                          <p>
                            Breng de expertise(s) en gebieden van deskundigheid
                            van je team in kaart.
                          </p>
                        </li>
                        <li className="list-item">
                          <p>
                            Breng de mogelijkheid tot scholing op het gebied van
                            kunst- en cultuuronderwijs in kaart, breng dit onder
                            de aandacht bij het team en maak hier een plan voor.
                            Vertrek hierbij vanuit de vraag: wat wil je als
                            school met kunst- en cultuuronderwijs bereiken
                            (visie) en welke deskundigheid is daarvoor nodig?
                            Denk aan een teamscholing, co-teaching,
                            (icc)cursussen, de post-hbo opleiding
                            cultuurbegeleider.&nbsp;
                          </p>
                        </li>
                      </ul>
                      <p>
                        Wat betreft <em>Deskundigheid </em>zit jullie school in
                        scenario 1. Mogelijk willen jullie meer coördinatie in
                        de deskundigheid aanbrengen en een stap zetten naar het
                        niveau van scenario 2. In dat geval kunnen jullie de
                        volgende dingen doen:
                        <br />
                      </p>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {this.state.meanStep2Scenario === "2" ? (
                  <div className="scenario-wrapper-static">
                    <img
                      src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578862224/evi2_120120/scenario-arrow-small_wn2ou9.svg"
                      alt=""
                      className="step-icon small"
                    />
                    <div className="form-row-header scenario-header">
                      <h4 className="heading">Scenario 2</h4>
                      <p>
                        Wat betreft Deskundigheid zit jullie school in scenario
                        2. Dit is een mooie basis, die jullie misschien willen
                        behouden, aanscherpen of bestendigen. Mogelijk willen
                        jullie een stap zetten naar het niveau van scenario 3.
                        In dat geval kun je de volgende dingen doen:
                        <br />
                      </p>
                      <ul className="list margin20">
                        <li className="list-item">
                          <p>
                            Stel iemand aan die het deskundigheidbeleid gericht
                            stimuleert, coördineert en organiseert.
                          </p>
                        </li>
                        <li className="list-item">
                          <p>
                            Deskundigheid van het team of externen bewust en
                            gericht inzetten in de uitvoering van het programma,
                            aansluitend bij de visie van de school.&nbsp;
                          </p>
                        </li>
                        <li className="list-item">
                          <p>
                            Benut de kwaliteiten van het team of zet
                            vakdocenten/externen in (eventueel ook voor
                            co-teaching).
                          </p>
                        </li>
                        <li className="list-item">
                          <p>
                            Sluit je aan bij het icc- en/of
                            cultuurbegleidersnetwerk .&nbsp;
                          </p>
                        </li>
                        <li className="list-item">
                          <p>
                            Reserveer voldoende tijd en middelen voor
                            deskundigheidsbevordering op het gebied van kunst-
                            en cultuuronderwijs.
                          </p>
                        </li>
                      </ul>
                      <p>
                        Willen jullie hierover in gesprek met een{" "}
                        <em>adviseur</em>? Neem dan via deze knop contact
                        op.Hier vinden jullie een overzicht van het
                        scholingsaanbod en relevante partners bij jullie in de
                        buurt.
                        <br />
                      </p>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {this.state.meanStep2Scenario === "3" ? (
                  <div className="scenario-wrapper-static">
                    <img
                      src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578862224/evi2_120120/scenario-arrow-small_wn2ou9.svg"
                      alt=""
                      className="step-icon small"
                    />
                    <div className="form-row-header scenario-header">
                      <h4 className="heading">Scenario 3</h4>
                      <p>
                        Wat betreft Deskundigheid zit jullie school in scenario
                        3. Jullie weten de deskundigheidsbevordering binnen het
                        team goed te coördineren en waar mogelijk te
                        bevorderen.&nbsp;Dit is een mooie basis, die jullie
                        misschien willen behouden, aanscherpen of bestendigen.
                        Mogelijk willen jullie een stap zetten naar het niveau
                        van scenario 4. In dat geval kun je de volgende dingen
                        doen:
                        <br />
                      </p>
                      <ul className="list margin20">
                        <li className="list-item">
                          <p>
                            Bevorder het bewust en gericht inzetten van de
                            deskundigheid van het team of externen bij&nbsp; de
                            uitvoering van het programma en aansluitend bij de
                            visie van de school.&nbsp;
                          </p>
                        </li>
                        <li className="list-item">
                          <p>
                            Stel een integraal professionaliseringsbeleid op
                            waarin de kwaliteiten van teamleden worden
                            gestimuleerd en ingezet. Bespreek dit jaarlijks.
                            Benut de kwaliteiten van het team of zet
                            vakdocenten/externen in (eventueel ook voor
                            co-teaching).&nbsp;
                          </p>
                        </li>
                        <li className="list-item">
                          <p>
                            Leer van en met elkaar binnen netwerkscholen,
                            bijvoorbeeld een scenario 3-scholennetwerk en/of
                            netwerk van de Vereniging CultuurProfielScholen.
                          </p>
                        </li>
                      </ul>
                      <p>
                        Willen jullie hierover in gesprek met een{" "}
                        <em>adviseur</em>? Neem dan via deze knop contact
                        op.Hier vinden jullie een overzicht van het
                        scholingsaanbod en relevante partners bij jullie in de
                        buurt.
                        <br />
                      </p>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {this.state.meanStep2Scenario === "4" ? (
                  <div className="scenario-wrapper-static">
                    <img
                      src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578862224/evi2_120120/scenario-arrow-small_wn2ou9.svg"
                      alt=""
                      className="step-icon small"
                    />
                    <div className="form-row-header scenario-header">
                      <h4 className="heading">Scenario 4</h4>
                      <p>
                        Wat betreft Deskundigheid zit je in scenario 4. Probeer
                        dit niveau vast te houden. Om scherp en kritisch te
                        blijven, maar ook om je kennis over deskundigheid te
                        delen kunnen jullie de volgende dingen doen:
                        <br />
                      </p>
                      <ul className="list margin20">
                        <li className="list-item">
                          <p>
                            Deelnemen aan lokale en regionale bijeenkomsten.
                            Denk aan bijeenkomsten van scenario 4-scholen,
                            cultuurprofielscholen, cultuurbegeleiders,
                            kunstvakopleidingen en/of pabo bijeenkomsten.
                          </p>
                        </li>
                        <li className="list-item">
                          <p>
                            Deelname aan landelijke bijeenkomsten. Denk aan
                            bijeenkomsten van LKCA , SLO &nbsp;of landelijke
                            vakverenigingen.
                          </p>
                        </li>
                        <li className="list-item">
                          <p>
                            Sluit je aan bij de Vereniging CultuurProfielScholen{" "}
                          </p>
                        </li>
                        <li className="list-item">
                          <p>
                            Aansluiten bij onderzoeksgroepen cultuuronderwijs
                            bij jou in de buurt.
                          </p>
                        </li>
                      </ul>
                      <p>
                        Willen jullie hierover in gesprek met een adviseur? Neem
                        dan via deze knop contact op.Hier vinden jullie een
                        overzicht van het scholingsaanbod en relevante partners
                        bij jullie in de buurt.
                        <br />
                      </p>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div
              id="2-replies"
              className="w-layout-grid project-details-wrapper"
            >
              <h2 className="results-heading">Antwoorden</h2>
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
                  </div>
                  <div className="form-wrapper">
                    <div className="form">
                      <div className="text-field static-text-field">
                        <p>{this.state._2_1}</p>
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
                  <a href="#" className="button button-outline w-inline-block">
                    <div>upload</div>
                  </a>
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
                      school die&nbsp;
                      <br />
                    </p>
                  </div>
                </div>
                <div className="table">
                  <div className="table-header">
                    <div className="table-empty-cell" />
                    <h6 id="w-node-7055e2b24e6a-7eda5bea">1</h6>
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
                        Leerlingen stimuleren om betekenis te geven aan en te
                        reflecteren op zichzelf en de wereld
                      </p>
                      <div
                        id="w-node-7055e2b24e78-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._2_2_1 === "_2_2_1_1"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-7055e2b24e7a-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._2_2_1 === "_2_2_1_2"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-7055e2b24e7c-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._2_2_1 === "_2_2_1_3"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-7055e2b24e7e-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._2_2_1 === "_2_2_1_4"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-7055e2b24e80-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._2_2_1 === "_2_2_1_5"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
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
                  <div className="form-block table w-form">
                    <form
                      id="wf-form-1-2table_2"
                      name="wf-form-1-2table_2"
                      data-name="1-2table_2"
                      className="table-row"
                    >
                      <p>
                        Leerlinggestuurd, op basis van de eigen vraag en
                        interesse van de leerling, werken
                      </p>
                      <div
                        id="w-node-7055e2b24e8f-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._2_2_2 === "_2_2_2_1"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-7055e2b24e91-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._2_2_2 === "_2_2_2_2"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-7055e2b24e93-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._2_2_2 === "_2_2_2_3"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-7055e2b24e95-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._2_2_2 === "_2_2_2_4"
                              ? "radio-button-static active"
                              : "radio-button-static"

                          }
                        />
                      </div>
                      <div
                        id="w-node-7055e2b24e97-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._2_2_2 === "_2_2_2_5"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
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
                  <div className="form-block table w-form">
                    <form
                      id="wf-form-1-2table_3"
                      name="wf-form-1-2table_3"
                      data-name="1-2table_3"
                      className="table-row"
                    >
                      <p>
                        De link kunnen leggen tussen cultuuronderwijs en de
                        omgeving en achtergrond van onze leerlingen
                      </p>
                      <div
                        id="w-node-7055e2b24ea6-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._2_2_3 === "_2_2_3_1"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-7055e2b24ea8-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._2_2_3 === "_2_2_3_2"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-7055e2b24eaa-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._2_2_3 === "_2_2_3_3"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-7055e2b24eac-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._2_2_3 === "_2_2_3_4"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-7055e2b24eae-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._2_2_3 === "_2_2_3_5"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
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
                  <div className="form-block table w-form">
                    <form
                      id="wf-form-1-2table_4"
                      name="wf-form-1-2table_4"
                      data-name="1-2table_4"
                      className="table-row"
                    >
                      <p>
                        Leerlingen een zo breed mogelijk palet aan culturele en
                        kunstzinnige activiteiten laten maken en meemaken
                      </p>
                      <div
                        id="w-node-7055e2b24ebc-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._2_2_4 === "_2_2_4_1"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-7055e2b24ebe-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._2_2_4 === "_2_2_4_2"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-7055e2b24ec0-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._2_2_4 === "_2_2_4_3"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-7055e2b24ec2-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._2_2_4 === "_2_2_4_4"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-7055e2b24ec4-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._2_2_4 === "_2_2_4_5"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
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
                  <div className="form-block table w-form">
                    <form
                      id="wf-form-1-2table_5"
                      name="wf-form-1-2table_5"
                      data-name="1-2table_5"
                      className="table-row"
                    >
                      <p>
                        Weten hoe via cultuuronderwijs taalontwikkeling en
                        sociaal emotionele ontwikkeling kunnen worden versterkt
                      </p>
                      <div
                        id="w-node-7055e2b24ed0-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._2_2_5 === "_2_2_5_1"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-7055e2b24ed2-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._2_2_5 === "_2_2_5_2"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-7055e2b24ed4-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._2_2_5 === "_2_2_5_3"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-7055e2b24ed6-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._2_2_5 === "_2_2_5_4"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-7055e2b24ed8-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._2_2_5 === "_2_2_5_5"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
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
                  <div className="form-block table w-form">
                    <form
                      id="wf-form-1-2table_6"
                      name="wf-form-1-2table_6"
                      data-name="1-2table_6"
                      className="table-row"
                    >
                      <p>
                        Onze leerlingen <em>ambachtelijke vaardigheden</em>{" "}
                        aanleren in uiteenlopende media (materialen,
                        ICT-middelen, voorwerpen, instrumenten, gesproken en
                        geschreven taal, het (eigen) lichaam)
                      </p>
                      <div
                        id="w-node-7055e2b24ee7-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._2_2_6 === "_2_2_6_1"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-7055e2b24ee9-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._2_2_6 === "_2_2_6_2"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-7055e2b24eeb-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._2_2_6 === "_2_2_6_3"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-7055e2b24eed-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._2_2_6 === "_2_2_6_4"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-7055e2b24eef-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._2_2_6 === "_2_2_6_5"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
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
                  <div className="form-block table w-form">
                    <form
                      id="wf-form-1-2table_7"
                      name="wf-form-1-2table_7"
                      data-name="1-2table_7"
                      className="table-row"
                    >
                      <p>
                        Het artistiek, creatief en innovatief vermogen bij
                        leerlingen ontwikkelen en stimuleren
                      </p>
                      <div
                        id="w-node-7055e2b24efb-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._2_2_7 === "_2_2_7_1"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-7055e2b24efd-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._2_2_7 === "_2_2_7_2"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-7055e2b24eff-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._2_2_7 === "_2_2_7_3"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-7055e2b24f01-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._2_2_7 === "_2_2_7_4"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-7055e2b24f03-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._2_2_7 === "_2_2_7_5"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
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
                  <div className="form-block table w-form">
                    <form
                      id="wf-form-1-2table_8"
                      name="wf-form-1-2table_8"
                      data-name="1-2table_8"
                      className="table-row"
                    >
                      <p>
                        Onze leerlingen kunnen begeleiden in hun artistieke
                        expressie en de presentatie daarvan
                      </p>
                      <div
                        id="w-node-7055e2b24f12-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._2_2_8 === "_2_2_8_1"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-7055e2b24f14-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._2_2_8 === "_2_2_8_2"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-7055e2b24f16-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._2_2_8 === "_2_2_8_3"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-7055e2b24f18-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._2_2_8 === "_2_2_8_4"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-7055e2b24f1a-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._2_2_8 === "_2_2_8_5"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
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
                  <div className="form-block table w-form">
                    <form
                      id="wf-form-1-2table_9"
                      name="wf-form-1-2table_9"
                      data-name="1-2table_9"
                      className="table-row"
                    >
                      <p>
                        Weten hoe ze cultuuronderwijs kunnen verbinden met
                        andere vakken, leergebieden, overkoepelende vaardigheden
                        en thema’s
                      </p>
                      <div
                        id="w-node-7055e2b24f29-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._2_2_9 === "_2_2_9_1"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-7055e2b24f2b-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._2_2_9 === "_2_2_9_2"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-7055e2b24f2d-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._2_2_9 === "_2_2_9_3"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-7055e2b24f2f-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._2_2_9 === "_2_2_9_4"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-7055e2b24f31-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._2_2_9 === "_2_2_9_5"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
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
                  <div className="form-block table w-form">
                    <form
                      id="wf-form-1-2table_10"
                      name="wf-form-1-2table_10"
                      data-name="1-2table_10"
                      className="table-row end"
                    >
                      <p>
                        Onze leerlingen door cultuuronderwijs stimuleren om met
                        een onderzoekende en open houding in de
                        wereld te staan
                      </p>
                      <div
                        id="w-node-7055e2b24f3d-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._2_2_10 === "_2_2_10_1"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-7055e2b24f3f-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._2_2_10 === "_2_2_10_2"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-7055e2b24f41-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._2_2_10 === "_2_2_10_3"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-7055e2b24f43-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._2_2_10 === "_2_2_10_4"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-7055e2b24f45-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._2_2_10 === "_2_2_10_5"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
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
                </div>
              </div>
              <div className="form-section">
                <div className="form-section-header horizontal-center">
                  <div className="form-section-number">
                    <div>2.3</div>
                  </div>
                  <h3 className="form-heading horizontal-center">Beoordelen</h3>
                </div>
                <div className="form-row first">
                  <div className="form-row-header">
                    <h4>
                      In hoeverre zijn jullie tevreden met de aanwezige
                      deskundigheid voor cultuuronderwijs op jullie school?
                      Licht de beoordeling toe.
                    </h4>
                  </div>
                  <div className="form-wrapper">
                    <div className="form">
                      <div className="text-field static-text-field">
                        <p>{this.state._2_3}</p>
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
                {this.state._2_4_1 !== "" ? (
                <div className="form-row first">
                  <div className="form-row-header">
                    <h4>
                      Heeft jullie school de intentie voor meer deskundigheid?
                    </h4>
                  </div>
                  <div className="form-wrapper">
                    <div className="form _2-col-row">
                      <div className="radio-button-field static">
                        <div
                          className={
                            this.state._2_4_1 === "_2_4_1_1"
                              ? "radio-button-static marginright15 active"
                              : "radio-button-static marginright15"
                          }
                        />
                        <div className="checkbox-label">Ja</div>
                      </div>
                      <div className="radio-button-field static">
                        <div
                          className={
                            this.state._2_4_1 === "_2_4_1_2"
                              ? "radio-button-static marginright15 active"
                              : "radio-button-static marginright15"
                          }
                        />
                        <div className="checkbox-label">Nee</div>
                      </div>
                    </div>
                  </div>
                </div>
                ):("")}
                {this.state._2_4_2 !== "" ? (
                <div className="form-row">
                  <div className="form-row-header">
                    <div className="label answertype yes">Indien ja</div>
                    <h4>Op welk vlak?</h4>
                  </div>
                  <div className="form-wrapper">
                    <div className="form">
                      <div className="text-field static-text-field">
                        <p>{this.state._2_4_2}</p>
                      </div>
                    </div>
                  </div>
                </div>
                ) : ""}
                {this.state._2_4_3 !== "" ? (
                <div className="form-row">
                  <div className="form-row-header">
                    <div className="label answertype yes">Indien ja</div>
                    <h4>Hoe willen jullie dat aanpakken?</h4>
                  </div>
                  <div className="form-wrapper">
                    <div className="form">
                      <div className="text-field static-text-field">
                        <p>{this.state._2_4_3}</p>
                      </div>
                    </div>
                  </div>
                </div>
                ) : ""}
                {this.state._2_4_4 !== "" ? (
                <div className="form-row">
                  <div className="form-row-header">
                    <div className="label answertype yes">Indien ja</div>
                    <h4>Hebben jullie daar hulp bij nodig?</h4>
                  </div>
                  <div className="form-wrapper">
                    <div className="form _2-col-row">
                      <div className="radio-button-field static">
                      <div
                        className={
                          this.state._2_4_4 === "_2_4_4_1"
                            ? "radio-button-static marginright15 active"
                            : "radio-button-static marginright15"
                        }
                      />
                      
                      <div className="checkbox-label">Ja</div>
                    </div>
                    <div className="radio-button-field static">
                    <div
                      className={
                        this.state._2_4_4 === "_2_4_4_2"
                          ? "radio-button-static marginright15 active"
                          : "radio-button-static marginright15"
                      }
                    />
                    <div className="checkbox-label">Nee</div>
                    </div>
                    </div>
                  </div>
                </div>
                ):("")}
              </div>
            </div>
            {this.state._2_4_5 !== "" ? (
            <div className="form-row end">
              <div className="form-row-header">
                <div className="label answertype yes">Indien ja</div>
                <h4>Wat is je hulpvraag?</h4>
              </div>
              <div className="form-wrapper">
                <div className="form">
                  <div className="text-field static-text-field">
                    <p>{this.state._2_4_5}</p>
                  </div>
                </div>
              </div>
            </div>
            ) : ""}
            {this.state._2_4_6 !== "" ? (
            <div className="form-row">
              <div className="form-row-header">
                <div className="label answertype no">Indien nee</div>
                <h4>
                  Kunnen jullie aangeven waarom jullie geen plannen of wensen
                  hebben voor meer deskundigheid? Licht het antwoord toe.
                </h4>
              </div>
              <div className="form-wrapper">
                <div className="form">
                  <div className="text-field static-text-field">
                    <p>{this.state._2_4_6}</p>
                  </div>
                </div>
              </div>
            </div>
            ) : ""}
          <div className="form-section">
            <div className="form-section-header">
              <div className="form-section-number">
                <div>2.5</div>
              </div>
              <div>
                <h3 className="form-heading">Scenario</h3>
                <p>
                  Geef aan welke scenariobeschrijving op dit moment (!) geheel
                  overeenkomt met de situatie op jullie school.
                </p>
              </div>
            </div>
            <div className="form-row first">
              <div className="form-wrapper form-scenario">
                <div className="form">
                {this.state._2_5 === "_2_5_1" ? (
                  <div className="radio-button-field scenario _1">
                  <div className="radio-button-static scenario active"/>   
                    <div className="form-row-header scenario-header">
                      <h4 className="heading">Scenario 1</h4>
                      <p>
                        De school coördineert en bevordert de interne
                        deskundigheid niet bewust op het gebied van
                        cultuuronderwijs.
                      </p>
                    </div>
                  </div>
                  ) : ("")}
                  {this.state._2_5 === "_2_5_2" ? (
                  <div className="radio-button-field scenario _2">
                    <div className="radio-button-static scenario active"/>   
                    <div className="form-row-header scenario-header">
                      <h4 className="heading">Scenario 2</h4>
                      <p>
                        De school coördineert de deskundigheid op het gebied van
                        cultuuronderwijs in haar school wel (bijvoorbeeld door
                        een icc’er), maar stimuleert deze niet. Er is zicht op
                        waar de deskundigheid zit voor cultuuronderwijs.
                        <br />
                      </p>
                    </div>
                  </div>
                  ) : ("")}
                  {this.state._2_5 === "_2_5_3" ? (
                  <div className="radio-button-field scenario _3">
                    <div className="radio-button-static scenario active"/>   
                    <div className="form-row-header scenario-header">
                      <h4 className="heading">Scenario 3</h4>
                      <p>
                        De school coördineert en bevordert de deskundigheid op
                        het gebied van cultuuronderwijs. Er is organisatorische
                        deskundigheid in de school (bijvoorbeeld een
                        icc-er/cultuurbegeleider) die deskundigheid bewust en
                        gericht inzet en bovendien incidentele
                        professionalisering stimuleert, coördineert en
                        organiseert (bijv. teamscholingen). Hiervoor worden
                        voldoende tijd en middelen gereserveerd.
                        <br />
                      </p>
                    </div>
                  </div>
                  ) : ("")}
                  {this.state._2_5 === "_2_5_4" ? (
                  <div className="radio-button-field scenario _4">
                    <div className="radio-button-static scenario active"/>   
                    <div className="form-row-header scenario-header">
                      <h4 className="heading">Scenario 4</h4>
                      <p>
                        De school coördineert en bevordert planmatig en
                        structureel de deskundigheid van het hele team op het
                        gebied van cultuuronderwijs. Kwaliteiten van teamleden
                        worden gestimuleerd en ingezet. De school is, ook op het
                        vlak van cultuuronderwijs, een lerende organisatie
                        hiervoor zijn ruimschoots middelen beschikbaar.
                        <br />
                      </p>
                    </div>
                  </div>    
                  ) : ("")}
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
                  Als jullie nog iets kwijt willen over ‘deskundigheid op jullie
                  school, kan dat hier.
                </h4>
              </div>
              <div className="form-wrapper">
                <div className="form">
                  <div className="text-field static-text-field">
                    <p>{this.state._2_6}</p>
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

export default withRouter(ResultsTab3);
