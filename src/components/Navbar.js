import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [Navbar, setNavbar] = useState("close");

  const handleClick = () => {
    if (Navbar === "close") {
      setNavbar("open");
    } else {
      setNavbar("close");
    }
  };
  return (
    <div className="nav-bar" id="nav-bar">
      <div id="nav-icon" onClick={handleClick} className={Navbar}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav ${Navbar}`}>
        <li className={`list-item1 ${Navbar}`}>
          <Link to="/about" className="nav-link">
            ABOUT
          </Link>
        </li>
        <li className={`list-item2 ${Navbar}`}>
          <Link to="/projects" className="nav-link">
            PROJECTS
          </Link>
        </li>
        <li className={`list-item3 ${Navbar}`}>
          <Link to="/contact" className="nav-link">
            CONTACT
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
