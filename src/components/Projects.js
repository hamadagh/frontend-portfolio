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
        <a
          href="https://github.com/hamadagh/Real-time-chat-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="project">Real Time Chat App</span>
        </a>
        <a
          href="https://githubresume.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="project">Resume Generator</span>
        </a>{" "}
        <a
          href="https://githubrepository.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="project">Gith Repo App</span>
        </a>{" "}
        <a
          href="https://expense-tracker-123.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="project">Expense Tracker</span>
        </a>{" "}
        <a
          href="https://sugarskull.de"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="project">Sugar Skull</span>
        </a>
      </div>
      <div className="all-projects">
        <a
          href="https://github.com/hamadagh"
          target="_blank"
          rel="noopener noreferrer"
          className="to-github-link"
        >
          <span className="to-github">All Projects</span>
        </a>
      </div>
    </div>
  );
}

export default Projects;
