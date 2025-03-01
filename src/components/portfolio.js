import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div>
        <h1>Check Out My Work.</h1>
        <div>
          <Container>
            <Row>
              <Col>
                <div className="Tilt-inner">
                  <a
                    href="https://astrologicalartofevolving.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="PCBW page link"
                  >
                    <img
                      src="https://imgur.com/Y3LNkj4.png"
                      alt="PCBW page screenshot"
                      className="brazilBoutique"
                    />
                  </a>
                </div>

                <a
                  href="https://astrologicalartofevolving.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                />
                <p className="linkP">Astrological Art of Evolving Page</p>

                <p className="timeline">
                  Full Stack live production webpage in development for PCBW
                  Astrologer. <br />
                  Created using Mui, React Router, SASS and Springboot.
                </p>

                <a
                  href="https://astrologicalartofevolving.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="PCBW-button"
                >
                  <i className="fa fa-link"></i> Astrological Art of Evolving
                </a>
              </Col>
              <Col>
                <div className="Tilt-inner">
                  <a
                    href="https://brazilboutique-ba097.firebaseapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brBoutiqueLink"
                  >
                    <img
                      src={require("../images/brazilBoutique.jpg")}
                      alt="store screenshot"
                      className="brazilBoutique"
                    />
                  </a>
                </div>

                <a
                  href="https://brazilboutique-ba097.firebaseapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brBoutiqueLink"
                />
                <p className="brazilBoutique-p">
                  E-Commerce page with brazilian thematic
                </p>

                <p className="timeline">
                  Page using React Context, Bootstrap, React Router, React
                  Currency Format. Hosted with Firebase that also works as user
                  authenticator.
                </p>

                <a
                  href="https://github.com/EriWinckler/BrazilBoutique"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brazilButton"
                >
                  <i className="fa fa-github"></i> Brazil Boutique
                </a>
              </Col>
              <Col>
                <div className="Tilt-inner">
                  <a
                    href="https://eriscrudapp.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brBoutiqueLink"
                  >
                    <img
                      src={require("../images/CRUDpage.png")}
                      alt="CRUD page screenshot"
                      className="brazilBoutique"
                    />
                  </a>
                </div>

                <a
                  href="https://eriscrudapp.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brBoutiqueLink"
                />
                <p className="brazilBoutique-p">CRUD App</p>

                <p className="timeline">
                  Simple CRUD (Create, Read, Update and Delete) page.
                </p>

                <a
                  href="https://github.com/EriWinckler/CRUD-App"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="CRUDButton"
                >
                  <i className="fa fa-github"></i> CRUD App
                </a>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
