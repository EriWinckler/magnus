import ParticlesBg from "particles-bg";
import { useState } from "react";
import { CONTENT, LINKS } from "../content";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { ChevronDownIcon, DownloadIcon, GitHubIcon, LinkedInIcon } from "./icons";
import styles from "./header.module.scss";

// The "thick" effect emits 150 particles per burst at any size, which buries the text on small
// screens. Scale the count to the viewport area (150 at 1280x900 and above, never below 30).
function particleCount() {
  const area = window.innerWidth * window.innerHeight;
  return Math.max(30, Math.round(150 * Math.min(1, area / (1280 * 900))));
}

const Header = ({ variant }) => {
  const reducedMotion = usePrefersReducedMotion();
  const [particles] = useState(particleCount);

  return (
    <header id="home" className={styles.hero}>
      <div className={styles.banner}>
        <h1 className={styles.name}>{CONTENT.name}</h1>
        <hr className={styles.rule} />
        <p className={styles.headline}>{variant.headline}</p>
        <p className={styles.location}>{CONTENT.location}</p>
        <div className="button-row">
          <a className="btn btn--primary" href={variant.resumeUrl} target="_blank" rel="noopener noreferrer">
            <DownloadIcon />
            Resume
          </a>
          <a className="btn btn--light" href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
            LinkedIn
          </a>
          <a className="btn btn--light" href={LINKS.github} target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
            GitHub
          </a>
        </div>
      </div>
      <a className={styles.scrolldown} href="#about" aria-label="Scroll to About">
        <ChevronDownIcon size={28} />
      </a>
      {!reducedMotion && <ParticlesBg type="thick" num={particles} bg={true} />}
    </header>
  );
};

export default Header;
