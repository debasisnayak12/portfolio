import React from "react";
import "../src/App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="container">
          <About />
          <Skills />
          <Experience/>
          <Projects/>
      </div>
    </div>
  );
};

export default App;
