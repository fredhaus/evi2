import React from "react";
import { withRouter } from "react-router-dom";

class ResultsTab5 extends React.Component {
  state = {};

  render() {
    return (
      <div data-w-tab="Tab 5" className="tab-pane w-tab-pane">
      <div className="container marginbottom80">
        <div className="intro-text results">
          <img
            src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578862225/evi2_120120/step1_uvi01u.svg"
            alt=""
            className="step-icon hide"
          />
          <div className="details-wrap">
            <h1>Analyse samenwerking</h1>
          </div>
          <div className="paragraph-light">
            Met welke externe partners en deskundigen werkt je
            school samen? En met welk doel werk je met deze partijen
            samen?
            <br />
          </div>
        </div>
      </div>
      <div className="container results-sub">
        <div className="results-subcontent-sidebar">
          <a
            href="#4-analyse"
            className="sidebar-menu w-inline-block"
          >
            <div>Advies</div>
          </a>
          <a
            href="#4-replies"
            className="sidebar-menu w-inline-block"
          >
            <div>Antwoorden</div>
          </a>
        </div>
        <div className="results-subcontent-wrapper">
          <div
            id="4-analyse"
            className="w-layout-grid project-details-wrapper first"
          >
            <h2 className="results-heading first">Advies</h2>
            <div className="level_blocks-wrapper">
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
            </div>
            <div className="content-block">
              <div className="form-section-header">
                <h3>Samenwerking</h3>
              </div>
              <div className="scenario-wrapper-static">
                <img
                  src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578862224/evi2_120120/scenario-arrow-small_wn2ou9.svg"
                  alt=""
                  className="step-icon small"
                />
                <div className="form-row-header scenario-header">
                  <h4 className="heading">Scenario 1</h4>
                  <p>
                    Wat betreft Samenwerking zit jullie school in
                    scenario 1. Mogelijk willen jullie de
                    samenwerking met externe partners en deskundigen
                    tot stand brengen of verstevigen en een stap
                    zetten naar het niveau van scenario 2. In dat
                    geval kunnen jullie de volgende dingen doen:
                    <br />
                  </p>
                  <ul className="list margin20">
                    <li className="list-item">
                      <p>
                        Kies welke partners in jullie omgeving
                        geschikt zijn voor structurele samenwerking.
                      </p>
                    </li>
                  </ul>
                  <p>
                    Willen jullie hierover in gesprek met een
                    adviseur? Neem dan via deze knop contact op.Hier
                    vinden jullie een overzicht van het
                    scholingsaanbod en relevante partners bij jullie
                    in de buurt.
                    <br />
                  </p>
                </div>
              </div>
              <div className="scenario-wrapper-static">
                <img
                  src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578862224/evi2_120120/scenario-arrow-small_wn2ou9.svg"
                  alt=""
                  className="step-icon small"
                />
                <div className="form-row-header scenario-header">
                  <h4 className="heading">Scenario 2</h4>
                  <p>
                    Wat betreft Samenwerking zit jullie school in
                    scenario 2. Dit is een mooie basis, die jullie
                    misschien willen behouden, aanscherpen of
                    bestendigen. Mogelijk willen jullie een stap
                    zetten naar het niveau van scenario 3. In dat
                    geval kun je de volgende dingen doen:
                    <br />
                  </p>
                  <ul className="list margin20">
                    <li className="list-item">
                      <p>
                        Onderzoek en bespreek met de externe
                        partners hoe het aanbod beter kan aansluiten
                        bij wat jij de leerlingen wilt meegeven.
                      </p>
                    </li>
                    <li className="list-item">
                      <p>
                        Haal inspiratie over mogelijke invullingen
                        voor samenwerken bij het icc- en/of
                        cultuurbegleidersnetwerk .&nbsp;
                      </p>
                    </li>
                  </ul>
                  <p>
                    Willen jullie hierover in gesprek met een
                    adviseur? Neem dan via deze knop contact op.
                    Hier vinden jullie een overzicht van het
                    scholingsaanbod en relevante partners bij jullie
                    in de buurt.
                    <br />
                  </p>
                </div>
              </div>
              <div className="scenario-wrapper-static">
                <img
                  src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578862224/evi2_120120/scenario-arrow-small_wn2ou9.svg"
                  alt=""
                  className="step-icon small"
                />
                <div className="form-row-header scenario-header">
                  <h4 className="heading">Scenario 3</h4>
                  <p>
                    Wat betreft Samenwerking zit jullie school in
                    scenario 3. Als school voer je – waar mogelijk
                    de inhoudelijke regie over het aanbod dat in
                    jullie school binnenkomt. Dit is een mooie
                    basis, die jullie misschien willen behouden,
                    aanscherpen of bestendigen. Mogelijk willen
                    jullie een stap zetten naar het niveau van
                    scenario 4. In dat geval kun je de volgende
                    dingen doen:
                    <br />
                  </p>
                  <ul className="list margin20">
                    <li className="list-item">
                      <p>
                        Leg de samenwerking met de externe partners
                        en deskundigen vast. Deze is gericht op een
                        optimale aansluiting van inhoud bij de
                        leerlingen.
                      </p>
                    </li>
                    <li className="list-item">
                      <p>
                        Leer van en met elkaar binnen
                        netwerkscholen, bijvoorbeeld een scenario
                        3-scholennetwerk en/of netwerk van de
                        Vereniging CultuurProfielScholen.
                      </p>
                    </li>
                  </ul>
                  <p>
                    Willen jullie hierover in gesprek met een
                    adviseur? Neem dan via deze knop contact op.Hier
                    vinden jullie een overzicht van het
                    scholingsaanbod en relevante partners bij jullie
                    in de buurt.
                    <br />
                  </p>
                </div>
              </div>
              <div className="scenario-wrapper-static">
                <img
                  src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578862224/evi2_120120/scenario-arrow-small_wn2ou9.svg"
                  alt=""
                  className="step-icon small"
                />
                <div className="form-row-header scenario-header">
                  <h4 className="heading">Scenario 4</h4>
                  <p>
                    Wat betreft Samenwerking zit je in scenario 4.
                    Probeer dit niveau vast te houden. Jullie slagen
                    er in om in gelijkwaardige verhouding met
                    partners een rijk en&nbsp; passend programma
                    cultuuronderwijs op jullie school neer te
                    zetten. Om scherp en kritisch te blijven, maar
                    ook om je kennis over samenwerking te delen,
                    kunnen jullie de volgende dingen doen:
                    <br />
                  </p>
                  <ul className="list margin20">
                    <li className="list-item">
                      <p>
                        Deelnemen aan lokale en regionale
                        bijeenkomsten. Denk aan bijeenkomsten van
                        scenario 4-scholen, cultuurprofielscholen,
                        cultuurbegeleiders, kunstvakopleidingen
                        en/of pabo bijeenkomsten.
                      </p>
                    </li>
                    <li className="list-item">
                      <p>
                        Deelname aan landelijke bijeenkomsten. Denk
                        aan bijeenkomsten van LKCA , SLO &nbsp;of
                        landelijke vakverenigingen.
                      </p>
                    </li>
                    <li className="list-item">
                      <p>
                        Sluit je aan bij regionale netwerk,
                        bijvoorbeeld een scenario 4-scholennetwerk
                      </p>
                    </li>
                    <li className="list-item">
                      <p>
                        Sluit je aan bij de Vereniging
                        CultuurProfielScholen{" "}
                      </p>
                    </li>
                  </ul>
                  <p>
                    Willen jullie hierover in gesprek met een
                    adviseur? Neem dan via deze knop contact op.Hier
                    vinden jullie een overzicht van het
                    scholingsaanbod en relevante partners bij jullie
                    in de buurt.
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            id="4-replies"
            className="w-layout-grid project-details-wrapper"
          >
            <h2 className="results-heading">Antwoorden</h2>
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
                    Met welke externe partners en - deskundigen
                    heeft jullie school het afgelopen jaar
                    samengewerkt in het kader van cultuuronderwijs?
                  </h4>
                </div>
                <div className="form-wrapper">
                  <div className="form">
                    <div className="text-field static-text-field">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Suspendisse varius enim in
                        eros elementum tristique. Duis cursus, mi
                        quis viverra ornare, eros dolor interdum
                        nulla, ut commodo diam libero vitae erat.
                        Aenean faucibus nibh et justo cursus id
                        rutrum lorem imperdiet. Nunc ut sem vitae
                        risus tristique posuere.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-row hide">
                <div className="form-row-header">
                  <h6>
                    Het cultuurbeleidsplan kunt je aan het einde van
                    de vragenlijst uploaden
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
                  <div>4.2</div>
                </div>
                <div>
                  <h3 className="form-heading">
                    Normeren/stellingen
                  </h3>
                  <p>
                    <em>I</em>n hoeverre passen de volgende
                    stellingen bij ‘samenwerking’ met externe
                    partners en - deskundigen op jullie school? De
                    inhoudelijke samenwerking (= afstemming en
                    gesprek) van onze school met externe partners en
                    - deskundigen is gericht op de realisatie van
                    cultuuronderwijs dat:
                    <br />
                  </p>
                </div>
              </div>
              <div className="table">
                <div className="table-header">
                  <div className="table-empty-cell" />
                  <h6 id="w-node-a0a7b435e250-7eda5bea">1</h6>
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
                      Leerlingen stimuleert om betekenis te geven
                      aan en te reflecteren op zichzelf en de wereld
                    </p>
                    <div
                      id="w-node-a0a7b435e25e-7eda5bea"
                      className="table-cell bullet"
                    >
                      <div className="radio-button-static active" />
                    </div>
                    <div
                      id="w-node-a0a7b435e260-7eda5bea"
                      className="table-cell bullet"
                    >
                      <div className="radio-button-static" />
                    </div>
                    <div
                      id="w-node-a0a7b435e262-7eda5bea"
                      className="table-cell bullet"
                    >
                      <div className="radio-button-static" />
                    </div>
                    <div
                      id="w-node-a0a7b435e264-7eda5bea"
                      className="table-cell bullet"
                    >
                      <div className="radio-button-static" />
                    </div>
                    <div
                      id="w-node-a0a7b435e266-7eda5bea"
                      className="table-cell bullet"
                    >
                      <div className="radio-button-static" />
                    </div>
                  </form>
                  <div className="w-form-done">
                    <div>
                      Thank you! Your submission has been received!
                    </div>
                  </div>
                  <div className="w-form-fail">
                    <div>
                      Oops! Something went wrong while submitting
                      the form.
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
                      Leerlinggestuurd werken stimuleert, op basis
                      van de eigen vraag en interesse van de
                      leerling
                    </p>
                    <div
                      id="w-node-a0a7b435e275-7eda5bea"
                      className="table-cell bullet"
                    >
                      <div className="radio-button-static" />
                    </div>
                    <div
                      id="w-node-a0a7b435e277-7eda5bea"
                      className="table-cell bullet"
                    >
                      <div className="radio-button-static active" />
                    </div>
                    <div
                      id="w-node-a0a7b435e279-7eda5bea"
                      className="table-cell bullet"
                    >
                      <div className="radio-button-static" />
                    </div>
                    <div
                      id="w-node-a0a7b435e27b-7eda5bea"
                      className="table-cell bullet"
                    >
                      <div className="radio-button-static" />
                    </div>
                    <div
                      id="w-node-a0a7b435e27d-7eda5bea"
                      className="table-cell bullet"
                    >
                      <div className="radio-button-static" />
                    </div>
                  </form>
                  <div className="w-form-done">
                    <div>
                      Thank you! Your submission has been received!
                    </div>
                  </div>
                  <div className="w-form-fail">
                    <div>
                      Oops! Something went wrong while submitting
                      the form.
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
                      De link legt tussen cultuuronderwijs en de
                      omgeving en achtergrond van onze
                      leerlingen&nbsp;
                    </p>
                    <div
                      id="w-node-a0a7b435e28c-7eda5bea"
                      className="table-cell bullet"
                    >
                      <div className="radio-button-static active" />
                    </div>
                    <div
                      id="w-node-a0a7b435e28e-7eda5bea"
                      className="table-cell bullet"
                    >
                      <div className="radio-button-static" />
                    </div>
                    <div
                      id="w-node-a0a7b435e290-7eda5bea"
                      className="table-cell bullet"
                    >
                      <div className="radio-button-static" />
                    </div>
                    <div
                      id="w-node-a0a7b435e292-7eda5bea"
                      className="table-cell bullet"
                    >
                      <div className="radio-button-static" />
                    </div>
                    <div
                      id="w-node-a0a7b435e294-7eda5bea"
                      className="table-cell bullet"
                    >
                      <div className="radio-button-static" />
                    </div>
                  </form>
                  <div className="w-form-done">
                    <div>
                      Thank you! Your submission has been received!
                    </div>
                  </div>
                  <div className="w-form-fail">
                    <div>
                      Oops! Something went wrong while submitting
                      the form.
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
                      Leerlingen een zo breed mogelijk pallet aan
                      culturele en kunstzinnige activiteiten laten
                      maken en meemaken
                    </p>
                    <div
                      id="w-node-a0a7b435e2a2-7eda5bea"
                      className="table-cell bullet"
                    >
                      <div className="radio-button-static" />
                    </div>
                    <div
                      id="w-node-a0a7b435e2a4-7eda5bea"
                      className="table-cell bullet"
                    >
                      <div className="radio-button-static" />
                    </div>
                    <div
                      id="w-node-a0a7b435e2a6-7eda5bea"
                      className="table-cell bullet"
                    >
                      <div className="radio-button-static" />
                    </div>
                    <div
                      id="w-node-a0a7b435e2a8-7eda5bea"
                      className="table-cell bullet"
                    >
                      <div className="radio-button-static" />
                    </div>
                    <div
                      id="w-node-a0a7b435e2aa-7eda5bea"
                      className="table-cell bullet"
                    >
                      <div className="radio-button-static active" />
                    </div>
                  </form>
                  <div className="w-form-done">
                    <div>
                      Thank you! Your submission has been received!
                    </div>
                  </div>
                  <div className="w-form-fail">
                    <div>
                      Oops! Something went wrong while submitting
                      the form.
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
                      De taalontwikkeling en sociaal emotionele
                      ontwikkeling bij leerlingen versterkt
                    </p>
                    <div
                      id="w-node-a0a7b435e2b6-7eda5bea"
                      className="table-cell bullet"
                    >
                      <div className="radio-button-static" />
                    </div>
                    <div
                      id="w-node-a0a7b435e2b8-7eda5bea"
                      className="table-cell bullet"
                    >
                      <div className="radio-button-static" />
                    </div>
                    <div
                      id="w-node-a0a7b435e2ba-7eda5bea"
                      className="table-cell bullet"
                    >
                      <div className="radio-button-static" />
                    </div>
                    <div
                      id="w-node-a0a7b435e2bc-7eda5bea"
                      className="table-cell bullet"
                    >
                      <div className="radio-button-static active" />
                    </div>
                    <div
                      id="w-node-a0a7b435e2be-7eda5bea"
                      className="table-cell bullet"
                    >
                      <div className="radio-button-static" />
                    </div>
                  </form>
                  <div className="w-form-done">
                    <div>
                      Thank you! Your submission has been received!
                    </div>
                  </div>
                  <div className="w-form-fail">
                    <div>
                      Oops! Something went wrong while submitting
                      the form.
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
                      De mogelijkheid biedt om{" "}
                      <em>ambachtelijke vaardigheden</em> te
                      ontwikkelen in uiteenlopende media
                      (materialen, ICT-middelen, voorwerpen,
                      instrumenten, gesproken en geschreven taal,
                      het (eigen) lichaam)
                    </p>
                    <div
                      id="w-node-a0a7b435e2cd-7eda5bea"
                      className="table-cell bullet"
                    >
                      <div className="radio-button-static" />
                    </div>
                    <div
                      id="w-node-a0a7b435e2cf-7eda5bea"
                      className="table-cell bullet"
                    >
                      <div className="radio-button-static active" />
                    </div>
                    <div
                      id="w-node-a0a7b435e2d1-7eda5bea"
                      className="table-cell bullet"
                    >
                      <div className="radio-button-static" />
                    </div>
                    <div
                      id="w-node-a0a7b435e2d3-7eda5bea"
                      className="table-cell bullet"
                    >
                      <div className="radio-button-static" />
                    </div>
                    <div
                      id="w-node-a0a7b435e2d5-7eda5bea"
                      className="table-cell bullet"
                    >
                      <div className="radio-button-static" />
                    </div>
                  </form>
                  <div className="w-form-done">
                    <div>
                      Thank you! Your submission has been received!
                    </div>
                  </div>
                  <div className="w-form-fail">
                    <div>
                      Oops! Something went wrong while submitting
                      the form.
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
                      Onze leerlingen uitdaagt om hun artistiek,
                      creatief en innovatief vermogen te ontwikkelen
                    </p>
                    <div
                      id="w-node-a0a7b435e2e1-7eda5bea"
                      className="table-cell bullet"
                    >
                      <div className="radio-button-static" />
                    </div>
                    <div
                      id="w-node-a0a7b435e2e3-7eda5bea"
                      className="table-cell bullet"
                    >
                      <div className="radio-button-static" />
                    </div>
                    <div
                      id="w-node-a0a7b435e2e5-7eda5bea"
                      className="table-cell bullet"
                    >
                      <div className="radio-button-static" />
                    </div>
                    <div
                      id="w-node-a0a7b435e2e7-7eda5bea"
                      className="table-cell bullet"
                    >
                      <div className="radio-button-static active" />
                    </div>
                    <div
                      id="w-node-a0a7b435e2e9-7eda5bea"
                      className="table-cell bullet"
                    >
                      <div className="radio-button-static" />
                    </div>
                  </form>
                  <div className="w-form-done">
                    <div>
                      Thank you! Your submission has been received!
                    </div>
                  </div>
                  <div className="w-form-fail">
                    <div>
                      Oops! Something went wrong while submitting
                      the form.
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
                      Ruimte biedt voor artistieke expressie en
                      presentatie
                    </p>
                    <div
                      id="w-node-a0a7b435e2f8-7eda5bea"
                      className="table-cell bullet"
                    >
                      <div className="radio-button-static" />
                    </div>
                    <div
                      id="w-node-a0a7b435e2fa-7eda5bea"
                      className="table-cell bullet"
                    >
                      <div className="radio-button-static" />
                    </div>
                    <div
                      id="w-node-a0a7b435e2fc-7eda5bea"
                      className="table-cell bullet"
                    >
                      <div className="radio-button-static active" />
                    </div>
                    <div
                      id="w-node-a0a7b435e2fe-7eda5bea"
                      className="table-cell bullet"
                    >
                      <div className="radio-button-static" />
                    </div>
                    <div
                      id="w-node-a0a7b435e300-7eda5bea"
                      className="table-cell bullet"
                    >
                      <div className="radio-button-static" />
                    </div>
                  </form>
                  <div className="w-form-done">
                    <div>
                      Thank you! Your submission has been received!
                    </div>
                  </div>
                  <div className="w-form-fail">
                    <div>
                      Oops! Something went wrong while submitting
                      the form.
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
                      Ruimte biedt voor <em>vakoverstijgend </em>
                      verbinden met andere vakken, leergebieden,
                      overkoepelende vaardigheden en thema’s
                    </p>
                    <div
                      id="w-node-a0a7b435e30f-7eda5bea"
                      className="table-cell bullet"
                    >
                      <div className="radio-button-static" />
                    </div>
                    <div
                      id="w-node-a0a7b435e311-7eda5bea"
                      className="table-cell bullet"
                    >
                      <div className="radio-button-static active" />
                    </div>
                    <div
                      id="w-node-a0a7b435e313-7eda5bea"
                      className="table-cell bullet"
                    >
                      <div className="radio-button-static" />
                    </div>
                    <div
                      id="w-node-a0a7b435e315-7eda5bea"
                      className="table-cell bullet"
                    >
                      <div className="radio-button-static" />
                    </div>
                    <div
                      id="w-node-a0a7b435e317-7eda5bea"
                      className="table-cell bullet"
                    >
                      <div className="radio-button-static" />
                    </div>
                  </form>
                  <div className="w-form-done">
                    <div>
                      Thank you! Your submission has been received!
                    </div>
                  </div>
                  <div className="w-form-fail">
                    <div>
                      Oops! Something went wrong while submitting
                      the form.
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
                      Er aan bijdraagt dat onze leerlingen hun
                      onderzoekende en open houding ontwikkelen
                    </p>
                    <div
                      id="w-node-a0a7b435e323-7eda5bea"
                      className="table-cell bullet"
                    >
                      <div className="radio-button-static" />
                    </div>
                    <div
                      id="w-node-a0a7b435e325-7eda5bea"
                      className="table-cell bullet"
                    >
                      <div className="radio-button-static" />
                    </div>
                    <div
                      id="w-node-a0a7b435e327-7eda5bea"
                      className="table-cell bullet"
                    >
                      <div className="radio-button-static active" />
                    </div>
                    <div
                      id="w-node-a0a7b435e329-7eda5bea"
                      className="table-cell bullet"
                    >
                      <div className="radio-button-static" />
                    </div>
                    <div
                      id="w-node-a0a7b435e32b-7eda5bea"
                      className="table-cell bullet"
                    >
                      <div className="radio-button-static" />
                    </div>
                  </form>
                  <div className="w-form-done">
                    <div>
                      Thank you! Your submission has been received!
                    </div>
                  </div>
                  <div className="w-form-fail">
                    <div>
                      Oops! Something went wrong while submitting
                      the form.
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
                    In hoeverre zijn jullie tevreden over de
                    samenwerking met externe partners en –
                    deskundigen met de voor cultuuronderwijs op
                    jullie school? Licht de beoordeling toe.
                  </h4>
                </div>
                <div className="form-wrapper">
                  <div className="form">
                    <div className="text-field static-text-field">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Suspendisse varius enim in
                        eros elementum tristique. Duis cursus, mi
                        quis viverra ornare, eros dolor interdum
                        nulla, ut commodo diam libero vitae erat.
                        Aenean faucibus nibh et justo cursus id
                        rutrum lorem imperdiet. Nunc ut sem vitae
                        risus tristique posuere. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in
                      </p>
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
                    Heeft jullie school de intentie voor meer
                    samenwerking met externe partners?
                  </h4>
                </div>
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
              </div>
              <div className="form-row">
                <div className="form-row-header">
                  <div className="label answertype yes">
                    Indien ja
                  </div>
                  <h4>Met wie en op welk vlak?</h4>
                </div>
                <div className="form-wrapper">
                  <div className="form">
                    <div className="text-field static-text-field">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Suspendisse varius enim in
                        eros elementum tristique. Duis cursus, mi
                        quis viverra ornare, eros dolor interdum
                        nulla, ut commodo diam libero vitae erat.
                        Aenean faucibus nibh et justo cursus id
                        rutrum lorem imperdiet. Nunc ut sem vitae
                        risus tristique posuere. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="form-row-header">
                  <div className="label answertype yes">
                    Indien ja
                  </div>
                  <h4>Hoe willen jullie dat aanpakken?</h4>
                </div>
                <div className="form-wrapper">
                  <div className="form">
                    <div className="text-field static-text-field">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Suspendisse varius enim in
                        eros elementum tristique. Duis cursus, mi
                        quis viverra ornare, eros dolor interdum
                        nulla, ut commodo diam libero vitae erat.
                        Aenean faucibus nibh et justo cursus id
                        rutrum lorem imperdiet.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="form-row-header">
                  <div className="label answertype yes">
                    Indien ja
                  </div>
                  <h4>Hebben jullie daar hulp bij nodig?</h4>
                </div>
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
              </div>
              <div className="form-row">
                <div className="form-row-header">
                  <div className="label answertype yes">
                    Indien ja
                  </div>
                  <h4>Wat is je hulpvraag?</h4>
                </div>
                <div className="form-wrapper">
                  <div className="form">
                    <div className="text-field static-text-field">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Suspendisse varius enim in
                        eros elementum tristique. Duis cursus, mi
                        quis viverra ornare, eros dolor interdum
                        nulla, ut commodo diam libero vitae erat.
                        Aenean faucibus nibh et justo cursus id
                        rutrum lorem imperdiet.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="form-row-header">
                  <div className="label answertype no">
                    Indien nee
                  </div>
                  <h4>
                    Kunnen jullie aangeven waarom jullie geen
                    plannen of wensen hebben voor meer samenwerking
                    met externe partners? Licht het antwoord toe.
                  </h4>
                </div>
                <div className="form-wrapper">
                  <div className="form">
                    <div className="text-field static-text-field">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Suspendisse varius enim in
                        eros elementum tristique. Duis cursus, mi
                        quis viverra ornare, eros dolor interdum
                        nulla, ut commodo diam libero vitae erat.
                        Aenean faucibus nibh et justo cursus id
                        rutrum lorem imperdiet.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-section">
              <div className="form-section-header">
                <div className="form-section-number">
                  <div>4.5</div>
                </div>
                <div>
                  <h3 className="form-heading">Scenario</h3>
                  <p>
                    Geef aan welke scenariobeschrijving op dit
                    moment (!) geheel overeenkomt met de situatie op
                    jullie school.
                  </p>
                </div>
              </div>
              <div className="form-row first">
                <div className="form-wrapper form-scenario">
                  <div className="form">
                    <div className="radio-button-field scenario _1">
                      <div className="radio-button-static scenario active" />
                      <div className="form-row-header scenario-header">
                        <h4 className="heading">Scenario 1</h4>
                        <p>
                          De school heeft incidentele samenwerking
                          en/of contacten met externe partners en –
                          deskundigen.
                        </p>
                      </div>
                    </div>
                    <div className="radio-button-field scenario _2">
                      <div className="radio-button-static scenario" />
                      <div className="form-row-header scenario-header">
                        <h4 className="heading">Scenario 2</h4>
                        <p>
                          De school werkt structureel samen met
                          externe partners en – deskundigen. De
                          inhoudelijke keuzes liggen bij de externe
                          partner (afnemen cultuuraanbod).
                          <br />
                        </p>
                      </div>
                    </div>
                    <div className="radio-button-field scenario _3">
                      <div className="radio-button-static scenario" />
                      <div className="form-row-header scenario-header">
                        <h4 className="heading">Scenario 3</h4>
                        <p>
                          De school onderzoekt en bespreekt met de
                          externe partner hoe het aanbod optimaal
                          kan aansluiten bij wat zij leerlingen
                          willen meegeven.
                        </p>
                      </div>
                    </div>
                    <div className="radio-button-field scenario _4">
                      <div className="radio-button-static scenario" />
                      <div className="form-row-header scenario-header">
                        <h4 className="heading">Scenario 4</h4>
                        <p>
                          De school legt de afspraken over
                          samenwerking met externe partners en
                          deskundigen vast. Deze is gericht op een
                          optimale aansluiting van inhoud van het
                          programma bij de leerlingen.
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
                  <div>4.6</div>
                </div>
                <div>
                  <h3 className="form-heading horizontal-center">
                    Extra
                  </h3>
                </div>
              </div>
              <div className="form-row first">
                <div className="form-row-header long">
                  <h4>
                    Als jullie nog iets kwijt willen over
                    samenwerking met externe partners en
                    deskundigen, kan dat hier.
                  </h4>
                </div>
                <div className="form-wrapper">
                  <div className="form">
                    <div className="text-field static-text-field">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Suspendisse varius enim in
                        eros elementum tristique. Duis cursus, mi
                        quis viverra ornare, eros dolor interdum
                        nulla, ut commodo diam libero vitae erat.
                        Aenean faucibus nibh et justo cursus id
                        rutrum lorem imperdiet. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum
                        tristique. Duis cursus, mi quis viverra
                        ornare, eros dolor interdum nulla, ut
                        commodo diam libero vitae erat. Aenean
                        faucibus nibh et justo cursus id rutrum
                        lorem imperdiet. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Suspendisse
                        varius enim in eros elementum tristique.
                        Duis cursus, mi quis viverra ornare, eros
                        dolor interdum nulla, ut commodo diam libero
                        vitae erat. Aenean faucibus nibh et justo
                        cursus id rutrum lorem imperdiet.{" "}
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

export default withRouter(ResultsTab5);
