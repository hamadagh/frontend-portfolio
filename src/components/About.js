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
            application using<span>Html</span>, <span>CSS</span>,{" "}
            <span>JavaScript</span>, <span>React</span>, <br></br>
            <span>Redux</span>, <span>Bootstrap</span>, <span>Node Js</span>,{" "}
            <span>Express</span>, <span>MongoDB</span>, <br></br>
            <span>SQL</span>, <span>WordPress</span>, <span>Photoshop</span>,{" "}
            <span>Illustrator</span> ...{" "}
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;
