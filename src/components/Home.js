import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Circle from "./images/circle.png";
import Triangle from "./images/triangle.png";
import Carre from "./images/carre.png";
import Linkedin from "./images/linkedin.png";
import Github from "./images/github.png";
import Facebook from "./images/facebook.png";
import Instagram from "./images/instagram.png";
import "./style.css";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 8 + 635}px,${y / 8 - 270}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 6 - 490}px,${y / 6 - 213}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 6 + 20}px,${y / 6 - 65}px,0)`;

function Home() {
  const [checked, setChecked] = useState({ checked: "red" });
  const [shape, setShape] = useState(`${Circle}`);
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  const onValueChange = (e) => {
    setChecked({ checked: e.target.value });
  };
  useEffect(() => {
    if (checked.checked === "green") {
      setShape(`${Triangle}`);
      document.documentElement.style.setProperty("--color", "#32ff00");
    } else if (checked.checked === "pink") {
      setShape(`${Carre}`);
      document.documentElement.style.setProperty("--color", "#ff00f9");
    } else if (checked.checked === "red") {
      setShape(`${Circle}`);
      document.documentElement.style.setProperty("--color", "#ff0000");
    }
  }, [checked.checked]);

  return (
    <div className="home-page">
      <div className="first-section">
        <div
          className="my-name"
          onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
        >
          <animated.div
            className="hello-you"
            style={{ transform: props.xy.interpolate(trans1) }}
          >
            <span className="hamada">Hello you !</span>
          </animated.div>
          <div className="shapes">
            <animated.div
              className="carre"
              style={{ transform: props.xy.interpolate(trans2) }}
            />
            <animated.div
              className="triangle"
              style={{ transform: props.xy.interpolate(trans4) }}
            />
            <animated.div
              className="circle"
              style={{ transform: props.xy.interpolate(trans3) }}
            />
          </div>
        </div>
        <div className="full-stack-section">
          <span className="full-stack">Full-stack developer</span>
          <br></br>
          <span className="from">
            From <span className="berlin">Berlin</span>
          </span>
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
