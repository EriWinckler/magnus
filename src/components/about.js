import React, { useContext } from "react";
import Fade from "react-reveal/Fade";
import { UserContext } from "./Context/UserContext";

const About = () => {
  const [user, setUser] = useContext(UserContext);
  const info = user[0];

  return (
    <section id="about">
      <Fade bottom duration={1000} delay={800} distance="30px">
        <div className="container">
          <img
            className="profile-pic"
            src={require("../images/me.jpg")}
            alt="Eri's Pic"
          />
        </div>

        <div className="block2">
          <div className="aboutContainer">
            <div className="info">
              <h2>About Me</h2>
              <p>{info.about}</p>
            </div>
            <div></div>

            <div className="contact">
              <h2>Contact Details</h2>
              <p className="address">
                <span>Eridan Winckler</span>
                <br />
                <span>
                  {info.address}, {info.state}
                </span>
                <br />
                <span>{info.email}</span>
              </p>
            </div>

            <p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn cta-btn--resume"
                style={{ color: "#000" }}
                href="https://drive.google.com/file/d/1j88L68SdmxFCfw7gL0LCt7gj7YNQPZqP/view?usp=sharing"
              >
                <i className="fa fa-download"></i> Download Resume
              </a>
            </p>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default About;
