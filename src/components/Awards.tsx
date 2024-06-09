import React from "react";

const Awards: React.FC = () => {
  return (
    <section
      className="resume-section py-3 lg:py-5 flex align-items-center section-spacing"
      id="awards"
    >
      <div className="container w-full p-5 rounded-lg shadow-lg bg-white">
        <h2 className="mb-5 section-spacing text-3xl font-bold">
          Awards & Certifications
        </h2>
        <ul className="fa-ul mb-3 list-disc list-inside">
          <li className="mb-3 flex items-start">
            <i className="fa-li fa fa-trophy text-yellow-500 mr-2"></i>
            <div>
              <p>
                <a
                  href="https://ict4sd.org/link/proceedings/ICT4SD-2020-VOL2.pdf"
                  className="text-blue-600 hover:underline"
                >
                  Data Mining Techniques to Categorize Single Paragraph-Formed
                  Self-Narrated Stories at ICT Analysis and Applications
                  Proceedings of ICT4SD 2020, Volume 2 Page 701-714 - Dec 14,
                  2020
                </a>
              </p>
              <div>
                <h4 className="font-semibold">Summary:</h4>
                <p>
                  Detecting sentiment in stories has become popular, often using
                  deep learning. When data is limited, machine learning is used.
                  Sentiment analysis is hard due to slang, ambiguity, and
                  sarcasm, which can confuse people and machines. This study is
                  part of ongoing research on categorizing paragraphs by
                  sentiment. The dataset includes narrated stories from various
                  sources.
                </p>
              </div>
            </div>
          </li>
          <li className="mb-3 flex items-start">
            <i className="fa-li fa fa-trophy text-yellow-500 mr-2"></i>
            <a
              href="https://drive.google.com/file/d/1cJxcJJur1n3MiXFETv5k30SDP0WP9wOm/view?usp=sharing"
              className="text-blue-600 hover:underline"
            >
              Certification Link1
            </a>
          </li>
          <li className="mb-3 flex items-start">
            <i className="fa-li fa fa-trophy text-yellow-500 mr-2"></i>
            <a
              href="https://drive.google.com/file/d/1O7O6jJRN58WGiyJu8hYrGhv-DtP89bEI/view?usp=sharing"
              className="text-blue-600 hover:underline"
            >
              Certification Link2
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Awards;
