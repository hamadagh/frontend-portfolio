import React from "react";
import Circle from "./images/circle.png";
import "./style.css";

function Home() {
  return (
    <div className="home-page">
      <div className="first-section">
        <span>Logo</span>
        <div>
          <h3>Full-stack developer</h3>
          <h5>
            From <span>Berlin</span>
          </h5>
        </div>
      </div>
      <div className="second-section">
        <div className="circle-image">
          <img src={Circle} alt="circle" className="circle" />
        </div>
      </div>
      <div className="third-section">
        <span>Logo</span>
        <div>
          <h3>Full-stack developer</h3>
          <h5>
            From <span>Berlin</span>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Home;
