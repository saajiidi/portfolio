// src/components/Header.tsx
import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import profileImage from "../assets/img/profile.jpg";

const Header: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);
  const handleSelect = () => setExpanded(false);

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      expanded={expanded}
      className="fixed-top mb-0"
    >
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={profileImage}
            width="30"
            height="30"
            className="d-inline-block align-top rounded-circle mr-2"
          />{" "}
          Sajid Islam
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={handleToggle}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" onSelect={handleSelect}>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#interests">Interests</Nav.Link>
            <Nav.Link href="#awards">Awards</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link
              href="https://drive.google.com/file/d/1V5hGl1LIDtOWRn8hgcAtzNwxDfWwI1L_/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
