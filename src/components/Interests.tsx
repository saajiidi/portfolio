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
    <section className="p-3 p-lg-5 text-black" id="interests">
      <div className="container w-full p-5 rounded-lg shadow-lg bg-white">
        <h2 className="mb-5 section-spacing text-3xl font-bold">Interests</h2>
        <ul className="fa-ul mb-5 list-disc list-inside">
          {interests.map((interest, index) => (
            <li key={index} className="mb-2 flex items-center">
              <i className={`fa-li fa ${interest.icon} mr-2`}></i>
              {interest.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Interests;
