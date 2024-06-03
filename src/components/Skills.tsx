// src/components/Skills.tsx
import React from "react";

const Skills: React.FC = () => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="skills"
    >
      <div className="container">
        <h2 className="mb-5">Skills</h2>

        <ul className="fa-ul mb-5">
          <li>
            <i className="fa-li fa fa-chart-line"></i>
            Digital Sales & Marketing
          </li>
          <li>
            <i className="fa-li fa fa-chart-bar"></i>
            Data Analysis & Reporting
          </li>
          <li>
            <i className="fa-li fa fa-search"></i>
            Market Analysis & Research
          </li>
          <li>
            <i className="fa-li fa fa-tasks"></i>
            Product Development & Management
          </li>
        </ul>

        <div className="subheading mb-3">
          <a href="#">
            Tools &amp; Frameworks I have been learning &amp; working on...
          </a>
        </div>

        <ul className="list-inline dev-icons mb-5">
          <li className="list-inline-item" title="React">
            <i className="fab fa-react"></i>
          </li>
          <li className="list-inline-item" title="SQL">
            <i className="fas fa-database"></i>
          </li>
          <li className="list-inline-item" title="Power BI">
            <i className="fas fa-chart-line"></i>
          </li>
          <li className="list-inline-item" title="Excel">
            <i className="fas fa-file-excel"></i>
          </li>
          <li className="list-inline-item" title="NumPy">
            <i className="fas fa-square-root-alt"></i>
          </li>
          <li className="list-inline-item" title="Matplotlib">
            <i className="fas fa-chart-bar"></i>
          </li>
          <li className="list-inline-item" title="Ubuntu">
            <i className="fab fa-ubuntu"></i>
          </li>
        </ul>

        <div className="subheading mb-3">
          <a href="#">Workflow</a>
        </div>
        <ul className="fa-ul mb-0">
          <li>
            <i className="fa-li fa fa-check"></i>
            Cross Functional Teams
          </li>
          <li>
            <i className="fa-li fa fa-check"></i>
            Agile Development &amp; Scrum
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
