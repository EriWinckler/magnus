import React, { Component } from 'react';
import ParticlesBg  from "particles-bg";

class Header extends Component {
  render() {
    
    return (
      <header id="home">
      <ParticlesBg type="cobweb" color="#FFDF00" bg={true} />
      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            { /*<li><a className="smoothscroll" href="#portfolio">Works</a></li>*/ }
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>
      </nav>

      <div className="row banner">
      
         <div className="banner-text">
            <h1 className="responsive-headline">Magnus Projects</h1>
            <hr />
            <h3>"I am a web developer and I like to use React and Python to create awesome stuff."</h3>
            
            <ul className="social">
               <a href="https://github.com/EriWinckler/magnus" target="_blank" className="button btn project-btn"><i className="fa fa-book"></i>Project</a>
               <a href="https://www.linkedin.com/in/eridan-winckler-449798169/" target="_blank" className="button btn github-btn"><i className="fa fa-github"></i>LinkedIn</a>
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;