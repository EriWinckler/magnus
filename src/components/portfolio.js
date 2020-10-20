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
              href="https://brazilboutique.netlify.app/"
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
          href="https://brazilboutique.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="brBoutiqueLink"
        >
          <p className="brazilBoutique-p">
            On going project: E-Commerce for a customer selling Gym Attire from
            Brazil
          </p>
        </a>
        <a
          href="https://github.com/EriWinckler/BrazilBoutique"
          target="_blank"
          rel="noopener noreferrer"
          className="brBoutiqueLink"
        >
          <p className="timeline">
            Check the Readme on Github for a progress timeline!
          </p>
        </a>
        <a
          href="https://github.com/EriWinckler/BrazilBoutique"
          target="_blank"
          rel="noopener noreferrer"
          className="brazilButton"
        >
          <i className="fa fa-book"></i> Brazil Boutique
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
