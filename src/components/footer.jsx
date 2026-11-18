import { CONTENT, LINKS } from "../content";
import { ChevronUpIcon, GitHubIcon, LinkedInIcon } from "./icons";
import styles from "./footer.module.scss";

const Footer = () => (
  <footer className={styles.footer}>
    <a className={styles.top} href="#home" aria-label="Back to top">
      <ChevronUpIcon size={26} />
    </a>
    <ul className={styles.social}>
      <li>
        <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <LinkedInIcon size={28} />
        </a>
      </li>
      <li>
        <a href={LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <GitHubIcon size={28} />
        </a>
      </li>
    </ul>
    <p className={styles.copyright}>
      &copy; {new Date().getFullYear()} {CONTENT.name}
    </p>
  </footer>
);

export default Footer;
