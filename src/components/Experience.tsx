// src/components/Experience.tsx
import React from "react";

const Experience: React.FC = () => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center"
      id="experience"
    >
      <div className="w-100">
        <h2 className="mb-5">Experience</h2>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">Jr. Executive - Marketplace</h3>
            <div className="subheading mb-3">
              <a href="https://daraz.com.bd">Daraz</a> -{" "}
              <a href="https://www.alibaba.com">Alibaba Group</a>
            </div>
            <p>
              Key Tasks:
              <ul>
                <li>Business & Marketplace Analysis</li>
                <li>Brand & Partner Acquisition</li>
                <li>Partner Development Project</li>
              </ul>
            </p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">January 2020 - January 2022</span>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">Associate - Home Kitchen & Street Food</h3>
            <div className="subheading mb-3">
              <a href="https://hungrynaki.com">HungryNaki</a> -{" "}
              <a href="https://www.alibaba.com">Alibaba Group</a>
            </div>
            <p>
              Key Tasks:
              <ul>
                <li>Business & Marketplace Analysis</li>
                <li>Brand & Partner Acquisition</li>
                <li>Partner Development Project</li>
              </ul>
            </p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">July 2021 - January 2022</span>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">IT Executive - Quality Control</h3>
            <div className="subheading mb-3">
              <a href="https://nztexgroup.com">NZ Fabrics</a> -{" "}
              <a href="https://www.linkedin.com/company/nztexgroup/">
                NZ TEXTILE GROUP
              </a>
            </div>
            <p>
              Key Tasks:
              <ul>
                <li>Info & Tech Support to the Quality Control Team</li>
                <li>Associating with the Research & Development Team</li>
                <li>Presentation & Reporting to the Authorities & Buyers</li>
              </ul>
            </p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">April 2023 - May 2023</span>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">
              Associate - Online Sales & Customer Supports
            </h3>
            <div className="subheading mb-3">
              <a href="https://thrivingskill.com">Thriving Skill</a>
            </div>
            <p>
              Key Tasks:
              <ul>
                <li>Business & Marketplace Analysis</li>
                <li>Sales Growth Strategies</li>
                <li>Customer Relationship Management</li>
              </ul>
            </p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">June 2023 - June 2024</span>
          </div>
        </div>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-0">Co-Founder</h3>
            <div className="subheading mb-3">
              <a href="https://www.facebook.com/profile.php?id=61558077623189">
                Gear Master
              </a>
            </div>
            <p>Bike Accessories Retail Shop</p>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">April 2024 - Present</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
