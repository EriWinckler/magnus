import React, { Component } from 'react';
import ParticlesBg  from "particles-bg";
import Fade from 'react-reveal/Fade';


class Header extends Component {
  render() {
    
    return (
      <header id="home">      
      <Fade bottom duration={1000} delay={800} distance="30px">
         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">Magnus Projects</h1>
               <hr />
               <h3>I am a web developer and I like to use React and Python to create awesome stuff.</h3>
               
               <ul className="social">
                  <a href="https://github.com/EriWinckler?tab=repositories" target="_blank" rel="noopener noreferrer" className="button btn project-btn"><i className="fa fa-book"></i>Project</a>
                  <a href="https://www.linkedin.com/in/eridan-winckler-449798169/" target="_blank" rel="noopener noreferrer" className="button btn github-btn"><i className="fa fa-linkedin"></i>LinkedIn</a>
               </ul>
            </div>
         </div>
      </Fade>
      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>
      <ParticlesBg type="thick" color="#02075d" bg={true} />
   </header>
    );
  }
}

export default Header;