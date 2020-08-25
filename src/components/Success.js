import React from "react";
import Back from "./images/back.png";
import { Link } from "react-router-dom";
import "./style.css";

function Success() {
  return (
    <div className="success-page">
      <div className="back-icon">
        <Link to="/">
          <img src={Back} alt="back" className="back-icon" />
        </Link>
      </div>
      <div className="success-container">
        <span className="success-message-1">Thank You !</span>
        <span className="success-message-2 ">
          Your message was submitted successfully
        </span>
      </div>
    </div>
  );
}

export default Success;
