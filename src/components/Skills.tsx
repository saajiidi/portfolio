import React from "react";

const skills = [
  { icon: "fa-chart-line", label: "Digital Sales & Marketing" },
  { icon: "fa-chart-bar", label: "Data Analysis & Reporting" },
  { icon: "fa-search", label: "Market Analysis & Research" },
  { icon: "fa-tasks", label: "Product Development & Management" },
];

const tools = [
  { icon: "fab fa-react", title: "React" },
  { icon: "fas fa-database", title: "SQL" },
  { icon: "fas fa-chart-line", title: "Power BI" },
  { icon: "fas fa-file-excel", title: "Excel" },
  { icon: "fas fa-square-root-alt", title: "Pandas" },
  { icon: "fas fa-chart-bar", title: "Matplotlib" },
  { icon: "fab fa-ubuntu", title: "Ubuntu" },
];

const workflow = [
  { icon: "fa-check", label: "Cross Functional Teams" },
  { icon: "fa-check", label: "Agile Development & Scrum" },
];

const Skills: React.FC = () => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="skills"
    >
      <div className="container w-full p-5 rounded-lg shadow-lg">
        <h2 className="mb-5 section-spacing">Skills</h2>

        <ul className="fa-ul mb-5">
          {skills.map((skill, index) => (
            <li key={index}>
              <i className={`fa-li fa ${skill.icon}`}></i>
              {skill.label}
            </li>
          ))}
        </ul>

        <div className="subheading mb-3">
          <a href="#">
            Tools &amp; Frameworks I have been learning &amp; working on...
          </a>
        </div>

        <ul className="list-inline dev-icons mb-5">
          {tools.map((tool, index) => (
            <li key={index} className="list-inline-item" title={tool.title}>
              <i className={tool.icon}></i>
            </li>
          ))}
        </ul>

        <div className="subheading mb-3">
          <a href="#">Workflow</a>
        </div>

        <ul className="fa-ul mb-0">
          {workflow.map((item, index) => (
            <li key={index}>
              <i className={`fa-li fa ${item.icon}`}></i>
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
