import { CONTENT } from "../content";
import styles from "./education.module.scss";

const Education = () => (
  <section id="education" className="section">
    <div className="container">
      <h2 className="section-title">
        <span>Education &amp; Certifications</span>
      </h2>

      <h3 className={styles.subheading}>Education</h3>
      <div className={styles.schools}>
        {CONTENT.education.map((entry) => (
          <div key={entry.school} className={styles.school}>
            <h4 className={styles.schoolName}>{entry.school}</h4>
            <p className={styles.info}>
              <em>{entry.course}</em>
              <span aria-hidden="true"> • </span>
              <span className={styles.years}>{entry.years}</span>
            </p>
            {entry.description && <p className={styles.description}>{entry.description}</p>}
          </div>
        ))}
      </div>

      <h3 className={styles.subheading}>Certifications</h3>
      <ul className={styles.certificates}>
        {CONTENT.certifications.map((cert) => (
          <li key={cert.url} className={styles.certificate}>
            <h4 className={styles.certificateTitle}>
              <a href={cert.url} target="_blank" rel="noopener noreferrer">
                {cert.title}
              </a>
            </h4>
            <p>{cert.issuer}</p>
            <p className={styles.date}>{cert.date}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Education;
