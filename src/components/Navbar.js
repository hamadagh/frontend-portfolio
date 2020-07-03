import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-bar">
      <ul>
        <li className="nav-link">
          <Link to="/about" className="nav-link">
            ABOUT
          </Link>
        </li>
        <li className="nav-link">
          <Link to="/projects" className="nav-link">
            PROJECTS
          </Link>
        </li>
        <li className="nav-link">
          <Link to="/contact" className="nav-link">
            CONTACT
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
