import React from "react";


const Education: React.FC = () => {
  return (
  
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center section-spacing"
      id="education">
      <div className="container">
        <h2 className="mb-5 section-spacing">Education</h2>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">North South University</h3>
            <div className="subheading mb-3">Bachelor of Science</div>
            <div>
              <a href="http://ece.northsouth.edu">
                Computer Science & Engineering
              </a>
            </div>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">2019</span>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">Bangladesh Air Force Shaheen College Dhaka</h3>
            <div className="subheading mb-3">Higher Secondary School</div>
            <div>
              <a href="">Science Division</a>
            </div>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">2013</span>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">Uttara High School & College</h3>
            <div className="subheading mb-3">Secondary School</div>
            <div>
              <a href="">Science Division</a>
            </div>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">2011</span>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default Education;
