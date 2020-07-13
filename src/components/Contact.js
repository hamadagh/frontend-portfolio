import React from "react";
import "./style.css";

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-form">
        <form>
          <input type="text" value="name" />
          <input type="text" value="email" />
          <input type="text" value="message" />
        </form>
      </div>
      <div className="contact-design">
        <div className="contact-design-shape">
          <h1>shape</h1>
        </div>
        <div className="contact-icons">
          <h2>Icons</h2>
        </div>
      </div>
    </div>
  );
}

export default Contact;
