// src/components/Awards.tsx
import React from "react";

const Projects: React.FC = () => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center section-spacing"
      id="projects"
    >
      <div className="container">
        <h2 className="mb-5">Projects</h2>
        <ul className="fa-ul mb-3">
          <li>
            <i className="fa-li fa fa-project-diagram text-warning"></i>
            <a href="https://saajiidi.github.io/portfolio/">
              My Portfolio in React App with TypeScript
            </a>
          </li>
          <li>
            <i className="fa-li fa fa-project-diagram text-warning"></i>
            <a href="">Certification Link2</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
