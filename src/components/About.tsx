// src/components/About.tsx
import React from "react";

const About: React.FC = () => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="about"
    >
      <div className="w-100">
        <h2 className="mb-5">About</h2>
        <div className="row">
          
          <div className="col-lg-6">
            <p className="mb-5">
              Experienced in leveraging data-driven insights to optimize
              business processes and drive strategic decision-making. Eager to
              contribute analytical expertise and technical proficiency to a
              dynamic organization.
            </p>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/sajidislamchowdhury/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://github.com/saajiidi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.kaggle.com/saajiidi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-kaggle"></i>
              </a>
              <a
                href="https://www.facebook.com/Islam.Sajid.Chowdhury/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
