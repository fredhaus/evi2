import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { std } from "mathjs";
class ResultsTab1 extends React.Component {
  state = {
    user: this.props.user
  };

  componentDidMount() {
    console.log("resultTab1 state", this.state);
    window.scrollTo(0, 0);
    axios.post("/api/datatransfer/results", this.state).then(response => {
      console.log("Results Tab1", response.data);

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
      let _4_2_1 = parseInt(response.data[4]._4_2_1.split("_").pop());
      let _4_2_2 = parseInt(response.data[4]._4_2_2.split("_").pop());
      let _4_2_3 = parseInt(response.data[4]._4_2_3.split("_").pop());
      let _4_2_4 = parseInt(response.data[4]._4_2_4.split("_").pop());
      let _4_2_5 = parseInt(response.data[4]._4_2_5.split("_").pop());
      let _4_2_6 = parseInt(response.data[4]._4_2_6.split("_").pop());
      let _4_2_7 = parseInt(response.data[4]._4_2_7.split("_").pop());
      let _4_2_8 = parseInt(response.data[4]._4_2_8.split("_").pop());
      let _4_2_9 = parseInt(response.data[4]._4_2_9.split("_").pop());
      let _4_2_10 = parseInt(response.data[4]._4_2_10.split("_").pop());

      let std_1 = std([_1_2_1, _2_2_1, _3_2_1, _4_2_1]).toFixed(2);
      let std_2 = std([_1_2_2, _2_2_2, _3_2_2, _4_2_2]).toFixed(2);
      let std_3 = std([_1_2_3, _2_2_3, _3_2_3, _4_2_3]).toFixed(2);
      let std_4 = std([_1_2_4, _2_2_4, _3_2_4, _4_2_4]).toFixed(2);
      let std_5 = std([_1_2_5, _2_2_5, _3_2_5, _4_2_5]).toFixed(2);
      let std_6 = std([_1_2_6, _2_2_6, _3_2_6, _4_2_6]).toFixed(2);
      let std_7 = std([_1_2_7, _2_2_7, _3_2_7, _4_2_7]).toFixed(2);
      let std_8 = std([_1_2_8, _2_2_8, _3_2_8, _4_2_8]).toFixed(2);
      let std_9 = std([_1_2_9, _2_2_9, _3_2_9, _4_2_9]).toFixed(2);
      let std_10 = std([_1_2_10, _2_2_10, _3_2_10, _4_2_10]).toFixed(2);

      let std_1_color;

      if (std_1 >= 1.5) {
        std_1_color = "rgba(235, 87, 87, 0.2)";
      } else if (std_1 >= 0.75) {
        std_1_color = "rgba(255, 196, 0, 0.2)";
      } else if (std_1 <= 0.75) {
        std_1_color = "rgba(116, 229, 156, 0.2)";
      }

      let std_2_color;

      if (std_2 >= 1.5) {
        std_2_color = "rgba(235, 87, 87, 0.2)";
      } else if (std_2 >= 0.75) {
        std_2_color = "rgba(255, 196, 0, 0.2)";
      } else if (std_2 <= 0.75) {
        std_2_color = "rgba(116, 229, 156, 0.2)";
      }

      let std_3_color;

      if (std_3 >= 1.5) {
        std_3_color = "rgba(235, 87, 87, 0.2)";
      } else if (std_3 >= 0.75) {
        std_3_color = "rgba(255, 196, 0, 0.2)";
      } else if (std_3 <= 0.75) {
        std_3_color = "rgba(116, 229, 156, 0.2)";
      }
      let std_4_color;

      if (std_4 >= 1.5) {
        std_4_color = "rgba(235, 87, 87, 0.2)";
      } else if (std_4 >= 0.75) {
        std_4_color = "rgba(255, 196, 0, 0.2)";
      } else if (std_4 <= 0.75) {
        std_4_color = "rgba(116, 229, 156, 0.2)";
      }

      let std_5_color;

      if (std_5 >= 1.5) {
        std_5_color = "rgba(235, 87, 87, 0.2)";
      } else if (std_5 >= 0.75) {
        std_5_color = "rgba(255, 196, 0, 0.2)";
      } else if (std_5 <= 0.75) {
        std_5_color = "rgba(116, 229, 156, 0.2)";
      }

      let std_6_color;

      if (std_6 >= 1.5) {
        std_6_color = "rgba(235, 87, 87, 0.2)";
      } else if (std_6 >= 0.75) {
        std_6_color = "rgba(255, 196, 0, 0.2)";
      } else if (std_6 <= 0.75) {
        std_6_color = "rgba(116, 229, 156, 0.2)";
      }

      let std_7_color;

      if (std_7 >= 1.5) {
        std_7_color = "rgba(235, 87, 87, 0.2)";
      } else if (std_7 >= 0.75) {
        std_7_color = "rgba(255, 196, 0, 0.2)";
      } else if (std_7 <= 0.75) {
        std_7_color = "rgba(116, 229, 156, 0.2)";
      }

      let std_8_color;

      if (std_8 >= 1.5) {
        std_8_color = "rgba(235, 87, 87, 0.2)";
      } else if (std_8 >= 0.75) {
        std_8_color = "rgba(255, 196, 0, 0.2)";
      } else if (std_8 <= 0.75) {
        std_8_color = "rgba(116, 229, 156, 0.2)";
      }

      let std_9_color;

      if (std_9 >= 1.5) {
        std_9_color = "rgba(235, 87, 87, 0.2)";
      } else if (std_9 >= 0.75) {
        std_9_color = "rgba(255, 196, 0, 0.2)";
      } else if (std_9 <= 0.75) {
        std_9_color = "rgba(116, 229, 156, 0.2)";
      }

      let std_10_color;

      if (std_10 >= 1.5) {
        std_10_color = "rgba(235, 87, 87, 0.2)";
      } else if (std_10 >= 0.75) {
        std_10_color = "rgba(255, 196, 0, 0.2)";
      } else if (std_10 <= 0.75) {
        std_10_color = "rgba(116, 229, 156, 0.2)";
      }

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

      let meanStep4 =
        (_4_2_1 +
          _4_2_2 +
          _4_2_3 +
          _4_2_4 +
          _4_2_5 +
          _4_2_6 +
          _4_2_7 +
          _4_2_8 +
          _4_2_9 +
          _4_2_10) /
        10;

      let meanStep4Scenario;
      if (meanStep4 <= 2) {
        meanStep4Scenario = "1";
      } else if (meanStep4 > 2 && meanStep4 <= 3) {
        meanStep4Scenario = "2";
      } else if (meanStep4 > 3 && meanStep4 <= 4) {
        meanStep4Scenario = "3";
      } else {
        meanStep4Scenario = "4";
      }

      this.setState(
        {
          allResults: response.data,
          _1_2_1: _1_2_1,
          _1_2_2: _1_2_2,
          _1_2_3: _1_2_3,
          _1_2_4: _1_2_4,
          _1_2_5: _1_2_5,
          _1_2_6: _1_2_6,
          _1_2_7: _1_2_7,
          _1_2_8: _1_2_8,
          _1_2_9: _1_2_9,
          _1_2_10: _1_2_10,
          _2_2_1: _2_2_1,
          _2_2_2: _2_2_2,
          _2_2_3: _2_2_3,
          _2_2_4: _2_2_4,
          _2_2_5: _2_2_5,
          _2_2_6: _2_2_6,
          _2_2_7: _2_2_7,
          _2_2_8: _2_2_8,
          _2_2_9: _2_2_9,
          _2_2_10: _2_2_10,
          _3_2_1: _3_2_1,
          _3_2_2: _3_2_2,
          _3_2_3: _3_2_3,
          _3_2_4: _3_2_4,
          _3_2_5: _3_2_5,
          _3_2_6: _3_2_6,
          _3_2_7: _3_2_7,
          _3_2_8: _3_2_8,
          _3_2_9: _3_2_9,
          _3_2_10: _3_2_10,
          _4_2_1: _4_2_1,
          _4_2_2: _4_2_2,
          _4_2_3: _4_2_3,
          _4_2_4: _4_2_4,
          _4_2_5: _4_2_5,
          _4_2_6: _4_2_6,
          _4_2_7: _4_2_7,
          _4_2_8: _4_2_8,
          _4_2_9: _4_2_9,
          _4_2_10: _4_2_10,
          std_1: std_1,
          std_2: std_2,
          std_3: std_3,
          std_4: std_4,
          std_5: std_5,
          std_6: std_6,
          std_7: std_7,
          std_8: std_8,
          std_9: std_9,
          std_10: std_10,
          std_1_color: std_1_color,
          std_2_color: std_2_color,
          std_3_color: std_3_color,
          std_4_color: std_4_color,
          std_5_color: std_5_color,
          std_6_color: std_6_color,
          std_7_color: std_7_color,
          std_8_color: std_8_color,
          std_9_color: std_9_color,
          std_10_color: std_10_color,
          meanStep1Scenario: meanStep1Scenario,
          meanStep2Scenario: meanStep2Scenario,
          meanStep3Scenario: meanStep3Scenario,
          meanStep4Scenario: meanStep4Scenario
        },
        () => {
          this.test();
        }
      );
    });
  }

  test = () => {
    console.log("test");
  };

  consoleLog = () => {
    console.log("STATE: ", this.state);
  };

  render() {
    return (
      <div datatab="Tab 1" className="tab-pane w-tab-pane w--tab-active">
        <div className="container marginbottom80">
          <div className="intro-text results">
            <img
              src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578511729/step1_boejhz.svg"
              alt=""
              className="step-icon hide"
            />
            <div className="details-wrap">
              <h1>Totale analyse</h1>
            </div>
            <div className="paragraph-light">
              Het consistentie-overzicht geeft een beeld hoe jullie school zich
              herkent in de stellingen opgesteld binnen de onderwerpen: Visie,
              Deskundigheid, Programma en Samenwerking. De tabel laat zien hoe
              jullie deze stellingen beoordelen en hoe deze - vanuit de 4
              onderwerpen - met elkaar samenhangen. Zo kun je zien of jullie
              visie (wat vinden jullie belangrijk) in overeenstemming is met de
              uitvoering van cultuuronderwijs in deskundigheid, programma en
              samenwerking. <br />
              <br />
              De scores bij de onderwerpen geven de beoordelingen weer, waarbij
              1 het laagst is, en 5 het hoogst. De consistentiescore, aan het
              eind van iedere rij, geeft weer in hoeverre er samenhang is tussen
              de vier onderwerpen per stelling. &nbsp;Hoe lager de score, hoe
              meer consistentie er is.
              <br />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="w-layout-grid project-details-wrapper">
            <div className="form-section">
              <div className="table">
                <div className="table-header results">
                  <div className="table-empty-cell" />
                  <div className="table-cell header">
                    <img
                      src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578511729/step1-small_pgx8bm.svg"
                      alt=""
                      className="step-icon small header"
                    />
                    <h6>Visie</h6>
                  </div>
                  <div className="table-cell header">
                    <img
                      src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578511731/step2-small_ugydes.svg"
                      alt=""
                      className="step-icon small header"
                    />
                    <h6>Deskundigheid</h6>
                  </div>
                  <div className="table-cell header">
                    <img
                      src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578511731/step3-small_vyjizs.svg"
                      alt=""
                      className="step-icon small header"
                    />
                    <h6>Programma</h6>
                  </div>
                  <div className="table-cell header">
                    <img
                      src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578511731/step4-small_rjgszs.svg"
                      alt=""
                      className="step-icon small header"
                    />
                    <h6>Samenwerking</h6>
                  </div>
                  <div className="table-cell header">
                    <h6 className="strong">Consistentie score</h6>
                  </div>
                </div>
                <div className="form-block table w-form">
                  <form
                    id="wf-form-1-2table_1"
                    name="wf-form-1-2table_1"
                    data-name="1-2table_1"
                    className="table-row results green"
                    style={{ backgroundColor: this.state.std_1_color }}
                  >
                    <p>
                      Onze leerlingen leren betekenisgeven aan en reflecteren op
                      zichzelf en de wereld;
                    </p>
                    <div
                      id="w-node-b820c8d3cbb8-7eda5bea"
                      className="table-cell"
                    >
                      <div>{this.state._1_2_1}</div>
                    </div>
                    <div
                      id="w-node-604904724a9d-7eda5bea"
                      className="table-cell"
                    >
                      <div>{this.state._2_2_1}</div>
                    </div>
                    <div
                      id="w-node-262f12ad3593-7eda5bea"
                      className="table-cell"
                    >
                      <div>{this.state._3_2_1}</div>
                    </div>
                    <div
                      id="w-node-76394fcdbe72-7eda5bea"
                      className="table-cell"
                    >
                      <div>{this.state._4_2_1}</div>
                    </div>
                    <div
                      id="w-node-fab03bbfa8f1-7eda5bea"
                      className="table-cell"
                    >
                      <div className="score-circle">
                        <div>{this.state.std_1}</div>
                      </div>
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
                    className="table-row results red"
                    style={{ backgroundColor: this.state.std_2_color }}
                  >
                    <p>
                      Onze leerlingen zelfsturend zijn en{" "}
                      <em>vanuit hun eigen vraag en interesse</em> werken;
                    </p>
                    <div
                      id="w-node-30ed3d8e92c0-7eda5bea"
                      className="table-cell"
                    >
                      <div>{this.state._1_2_2}</div>
                    </div>
                    <div
                      id="w-node-097cc2044714-7eda5bea"
                      className="table-cell"
                    >
                      <div>{this.state._2_2_2}</div>
                    </div>
                    <div
                      id="w-node-376f4049eeab-7eda5bea"
                      className="table-cell"
                    >
                      <div>{this.state._3_2_2}</div>
                    </div>
                    <div
                      id="w-node-c6a5236aa1e0-7eda5bea"
                      className="table-cell"
                    >
                      <div>{this.state._4_2_2}</div>
                    </div>
                    <div
                      id="w-node-dec288b78c46-7eda5bea"
                      className="table-cell"
                    >
                      <div className="score-circle">
                        <div>{this.state.std_2}</div>
                      </div>
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
                    className="table-row results yellow"
                    style={{ backgroundColor: this.state.std_3_color }}
                  >
                    <p>
                      Onze leerlingen <em>zich verbonden voelen</em> met hun
                      eigen omgeving en achtergrond;
                    </p>
                    <div
                      id="w-node-51a3722a7efb-7eda5bea"
                      className="table-cell"
                    >
                      <div>{this.state._1_2_3}</div>
                    </div>
                    <div
                      id="w-node-068e8a77dfda-7eda5bea"
                      className="table-cell"
                    >
                      <div>{this.state._2_2_3}</div>
                    </div>
                    <div
                      id="w-node-1523fdfa52b0-7eda5bea"
                      className="table-cell"
                    >
                      <div>{this.state._3_2_3}</div>
                    </div>
                    <div
                      id="w-node-c9abd9b38d3c-7eda5bea"
                      className="table-cell"
                    >
                      <div>{this.state._4_2_3}</div>
                    </div>
                    <div
                      id="w-node-1a7417235a36-7eda5bea"
                      className="table-cell"
                    >
                      <div className="score-circle">
                        <div>{this.state.std_3}</div>
                      </div>
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
                    className="table-row results red"
                    style={{ backgroundColor: this.state.std_4_color }}
                  >
                    <p>
                      Onze leerlingen een{" "}
                      <em>
                        zo breed mogelijk palet aan culturele en kunstzinnige
                        activiteiten maken en meemaken;
                      </em>
                    </p>
                    <div
                      id="w-node-a45003249b58-7eda5bea"
                      className="table-cell"
                    >
                      <div>{this.state._1_2_4}</div>
                    </div>
                    <div
                      id="w-node-79fde9c8cf54-7eda5bea"
                      className="table-cell"
                    >
                      <div>{this.state._2_2_4}</div>
                    </div>
                    <div
                      id="w-node-8cc2a1dd2f2d-7eda5bea"
                      className="table-cell"
                    >
                      <div>{this.state._3_2_4}</div>
                    </div>
                    <div
                      id="w-node-329913080035-7eda5bea"
                      className="table-cell"
                    >
                      <div>{this.state._4_2_4}</div>
                    </div>
                    <div
                      id="w-node-6e6a9f590611-7eda5bea"
                      className="table-cell"
                    >
                      <div className="score-circle">
                        <div>{this.state.std_4}</div>
                      </div>
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
                    className="table-row results yellow"
                    style={{ backgroundColor: this.state.std_5_color }}
                  >
                    <p>
                      Aspecten zoals bijvoorbeeld taalontwikkeling of
                      sociaal-emotioneel ontwikkeling worden versterkt;
                    </p>
                    <div
                      id="w-node-650f10f933d5-7eda5bea"
                      className="table-cell"
                    >
                      <div>{this.state._1_2_5}</div>
                    </div>
                    <div
                      id="w-node-fabcb11e4546-7eda5bea"
                      className="table-cell"
                    >
                      <div>{this.state._2_2_5}</div>
                    </div>
                    <div
                      id="w-node-fefb00b1abb3-7eda5bea"
                      className="table-cell"
                    >
                      <div>{this.state._3_2_5}</div>
                    </div>
                    <div
                      id="w-node-fd55cdce3b67-7eda5bea"
                      className="table-cell"
                    >
                      <div>{this.state._4_2_5}</div>
                    </div>
                    <div
                      id="w-node-eaa93c8a0104-7eda5bea"
                      className="table-cell"
                    >
                      <div className="score-circle">
                        <div>{this.state.std_5}</div>
                      </div>
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
                    className="table-row results green"
                    style={{ backgroundColor: this.state.std_6_color }}
                  >
                    <p>
                      Onze leerlingen
                      <em> ambachtelijke vaardigheden</em> ontwikkelen in
                      uiteenlopende media (materialen, ICT-middelen, voorwerpen,
                      instrumenten, gesproken en geschreven taal, het (eigen)
                      lichaam);
                    </p>
                    <div
                      id="w-node-86c46d0d07d2-7eda5bea"
                      className="table-cell"
                    >
                      <div>{this.state._1_2_6}</div>
                    </div>
                    <div
                      id="w-node-6076e730dbc3-7eda5bea"
                      className="table-cell"
                    >
                      <div>{this.state._2_2_6}</div>
                    </div>
                    <div
                      id="w-node-c45f573d883e-7eda5bea"
                      className="table-cell"
                    >
                      <div>{this.state._3_2_6}</div>
                    </div>
                    <div
                      id="w-node-962c82fd457d-7eda5bea"
                      className="table-cell"
                    >
                      <div>{this.state._4_2_6}</div>
                    </div>
                    <div
                      id="w-node-9cee0003ef81-7eda5bea"
                      className="table-cell"
                    >
                      <div className="score-circle">
                        <div>{this.state.std_6}</div>
                      </div>
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
                    className="table-row results green"
                    style={{ backgroundColor: this.state.std_7_color }}
                  >
                    <p>
                      Onze leerlingen hun artistiek, creatief en innovatief
                      vermogen ontwikkelen;
                    </p>
                    <div
                      id="w-node-8203673dc8ee-7eda5bea"
                      className="table-cell"
                    >
                      <div>{this.state._1_2_7}</div>
                    </div>
                    <div
                      id="w-node-75fe8302b7b6-7eda5bea"
                      className="table-cell"
                    >
                      <div>{this.state._2_2_7}</div>
                    </div>
                    <div
                      id="w-node-5d7e6057e83e-7eda5bea"
                      className="table-cell"
                    >
                      <div>{this.state._3_2_7}</div>
                    </div>
                    <div
                      id="w-node-7b97f459624a-7eda5bea"
                      className="table-cell"
                    >
                      <div>{this.state._4_2_7}</div>
                    </div>
                    <div
                      id="w-node-036480f8a30a-7eda5bea"
                      className="table-cell"
                    >
                      <div className="score-circle">
                        <div>{this.state.std_7}</div>
                      </div>
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
                    className="table-row results red"
                    style={{ backgroundColor: this.state.std_8_color }}
                  >
                    <p>
                      Onze leerlingen <em>zich kunnen uiten</em> door artistieke
                      expressie en dit kunnen presenteren;
                    </p>
                    <div
                      id="w-node-7000f004fee2-7eda5bea"
                      className="table-cell"
                    >
                      <div>{this.state._1_2_8}</div>
                    </div>
                    <div
                      id="w-node-adcc548c671d-7eda5bea"
                      className="table-cell"
                    >
                      <div>{this.state._2_2_8}</div>
                    </div>
                    <div
                      id="w-node-6d7a389c2502-7eda5bea"
                      className="table-cell"
                    >
                      <div>{this.state._3_2_8}</div>
                    </div>
                    <div
                      id="w-node-b5d76c7ba758-7eda5bea"
                      className="table-cell"
                    >
                      <div>{this.state._4_2_8}</div>
                    </div>
                    <div
                      id="w-node-92a298159968-7eda5bea"
                      className="table-cell"
                    >
                      <div className="score-circle">
                        <div>{this.state.std_8}</div>
                      </div>
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
                    className="table-row results red"
                    style={{ backgroundColor: this.state.std_9_color }}
                  >
                    <p>
                      Aandacht is voor <em>vakoverstijgend </em>
                      verbinden met andere vakken, leergebieden, overkoepelende
                      vaardigheden en thema’s;
                    </p>
                    <div
                      id="w-node-f7549d7bcb5d-7eda5bea"
                      className="table-cell"
                    >
                      <div>{this.state._1_2_9}</div>
                    </div>
                    <div
                      id="w-node-afa563c6104c-7eda5bea"
                      className="table-cell"
                    >
                      <div>{this.state._2_2_9}</div>
                    </div>
                    <div
                      id="w-node-71fb042794e4-7eda5bea"
                      className="table-cell"
                    >
                      <div>{this.state._3_2_9}</div>
                    </div>
                    <div
                      id="w-node-9c16e8acf195-7eda5bea"
                      className="table-cell"
                    >
                      <div>{this.state._4_2_9}</div>
                    </div>
                    <div
                      id="w-node-eb06afd4eb81-7eda5bea"
                      className="table-cell"
                    >
                      <div className="score-circle">
                        <div>{this.state.std_9}</div>
                      </div>
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
                    className="table-row results red"
                    style={{ backgroundColor: this.state.std_10_color }}
                  >
                    <p>
                      Wij onze leerlingen een onderzoekende en open houding
                      meegeven;
                    </p>
                    <div
                      id="w-node-4d968a92b913-7eda5bea"
                      className="table-cell"
                    >
                      <div>{this.state._1_2_10}</div>
                    </div>
                    <div
                      id="w-node-dc3f32a02f59-7eda5bea"
                      className="table-cell"
                    >
                      <div>{this.state._2_2_10}</div>
                    </div>
                    <div
                      id="w-node-a93894e3ce10-7eda5bea"
                      className="table-cell"
                    >
                      <div>{this.state._3_2_10}</div>
                    </div>
                    <div
                      id="w-node-645a51255dd6-7eda5bea"
                      className="table-cell"
                    >
                      <div>{this.state._4_2_10}</div>
                    </div>
                    <div
                      id="w-node-6d6e347eaed5-7eda5bea"
                      className="table-cell"
                    >
                      <div className="score-circle">
                        <div>{this.state.std_10}</div>
                      </div>
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
              <div className="legend-block">
                <div className="label marginbottom10">LegendA</div>
                <div className="legend-row">
                  <div className="legend-wrapper">
                    <div className="legend green" />
                    <div className="paragraph-small">Consistent</div>
                  </div>
                  <div className="legend-wrapper">
                    <div className="legend yellow" />
                    <div className="paragraph-small">Matig consistent</div>
                  </div>
                  <div className="legend-wrapper">
                    <div className="legend red" />
                    <div className="paragraph-small">Inconsistent</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-block-wrapper">
            <div className="text-block">
              <h4 className="form-heading">
                Mogelijke uitkomsten
                <br />
              </h4>
              <p>
                De uitkomsten kunnen een eenduidig beeld geven of een diffuus
                beeld, of er iets tussen in. In alle gevallen kun je als school
                zelf de duiding hieraan geven: herken je dit beeld? Kun je dit
                beeld verklaren? Ben je tevreden met dit beeld? Wat zou je
                kunnen of willen veranderen?
                <br />
              </p>
            </div>
            <div className="text-block">
              <h4 className="form-heading">
                Eenduidig beeld
                <br />
              </h4>
              <p>
                Een eenduidige waardering krijg je als de scores – ongeveer – in
                elkaars buurt liggen en geeft aan dat jullie op een coherente
                manier werken – vanuit de 3 onderwerpen – aan cultuuronderwijs
                op jullie school.
                <br />
              </p>
            </div>
            <div className="text-block">
              <h4 className="form-heading">
                Een diffuus beeld
                <br />
              </h4>
              <p>
                Liggen de scores per stelling nogal uiteen? Laat het overzicht –
                de tabel -&nbsp; bijvoorbeeld bij <em>artistieke uiting</em> een
                5 zien bij visie en een 2 en 1 voor respectievelijk
                deskundigheid en programma, dan laat dit een incoherent beeld –
                diffuus beeld - zien. Dit betekent dat de visie nog niet op 1
                lijn zit met de deskundigheid en het programma en de relatie
                tussen deze 3 voor het item <em>artistieke uiting</em> verder
                kan worden ontwikkeld of dat hiervoor een heldere verklaring is.
                <br />
              </p>
            </div>
          </div>
          <div className="results-score-wrapper">
            <div className="results-score-number">
              <div className="score-number _1">
                {this.state.meanStep1Scenario}
              </div>
              <div className="score-per" />
              <div className="score-number _2">4</div>
            </div>
            <div className="results-score-text">
              <h3 className="marginbottom20">
                In welk EVI scenario zitten wij voor Visie?
                <br />
              </h3>
              <p>
                Op basis van de scores in onderdeel{" "}
                <em>2 Normeren/stellingen</em> zit je school in dit scenario.
                Vergelijk deze uitkomst met je eigen keuze bij vraag 5 van{" "}
                <em>Visie, Deskundigheid, Programma </em>en
                <em> Samenwerking</em>. Bespreek dit binnen je team en eventueel
                met een adviseur.
                <br />
              </p>
            </div>
          </div>
          <div className="content-block">
            <div className="form-section-header">
              <h3>Scenario Visie</h3>
            </div>
            {this.state.meanStep1Scenario === "1" ? (
              <div className="scenario-wrapper-static">
                <img
                  src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578862226/evi2_120120/step1-small_arnr0t.svg"
                  alt=""
                  className="step-icon small"
                />
                <div className="form-row-header scenario-header">
                  <h4 className="heading">Visie Scenario 1</h4>
                  <p>
                    De school heeft geen visie vastgelegd op cultuuronderwijs.
                  </p>
                </div>
              </div>
            ) : (
              ""
            )}
            {this.state.meanStep1Scenario === "2" ? (
              <div className="scenario-wrapper-static">
                <img
                  src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578862226/evi2_120120/step1-small_arnr0t.svg"
                  alt=""
                  className="step-icon small"
                />
                <div className="form-row-header scenario-header">
                  <h4 className="heading">Visie Scenario 2</h4>
                  <p>
                    De school heeft een eigen visie op cultuuronderwijs
                    vastgelegd in een cultuurplan. De visie wordt gedragen en
                    geëvalueerd door de directeur en iemand met cultuur onder
                    haar hoede (bv cultuurcontactpersoon, icc-er of leerkracht
                    cultuur), zij houden het team op de hoogte en waar mogelijk
                    praat het team mee.
                  </p>
                </div>
              </div>
            ) : (
              ""
            )}
            {this.state.meanStep1Scenario === "3" ? (
              <div className="scenario-wrapper-static">
                <img
                  src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578862226/evi2_120120/step1-small_arnr0t.svg"
                  alt=""
                  className="step-icon small"
                />
                <div className="form-row-header scenario-header">
                  <h4 className="heading">Visie Scenario 3</h4>
                  <p>
                    De school heeft een eigen visie op cultuuronderwijs die als
                    apart onderdeel is opgenomen in een kwaliteitssysteem. De visie is
                    mede-ontwikkeld door het team en zij beslissen mee.
                  </p>
                </div>
              </div>
            ) : (
              ""
            )}
            {this.state.meanStep1Scenario === "4" ? (
              <div className="scenario-wrapper-static">
                <img
                  src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578862226/evi2_120120/step1-small_arnr0t.svg"
                  alt=""
                  className="step-icon small"
                />
                <div className="form-row-header scenario-header">
                  <h4 className="heading">Visie Scenario 4</h4>
                  <p>
                    De school heeft een visie op cultuuronderwijs geïntegreerd
                    in haar bredere onderwijsvisie en opgenomen in het
                    schoolplan. Deze brede visie, met aandacht voor
                    cultuuronderwijs, is ontwikkeld door het team. Het team
                    voelt zich eigenaar van de visie en plannen, deze zijn een
                    vast onderdeel worden van de jaarlijkse evaluatie.
                  </p>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="results-score-wrapper">
            <div className="results-score-number">
              <div className="score-number _1">
                {this.state.meanStep2Scenario}
              </div>
              <div className="score-per" />
              <div className="score-number _2">4</div>
            </div>
            <div className="results-score-text">
              <h3 className="marginbottom20">
                In welk EVI scenario zitten wij voor Deskundigheid?
                <br />
              </h3>
              <p>
                Op basis van de scores in onderdeel{" "}
                <em>2 Normeren/stellingen</em> zit je school in dit scenario.
                Vergelijk deze uitkomst met je eigen keuze bij vraag 5 van{" "}
                <em>Visie, Deskundigheid, Programma </em>en
                <em> Samenwerking</em>. Bespreek dit binnen je team en eventueel
                met een adviseur.
                <br />
              </p>
            </div>
          </div>
          <div className="content-block">
            <div className="form-section-header">
              <h3>Scenario Deskundigheid</h3>
            </div>
            {this.state.meanStep2Scenario === "1" ? (
              <div className="scenario-wrapper-static">
                <img
                  src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578862225/evi2_120120/step2-small_yasr9m.svg"
                  alt=""
                  className="step-icon small"
                />
                <div className="form-row-header scenario-header">
                  <h4 className="heading">Deskundigheid Scenario 1</h4>
                  <p>
                    De school coördineert en bevordert de interne deskundigheid
                    niet bewust op het gebied van cultuuronderwijs.
                  </p>
                </div>
              </div>
            ) : (
              ""
            )}
            {this.state.meanStep2Scenario === "2" ? (
              <div className="scenario-wrapper-static">
                <img
                  src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578862225/evi2_120120/step2-small_yasr9m.svg"
                  alt=""
                  className="step-icon small"
                />
                <div className="form-row-header scenario-header">
                  <h4 className="heading">Deskundigheid Scenario 2</h4>
                  <p>
                    De school coördineert de deskundigheid op het gebied van
                    cultuuronderwijs in haar school wel (bijvoorbeeld door een
                    icc’er), maar stimuleert deze niet. Er is zicht op waar de
                    deskundigheid zit voor cultuuronderwijs.
                  </p>
                </div>
              </div>
            ) : (
              ""
            )}
            {this.state.meanStep2Scenario === "3" ? (
              <div className="scenario-wrapper-static">
                <img
                  src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578862225/evi2_120120/step2-small_yasr9m.svg"
                  alt=""
                  className="step-icon small"
                />
                <div className="form-row-header scenario-header">
                  <h4 className="heading">Deskundigheid Scenario 3</h4>
                  <p>
                    De school coördineert en bevordert de deskundigheid
                    incidenteel op het gebied van cultuuronderwijs. Er is
                    organisatorische deskundigheid in de school (bijvoorbeeld
                    een icc-er/cultuurbegeleider) die deskundigheid bewust en
                    gericht inzet en bovendien incidentele professionalisering
                    stimuleert, coördineert en organiseert (bijv.
                    teamscholingen). Hiervoor worden voldoende tijd en middelen
                    gereserveerd.
                  </p>
                </div>
              </div>
            ) : (
              ""
            )}
            {this.state.meanStep2Scenario === "4" ? (
              <div className="scenario-wrapper-static">
                <img
                  src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578862225/evi2_120120/step2-small_yasr9m.svg"
                  alt=""
                  className="step-icon small"
                />
                <div className="form-row-header scenario-header">
                  <h4 className="heading">Deskundigheid Scenario 4</h4>
                  <p>
                    De school coördineert en bevordert planmatig en structureel
                    de deskundigheid van het hele team op het gebied van
                    cultuuronderwijs. Kwaliteiten van teamleden worden
                    gestimuleerd en ingezet. De school is, ook op het vlak van
                    cultuuronderwijs, een lerende organisatie hiervoor zijn
                    ruimschoots middelen beschikbaar.
                    <br />
                  </p>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="results-score-wrapper">
            <div className="results-score-number">
              <div className="score-number _1">
                {this.state.meanStep3Scenario}
              </div>
              <div className="score-per" />
              <div className="score-number _2">4</div>
            </div>
            <div className="results-score-text">
              <h3 className="marginbottom20">
                In welk EVI scenario zitten wij voor Programma?
                <br />
              </h3>
              <p>
                Op basis van de scores in onderdeel{" "}
                <em>2 Normeren/stellingen</em> zit je school in dit scenario.
                Vergelijk deze uitkomst met je eigen keuze bij vraag 5 van{" "}
                <em>Visie, Deskundigheid, Programma </em>en
                <em> Samenwerking</em>. Bespreek dit binnen je team en eventueel
                met een adviseur.
                <br />
              </p>
            </div>
          </div>
          <div className="content-block">
            <div className="form-section-header">
              <h3>Scenario Programma</h3>
            </div>
            {this.state.meanStep3Scenario === "1" ? (
              <div className="scenario-wrapper-static">
                <img
                  src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578862227/evi2_120120/step3-small_j488en.svg"
                  alt=""
                  className="step-icon small"
                />
                <div className="form-row-header scenario-header">
                  <h4 className="heading">Programma Scenario 1</h4>
                  <p>
                    De culturele activiteiten, lessen of workshops vertonen geen
                    samenhang. Ze vinden incidenteel – zonder structureel budget
                    - plaats en worden willekeurig gekozen.
                  </p>
                </div>
              </div>
            ) : (
              ""
            )}
            {this.state.meanStep3Scenario === "2" ? (
              <div className="scenario-wrapper-static">
                <img
                  src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578862227/evi2_120120/step3-small_j488en.svg"
                  alt=""
                  className="step-icon small"
                />
                <div className="form-row-header scenario-header">
                  <h4 className="heading">Programma Scenario 2</h4>
                  <p>
                    De culturele activiteiten, lessen of workshops zijn op
                    elkaar afgestemd, bijvoorbeeld in de vorm van een
                    cultuurmenu of projectweek. Hiervoor worden voldoende tijd
                    en middelen gereserveerd.
                  </p>
                </div>
              </div>
            ) : (
              ""
            )}
            {this.state.meanStep3Scenario === "3" ? (
              <div className="scenario-wrapper-static">
                <img
                  src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578862227/evi2_120120/step3-small_j488en.svg"
                  alt=""
                  className="step-icon small"
                />
                <div className="form-row-header scenario-header">
                  <h4 className="heading">Programma Scenario 3</h4>
                  <p>
                    De school brengt bewust samenhang aan - vanuit de zelf
                    benoemde doelen - in de culturele activiteiten, lessen of
                    workshops door bijvoorbeeld samenhang met andere vakken en/
                    of er is een opbouw van groep 1 t/m 8. Hiervoor wordt
                    structureel voldoende tijd en middelen gezocht en/of
                    gereserveerd.
                  </p>
                </div>
              </div>
            ) : (
              ""
            )}
            {this.state.meanStep3Scenario === "4" ? (
              <div className="scenario-wrapper-static">
                <img
                  src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578862227/evi2_120120/step3-small_j488en.svg"
                  alt=""
                  className="step-icon small"
                />
                <div className="form-row-header scenario-header">
                  <h4 className="heading">Programma Scenario 4</h4>
                  <p>
                    De school brengt bewust samenhang aan - vanuit de zelf
                    benoemde doelen - in de culturele activiteiten, lessen of
                    workshops door bijvoorbeeld samenhang met andere vakken
                    en/of een opbouw van groep 1 t/m 8. Ook wordt een verbinding
                    gemaakt met buitenschoolse activiteiten, de voorschoolse
                    educatie, of het voortgezet onderwijs. Tijd en middelen zijn
                    structureel en ruimschoots aanwezig.
                    <br />
                  </p>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="results-score-wrapper">
            <div className="results-score-number">
              <div className="score-number _1">
                {this.state.meanStep4Scenario}
              </div>
              <div className="score-per" />
              <div className="score-number _2">4</div>
            </div>
            <div className="results-score-text">
              <h3 className="marginbottom20">
                In welk EVI scenario zitten wij voor Samenwerking?
                <br />
              </h3>
              <p>
                Op basis van de scores in onderdeel{" "}
                <em>2 Normeren/stellingen</em> zit je school in dit scenario.
                Vergelijk deze uitkomst met je eigen keuze bij vraag 5 van{" "}
                <em>Visie, Deskundigheid, Programma </em>en
                <em> Samenwerking</em>. Bespreek dit binnen je team en eventueel
                met een adviseur.
                <br />
              </p>
            </div>
          </div>
          <div className="content-block">
            <div className="form-section-header">
              <h3>Scenario Samenwerking</h3>
            </div>
            {this.state.meanStep4Scenario === "1" ? (
              <div className="scenario-wrapper-static">
                <img
                  src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578862227/evi2_120120/step4-small_bekxdm.svg"
                  alt=""
                  className="step-icon small"
                />
                <div className="form-row-header scenario-header">
                  <h4 className="heading">Samenwerking Scenario 1</h4>
                  <p>
                    De school heeft incidentele samenwerking en/of contacten met
                    externe partners en – deskundigen.
                  </p>
                </div>
              </div>
            ) : (
              ""
            )}
            {this.state.meanStep4Scenario === "2" ? (
              <div className="scenario-wrapper-static">
                <img
                  src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578862227/evi2_120120/step4-small_bekxdm.svg"
                  alt=""
                  className="step-icon small"
                />
                <div className="form-row-header scenario-header">
                  <h4 className="heading">Samenwerking Scenario 2</h4>
                  <p>
                    De school werkt regelmatig samen met externe partners en –
                    deskundigen. De inhoudelijke keuzes liggen bij de externe
                    partner (afnemen cultuuraanbod).
                  </p>
                </div>
              </div>
            ) : (
              ""
            )}
            {this.state.meanStep4Scenario === "3" ? (
              <div className="scenario-wrapper-static">
                <img
                  src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578862227/evi2_120120/step4-small_bekxdm.svg"
                  alt=""
                  className="step-icon small"
                />
                <div className="form-row-header scenario-header">
                  <h4 className="heading">Samenwerking Scenario 3</h4>
                  <p>
                    De school onderzoekt en bespreekt met de externe partner hoe
                    het aanbod optimaal kan aansluiten bij wat zij leerlingen
                    willen meegeven.&nbsp;
                    <br />
                  </p>
                </div>
              </div>
            ) : (
              ""
            )}
            {this.state.meanStep4Scenario === "4" ? (
              <div className="scenario-wrapper-static">
                <img
                  src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578862227/evi2_120120/step4-small_bekxdm.svg"
                  alt=""
                  className="step-icon small"
                />
                <div className="form-row-header scenario-header">
                  <h4 className="heading">Samenwerking Scenario 4</h4>
                  <p>
                    De school legt de afspraken over samenwerking met externe
                    partners en deskundigen vast. Deze is gericht op een
                    optimale aansluiting van inhoud van het programma bij de
                    leerlingen.
                    <br />
                  </p>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ResultsTab1);
