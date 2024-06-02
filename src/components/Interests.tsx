// src/components/Interests.tsx
import React from "react";

const Interests: React.FC = () => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="interests"
    >
      <div className="w-100">
        <h2 className="mb-5">Interests</h2>
        <ul className="fa-ul mb-5">
          <li>
            <i className="fa-li fa fa-database"></i>
            Data Science
          </li>
          <li>
            <i className="fa-li fa fa-chart-line"></i>
            Economics
          </li>
          <li>
            <i className="fa-li fa fa-briefcase"></i>
            Business
          </li>
          <li>
            <i className="fa-li fa fa-history"></i>
            History
          </li>
          <li>
            <i className="fa-li fa fa-landmark"></i>
            Politics
          </li>
          <li>
            <i className="fa-li fa fa-crosshairs"></i>
            War
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Interests;
