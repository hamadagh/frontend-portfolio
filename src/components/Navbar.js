import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-bar">
      <ul className="nav">
        <li className="list-item">
          <Link to="/about" className="nav-link nav-link-about">
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
