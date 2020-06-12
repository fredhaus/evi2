import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { withRouter } from "react-router-dom";

class Home extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <link
          href="images/favicon.ico"
          rel="shortcut icon"
          type="image/x-icon"
        />
        <link href="images/webclip.png" rel="apple-touch-icon" />
        <div
          data-collapse="medium"
          data-animation="default"
          data-duration={400}
          className="navigation w-nav"
        >
          <div className="navigation-wrap">
            <Link to={'/'} className="logo-link w-nav-brand">
              <img
                src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578862224/evi2_120120/Logo2_cxbg8z.svg"
                width={108}
                alt=""
                className="logo-image"
              />
            </Link>
            <div className="menu">
              <nav role="navigation" className="navigation-items w-nav-menu">
                <div
                  href="over.html"
                  className="navigation-item w-nav-link w--current"
                >
                  over ons
                </div>
              </nav>
              <div className="menu-button w-nav-button">
                <img
                  src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578862224/evi2_120120/menu-icon_1menu-icon_ygol25.png"
                  width={22}
                  alt=""
                  className="menu-icon"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="section hero hide">
          <div className="container home-hero">
            <div className="intro-header about">
              <div id="w-node-37d5e847a504-54c081a4" className="about-image" />
              <div
                id="w-node-76c147234d1f-54c081a4"
                className="intro-content cc-homepage"
              >
                <div className="intro-text">
                  <div>This survey brings out the best.</div>
                  <h2>Deze versie van Evi 2.0 is ontwikkeld</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section about">
          <div className="container">
            <div className="intro-text-block about">
              <div>
                <h5 className="about-label">Over ons</h5>
                <h1 className="about-heading">
                  Evi is een digitale vragenlijst over cultuuronderwijs.
                </h1>
                <p className="paragraph-bigger">
                  Evi is ontwikkeld door Kunst en Cultuur Drenthe, in
                  samenwerking met de Rijksuniversiteit Groningen.Met de
                  'nieuwe' Evi wordt voortgebouwd op de 'oude' Evi, in
                  combinatie met de inzichten die met 'De CultuurLoper' zijn
                  opgedaan. Ook zijn bij de bouw van Evi 2.0 aspecten opgenomen
                  uit Curriculum.nu en het kwaliteitskader van VCPS-PO.
                </p>
              </div>
              <img
                src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578862224/evi2_120120/image-text1_kczyin.jpg"
                // srcSet="images/image-text1-p-500.jpeg 500w, images/image-text1-p-800.jpeg 800w, images/image-text1.jpg 972w"
                sizes="(max-width: 479px) 100vw, (max-width: 767px) 77vw, (max-width: 991px) 78vw, 44vw"
                alt=""
                className="about-image"
              />
            </div>
            <div className="intro-text-block about end">
              <img
                src="https://res.cloudinary.com/dsov6emwq/image/upload/v1578862223/evi2_120120/image-test2_t3wo6w.jpg"
                // srcSet="images/image-test2-p-500.jpeg 500w, images/image-test2-p-800.jpeg 800w, images/image-test2.jpg 972w"
                sizes="(max-width: 479px) 100vw, (max-width: 767px) 77vw, (max-width: 991px) 78vw, 44vw"
                alt=""
                className="about-image _2"
              />
              <div>
                <p className="paragraph-bigger">
                  Evi 2.0 is ontwikkeld door:
                  <br />
                </p>
                <ul>
                  <li>Kunst en Cultuur Drenthe</li>
                  <li>KCR Rotterdam</li>
                  <li>KunstLOC Brabant</li>
                  <li>Plein C Noord-Holland</li>
                  <li>Cultuur Educatief Collectief</li>
                  <li>Vereniging CultuurProfielScholen Primair Onderwijs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* [if lte IE 9]><![endif] */}
      </div>
    );
  }
}

export default withRouter(Home);
