import { useEffect, useRef, useState } from "react";
import logo from "../images/icon-48x48.png";
import { CloseIcon, MenuIcon } from "./icons";
import styles from "./navigation.module.scss";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <nav className={styles.nav} aria-label="Main">
      <div className={styles.inner}>
        <a href="#home" className={styles.brand}>
          <img src={logo} alt="Eridan Winckler, home" width="40" height="40" />
        </a>
        <button
          ref={toggleRef}
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="nav-menu"
          aria-label="Menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
        </button>
        <ul id="nav-menu" className={styles.menu} data-open={open}>
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
