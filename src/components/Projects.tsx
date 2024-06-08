import React from "react";

const projects = [
  {
    icon: "fa-project-diagram",
    label: "Portfolio with just Bootstrap",
    url: "https://saajiidi.github.io/",
  },
  {
    icon: "fa-project-diagram",
    label: "Portfolio with React.js",
    url: "https://saajiidi.github.io/portfolio",
  },
  {
    icon: "fa-project-diagram",
    label: "Portfolio with NEXT.js & Tailwind CSS",
    url: "sajid-islam-portfolio.vercel.app",
  },
];

const Projects: React.FC = () => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center section-spacing"
      id="projects"
    >
      <div className="container extra-spacing w-full p-5 rounded-lg shadow-lg">
        <h2 className="mb-5 section-spacing">Projects</h2>
        <ul className="fa-ul mb-3">
          {projects.map((project, index) => (
            <li key={index}>
              <i className={`fa-li fa ${project.icon} text-warning`}></i>
              <a href={project.url}>{project.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
