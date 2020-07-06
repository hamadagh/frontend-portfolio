import React from "react";
import Circle from "./images/circle.png";
import Linkedin from "./images/linkedin.png";
import Github from "./images/github.png";
import Facebook from "./images/facebook.png";
import Instagram from "./images/instagram.png";
import "./style.css";

function Home() {
  return (
    <div className="home-page">
      <div className="first-section">
        <div className="my-name">
          <span className="hamada">HAMADA</span>
          <span className="ghanem">GHANEM</span>
        </div>
        <div className="full-stack-section">
          <span className="full-stack">Full-stack developer</span>
          <br></br>
          <span className="from">
            From <span className="berlin">Berlin</span>
          </span>
        </div>
      </div>
      <div className="second-section">
        <div className="circle-image">
          <img src={Circle} alt="circle" className="circle" />
        </div>
      </div>
      <div className="third-section">
        <div className="choose-color"></div>
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/ahmad-ghanem-822490182"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Linkedin} alt="linkedin" className="icon" />
          </a>
          <a
            href="https://www.github.com/hamadagh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Github} alt="github" className="icon" />
          </a>
          <a
            href="https://www.facebook.com/hamada.ghanem.35"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Facebook} alt="facebook" className="icon" />
          </a>
          <a
            href="https://www.instagram.com/hamada_ghanem"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Instagram} alt="instagram" className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
