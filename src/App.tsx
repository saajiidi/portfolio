// src/App.tsx
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
    <div className="App">
      <Header />
      <body>
        <main>
          <About />
          <Experience />
          <Education />
          <Skills />
          <Interests />
          <Awards />
          <Projects />
        </main>
      </body>
    </div>
  );
};

export default App;
