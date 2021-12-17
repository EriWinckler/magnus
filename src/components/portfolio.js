import React from "react";
import Tilt from "react-tilt";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div>
        <h1>Check Out My Work.</h1>
        <div>
          <Tilt className="Tilt" options={{ max: 25 }} style={{ width: 300 }}>
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
          </Tilt>
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
            Page using React Context, Bootstrap, React Router, React Currency
            Format. <br />
            Hosted with Firebase that also works as user authenticator.
          </p>

          <a
            href="https://github.com/EriWinckler/BrazilBoutique"
            target="_blank"
            rel="noopener noreferrer"
            className="brazilButton"
          >
            <i className="fa fa-github"></i> Brazil Boutique
          </a>

          <Tilt className="Tilt" options={{ max: 25 }} style={{ width: 300 }}>
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
          </Tilt>
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
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
