import React from "react";

const experienceItems = [
  {
    title: "Jr. Executive - Marketplace",
    company: "Daraz",
    companyUrl: "https://daraz.com.bd",
    parentCompany: "Alibaba Group",
    parentCompanyUrl: "https://www.alibaba.com",
    tasks: [
      "Business & Marketplace Analysis",
      "Brand & Partner Acquisition",
      "Partner Development Project",
    ],
    date: "January 2020 - January 2022",
  },
  {
    title: "Associate - Home Kitchen & Street Food",
    company: "HungryNaki",
    companyUrl: "https://hungrynaki.com",
    parentCompany: "Alibaba Group",
    parentCompanyUrl: "https://www.alibaba.com",
    tasks: [
      "Business & Marketplace Analysis",
      "Brand & Partner Acquisition",
      "Partner Development Project",
    ],
    date: "July 2021 - January 2022",
  },
  {
    title: "IT Executive - Quality Control",
    company: "NZ Fabrics",
    companyUrl: "https://nztexgroup.com",
    parentCompany: "NZ TEXTILE GROUP",
    parentCompanyUrl: "https://www.linkedin.com/company/nztexgroup/",
    tasks: [
      "Info & Tech Support to the Quality Control Team",
      "Associating with the Research & Development Team",
      "Presentation & Reporting to the Authorities & Buyers",
    ],
    date: "April 2023 - May 2023",
  },
  {
    title: "Associate - Online Sales & Customer Supports",
    company: "Thriving Skill",
    companyUrl: "https://thrivingskill.com",
    tasks: [
      "Business & Marketplace Analysis",
      "Sales Growth Strategies",
      "Customer Relationship Management",
    ],
    date: "June 2023 - June 2024",
  },
  {
    title: "Co-Founder",
    company: "Gear Master",
    companyUrl: "https://www.facebook.com/profile.php?id=61558077623189",
    tasks: ["Bike Accessories Retail Shop"],
    date: "April 2024 - Present",
  },
];

const Experience: React.FC = () => {
  return (
    <section
      className="resume-section p-3 p-lg-5 d-flex align-items-center section-spacing"
      id="experience"
    >
      <div className="container w-full p-5 rounded-lg shadow-lg">
        <h2 className="mb-5 section-spacing">Experience</h2>
        {experienceItems.map((item, index) => (
          <div
            key={index}
            className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
          >
            <div className="resume-content">
              <h3 className="mb-0">{item.title}</h3>
              <div className="subheading mb-3">
                <a href={item.companyUrl}>{item.company}</a>
                {item.parentCompany && (
                  <>
                    {" - "}
                    <a href={item.parentCompanyUrl}>{item.parentCompany}</a>
                  </>
                )}
              </div>
              <p>
                Key Tasks:
                <ul>
                  {item.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
