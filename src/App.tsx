import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Interests from "./components/Interests";
import Awards from "./components/Awards";
import Projects from "./components/Projects";
import "./assets/css/custom.css"; // Import custom CSS

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <About />
        <Experience />
        <Education />
        <Skills />
        <Interests />
        <Awards />
        <Projects />
      </div>
    </div>
  );
};

export default App;
