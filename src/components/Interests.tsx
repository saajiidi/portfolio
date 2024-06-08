import React from "react";

const interests = [
  { icon: "fa-database", label: "Data Science" },
  { icon: "fa-chart-line", label: "Economics" },
  { icon: "fa-briefcase", label: "Business" },
  { icon: "fa-history", label: "History" },
  { icon: "fa-landmark", label: "Politics" },
];

const Interests: React.FC = () => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center section-spacing"
      id="interests"
    >
      <div className="container w-full p-5 rounded-lg shadow-lg">
        <h2 className="mb-5 section-spacing">Interests</h2>
        <ul className="fa-ul mb-5">
          {interests.map((interest, index) => (
            <li key={index}>
              <i className={`fa-li fa ${interest.icon}`}></i>
              {interest.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Interests;
