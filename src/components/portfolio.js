import React from "react";
import Tilt from "react-tilt";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div>
        <h1>Check Out My Work.</h1>
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
          E-Commerce page for a customer from Brazil
        </p>

        <p className="timeline">
          Page using bootstrap, React Router, React Currency Format. <br />
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
      </div>
    </section>
  );
};

export default Portfolio;
