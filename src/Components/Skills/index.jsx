import React from "react";
import reactIcon from "../../assets/tech/Frontend/react-icon.png";
import htmlIcon from "../../assets/tech/Frontend/html-icon.png";
import cssIcon from "../../assets/tech/Frontend/css-icon.png";
import reduxIcon from "../../assets/tech/Frontend/redux-icon.png";
import javascriptIcon from "../../assets/tech/Frontend/javascript-icon.png";
import tailwindIcon from "../../assets/tech/Frontend/tailwind-icon.png";
import bootstrapIcon from "../../assets/tech/Frontend/bootstrap-icon.png";
import muiIcon from "../../assets/tech/Frontend/mui-icon.png";
import awsIcon from "../../assets/tech/Backend/aws.png";
import expressIcon from "../../assets/tech/Backend/expressjs-icon.png";
import firebaseIcon from "../../assets/tech/Backend/firebase-icon.png";
import mongodbIcon from "../../assets/tech/Backend/mongodb.png";
import mysqlIcon from "../../assets/tech/Backend/mysql.png";
import nodejsIcon from "../../assets/tech/Backend/nodejs-icon.png";
import gitIcon from "../../assets/tech/Others/git-icon.png";
import photoshopIcon from "../../assets/tech/Others/photoshop-icon.png";
import postmanIcon from "../../assets/tech/Others/postman-icon.svg";
import vscodeIcon from "../../assets/tech/Others/vsCode-icon.png";

import "./styles.css";

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <h1 className="head">Skills</h1>
      <p className="desc">
        Here are some of my skills on which I have been working on for the past
        2 years.
      </p>
      <div className="cards-section">
        <div className="cards">
          <h2 className="cards-head">Frontend</h2>
          <div className="cards-tech">
            <div className="cards-tech-bio">
                <img src={reactIcon} className="cards-tech-img"/>
                React JS
            </div>
            <div className="cards-tech-bio">
                <img src={htmlIcon} className="cards-tech-img"/>
                HTML
            </div>
            <div className="cards-tech-bio">
                <img src={cssIcon} className="cards-tech-img"/>
                CSS
            </div>
            <div className="cards-tech-bio">
                <img src={reduxIcon} className="cards-tech-img"/>
                Redux Toolkit
            </div>
            <div className="cards-tech-bio">
                <img src={javascriptIcon} className="cards-tech-img"/>
                JavaScript
            </div>
            <div className="cards-tech-bio">
                <img src={tailwindIcon} className="cards-tech-img"/>
                Tailwind CSS
            </div>
            <div className="cards-tech-bio">
                <img src={bootstrapIcon} className="cards-tech-img"/>
                Bootstrap
            </div>
            <div className="cards-tech-bio">
                <img src={muiIcon} className="cards-tech-img"/>
                Material UI
            </div>
          </div>
        </div>
        <div className="cards">
          <h2 className="cards-head">Backend</h2>
          <div className="cards-tech">
            <div className="cards-tech-bio">
                <img src={nodejsIcon} className="cards-tech-img"/>
                Node Js
            </div>
            <div className="cards-tech-bio">
                <img src={expressIcon} className="cards-tech-img"/>
                Express Js
            </div>
            <div className="cards-tech-bio">
                <img src={mongodbIcon} className="cards-tech-img"/>
                MongoDB
            </div>
            <div className="cards-tech-bio">
                <img src={mysqlIcon} className="cards-tech-img"/>
                MySQL
            </div>
            <div className="cards-tech-bio">
                <img src={firebaseIcon} className="cards-tech-img"/>
                Firebase
            </div>
            <div className="cards-tech-bio">
                <img src={awsIcon} className="cards-tech-img"/>
                AWS
            </div>
          </div>
        </div>
        <div className="cards">
          <h2 className="cards-head">Others</h2>
          <div className="cards-tech">
          <div className="cards-tech-bio">
                <img src={vscodeIcon} className="cards-tech-img"/>
                VS Code
            </div>
            <div className="cards-tech-bio">
                <img src={gitIcon} className="cards-tech-img"/>
               Git
            </div>
            <div className="cards-tech-bio">
                <img src={postmanIcon} className="cards-tech-img"/>
               Postman
            </div>
            <div className="cards-tech-bio">
                <img src={photoshopIcon} className="cards-tech-img"/>
               Adobe Photoshop
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
