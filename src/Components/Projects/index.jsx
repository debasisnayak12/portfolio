import React, { useState } from "react";
import crypto from "../../assets/Crypto.png";
import finance from "../../assets/Finance.png";
import "./styles.css";
import { Link } from "react-router-dom";
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const Projects = () => {
    const [currentProject, setCurrentProject] = useState(0);

    const projects = [
        {
          img: crypto,
          head: "Crypto Tracker",
          duration: "May 2024 - May 2024",
          skills: ["React Js", "Coingecko API", "Chart JS", "Framer Motion", "Material UI"],
          desc: "A real-time Cryptocurrency tracker app built using React Js and CoinGecko API. Integrated features such as portfolio performance monitoring, price comparison, and time-based trend analysis to help users make informed investment decisions.",
          codeLink: "https://github.com/debasisnayak12/Crypto_Tracker",
          liveLink: "https://crypto-tracker-ashen-one.vercel.app/",
        },
        {
          img: finance,
          head: "Personal Finance Tracker",
          duration: "June 2024 - June 2024",
          skills: ["React Js", "Firebase OAuth", "Ant Design"],
          desc: "A robust personal finance tracker using React, Firebase, and Ant Design with secure authentication and dynamic financial graphs.",
          codeLink: "https://github.com/debasisnayak12/Personal_Finance_Tracker",
          liveLink: "https://personal-finance-tracker-sable.vercel.app/",
        },
      ];

      const handlePrev = () => {
        setCurrentProject((prev) => (prev-1+projects.length) % projects.length);
      };

      const handleNext = () => {
        setCurrentProject((prev) => (prev+1) % projects.length);
      };


  return (
    <div id="projects" className="projects">
      <h1 className="head">Projects</h1>
      <div className="project-section">
        <div className="arrow left" onClick={handlePrev}><ArrowBackIosIcon/></div>
        <div className="project-card">
          <div className="project-img">
            <img src={projects[currentProject].img} alt="crypto" />
          </div>
          <div className="project-bio">
            <div className="project-head">{projects[currentProject].head}</div>
            <div className="project-duration">{projects[currentProject].duration}</div>
            <div className="project-skills">
              {projects[currentProject].skills.map((skill, index) => (
                <div key={index}>{skill}</div>
              ))}
            </div>
            <div className="project-desc">
             {projects[currentProject].desc}
            </div>
            <div className="project-btn">
              <Link
                to={projects[currentProject].codeLink}
                target="_blank"
                className="view-code"
              >
                <button type="button">View Code</button>
                <GitHubIcon/>
              </Link>
              <Link
                to={projects[currentProject].liveLink}
                target="_blank"
                className="view-live"
              >
                <button type="button">View Live App</button>
                <LaunchIcon/>
              </Link>
            </div>
          </div>
        </div>
        <div className="arrow right" onClick={handleNext}><ArrowForwardIosIcon/></div>
      </div>
    </div>
  );
};

export default Projects;
