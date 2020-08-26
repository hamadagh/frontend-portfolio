import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-bar">
      <div id="nav-icon">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className="nav">
        <li className="list-item">
          <Link to="/about" className="nav-link">
            ABOUT
          </Link>
        </li>
        <li className="list-item">
          <Link to="/projects" className="nav-link">
            PROJECTS
          </Link>
        </li>
        <li className="list-item">
          <Link to="/contact" className="nav-link">
            CONTACT
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
