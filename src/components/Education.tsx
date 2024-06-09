import React from "react";

const educationItems = [
  {
    institution: "North South University",
    degree: "Bachelor of Science",
    field: "Computer Science & Engineering",
    year: "2019",
  },
  {
    institution: "Bangladesh Air Force Shaheen College Dhaka",
    degree: "Higher Secondary School",
    field: "Science Division",
    year: "2013",
  },
  {
    institution: "Uttara High School & College",
    degree: "Secondary School",
    field: "Science Division",
    year: "2011",
  },
];

const Education: React.FC = () => {
  return (
    <section className="p-3 p-lg-5 text-black" id="education">
      <div className="container w-full p-5 rounded-lg shadow-lg bg-white">
        <h2 className="mb-5 section-spacing text-3xl font-bold">Education</h2>
        {educationItems.map((item, index) => (
          <div
            key={index}
            className="resume-item flex flex-col md:flex-row justify-between mb-5"
          >
            <div className="resume-content">
              <h3 className="mb-0 text-xl font-semibold">{item.institution}</h3>
              <div className="subheading mb-3 text-lg font-medium">
                {item.degree}
              </div>
              <div>
                <span>{item.field}</span>
              </div>
            </div>
            <div className="resume-date text-md-right mt-3 md:mt-0">
              <span className="text-primary text-blue-600">{item.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
