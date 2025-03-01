import ParticlesBg from "particles-bg";
import React, { useContext } from "react";
import { UserContext } from "./Context/UserContext";

const Header = () => {
  const [user, setUser] = useContext(UserContext);
  const info = user[0];

  return (
    <header id="home">
      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">{info.main}</h1>
          <hr />
          <h3>{info.subMain}</h3>

          <ul className="social">
            <a
              href="https://github.com/EriWinckler?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="button btn project-btn"
            >
              <i className="fa fa-book"></i>Project
            </a>
            <a
              href="https://www.linkedin.com/in/eridan-winckler-449798169/"
              target="_blank"
              rel="noopener noreferrer"
              className="button btn github-btn"
            >
              <i className="fa fa-linkedin"></i>LinkedIn
            </a>
          </ul>
        </div>
      </div>
      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
      <ParticlesBg type="thick" color="#02075d" bg={true} />
    </header>
  );
};

export default Header;
