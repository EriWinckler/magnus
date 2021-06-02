import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const navigation = () => {
  return (
    <Navbar
      className="bs-navbar-collapse"
      bg="light"
      variant="light"
      sticky="top"
    >
      <Navbar.Brand href="#home" className="navbarBrand">
        <img src={require("../images/icon-48x48.png")} alt="logo" />
      </Navbar.Brand>

      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#resume">Education</Nav.Link>
        <Nav.Link href="#certificates">Certificates</Nav.Link>
        <Nav.Link href="#languages">Skills</Nav.Link>
        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default navigation;
