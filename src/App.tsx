import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Interests from "./components/Interests";
import Awards from "./components/Awards";
import Projects from "./components/Projects";

const App: React.FC = () => {
  return (
    <div className="App flex">
      <Header />
      <div className="main-content flex-1 lg:ml-64 p-4 lg:p-8">
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
