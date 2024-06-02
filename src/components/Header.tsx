// src/components/Header.tsx
import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import profileImage from "../assets/img/profile.jpg";

const Header: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" className="fixed-top mb-0">
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
      <Nav className="mr-auto">
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#experience">Experience</Nav.Link>
        <Nav.Link href="#education">Education</Nav.Link>
        <Nav.Link href="#skills">Skills</Nav.Link>
        <Nav.Link href="#interests">Interests</Nav.Link>
        <Nav.Link href="#awards">Awards</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link
          href="https://drive.google.com/file/d/1V5hGl1LIDtOWRn8hgcAtzNwxDfWwI1L_/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
