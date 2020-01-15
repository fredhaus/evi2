import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class ResultsTab4 extends React.Component {
  state = {
    user: this.props.user
  };

  componentDidMount() {
    console.log("resultTab4 state", this.state);
    window.scrollTo(0, 0);
    axios.post("/api/datatransfer/results", this.state).then(response => {
      console.log("Results Tab4", response.data);

      let _3_2_1 = parseInt(response.data[3]._3_2_1.split("_").pop());
      let _3_2_2 = parseInt(response.data[3]._3_2_2.split("_").pop());
      let _3_2_3 = parseInt(response.data[3]._3_2_3.split("_").pop());
      let _3_2_4 = parseInt(response.data[3]._3_2_4.split("_").pop());
      let _3_2_5 = parseInt(response.data[3]._3_2_5.split("_").pop());
      let _3_2_6 = parseInt(response.data[3]._3_2_6.split("_").pop());
      let _3_2_7 = parseInt(response.data[3]._3_2_7.split("_").pop());
      let _3_2_8 = parseInt(response.data[3]._3_2_8.split("_").pop());
      let _3_2_9 = parseInt(response.data[3]._3_2_9.split("_").pop());
      let _3_2_10 = parseInt(response.data[3]._3_2_10.split("_").pop());

      let meanStep3 =
        (_3_2_1 +
          _3_2_2 +
          _3_2_3 +
          _3_2_4 +
          _3_2_5 +
          _3_2_6 +
          _3_2_7 +
          _3_2_8 +
          _3_2_9 +
          _3_2_10) /
        10;

      let meanStep3Scenario;
      if (meanStep3 <= 2) {
        meanStep3Scenario = "1";
      } else if (meanStep3 > 2 && meanStep3 <= 3) {
        meanStep3Scenario = "2";
      } else if (meanStep3 > 3 && meanStep3 <= 4) {
        meanStep3Scenario = "3";
      } else {
        meanStep3Scenario = "4";
      }

      this.setState({
        user: this.props.user,
        meanStep3Scenario: meanStep3Scenario,
        ...response.data[3]
      });
    });
  }

  render() {
    return (
      <div data-w-tab="Tab 4" className="tab-pane w-tab-pane w--tab-active">
        <div className="container marginbottom80">
          <div className="intro-text results">
            <img
              src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578862225/evi2_120120/step1_uvi01u.svg"
              alt=""
              className="step-icon hide"
            />
            <div className="details-wrap">
              <h1>Analyse programma</h1>
            </div>
            <div className="paragraph-light">
              Op welke manier geeft jouw school het culturele programma voor de
              leerlingen vorm en inhoud? Op welke manier vullen jullie het
              programma in?
              <br />
            </div>
          </div>
        </div>
        <div className="container results-sub">
          <div className="results-subcontent-sidebar">
            <a href="#3-analyse" className="sidebar-menu w-inline-block">
              <div>Advies</div>
            </a>
            <a href="#3-replies" className="sidebar-menu w-inline-block">
              <div>Antwoorden</div>
            </a>
          </div>
          <div className="results-subcontent-wrapper">
            <div
              id="3-analyse"
              className="w-layout-grid project-details-wrapper first"
            >
              <h2 className="results-heading">Advies</h2>
              <div className="level_blocks-wrapper">
                {this.state.meanStep3Scenario === "1" ? (
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
                {this.state.meanStep3Scenario === "2" ? (
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
                {this.state.meanStep3Scenario === "3" ? (
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
                {this.state.meanStep3Scenario === "4" ? (
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
                  <h3>Programma</h3>
                </div>
                {this.state.meanStep3Scenario === "1" ? (
                  <div className="scenario-wrapper-static">
                    <img
                      src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578862224/evi2_120120/scenario-arrow-small_wn2ou9.svg"
                      alt=""
                      className="step-icon small"
                    />
                    <div className="form-row-header scenario-header">
                      <h4 className="heading">Scenario 1</h4>
                      <p>
                        Wat betreft Programma zit jullie school in scenario 1.
                        Mogelijk willen jullie de culturele activiteiten, lessen
                        of workshops meer op elkaar afstemmen en een stap zetten
                        naar het niveau van scenario 2. In dat geval kunnen
                        jullie de volgende dingen doen:
                        <br />
                      </p>
                      <ul className="list margin20">
                        <li className="list-item">
                          <p>
                            Maak gebruik van een cultuurmenu dat in de regio
                            wordt aangeboden.
                          </p>
                        </li>
                        <li className="list-item">
                          <p>
                            Verken hoe het programma voor cultuuronderwijs meer
                            planmatig via bv projectweken of vaste momenten in
                            de week kan worden ingevuld.
                          </p>
                        </li>
                        <li className="list-item">
                          <p>
                            Reserveer voldoende tijd en middelen om het
                            programma te kunnen invullen, financieren en
                            plannen.
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
                {this.state.meanStep3Scenario === "2" ? (
                  <div className="scenario-wrapper-static">
                    <img
                      src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578862224/evi2_120120/scenario-arrow-small_wn2ou9.svg"
                      alt=""
                      className="step-icon small"
                    />
                    <div className="form-row-header scenario-header">
                      <h4 className="heading">Scenario 2</h4>
                      <p>
                        Wat betreft Programma zit jullie school in scenario
                        2.&nbsp;Dit is een mooie basis, die jullie misschien
                        willen behouden, aanscherpen of bestendigen. Mogelijk
                        willen jullie een stap zetten naar het niveau van
                        scenario 3. In dat geval kun je de volgende dingen doen:
                        <br />
                      </p>
                      <ul className="list margin20">
                        <li className="list-item">
                          <p>
                            Breng bewuste keuzes aan voor samenhang in je
                            programma, bijvoorbeeld voor vakverbindingen en/of
                            een doorlopende leerlijn.
                          </p>
                        </li>
                        <li className="list-item">
                          <p>
                            Formuleer heldere doelen voor cultuuronderwijs,
                            vertaal dit naar het programma en de beschikbare
                            tijd en middelen.
                          </p>
                        </li>
                        <li className="list-item">
                          <p>
                            Haal inspiratie over mogelijke invullingen van
                            programma’s cultuuronderwijs bij het icc- en/of
                            cultuurbegleidersnetwerk.&nbsp;
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
                {this.state.meanStep3Scenario === "3" ? (
                  <div className="scenario-wrapper-static">
                    <img
                      src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578862224/evi2_120120/scenario-arrow-small_wn2ou9.svg"
                      alt=""
                      className="step-icon small"
                    />
                    <div className="form-row-header scenario-header">
                      <h4 className="heading">Scenario 3</h4>
                      <p>
                        Wat betreft Programma zit jullie school in scenario
                        3.&nbsp;Jullie weten het programma vanuit bewuste keuzes
                        in samenhang neer te zetten door bijvoorbeeld
                        vakverbinding en/of in een doorlopende leerlijn. Dit is
                        een mooie basis, die jullie misschien willen behouden,
                        aanscherpen of bestendigen. Mogelijk willen jullie een
                        stap zetten naar het niveau van scenario 4. In dat geval
                        kunt je de volgende dingen doen:
                        <br />
                      </p>
                      <ul className="list margin20">
                        <li className="list-item">
                          <p>
                            Verken hoe je het programma kunt laten aansluiten
                            met buitenschoolse activiteiten, voorschoolse
                            educatie en het voortgezet onderwijs.
                          </p>
                        </li>
                        <li className="list-item">
                          <p>
                            Leer van en met elkaar binnen netwerkscholen,
                            bijvoorbeeld een 3-scholennetwerk en/of netwerk van
                            de Vereniging CultuurProfielScholen.
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
                {this.state.meanStep3Scenario === "4" ? (
                  <div className="scenario-wrapper-static">
                    <img
                      src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578862224/evi2_120120/scenario-arrow-small_wn2ou9.svg"
                      alt=""
                      className="step-icon small"
                    />
                    <div className="form-row-header scenario-header">
                      <h4 className="heading">Scenario 4</h4>
                      <p>
                        Wat betreft Programma zit je in scenario 4Probeer dit
                        niveau vast te houden. Jullie slagen er in om een
                        passend en verdiepend programma cultuuronderwijs op
                        jullie school neer te zetten, afgestemd op zowel de
                        binnen- als buitenschoolse ontwikkelingen. Om scherp en
                        kritisch te blijven, maar ook om je kennis over de
                        invulling van het programma te delen, kunnen jullie de
                        volgende dingen doen:
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
                            Sluit je aan bij regionale netwerken, bijvoorbeeld
                            een scenario 4-scholennetwerk{" "}
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
              id="3-replies"
              className="w-layout-grid project-details-wrapper"
            >
              <h2 className="results-heading">Antwoorden</h2>
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
                  <div className="form-row-header">
                    <h4>
                      Op welke manier wordt het programma cultuuronderwijs op
                      jullie school ingevuld?
                    </h4>
                  </div>
                  <div className="form-wrapper">
                    <div className="form">
                      <div className="text-field static-text-field">
                        <p>
                        {this.state._3_1_1}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-row-header">
                    <h4>Brengen jullie hier bewust samenhang in aan?</h4>
                  </div>
                  <div className="form-wrapper">
                    <div className="form _2-col-row">
                      <div className="radio-button-field static">
                      <div
                          className={
                            this.state._3_1_2 === "_3_1_2_2"
                            ? "radio-button-static marginright15 active"
                            : "radio-button-static marginright15"
                          }
                        />
                        <div className="checkbox-label">Ja</div>
                      </div>
                      <div className="radio-button-field static">
                      <div
                          className={
                            this.state._3_1_2 === "_3_1_2_2"
                            ? "radio-button-static marginright15 active"
                            : "radio-button-static marginright15"
                          }
                        />
                        <div className="checkbox-label">Nee</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-row-header">
                    <h4>
                      Heeft jullie school een doorgaande leerlijn
                      cultuuronderwijs uitgewerkt en vastgelegd (bijvoorbeeld
                      voor een van de kunstdisciplines)?
                    </h4>
                  </div>
                  <div className="form-wrapper">
                    <div className="form _2-col-row">
                      <div className="radio-button-field static">
                      <div
                          className={
                            this.state._3_1_3 === "_3_1_3_1"
                            ? "radio-button-static marginright15 active"
                            : "radio-button-static marginright15"
                          }
                        />                        
                        <div className="checkbox-label">Ja</div>
                      </div>
                      <div className="radio-button-field static">
                      <div
                          className={
                            this.state._3_1_3 === "_3_1_3_2"
                            ? "radio-button-static marginright15 active"
                            : "radio-button-static marginright15"
                          }
                        />    
                        <div className="checkbox-label">Nee</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-row-header">
                    <h4>
                      Geef een korte omschrijving van de doorgaande leerlijn
                      cultuuronderwijs op jullie school.
                    </h4>
                  </div>
                  <div className="form-wrapper">
                    <div className="form">
                      <div className="text-field static-text-field">
                        <p>
                          {this.state._3_1_4}
                        </p>
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
                <div className="form-row">
                  <div className="form-row-header">
                    <div className="label answertype no">Indien nee</div>
                    <h4>
                      Wat is jullie manier om samenhang aan te brengen in het
                      cultuuronderwijs?
                    </h4>
                  </div>
                  <div className="form-wrapper">
                    <div className="form">
                      <div className="text-field static-text-field">
                        <p>
                        {this.state._3_1_5}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-row-header">
                    <div className="label answertype no">Indien nee</div>
                    <h4>Waarom wordt niet bewust samenhang aangebracht?</h4>
                  </div>
                  <div className="form-wrapper">
                    <div className="form">
                      <div className="text-field static-text-field">
                        <p>
                        {this.state._3_1_6}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-row-header">
                    <h4>
                      Hoe volgen jullie de ontwikkeling van jullie leerlingen in
                      cultuuronderwijs?
                    </h4>
                  </div>
                  <div className="form-wrapper">
                    <div className="form">
                      <div className="text-field static-text-field">
                        <p>
                        {this.state._3_1_7}
                        </p>
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
                      In hoeverre passen de volgende stellingen bij de invulling
                      van jullie programma op jullie school?
                      <br />
                      Het programma voor cultuuronderwijs
                      <br />
                    </p>
                  </div>
                </div>
                <div className="table">
                  <div className="table-header">
                    <div className="table-empty-cell" />
                    <h6 id="w-node-200f8481f127-7eda5bea">1</h6>
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
                        Biedt onderwerpen die onze leerlingen leren
                        betekenisgeven aan en reflecteren op zichzelf en de
                        wereld
                      </p>
                      <div
                        id="w-node-200f8481f135-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._3_2_1 === "_3_2_1_1"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-200f8481f137-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._3_2_1 === "_3_2_1_2"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />                      </div>
                      <div
                        id="w-node-200f8481f139-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._3_2_1 === "_3_2_1_3"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />                      </div>
                      <div
                        id="w-node-200f8481f13b-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._3_2_1 === "_3_2_1_4"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />                      </div>
                      <div
                        id="w-node-200f8481f13d-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._3_2_1 === "_3_2_1_5"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />                      </div>
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
                        Geeft onze leerlingen de ruimte om zelfsturend te zijn
                        en <em>vanuit hun eigen vraag en interesse</em> te
                        kunnen werken
                      </p>
                      <div
                        id="w-node-200f8481f14c-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._3_2_2 === "_3_2_2_1"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-200f8481f14e-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._3_2_2 === "_3_2_2_2"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-200f8481f150-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._3_2_2 === "_3_2_2_3"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-200f8481f152-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._3_2_2 === "_3_2_2_4"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-200f8481f154-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._3_2_2 === "_3_2_2_5"
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
                        Draagt eraan bij dat onze leerlingen{" "}
                        <em>zich verbonden voelen</em> met hun eigen omgeving en
                        achtergrond
                      </p>
                      <div
                        id="w-node-200f8481f163-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._3_2_3 === "_3_2_3_1"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-200f8481f165-7eda5bea"
                        className="table-cell bullet"
                      >
                                                <div
                          className={
                            this.state._3_2_3 === "_3_2_3_2"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-200f8481f167-7eda5bea"
                        className="table-cell bullet"
                      >
                                                <div
                          className={
                            this.state._3_2_3 === "_3_2_3_3"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-200f8481f169-7eda5bea"
                        className="table-cell bullet"
                      >
                                                <div
                          className={
                            this.state._3_2_3 === "_3_2_3_4"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-200f8481f16b-7eda5bea"
                        className="table-cell bullet"
                      >
                                                <div
                          className={
                            this.state._3_2_3 === "_3_2_3_5"
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
                        Biedt onze leerlingen een zo breed mogelijk palet om{" "}
                        <em>culturele, en kunstzinnige activiteiten </em>
                        te maken en mee te maken
                      </p>
                      <div
                        id="w-node-200f8481f179-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._3_2_4 === "_3_2_4_1"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-200f8481f17b-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._3_2_4 === "_3_2_4_2"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-200f8481f17d-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._3_2_4 === "_3_2_4_3"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-200f8481f17f-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._3_2_4 === "_3_2_4_4"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-200f8481f181-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._3_2_4 === "_3_2_4_5"
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
                        Versterkt de taalontwikkeling en sociaal emotionele
                        ontwikkeling bij leerlingen
                      </p>
                      <div
                        id="w-node-200f8481f18d-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._3_2_5 === "_3_2_5_1"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-200f8481f18f-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._3_2_5 === "_3_2_5_2"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-200f8481f191-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._3_2_5 === "_3_2_5_3"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-200f8481f193-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._3_2_5 === "_3_2_5_4"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-200f8481f195-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._3_2_5 === "_3_2_5_5"
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
                        Biedt de mogelijkheid om{" "}
                        <em>ambachtelijke vaardigheden</em> te ontwikkelen in
                        uiteenlopende media (materialen, ICT-middelen,
                        voorwerpen, instrumenten, gesproken en geschreven taal,
                        het (eigen) lichaam)
                      </p>
                      <div
                        id="w-node-200f8481f1a4-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._3_2_6 === "_3_2_6_1"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-200f8481f1a6-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._3_2_6 === "_3_2_6_2"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-200f8481f1a8-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._3_2_6 === "_3_2_6_3"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-200f8481f1aa-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._3_2_6 === "_3_2_6_4"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-200f8481f1ac-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._3_2_6 === "_3_2_6_5"
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
                        Daagt onze leerlingen uit om hun artistiek, creatief en
                        innovatief vermogen te ontwikkelen
                      </p>
                      <div
                        id="w-node-200f8481f1b8-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._3_2_7 === "_3_2_7_1"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-200f8481f1ba-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._3_2_7 === "_3_2_7_2"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-200f8481f1bc-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._3_2_7 === "_3_2_7_3"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-200f8481f1be-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._3_2_7 === "_3_2_7_4"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-200f8481f1c0-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._3_2_7 === "_3_2_7_5"
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
                        Biedt ruimte voor artistieke expressie en presentatie
                      </p>
                      <div
                        id="w-node-200f8481f1cf-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._3_2_8 === "_3_2_8_1"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-200f8481f1d1-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._3_2_8 === "_3_2_8_2"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-200f8481f1d3-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._3_2_8 === "_3_2_8_3"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-200f8481f1d5-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._3_2_8 === "_3_2_8_4"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-200f8481f1d7-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._3_2_8 === "_3_2_8_5"
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
                        Biedt ruimte voor <em>vakoverstijgend </em>
                        verbinden met andere vakken, leergebieden,
                        overkoepelende vaardigheden en thema’s
                      </p>
                      <div
                        id="w-node-200f8481f1e6-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._3_2_9 === "_3_2_9_1"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-200f8481f1e8-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._3_2_9 === "_3_2_9_2"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-200f8481f1ea-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._3_2_9 === "_3_2_9_3"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-200f8481f1ec-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._3_2_9 === "_3_2_9_4"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-200f8481f1ee-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._3_2_9 === "_3_2_9_5"
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
                        Draagt er aan bij dat onze leerlingen hun onderzoekende
                        en open houding ontwikkelen
                      </p>
                      <div
                        id="w-node-200f8481f1fa-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._3_2_10 === "_3_2_10_1"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-200f8481f1fc-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._3_2_10 === "_3_2_10_2"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-200f8481f1fe-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._3_2_10 === "_3_2_10_3"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-200f8481f200-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._3_2_10 === "_3_2_10_4"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                      </div>
                      <div
                        id="w-node-200f8481f202-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div
                          className={
                            this.state._3_2_10 === "_3_2_10_5"
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
                    <div>3.3</div>
                  </div>
                  <h3 className="form-heading horizontal-center">Beoordelen</h3>
                </div>
                <div className="form-row first">
                  <div className="form-row-header">
                    <h4>
                      In hoeverre zijn jullie tevreden over het programma
                      cultuuronderwijs op jullie school? Licht de beoordeling
                      toe.
                    </h4>
                  </div>
                  <div className="form-wrapper">
                    <div className="form">
                      <div className="text-field static-text-field">
                        <p>
                        {this.state._3_3}
                        </p>
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
                  <div className="form-wrapper">
                    <div className="form _2-col-row">
                      <div className="radio-button-field static">
                      <div
                          className={
                            this.state._3_4_1 === "_3_4_1_1"
                              ? "radio-button-static marginright15 active"
                              : "radio-button-static marginright15"
                          }
                        /> 
                      <div className="checkbox-label">Ja</div>
                      </div>
                      <div className="radio-button-field static">
                      <div
                          className={
                            this.state._3_4_1 === "_3_4_1_2"
                              ? "radio-button-static marginright15 active"
                              : "radio-button-static marginright15"
                          }
                        />                         <div className="checkbox-label">Nee</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-row-header">
                    <div className="label answertype yes">Indien ja</div>
                    <h4>Hoe willen jullie dat aanpakken?</h4>
                  </div>
                  <div className="form-wrapper">
                    <div className="form">
                      <div className="text-field static-text-field">
                        <p>
                          {this.state._3_4_2}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
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
                            this.state._3_4_3 === "_3_4_3_1"
                              ? "radio-button-static marginright15 active"
                              : "radio-button-static marginright15"
                          }
                        />
                        <div className="checkbox-label">Ja</div>
                      </div>
                      <div className="radio-button-field static">
                      <div
                          className={
                            this.state._3_4_3 === "_3_4_3_2"
                              ? "radio-button-static marginright15 active"
                              : "radio-button-static marginright15"
                          }
                        />
                        <div className="checkbox-label">Nee</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-row-header">
                    <div className="label answertype yes">Indien ja</div>
                    <h4>Wat is je hulpvraag?</h4>
                  </div>
                  <div className="form-wrapper">
                    <div className="form">
                      <div className="text-field static-text-field">
                        <p>
                        {this.state._3_4_4}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-row-header">
                    <div className="label answertype no">Indien nee</div>
                    <h4>
                      Kunnen jullie aangeven waarom jullie geen plannen hebben
                      voor verdere ontwikkeling van jullie programma
                      cultuuronderwijs? Licht het antwoord toe.
                    </h4>
                  </div>
                  <div className="form-wrapper">
                    <div className="form">
                      <div className="text-field static-text-field">
                        <p>
                        {this.state._3_4_5}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
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
                      <br />
                    </p>
                  </div>
                </div>
                <div className="form-row first">
                  <div className="form-wrapper form-scenario">
                    <div className="form">
                      <div className="radio-button-field scenario _1">
                      <div
                          className={
                            this.state._3_5 === "_3_5_1"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                        <div className="form-row-header scenario-header">
                          <h4 className="heading">Scenario 1</h4>
                          <p>
                            De culturele activiteiten, lessen of workshops
                            vertonen geen samenhang. Ze vinden incidenteel –
                            zonder structureel budget - plaats en worden
                            willekeurig gekozen.
                            <br />
                          </p>
                        </div>
                      </div>
                      <div className="radio-button-field scenario _2">
                      <div
                          className={
                            this.state._3_5 === "_3_5_2"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                        <div className="form-row-header scenario-header">
                          <h4 className="heading">Scenario 2</h4>
                          <p>
                            De culturele activiteiten, lessen of workshops zijn
                            enigszins op elkaar afgestemd, bijvoorbeeld in de
                            vorm van een cultuurmenu of projectweek. Hiervoor
                            worden voldoende tijd en middelen gereserveerd.
                            <br />
                          </p>
                        </div>
                      </div>
                      <div className="radio-button-field scenario _3">
                      <div
                          className={
                            this.state._3_5 === "_3_5_3"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                        <div className="form-row-header scenario-header">
                          <h4 className="heading">Scenario 3</h4>
                          <p>
                            De school brengt bewust samenhang aan - vanuit de
                            zelf benoemde doelen - in de culturele activiteiten,
                            lessen of workshops door bijvoorbeeld samenhang met
                            andere vakken en/of een opbouw van groep 1 t/m 8.
                            Hiervoor wordt structureel voldoende tijd en
                            middelen gezocht en/of gereserveerd.
                            <br />
                          </p>
                        </div>
                      </div>
                      <div className="radio-button-field scenario _4">
                      <div
                          className={
                            this.state._3_5 === "_3_5_4"
                              ? "radio-button-static active"
                              : "radio-button-static"
                          }
                        />
                        <div className="form-row-header scenario-header">
                          <h4 className="heading">Scenario 4</h4>
                          <p>
                            De school brengt bewust samenhang aan - vanuit de
                            zelf benoemde doelen - in de culturele activiteiten,
                            lessen of workshops door bijvoorbeeld samenhang met
                            andere vakken en/of een opbouw van groep 1 t/m 8.
                            Ook wordt een verbinding gemaakt met buitenschoolse
                            activiteiten, de voorschoolse educatie, of het
                            voortgezet onderwijs. Tijd en middelen zijn
                            structureel en ruimschoots aanwezig.
                            <br />
                          </p>
                        </div>
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
                  <div className="form-row-header">
                    <h4>
                      Als jullie nog iets kwijt willen over het programma
                      cultuuronderwijs op jullie school, kan dat hier.
                    </h4>
                  </div>
                  <div className="form-wrapper">
                    <div className="form">
                      <div className="text-field static-text-field">
                        <p>
                          {this.state._3_6}
                        </p>
                      </div>
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

export default withRouter(ResultsTab4);
