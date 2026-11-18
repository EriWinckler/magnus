import { CONTENT } from "../content";
import styles from "./skills.module.scss";

const Skills = () => (
  <section id="skills" className="section section--surface">
    <div className={`container ${styles.skills}`}>
      <h2 className="section-title">
        <span>Skills</span>
      </h2>
      <ul className={styles.bars}>
        {CONTENT.skillBars.map(({ label, value }) => {
          const id = `skill-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
          return (
            <li key={label}>
              <span id={id} className={styles.label}>
                {label}
              </span>
              <span
                className={styles.track}
                role="meter"
                aria-labelledby={id}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={value}
              >
                <span className={styles.fill} style={{ "--value": `${value}%` }} />
              </span>
            </li>
          );
        })}
      </ul>

      <h3 className={styles.groupsTitle}>Also worked with</h3>
      <dl className={styles.groups}>
        {CONTENT.skillGroups.map(({ label, items }) => (
          <div key={label} className={styles.group}>
            <dt>{label}</dt>
            <dd>{items}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export default Skills;
