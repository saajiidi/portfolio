import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import profileImage from "../assets/img/profile.jpg";
import "../assets/css/custom.css"; // Import custom CSS

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#interests", label: "Interests" },
  { href: "#awards", label: "Awards" },
  { href: "#projects", label: "Projects" },
  {
    href: "https://drive.google.com/file/d/1V5hGl1LIDtOWRn8hgcAtzNwxDfWwI1L_/view?usp=drive_link",
    label: "Resume",
    external: true,
  },
];

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
      className="vertical-navbar"
    >
      <Container
        fluid
        className="d-flex flex-lg-column align-items-lg-start p-0"
      >
        <Navbar.Brand
          href="#home"
          className="mb-lg-4 d-flex align-items-center profile-section"
        >
          <img alt="Sajid Islam" src={profileImage} className="profile-image" />
          <span className="profile-name d-lg-none ml-2">Sajid Islam</span>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={handleToggle}
            className="ml-auto d-lg-none"
          />
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="ml-auto flex-lg-column text-center w-100"
            onSelect={handleSelect}
          >
            {navLinks.map((link, index) => (
              <Nav.Link
                key={index}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="nav-link-custom"
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
