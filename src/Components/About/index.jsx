import React from "react";
import profile from "../../assets/user.png";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from "@mui/icons-material/Launch";
import "./styles.css";
import { Link } from "react-router-dom";

const About = () => {
  const [text] = useTypewriter({
    words: [
      "Full Stack Developer",
      "MERN Stack Developer",
      "Frontend Developer",
    ],
    loops: 0,
  });

  return (
    <div id="about" className="about">
      <div className="left">
        <div className="bio">
          Hi, I am 👋
          <br />
          Debasis Nayak
        </div>
        <div className="passion">
          I am a<span className="typewriter"> {text}</span>
          <span className="typewriter">
            <Cursor />
          </span>
        </div>
        <div className="description">
          I am a motivated and versatile individual, always eager to take on new
          challenges. With a passion for learning, Demonstrated expertise in
          HTML, CSS, JavaScript, React, Node.js, and MongoDB. I am dedicated to
          delivering high-quality results. With a positive attitude and a growth
          mindset ✨
        </div>
        <div className="socials">
          <Link
            to="https://www.facebook.com/share/sz7bTXUwxxrbXzLX/?mibextid=qi2Omg"
            target="_blank"
            className="social-icon"
          >
            <FacebookRoundedIcon style={{ fontSize: "1.8rem" }} />
          </Link>
          <Link
            to="https://www.instagram.com/debasisnayak_12?igsh=MTJnN2VsZmJnYmZuOA=="
            target="_blank"
            className="social-icon"
          >
            <InstagramIcon style={{ fontSize: "1.8rem" }} />
          </Link>
          <Link
            to="https://www.linkedin.com/in/debasisnayak2807/"
            target="_blank"
            className="social-icon"
          >
            <LinkedInIcon style={{ fontSize: "1.8rem" }} />
          </Link>
          <Link
            to="https://github.com/debasisnayak12"
            target="_blank"
            className="social-icon"
          >
            <GitHubIcon style={{ fontSize: "1.8rem" }} />
          </Link>
        </div>
        <div className="resume-btn">
        <Link
          to="https://drive.google.com/file/d/1Y8YlOa2UzxfBv-6_trjj0aeqKtB08Wuv/view?usp=sharing"
          target="_blank"
        >
          <button className="btn-grad">
            Resume
            <LaunchIcon/>
          </button>
        </Link>
        </div>
      </div>
      <div className="right">
        <img src={profile} width="400px" alt="profile-pic" />
      </div>
    </div>
  );
};

export default About;
