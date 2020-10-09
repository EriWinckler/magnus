import React, { Component } from "react";
import Fade from "react-reveal/Fade";

class About extends Component {
  render() {
    return (
      <section id="about">
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="container">
            <img
              className="profile-pic"
              src={require("../images/me.jpg")}
              alt="Eri Pic"
            />
          </div>

          <div className="block2">
            <div className="aboutContainer">
              <div className="info">
                <h2>About Me</h2>
                <p>
                  I am a self taught developer that started my journey learning
                  Python and eventually fell in love with Front End, learning
                  HTML, CSS, JS and React.
                </p>
              </div>
              <div></div>

              <div className="contact">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Eridan Winckler</span>
                  <br />
                  <span>
                    East Providence
                    <br />
                    Rhode Island, USA, 02914
                  </span>
                  <br />
                  <span>efwinckler@gmail.com</span>
                </p>
              </div>

              <p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn cta-btn--resume"
                  href="mailto:efwinckler@gmail.com"
                >
                  <i className="fa fa-download"></i> Download Resume
                </a>
              </p>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
