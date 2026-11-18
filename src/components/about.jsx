import me from "../images/me.jpg";
import { CONTENT } from "../content";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <img
          className="profile-pic"
          src={me}
          alt="Eridan Winckler"
        />
      </div>

      <div className="block2">
        <div className="aboutContainer">
          <div className="info">
            <h2>About Me</h2>
            <p>{CONTENT.summary}</p>
          </div>
          <div></div>

          <div className="contact">
            <h2>Contact Details</h2>
            <p className="address">
              <span>Eridan Winckler</span>
              <br />
              <span>
                {CONTENT.address}, {CONTENT.state}
              </span>
              <br />
              <span>{CONTENT.email}</span>
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
            </a>{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              style={{ color: "#000" }}
              href="https://www.linkedin.com/in/eridan-winckler"
            >
              <i className="fa fa-linkedin"></i> LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
