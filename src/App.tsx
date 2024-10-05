import React from "react";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import MySkills from "./components/myskills.tsx";

const App: React.FC = () => {
  return (
    <>
      <h1 className="header">Gorgol</h1>
      <nav>
        <a href="#home"> Home </a>
        <a href="#about"> About </a>
        <a href="#MySkills"> Skills </a>
        <a href="#projects"> Projects </a>
        <a href="#contact"> Contact </a>
      </nav>

      <div className="page-sections">
        <Home />
        <About />
        <MySkills />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default App;
