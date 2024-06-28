import React from "react";
import "./styles.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <h1 className="footer-head">Debasis Nayak</h1>
      <div className="foot-link">
        <HashLink smooth to="#about" className="link-target">
          About
        </HashLink>
        <HashLink smooth to="#skills" className="link-target">
          Skills
        </HashLink>
        <HashLink smooth to="#experience" className="link-target">
          Experience
        </HashLink>
        <HashLink smooth to="#projects" className="link-target">
          Projects
        </HashLink>
        <HashLink smooth to="#education" className="link-target">
          Education
        </HashLink>
      </div>
      <div className="footer-logo">
        <Link to="https://www.facebook.com/share/sz7bTXUwxxrbXzLX/?mibextid=qi2Omg"
            target="_blank" className="footer-icon">
          <FacebookRoundedIcon style={{ fontSize: "1.8rem" }}/>
        </Link>
        <Link to="https://x.com/debasis_nayak12"
            target="_blank" className="footer-icon">
          <TwitterIcon style={{ fontSize: "1.8rem" }}/>
        </Link>
        <Link to="https://www.instagram.com/debasisnayak_12?igsh=MTJnN2VsZmJnYmZuOA=="
            target="_blank" className="footer-icon">
          <InstagramIcon  style={{ fontSize: "1.8rem" }}/>
        </Link>
        <Link to="https://www.linkedin.com/in/debasisnayak2807/"
            target="_blank" className="footer-icon">
          <LinkedInIcon style={{ fontSize: "1.8rem" }}/>
        </Link>
        <Link to="https://github.com/debasisnayak12"
            target="_blank" className="footer-icon">
          <GitHubIcon style={{ fontSize: "1.8rem" }}/>
        </Link>
      </div>
      <div className="copy">&copy; 2024 Debasis Nayak. All rights reserved.</div>
    </div>
  );
};

export default Footer;
