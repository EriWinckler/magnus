import React from "react";
import { Container } from "react-bootstrap";

const Contact = () => {
  return (
    <section id="contact">
      <Container>
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
      </Container>
    </section>
  );
};

export default Contact;
