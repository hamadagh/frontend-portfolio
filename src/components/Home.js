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
        <span>Logo</span>
        <div>
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
        <div className="my-name">
          <span className="hamada">HAMADA</span>
          <span className="ghanem">GHANEM</span>
        </div>
        <div className="icons">
          <img src={Linkedin} alt="linkedin" className="icon" />
          <img src={Github} alt="github" className="icon" />
          <img src={Facebook} alt="facebook" className="icon" />
          <img src={Instagram} alt="instagram" className="icon" />
        </div>
      </div>
    </div>
  );
}

export default Home;
