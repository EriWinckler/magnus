import { useEffect, useRef, useState } from "react";
import { CONTENT } from "../content";
import styles from "./skills.module.scss";

const Skills = () => {
  const barsRef = useRef(null);
  // Bars start empty and fill once they scroll into view. Without IntersectionObserver (old
  // browsers, tests) they are shown filled straight away.
  const [inView, setInView] = useState(() => typeof IntersectionObserver === "undefined");

  useEffect(() => {
    if (inView) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(barsRef.current);
    return () => observer.disconnect();
  }, [inView]);

  return (
    <section id="skills" className="section section--surface">
      <div className={`container ${styles.skills}`}>
        <h2 className="section-title">
          <span>Skills</span>
        </h2>
        <ul ref={barsRef} className={styles.bars} data-in-view={inView}>
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
};

export default Skills;
