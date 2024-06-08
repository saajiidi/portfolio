import React from "react";

const educationItems = [
  {
    institution: "North South University",
    degree: "Bachelor of Science",
    field: "Computer Science & Engineering",
    url: "http://ece.northsouth.edu",
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
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center section-spacing"
      id="education"
    >
      <div className="container w-full p-5 rounded-lg shadow-lg">
        <h2 className="mb-5 section-spacing">Education</h2>
        {educationItems.map((item, index) => (
          <div
            key={index}
            className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
          >
            <div className="resume-content">
              <h3 className="mb-0">{item.institution}</h3>
              <div className="subheading mb-3">{item.degree}</div>
              <div>
                {item.url ? (
                  <a href={item.url}>{item.field}</a>
                ) : (
                  <span>{item.field}</span>
                )}
              </div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">{item.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
