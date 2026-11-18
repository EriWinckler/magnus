import { CONTENT, LINKS } from "../content";
import { LinkedInIcon, MailIcon } from "./icons";
import styles from "./contact.module.scss";

const Contact = () => (
  <section id="contact" className={styles.contact}>
    <div className="container">
      <h2 className={`section-title ${styles.title}`}>
        <span>Contact</span>
      </h2>
      <p className={styles.text}>{CONTENT.contactText}</p>
      <div className="button-row">
        <a className={`btn ${styles.button}`} href={`mailto:${LINKS.email}`}>
          <MailIcon />
          Email me
        </a>
        <a
          className={`btn ${styles.button}`}
          href={LINKS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
          LinkedIn
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
