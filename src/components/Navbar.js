import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-bar">
      <ul>
        <li className="nav-link">
          <Link to="/about">ABOUT</Link>
        </li>
        <li className="nav-link">
          <Link to="/projects">PROJECTS</Link>
        </li>
        <li className="nav-link">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
