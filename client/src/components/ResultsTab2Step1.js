import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class ResultsTab2 extends React.Component {
  state = {
    user: this.props.user
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    axios.post("/api/datatransfer/results", this.state).then(response => {
      console.log("Results Tab2", response.data);

      let _1_2_1 = parseInt(response.data[1]._1_2_1.split("_").pop());
      let _1_2_2 = parseInt(response.data[1]._1_2_2.split("_").pop());
      let _1_2_3 = parseInt(response.data[1]._1_2_3.split("_").pop());
      let _1_2_4 = parseInt(response.data[1]._1_2_4.split("_").pop());
      let _1_2_5 = parseInt(response.data[1]._1_2_5.split("_").pop());
      let _1_2_6 = parseInt(response.data[1]._1_2_6.split("_").pop());
      let _1_2_7 = parseInt(response.data[1]._1_2_7.split("_").pop());
      let _1_2_8 = parseInt(response.data[1]._1_2_8.split("_").pop());
      let _1_2_9 = parseInt(response.data[1]._1_2_9.split("_").pop());
      let _1_2_10 = parseInt(response.data[1]._1_2_10.split("_").pop());

      let meanStep1 =
        (_1_2_1 +
          _1_2_2 +
          _1_2_3 +
          _1_2_4 +
          _1_2_5 +
          _1_2_6 +
          _1_2_7 +
          _1_2_8 +
          _1_2_9 +
          _1_2_10) /
        10;

      let meanStep1Scenario;
      if (meanStep1 <= 2) {
        meanStep1Scenario = "1";
      } else if (meanStep1 > 2 && meanStep1 <= 3) {
        meanStep1Scenario = "2";
      } else if (meanStep1 > 3 && meanStep1 <= 4) {
        meanStep1Scenario = "3";
      } else {
        meanStep1Scenario = "4";
      }

      this.setState({
        user: this.props.user, 
        meanStep1Scenario: meanStep1Scenario, ...response.data[1]
        
      },
      () => {
        console.log("resultTab2 state", this.state);
      }
      
      );
    });
  }


  
  consoleLog = () => {
    console.log("STATE: ", this.state);
  };

  render() {
    return (
      <div data-w-tab="Tab 2" className="tab-pane w-tab-pane w--tab-active">
        <div className="container marginbottom80">
          <div className="intro-text results">
            <img
              src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578862225/evi2_120120/step1_uvi01u.svg"
              alt=""
              className="step-icon hide"
            />
            <div className="details-wrap">
              <h1>Analyse visie</h1>
            </div>
            <div className="paragraph-light">
              Waar zou cultuuronderwijs op jouw school aan moeten bijdragen? Wat
              vind je als school belangrijk? En wat wil je je leerlingen
              meegeven?
              <br />
            </div>
          </div>
        </div>
        <div className="container results-sub">
          <div className="results-subcontent-sidebar">
            <a href="#1-analyse" className="sidebar-menu w-inline-block">
              <div>Advies</div>
            </a>
            <a href="#1-replies" className="sidebar-menu w-inline-block">
              <div>Antwoorden</div>
            </a>
          </div>
          <div className="results-subcontent-wrapper">
            <div
              id="1-analyse"
              className="w-layout-grid project-details-wrapper first"
            >
              <h2 className="results-heading first">Advies</h2>
              <div className="level_blocks-wrapper">
                {this.state.meanStep1Scenario === "1" ? (
                  <div className="content-block ratings">
                    <div className="results-score-wrapper small">
                      <h6 className="label">Scenario</h6>
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
                {this.state.meanStep1Scenario === "2" ? (
                  <div className="content-block ratings">
                    <div className="results-score-wrapper small">
                      <h6 className="label">Scenario</h6>
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
                {this.state.meanStep1Scenario === "3" ? (
                  <div className="content-block ratings">
                    <div className="results-score-wrapper small">
                      <h6 className="label">Scenario</h6>
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
                {this.state.meanStep1Scenario === "4" ? (
                  <div className="content-block ratings">
                    <div className="results-score-wrapper small">
                      <h6 className="label">Scenario</h6>
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
                  <h3>
                    <strong>Visie</strong>
                  </h3>
                </div>
                {this.state.meanStep1Scenario === "1" ? (
                  <div className="scenario-wrapper-static">
                    <img
                      src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578862224/evi2_120120/scenario-arrow-small_wn2ou9.svg"
                      alt=""
                      className="step-icon small"
                    />
                    <div className="form-row-header scenario-header">
                      <h4 className="heading">Scenario 1</h4>
                      <p>
                        Wat betreft <em>Visie</em> zit jullie school in scenario
                        1. Mogelijk willen jullie een stap zetten in het
                        vastleggen van een eigen visie en richting scenario 2
                        gaan. In dat geval kunnen jullie de volgende dingen
                        doen:
                        <br />
                      </p>
                      <ul className="list margin20">
                        <li className="list-item">
                          <p>
                            Verzamel inzichten in de school en stel samen met
                            iemand die cultuur onder haar hoede krijgt (bv
                            cultuurcontactpersoon/icc’er/leerkracht cultuur){" "}
                            <em>en</em> de directie een visie voor
                            cultuuronderwijs op.&nbsp;
                          </p>
                        </li>
                        <li className="list-item">
                          <p>
                            Leg deze visie vast in een cultuurplan van de
                            school.
                          </p>
                        </li>
                        <li className="list-item">
                          <p>
                            Evalueer jaarlijks het cultuuronderwijs op jullie
                            school.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {this.state.meanStep1Scenario === "2" ? (
                  <div className="scenario-wrapper-static">
                    <img
                      src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578862224/evi2_120120/scenario-arrow-small_wn2ou9.svg"
                      alt=""
                      className="step-icon small"
                    />
                    <div className="form-row-header scenario-header">
                      <h4 className="heading">Scenario 2</h4>
                      <p>
                        Wat betreft <em>Visie</em> zit jullie school in scenario
                        2. Dit is een mooie basis, die jullie misschien willen
                        behouden, aanscherpen of bestendigen. Mogelijk willen
                        jullie een stap zetten naar het niveau van scenario 3.
                        In dat geval kunnen jullie de volgende dingen doen:
                        <br />
                      </p>
                      <ul className="list margin20">
                        <li className="list-item">
                          <p>
                            Versterk het draagvlak voor cultuuronderwijs door
                            met het hele team de visie te bespreken.
                          </p>
                        </li>
                        <li className="list-item">
                          <p>
                            Laat het cultuurplan een apart onderdeel zijn van
                            het schoolplan.
                          </p>
                        </li>
                        <li className="list-item">
                          <p>
                            Evalueer jaarlijks met het hele team het
                            cultuuronderwijs op jullie school.
                          </p>
                        </li>
                        <li className="list-item">
                          <p>
                            De visie en plannen kunnen een vast onderdeel worden
                            van de jaarlijkse evaluatie.
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
                {this.state.meanStep1Scenario === "3" ? (
                  <div className="scenario-wrapper-static">
                    <img
                      src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578862224/evi2_120120/scenario-arrow-small_wn2ou9.svg"
                      alt=""
                      className="step-icon small"
                    />
                    <div className="form-row-header scenario-header">
                      <h4 className="heading">Scenario 3</h4>
                      <p>
                        Wat betreft <em>Visie </em>zit jullie school in scenario
                        3. Vanuit een breed gedragen visie en een gedegen
                        kwaliteitscyclus weten jullie cultuuronderwijs stevig
                        neer te zetten in jullie school. Mogelijk willen jullie
                        dit behouden, aanscherpen of bestendigen. Een stap
                        zetten naar scenario 4 kan ook een ontwikkelrichting
                        zijn. In dat geval kun je de volgende dingen doen:
                        <br />
                      </p>
                      <ul className="list margin20">
                        <li className="list-item">
                          <p>
                            Ontwikkel met het hele team een brede visie, met
                            aandacht voor cultuuronderwijs, op onderwijs.
                          </p>
                        </li>
                        <li className="list-item">
                          <p>
                            Integreer de visie op cultuuronderwijs in de brede
                            onderwijsvisie van de school en neem dit op in het
                            schoolplan. Betrek, indien wenselijk, je bestuur in
                            deze ontwikkelingen.
                          </p>
                        </li>
                        <li className="list-item">
                          <p>
                            Evalueer jaarlijks – met het hele team - de visie en
                            het schoolplan
                          </p>
                        </li>
                        <li className="list-item">
                          <p>
                            Sluit je aan bij een regionaal netwerken,
                            bijvoorbeeld een scenario 3-
                            <a href="#" className="link">
                              scholennetwerk
                            </a>{" "}
                            .
                          </p>
                        </li>
                        <li className="list-item">
                          <p>
                            Sluit je aan bij de Vereniging CultuurProfielScholen
                            .
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {this.state.meanStep1Scenario === "4" ? (
                  <div className="scenario-wrapper-static">
                    <img
                      src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578862224/evi2_120120/scenario-arrow-small_wn2ou9.svg"
                      alt=""
                      className="step-icon small"
                    />
                    <div className="form-row-header scenario-header">
                      <h4 className="heading">Scenario 4</h4>
                      <p>
                        Wat betreft <em>Visie</em> zit je in scenario 4. Probeer
                        dit niveau vast te houden. Om scherp en kritisch te
                        blijven, maar ook om je kennis te delen, kunnen jullie
                        de volgende dingen doen:
                        <br />
                      </p>
                      <ul className="list margin20">
                        <li className="list-item">
                          <p>
                            Deelnemen aan lokale en regionale bijeenkomsten.
                            Denk aan bijeenkomsten van scenario 4-scholen,
                            cultuurprofielscholen , cultuurbegeleiders ,
                            kunstvakopleidingen en/of pabo bijeenkomsten.
                          </p>
                        </li>
                        <li className="list-item">
                          <p>
                            Deelname aan landelijke bijeenkomsten. Denk aan
                            bijeenkomsten van LKCA , SLO of landelijke
                            vakverenigingen.
                          </p>
                        </li>
                        <li className="list-item">
                          <p>
                            Regelmatig de visie en ontwikkelingen op je school
                            delen en afstemmen met je bestuur en bovenschoolse
                            cultuurcoördinator.
                          </p>
                        </li>
                        <li className="list-item">
                          <p>
                            Sluit je aan bij regionale netwerken, bijvoorbeeld
                            een scenario 4-scholennetwerk
                          </p>
                        </li>
                        <li className="list-item">
                          <p>
                            Sluit je aan bij de Vereniging CultuurProfielScholen
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div
              id="1-replies"
              className="w-layout-grid project-details-wrapper"
            >
              <h2 className="results-heading">Antwoorden</h2>
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
                  <div className="form-wrapper">
                    <div className="form">
                      <div className="text-field static-text-field">
                        <p>{this.state._1_1_1}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-row-header">
                    <h4>Is deze visie vastgelegd in een beleidsstuk?</h4>
                  </div>
                  {this.state._1_1_2 === "_1_1_2_1" ? (
                    <div className="form-wrapper">
                      <div className="form _2-col-row">
                        <div className="radio-button-field static">
                          <div className="radio-button-static marginright15 active" />
                          <div className="checkbox-label">Ja</div>
                        </div>
                        <div className="radio-button-field static">
                          <div className="radio-button-static marginright15" />
                          <div className="checkbox-label">Nee</div>
                        </div>
                      </div>
                    </div>
                   ) : ( 
                    <div className="form-wrapper">
                      <div className="form _2-col-row">
                        <div className="radio-button-field static">
                          <div className="radio-button-static marginright15" />
                          <div className="checkbox-label">Ja</div>
                        </div>
                        <div className="radio-button-field static">
                          <div className="radio-button-static marginright15 active" />
                          <div className="checkbox-label">Nee</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="form-row">
                  <div className="form-row-header">
                    <h4>
                      Wat willen jullie met het cultuuronderwijs op jullie
                      school bereiken?
                    </h4>
                  </div>
                  <div className="form-wrapper">
                    <div className="form">
                      <div className="text-field static-text-field">
                      <p>{this.state._1_1_3}</p>
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
                  </div>
                </div>
                <div className="table">
                  <div className="table-header">
                    <div className="table-empty-cell" />
                    <h6 id="w-node-e6e7232981c6-7eda5bea">1</h6>
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
                        Onze leerlingen leren betekenisgeven aan en reflecteren
                        op zichzelf en de wereld
                      </p>
                      <div
                        id="w-node-e6e7232981d4-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div className={this.state._1_2_1 === "_1_2_1_1" ? "radio-button-static active" : "radio-button-static"}/>
                      </div>
                      <div
                        id="w-node-e6e7232981d8-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div className={this.state._1_2_1 === "_1_2_1_2" ? "radio-button-static active" : "radio-button-static"}/>
                      </div>
                      <div
                        id="w-node-e6e7232981dc-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div className={this.state._1_2_1 === "_1_2_1_3" ? "radio-button-static active" : "radio-button-static"}/>
                      </div>
                      <div
                        id="w-node-e6e7232981e0-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div className={this.state._1_2_1 === "_1_2_1_4" ? "radio-button-static active" : "radio-button-static"}/>
                      </div>
                      <div
                        id="w-node-e6e7232981e4-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div className={this.state._1_2_1 === "_1_2_1_5" ? "radio-button-static active" : "radio-button-static"}/>
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
                        id="w-node-e6e7232981f5-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div className={this.state._1_2_2 === "_1_2_2_1" ? "radio-button-static active" : "radio-button-static"}/>
                      </div>
                      <div
                        id="w-node-e6e7232981f9-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div className={this.state._1_2_2 === "_1_2_2_2" ? "radio-button-static active" : "radio-button-static"}/>
                      </div>
                      <div
                        id="w-node-e6e7232981fd-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div className={this.state._1_2_2 === "_1_2_2_3" ? "radio-button-static active" : "radio-button-static"}/>
                      </div>
                      <div
                        id="w-node-e6e723298201-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div className={this.state._1_2_2 === "_1_2_2_4" ? "radio-button-static active" : "radio-button-static"}/>
                      </div>
                      <div
                        id="w-node-e6e723298205-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div className={this.state._1_2_2 === "_1_2_2_5" ? "radio-button-static active" : "radio-button-static"}/>
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
                        id="w-node-e6e723298216-7eda5bea"
                        className="table-cell bullet"
                      >
                      <div className={this.state._1_2_3 === "_1_2_3_1" ? "radio-button-static active" : "radio-button-static"}/>

                      </div>
                      <div
                        id="w-node-e6e72329821a-7eda5bea"
                        className="table-cell bullet"
                      >
                      <div className={this.state._1_2_3 === "_1_2_3_2" ? "radio-button-static active" : "radio-button-static"}/>
                      </div>
                      <div
                        id="w-node-e6e72329821e-7eda5bea"
                        className="table-cell bullet"
                      >
                      <div className={this.state._1_2_3 === "_1_2_3_3" ? "radio-button-static active" : "radio-button-static"}/>
                      </div>
                      <div
                        id="w-node-e6e723298222-7eda5bea"
                        className="table-cell bullet"
                      >
                      <div className={this.state._1_2_3 === "_1_2_3_4" ? "radio-button-static active" : "radio-button-static"}/>
                      </div>
                      <div
                        id="w-node-e6e723298226-7eda5bea"
                        className="table-cell bullet"
                      >
                      <div className={this.state._1_2_3 === "_1_2_3_5" ? "radio-button-static active" : "radio-button-static"}/>
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
                          zo breed mogelijk pallet aan culturele en kunstzinnige
                          activiteiten maken en meemaken
                        </em>
                      </p>
                      <div
                        id="w-node-e6e723298236-7eda5bea"
                        className="table-cell bullet"
                      >
                      <div className={this.state._1_2_4 === "_1_2_4_1" ? "radio-button-static active" : "radio-button-static"}/>
                      </div>
                      <div
                        id="w-node-e6e72329823a-7eda5bea"
                        className="table-cell bullet"
                      >
                      <div className={this.state._1_2_4 === "_1_2_4_2" ? "radio-button-static active" : "radio-button-static"}/>
                      </div>
                      <div
                        id="w-node-e6e72329823e-7eda5bea"
                        className="table-cell bullet"
                      >
                      <div className={this.state._1_2_4 === "_1_2_4_3" ? "radio-button-static active" : "radio-button-static"}/>
                      </div>
                      <div
                        id="w-node-e6e723298242-7eda5bea"
                        className="table-cell bullet"
                      >
                      <div className={this.state._1_2_4 === "_1_2_4_4" ? "radio-button-static active" : "radio-button-static"}/>
                      </div>
                      <div
                        id="w-node-e6e723298246-7eda5bea"
                        className="table-cell bullet"
                      >
                      <div className={this.state._1_2_4 === "_1_2_4_5" ? "radio-button-static active" : "radio-button-static"}/>
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
                        id="w-node-e6e723298254-7eda5bea"
                        className="table-cell bullet"
                      >
                      <div className={this.state._1_2_5 === "_1_2_5_1" ? "radio-button-static active" : "radio-button-static"}/>

                      </div>
                      <div
                        id="w-node-e6e723298258-7eda5bea"
                        className="table-cell bullet"
                      >
                      <div className={this.state._1_2_4 === "_1_2_5_2" ? "radio-button-static active" : "radio-button-static"}/>

                      </div>
                      <div
                        id="w-node-e6e72329825c-7eda5bea"
                        className="table-cell bullet"
                      >
                      <div className={this.state._1_2_4 === "_1_2_5_3" ? "radio-button-static active" : "radio-button-static"}/>

                      </div>
                      <div
                        id="w-node-e6e723298260-7eda5bea"
                        className="table-cell bullet"
                      >
                      <div className={this.state._1_2_4 === "_1_2_5_4" ? "radio-button-static active" : "radio-button-static"}/>
                      </div>
                      <div
                        id="w-node-e6e723298264-7eda5bea"
                        className="table-cell bullet"
                      >
                      <div className={this.state._1_2_4 === "_1_2_5_5" ? "radio-button-static active" : "radio-button-static"}/>

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
                        Onze leerlingen
                        <em> ambachtelijke vaardigheden</em> ontwikkelen in
                        uiteenlopende media (materialen, ICT-middelen,
                        voorwerpen, instrumenten, gesproken en geschreven taal,
                        het (eigen) lichaam)
                      </p>
                      <div
                        id="w-node-e6e723298275-7eda5bea"
                        className="table-cell bullet"
                      >
                      <div className={this.state._1_2_6 === "_1_2_6_1" ? "radio-button-static active" : "radio-button-static"}/>
                      </div>
                      <div
                        id="w-node-e6e723298279-7eda5bea"
                        className="table-cell bullet"
                      >
                       <div className={this.state._1_2_6 === "_1_2_6_2" ? "radio-button-static active" : "radio-button-static"}/>                      </div>
                      <div
                        id="w-node-e6e72329827d-7eda5bea"
                        className="table-cell bullet"
                      >
                       <div className={this.state._1_2_6 === "_1_2_6_3" ? "radio-button-static active" : "radio-button-static"}/>                      </div>
                      <div
                        id="w-node-e6e723298281-7eda5bea"
                        className="table-cell bullet"
                      >
                       <div className={this.state._1_2_6 === "_1_2_6_4" ? "radio-button-static active" : "radio-button-static"}/>                      </div>
                      <div
                        id="w-node-e6e723298285-7eda5bea"
                        className="table-cell bullet"
                      >
                       <div className={this.state._1_2_6 === "_1_2_6_5" ? "radio-button-static active" : "radio-button-static"}/>                      </div>
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
                        id="w-node-e6e723298293-7eda5bea"
                        className="table-cell bullet"
                      >
                       <div className={this.state._1_2_7 === "_1_2_7_1" ? "radio-button-static active" : "radio-button-static"}/>                      
                       </div>
                      
                      <div
                        id="w-node-e6e723298297-7eda5bea"
                        className="table-cell bullet"
                      >
                       <div className={this.state._1_2_7 === "_1_2_7_2" ? "radio-button-static active" : "radio-button-static"}/>                      </div>
                      
                      <div
                        id="w-node-e6e72329829b-7eda5bea"
                        className="table-cell bullet"
                      >
                       <div className={this.state._1_2_7 === "_1_2_7_3" ? "radio-button-static active" : "radio-button-static"}/>                      </div>
                      
                      <div
                        id="w-node-e6e72329829f-7eda5bea"
                        className="table-cell bullet"
                      >
                       <div className={this.state._1_2_7 === "_1_2_7_4" ? "radio-button-static active" : "radio-button-static"}/>                      </div>
                      
                      <div
                        id="w-node-e6e7232982a3-7eda5bea"
                        className="table-cell bullet"
                      >
                       <div className={this.state._1_2_7 === "_1_2_7_5" ? "radio-button-static active" : "radio-button-static"}/>                      </div>
                      
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
                        id="w-node-e6e7232982b4-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div className={this.state._1_2_8 === "_1_2_8_1" ? "radio-button-static active" : "radio-button-static"}/>                      
                      </div>
                      <div
                        id="w-node-e6e7232982b8-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div className={this.state._1_2_8 === "_1_2_8_2" ? "radio-button-static active" : "radio-button-static"}/>                      
                      </div>
                      <div
                        id="w-node-e6e7232982bc-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div className={this.state._1_2_8 === "_1_2_8_3" ? "radio-button-static active" : "radio-button-static"}/>                      
                      </div>
                      <div
                        id="w-node-e6e7232982c0-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div className={this.state._1_2_8 === "_1_2_8_4" ? "radio-button-static active" : "radio-button-static"}/>                      
                      </div>
                      <div
                        id="w-node-e6e7232982c4-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div className={this.state._1_2_8 === "_1_2_8_5" ? "radio-button-static active" : "radio-button-static"}/>                      
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
                        Aandacht is voor <em>vakoverstijgend </em>
                        verbinden met andere vakken, leergebieden,
                        overkoepelende vaardigheden en thema’s
                      </p>
                      <div
                        id="w-node-e6e7232982d5-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div className={this.state._1_2_9 === "_1_2_9_1" ? "radio-button-static active" : "radio-button-static"}/>                      
                      </div>
                      <div
                        id="w-node-e6e7232982d9-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div className={this.state._1_2_9 === "_1_2_9_2" ? "radio-button-static active" : "radio-button-static"}/>                      
                      </div>
                      <div
                        id="w-node-e6e7232982dd-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div className={this.state._1_2_9 === "_1_2_9_3" ? "radio-button-static active" : "radio-button-static"}/>                      
                      </div>
                      <div
                        id="w-node-e6e7232982e1-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div className={this.state._1_2_9 === "_1_2_9_4" ? "radio-button-static active" : "radio-button-static"}/>                      
                      </div>
                      <div
                        id="w-node-e6e7232982e5-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div className={this.state._1_2_9 === "_1_2_9_5" ? "radio-button-static active" : "radio-button-static"}/>                      
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
                        id="w-node-e6e7232982f3-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div className={this.state._1_2_10 === "_1_2_10_1" ? "radio-button-static active" : "radio-button-static"}/>                      
                      </div>
                      <div
                        id="w-node-e6e7232982f7-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div className={this.state._1_2_10 === "_1_2_10_2" ? "radio-button-static active" : "radio-button-static"}/>                      
                      </div>
                      <div
                        id="w-node-e6e7232982fb-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div className={this.state._1_2_10 === "_1_2_10_3" ? "radio-button-static active" : "radio-button-static"}/>                      
                      </div>
                      <div
                        id="w-node-e6e7232982ff-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div className={this.state._1_2_10 === "_1_2_10_4" ? "radio-button-static active" : "radio-button-static"}/>                      
                      </div>
                      <div
                        id="w-node-e6e723298303-7eda5bea"
                        className="table-cell bullet"
                      >
                        <div className={this.state._1_2_10 === "_1_2_10_5" ? "radio-button-static active" : "radio-button-static"}/>                      
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
                  <h3 className="form-heading horizontal-center">Beoordelen</h3>
                </div>
                <div className="form-row first">
                  <div className="form-row-header">
                    <h4>
                      In hoeverre zijn jullie tevreden over de
                      cultuuronderwijsvisie van jullie school zoals bij vraag
                      1.1 ingevuld? Licht de beoordeling toe.
                    </h4>
                  </div>
                  <div className="form-wrapper">
                    <div className="form">
                      <div className="text-field static-text-field">
                        <p>
                          {this.state._1_3}
                        </p>
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
                      Heeft jullie school de intentie om haar visie en beleid op
                      het gebied van cultuuronderwijs verder te ontwikkelen?
                    </h4>
                  </div>
                  <div className="form-wrapper">
                    <div className="form _2-col-row">
                      <div className="radio-button-field static">
                      <div className={this.state._1_4_1 === "_1_4_1_1" ? "radio-button-static marginright15 active" : "radio-button-static marginright15"}/>                      
                        <div className="checkbox-label">Ja</div>
                      </div>
                      <div className="radio-button-field static">
                      <div className={this.state._1_4_1 === "_1_4_1_2" ? "radio-button-static marginright15 active" : "radio-button-static marginright15"}/>                      
                        <div className="checkbox-label">Nee</div>
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
                        {this.state._1_4_2}
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
                      <div className={this.state._1_4_3 === "_1_4_3_1" ? "radio-button-static marginright15 active" : "radio-button-static marginright15"}/>                      
                        <div className="checkbox-label">Ja</div>
                      </div>
                      <div className="radio-button-field static">
                      <div className={this.state._1_4_3 === "_1_4_3_2" ? "radio-button-static marginright15 active" : "radio-button-static marginright15"}/>                      
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
                        {this.state._1_4_4}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-row-header">
                    <div className="label answertype no">Indien nee</div>
                    <h4>
                      Kunnen jullie aangeven waarom jullie geen intentie hebben
                      om jullie visie en/of beleid verder te ontwikkelen? Licht
                      het antwoord toe.
                    </h4>
                  </div>
                  <div className="form-wrapper">
                    <div className="form">
                      <div className="text-field static-text-field">
                        <p>
                        {this.state._1_4_5}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
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
                  <div className="form-wrapper form-scenario">
                    <div className="form">
                      <div className="radio-button-field scenario _1">
                      <div className={this.state._1_5 === "_1_5_1" ? "radio-button-static scenario active" : "radio-button-static scenario"}/>                      
                        <div className="form-row-header scenario-header">
                          <h4 className="heading">Scenario 1</h4>
                          <p>
                            De school heeft geen visie vastgelegd op
                            cultuuronderwijs.
                          </p>
                        </div>
                      </div>
                      <div className="radio-button-field scenario _2">
                      <div className={this.state._1_5 === "_1_5_2" ? "radio-button-static scenario active" : "radio-button-static scenario"}/>                      
                        <div className="form-row-header scenario-header">
                          <h4 className="heading">Scenario 2</h4>
                          <p>
                            De school heeft een eigen visie op cultuuronderwijs
                            vastgelegd in een cultuurplan. De visie wordt
                            gedragen en geëvalueerd door de directeur en iemand
                            met cultuur onder haar hoede (bv
                            cultuurcontactpersoon, icc-er of leerkracht
                            cultuur), zij houden het team op de hoogte en waar
                            mogelijk praat het team mee.
                          </p>
                        </div>
                      </div>
                      <div className="radio-button-field scenario _3">
                      <div className={this.state._1_5 === "_1_5_3" ? "radio-button-static scenario active" : "radio-button-static scenario"}/>                      
                        <div className="form-row-header scenario-header">
                          <h4 className="heading">Scenario 3</h4>
                          <p>
                            De school heeft een eigen visie op cultuuronderwijs
                            die als apart onderdeel is opgenomen in een
                            schoolplan. De visie is mede-ontwikkeld door het
                            team en zij beslissen mee.
                          </p>
                        </div>
                      </div>
                      <div className="radio-button-field scenario _4">
                      <div className={this.state._1_5 === "_1_5_4" ? "radio-button-static scenario active" : "radio-button-static scenario"}/>                      
                        <div className="form-row-header scenario-header">
                          <h4 className="heading">Scenario 4</h4>
                          <p>
                            De school heeft een visie op cultuuronderwijs
                            geïntegreerd in haar bredere onderwijsvisie en
                            opgenomen in het schoolplan. Deze brede visie, met
                            aandacht voor cultuuronderwijs, is ontwikkeld door
                            het team. Het team voelt zich eigenaar van de visie
                            en plannen, deze zijn een vast onderdeel worden van
                            de jaarlijkse evaluatie.
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
                  <div className="form-wrapper">
                    <div className="form">
                      <div className="text-field static-text-field">
                        <p>
                          {this.state._1_6}
                        </p>
                      </div>
                    </div>
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
        <button onClick={this.consoleLog}>ConsoleLog Tab2</button>
      </div>
    );
  }
}

export default withRouter(ResultsTab2);
