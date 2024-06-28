import React from "react";
import "./styles.css";
import TemporaryDrawer from "./drawer";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <div className="navbar">
      <p className="logo">Portfolio.</p>
      <div className="links">
        <HashLink smooth to="#about">
          <p className="link">About</p>
        </HashLink>
        <HashLink smooth to="#skills">
          <p className="link">Skills</p>
        </HashLink>
        <HashLink  smooth to="#experience">
          <p className="link">Experience</p>
        </HashLink>
        <HashLink smooth to="#projects">
          <p className="link">Projects</p>
        </HashLink>
        <HashLink smooth to="#education">
          <p className="link">Education</p>
        </HashLink>
        <HashLink smooth to="#contact">
          <p className="link">Contact Us</p>
        </HashLink>
      </div>
      <div className="mobile-drawer">
        <TemporaryDrawer />
      </div>
    </div>
  );
};

export default Navbar;
