import React from "react";
import Back from "./images/back.png";
import { Link } from "react-router-dom";
import "./style.css";

function About() {
  return (
    <div className="about-page">
      <div className="back-icon">
        <Link to="/">
          <img src={Back} alt="back" className="back-icon" />
        </Link>
      </div>
      <div className="about-me">
        <span className="about-intro">
          I'm a Full-stack developer based in{" "}
          <span className="about-berlin">Berlin</span>
        </span>
        <br></br>
        <div className="about-body-text">
          <span className="about-text">
            with a strong knowledge in building websites and <br></br>web
            application using <span className="skill">Html</span>,{" "}
            <span className="skill">CSS</span>,{" "}
            <span className="skill">JavaScript</span>,{" "}
            <span className="skill">React</span>, <br></br>
            <span className="skill">Redux</span>,{" "}
            <span className="skill">Bootstrap</span>,{" "}
            <span className="skill">Node Js</span>,{" "}
            <span className="skill">Express</span>,{" "}
            <span className="skill">MongoDB</span>, <br></br>
            <span className="skill">SQL</span>,{" "}
            <span className="skill">WordPress</span>,{" "}
            <span className="skill">Photoshop</span>,{" "}
            <span className="skill">Illustrator</span> ...{" "}
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;
