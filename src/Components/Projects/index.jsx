import React from "react";
import crypto from "../../assets/Crypto.png";
import finance from "../../assets/Finance.png";
import "./styles.css";
import { Link } from "react-router-dom";
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';

const Projects = () => {
  return (
    <div className="projects">
      <h1 className="head">Projects</h1>
      <div className="project-section">
        <div className="project-card">
          <div className="project-img">
            <img src={crypto} alt="crypto" />
          </div>
          <div className="project-bio">
            <div className="project-head">Crypto Tracker</div>
            <div className="project-duration">May 2024 - May 2024</div>
            <div className="project-skills">
              {" "}
              <div>React Js</div>
              <div>Coingecko API</div>
              <div>Chart JS</div>
              <div>Framer Motion</div>
              <div>Material UI</div>
            </div>
            <div className="project-desc">
              A real-time Cryptocurrency tracker app built using React Js and
              CoinGecko API . Integrated features such as portfolio performance
              monitoring, price comparison, and time-based trend analysis to
              help users make informed investment decisions.
            </div>
            <div className="project-btn">
              <Link
                to="https://github.com/debasisnayak12/Crypto_Tracker"
                target="_blank"
                className="view-code"
              >
                <button type="button">View Code</button>
                <GitHubIcon/>
              </Link>
              <Link
                to="https://crypto-tracker-ashen-one.vercel.app/"
                target="_blank"
                className="view-live"
              >
                <button type="button">View Live App</button>
                <LaunchIcon/>
              </Link>
            </div>
          </div>
        </div>
        {/* ------------------ */}
        <div className="project-card">
          <div className="project-img">
            <img src={finance} alt="crypto" />
          </div>
          <div className="project-bio">
            <div className="project-head">Personal Finance Tracker</div>
            <div className="project-duration">June 2024 - June 2024</div>
            <div className="project-skills">
              {" "}
              <div>React Js</div>
              <div>Firebase OAuth</div>
              <div>Ant Design</div>
            </div>
            <div className="project-desc">
              A robust personal finance tracker using React, Firebase, and Ant
              Design with secure authentication and dynamic financial graphs..
            </div>
            <div className="project-btn">
            <Link
                to="https://github.com/debasisnayak12/Personal_Finance_Tracker"
                target="_blank"
                className="view-code"
              >
                <button type="button">View Code</button>
                <GitHubIcon/>
              </Link>
              <Link
                to="https://personal-finance-tracker-sable.vercel.app/"
                target="_blank"
                className="view-live"
              >
                <button type="button">View Live App</button>
                <LaunchIcon/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
