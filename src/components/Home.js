import React, { useState, useEffect } from "react";
import Circle from "./images/circle.png";
import Linkedin from "./images/linkedin.png";
import Github from "./images/github.png";
import Facebook from "./images/facebook.png";
import Instagram from "./images/instagram.png";
import "./style.css";

function Home() {
  const [checked, setChecked] = useState({ checked: "red" });

  const onValueChange = (e) => {
    setChecked({ checked: e.target.value });
    if (checked.checked == "red") {
      document.documentElement.style.setProperty("--color", "#ff0000");
    } else if (checked.checked == "green") {
      document.documentElement.style.setProperty("--color", "green");
    } else if (checked.checked == "pink") {
      document.documentElement.style.setProperty("--color", "pink");
    }
  };

  const onColorChange = () => {};
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
        <form className="radio-buttons">
          <div className="radio-button red-radio-button">
            <input
              type="radio"
              value="red"
              checked={checked.checked === "red"}
              onChange={onValueChange}
              id="red"
            />
            <span className="red-checkmark checkmark"></span>
          </div>
          <div className="radio-button green-radio-button">
            <input
              type="radio"
              value="green"
              checked={checked.checked === "green"}
              onChange={onValueChange}
              id="green"
            />
            <span className="green-checkmark checkmark"></span>
          </div>
          <div className="radio-button pink-radio-button">
            <input
              type="radio"
              value="pink"
              checked={checked.checked === "pink"}
              onChange={onValueChange}
              id="pink"
            />
            <span className="pink-checkmark checkmark"></span>
          </div>
        </form>
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
