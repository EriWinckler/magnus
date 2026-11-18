import { CONTENT, LINKS } from "../content";
import me from "../images/me.jpg";
import { DownloadIcon, LinkedInIcon } from "./icons";
import styles from "./about.module.scss";

const About = ({ variant }) => (
  <section id="about" className="section section--surface">
    <div className={`container ${styles.about}`}>
      <img className={styles.photo} src={me} alt="Eridan Winckler" width="140" height="140" />
      <h2 className={styles.heading}>About Me</h2>
      <p className={styles.text}>{variant.summary}</p>

      <h2 className={styles.heading}>Contact Details</h2>
      <p className={styles.text}>
        {CONTENT.name}
        <br />
        {CONTENT.contactLocation}
        <br />
        <a href={`mailto:${LINKS.email}`}>{LINKS.email}</a>
      </p>

      <div className="button-row">
        <a className="btn btn--dark" href={variant.resumeUrl} target="_blank" rel="noopener noreferrer">
          <DownloadIcon />
          Download Resume
        </a>
        <a className="btn btn--dark" href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
          LinkedIn
        </a>
      </div>
    </div>
  </section>
);

export default About;
