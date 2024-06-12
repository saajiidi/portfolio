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
    url: "https://saajiidi.github.io/portfolio/",
  },
  {
    icon: "fa-project-diagram",
    label: "Portfolio with NEXT.js & Tailwind CSS",
    url: "https://sajid-islam-portfolio.vercel.app/",
  },

  {
    icon: "fa-project-diagram",
    label: "E-Commerce Interface with React JS",
    url: "https://gear-master.vercel.app/",
  },

  {
    icon: "fa-project-diagram",
    label: "E-Commerce Interface with React JS",
    url: "https://altenaitve-school.vercel.app/",
  },
];


const Projects: React.FC = () => {
  return (
    <section className="p-3 p-lg-5 text-black" id="projects">
      <div className="container w-full p-5 rounded-lg shadow-lg bg-white">
        <h2 className="mb-5 section-spacing text-3xl font-bold">Projects</h2>
        <ul className="fa-ul mb-3 list-disc list-inside">
          {projects.map((project, index) => (
            <li key={index} className="mb-2 flex items-center">
              <i
                className={`fa-li fa ${project.icon} text-yellow-500 mr-2`}
              ></i>
              <a href={project.url} className="text-blue-600 hover:underline">
                {project.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
