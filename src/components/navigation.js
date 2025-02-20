import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const navigation = () => {
  return (
    <Navbar
      className="bs-navbar-collapse"
      bg="light"
      variant="light"
      fixed="top"
      expand="lg"
      collapseOnSelect
    >
      <Container>
        <Navbar.Brand href="#home" className="navbarBrand">
          <img src={require("../images/icon-48x48.png")} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="ml-auto"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#resume">Education</Nav.Link>
            <Nav.Link href="#certificates">Certificates</Nav.Link>
            <Nav.Link href="#languages">Skills</Nav.Link>
            {/* <Nav.Link href="#portfolio">Portfolio</Nav.Link> */}
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default navigation;
