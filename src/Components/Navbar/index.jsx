import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import TemporaryDrawer from "./drawer";

const Navbar = () => {
  return (
    <div className="navbar">
      <p className="logo">Portfolio.</p>
      <div className="links">
        <Link to="/">
          <p className="link">About</p>
        </Link>
        <Link to="/skills">
          <p className="link">Skills</p>
        </Link>
        <Link to="/experience">
          <p className="link">Experience</p>
        </Link>
        <Link to="/projects">
          <p className="link">Projects</p>
        </Link>
        <Link to="/contact">
          <p className="link">Contact Us</p>
        </Link>
      </div>
      <div className="mobile-drawer">
        <TemporaryDrawer />
      </div>
    </div>
  );
};

export default Navbar;
