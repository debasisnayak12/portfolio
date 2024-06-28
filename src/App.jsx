import React from "react";
import "../src/App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Education from "./Components/Education";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Backtotop from "./Components/Backtotop";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="container">
          <About />
          <Skills />
          <Experience/>
          <Projects/>
          <Education/>
          <Contact/>
      </div>
      <Footer/>
      <Backtotop/>
      <ToastContainer/>
    </div>
  );
};

export default App;
