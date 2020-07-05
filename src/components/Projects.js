import React from "react";
import Back from "./images/back.png";
import { Link } from "react-router-dom";
import "./style.css";

function Projects() {
  return (
    <div className="projects-page">
      <div className="back-icon">
        <Link to="/">
          <img src={Back} alt="back" className="back-icon" />
        </Link>
      </div>
      <div className="projects">
        <span className="project">Real Time Chat App</span>
        <span className="project">Resume Generator</span>
        <span className="project">Gith Repo App</span>
        <span className="project">Expense Tracker</span>
        <span className="project">Sugar Skull</span>
      </div>
      <div className="all-projects">
        <span className="to-github">All Projects</span>
      </div>
    </div>
  );
}

export default Projects;
