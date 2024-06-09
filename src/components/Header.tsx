import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import profileImage from "../assets/img/profile.jpg";

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
    <nav className="bg-black text-white fixed w-full lg:w-64 h-auto lg:h-screen flex flex-col lg:items-start lg:justify-start p-4 lg:p-6 z-50 overflow-auto">
      <div className="w-full flex items-center justify-between lg:block">
        <div className="flex items-center lg:mb-10">
          <img
            src={profileImage}
            alt="Sajid Islam"
            className="rounded-full border-2 border-white w-8 h-8 lg:w-40 lg:h-40"
          />
          <span className="ml-2 lg:hidden">Sajid Islam</span>
        </div>
        <button
          className="lg:hidden text-white text-2xl"
          onClick={handleToggle}
        >
          <FaBars />
        </button>
      </div>
      <div className={`lg:block ${expanded ? "block" : "hidden"} w-full`}>
        <ul className="flex flex-col items-center lg:items-start w-full space-y-1">
          {navLinks.map((link, index) => (
            <li key={index} className="w-full text-center lg:text-left">
              <a
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="block px-4 py-2 text-lg text-white hover:bg-gray-700 rounded w-full transition-transform transform hover:scale-105 no-underline"
                onClick={handleSelect}
                style={{ textDecoration: "none" }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
