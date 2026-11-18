import { CONTENT } from "../content";
import styles from "./experience.module.scss";

const { employer, employerLocation, roles } = CONTENT.experience;

const Experience = () => (
  <section id="experience" className="section">
    <div className={`container ${styles.experience}`}>
      <h2 className="section-title">
        <span>Experience</span>
      </h2>
      <p className={styles.employer}>
        <strong>{employer}</strong>
        <br />
        <span className={styles.employerLocation}>{employerLocation}</span>
      </p>
      {roles.map((role) => (
        <article key={role.title} className={styles.role}>
          <h3 className={styles.title}>{role.title}</h3>
          <p className={styles.dates}>{role.dates}</p>
          <ul className={styles.bullets}>
            {role.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  </section>
);

export default Experience;
