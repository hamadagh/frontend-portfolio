import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Linkedin from "./images/linkedin.png";
import Github from "./images/github.png";
import Facebook from "./images/facebook.png";
import Instagram from "./images/instagram.png";
import "./style.css";
import "./responsive.css";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 8 + 735}px,${y / 8 - 170}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 6 + 70}px,${y / 6 - 513}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 6 + 340}px,${y / 6 - 132}px,0)`;

function Home() {
  const [color, setColor] = useState({ color: "red" });
  const [className, setClassName] = useState({
    carre: "red-carre",
    triangle: "red-triangle",
    circle: "red-circle",
    carre2: "red-carre-2",
    triangle2: "red-triangle-2",
    circle2: "red-circle-2",
  });
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  const changeColor = (e) => {
    switch (color.color) {
      case "red":
        setColor({ color: "green" });
        break;
      case "green":
        setColor({ color: "pink" });
        break;
      case "pink":
        setColor({ color: "red" });
        break;
      default:
        setColor({ color: "red" });
    }
  };
  useEffect(() => {
    if (color.color === "green") {
      setClassName({
        carre: "green-carre",
        triangle: "green-triangle",
        circle: "green-circle",
        carre2: "green-carre-2",
        triangle2: "green-triangle-2",
        circle2: "green-circle-2",
      });
      document.documentElement.style.setProperty("--color", "#32ff00");
      document.documentElement.style.setProperty(
        "--textShadow",
        "0 0 1px #32ff00, 0 0 5px #33ff0090, 0 0 7px #33ff003e"
      );
      document.documentElement.style.setProperty(
        "--boxShadow",
        "0 0 1px #32ff00, 0 0 5px #33ff0090, 0 0 7px #33ff003e"
      );
    } else if (color.color === "pink") {
      setClassName({
        carre: "pink-carre",
        triangle: "pink-triangle",
        circle: "pink-circle",
        carre2: "pink-carre-2",
        triangle2: "pink-triangle-2",
        circle2: "pink-circle-2",
      });
      document.documentElement.style.setProperty("--color", "#ff00f9");
      document.documentElement.style.setProperty(
        "--textShadow",
        "0 0 1px #ff00f9, 0 0 5px #ff00fb85, 0 0 7px #ff00fb3c"
      );
      document.documentElement.style.setProperty(
        "--boxShadow",
        "0 0 1px #ff00f9, 0 0 5px #ff00fb85, 0 0 7px #ff00fb3c"
      );
    } else if (color.color === "red") {
      setClassName({
        carre: "red-carre",
        triangle: "red-triangle",
        circle: "red-circle",
        carre2: "red-carre-2",
        triangle2: "red-triangle-2",
        circle2: "red-circle-2",
      });
      document.documentElement.style.setProperty("--color", "#ff0000");
      document.documentElement.style.setProperty(
        "--textShadow",
        "0 0 1px #ff0000, 0 0 5px #ff000082, 0 0 7px #ff1c1c6d"
      );
      document.documentElement.style.setProperty(
        "--boxShadow",
        "0 0 1px #ff0000, 0 0 5px #ff000082, 0 0 7px #ff1c1c6d"
      );
    }
  }, [color.color]);

  return (
    <div className="home-page">
      <div className="first-section">
        <div className="mobile-section">
          <div className={className.carre2}></div>
          <div className={className.triangle2}></div>
          <div className={className.circle2}></div>
        </div>
        <div
          className="my-name"
          onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
        >
          <animated.div
            className="hello-you"
            style={{ transform: props.xy.interpolate(trans1) }}
            onClick={changeColor}
          >
            <span className="greeting">Hello you !</span>
          </animated.div>

          <animated.div
            className={className.carre}
            style={{ transform: props.xy.interpolate(trans2) }}
          />
          <animated.div
            className={className.triangle}
            style={{ transform: props.xy.interpolate(trans4) }}
          />
          <animated.div
            className={className.circle}
            style={{ transform: props.xy.interpolate(trans3) }}
          />
        </div>
        <div className="full-stack-section">
          <span className="im">
            I'm <span className="hamada">Hamada,</span>
          </span>
          <span className="full-stack">Full-stack developer</span>
          <br></br>
          <span className="in">
            In <span className="berlin">Berlin</span>
          </span>
        </div>
      </div>
      <div className="third-section">
        <div></div>
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/hamada-ghanem-822490182"
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
