import React from "react";
import Linkedin from "./images/linkedin.png";
import Github from "./images/github.png";
import Facebook from "./images/facebook.png";
import Instagram from "./images/instagram.png";
import "./style.css";

function About() {
  return (
    <div className="about-page">
      <div className="about-me">
        <span>
          I'm a Full-stack developer based in{" "}
          <span className="about-berlin">Berlin</span>
        </span>
      </div>
      <div className="about-icons">
        <img src={Linkedin} alt="linkedin" />
        <img src={Github} alt="Github" />
        <img src={Facebook} alt="Facebook" />
        <img src={Instagram} alt="Instagram" />
      </div>
    </div>
  );
}

export default About;
