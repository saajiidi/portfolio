import React from "react";
import {
  FaEnvelope,
  FaWhatsapp,
  FaLinkedinIn,
  FaGithub,
  FaKaggle,
  FaFacebookF,
} from "react-icons/fa";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/sajidislamchowdhury/",
    icon: FaLinkedinIn,
  },
  { href: "https://github.com/saajiidi", icon: FaGithub },
  { href: "https://www.kaggle.com/saajiidi", icon: FaKaggle },
  {
    href: "https://www.facebook.com/Islam.Sajid.Chowdhury/",
    icon: FaFacebookF,
  },
];

const About: React.FC = () => {
  return (
    <section className="p-3 p-lg-5 text-black" id="about">
      <div className="w-full p-5 rounded-lg shadow-lg">
        <div className="row align-items-center mb-5 text-center text-lg-left">
          <div className="col-lg-6 d-flex align-items-center justify-content-center justify-content-lg-start mb-3 mb-lg-0">
            <h1
              className="mb-0 text-7xl font-bold"
              style={{ fontSize: "7rem" }}
            >
              Sajid <span className="text-primary">Islam</span>
            </h1>
          </div>
          <div className="col-lg-6 text-center text-lg-right">
            <div className="mb-3 mb-lg-5 text-primary">
              <p className="d-flex justify-content-center justify-content-lg-end align-items-center mb-2">
                <a
                  href="mailto:sajid.islam.chowdhury@gmail.com"
                  className="text-black"
                >
                  sajid.islam.chowdhury@gmail.com
                </a>
                <FaEnvelope className="ml-1"/>
              </p>
              <p className="d-flex justify-content-center justify-content-lg-end align-items-center">
                <a href="tel:+880609784088" className="text-black">
                  +8801609784088
                </a>
                <FaWhatsapp className="ml-1"/>
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="social-icons d-flex justify-content-center mb-5">
              {socialLinks.map(({ href, icon: Icon }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  className="text-black text-3xl mr-3"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
        <p className="mb-12 text-center">
          Experienced in leveraging data-driven insights to optimize business
          processes and drive strategic decision-making. Eager to contribute
          analytical expertise and technical proficiency to a dynamic
          organization.
        </p>
      </div>
    </section>
  );
};

export default About;
