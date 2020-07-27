import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';


const Contact = () => {
  return (
      <section id="contact"> 
         <Container>    
            <Fade bottom duration={1000} delay={800} distance="30px">
               <div className="contact-wrapper">
                  <h1 className="contact-wrapper __text" id="contact">
                  Contact
                  </h1>
                  <p className="contact-wrapper __text">
                  Would you like to work with me? Awesome!
                  </p>
                  <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn cta-btn--resume"
                  href="mailto:efwinckler@gmail.com"
                  >
                  Let's Talk
                  </a>
               </div>
            </Fade>
         
         </Container>
      </section>
    );
  }


export default Contact;