import React from "react";
import Back from "./images/back.png";
import { Link } from "react-router-dom";
import "./style.css";

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-left-part">
        <div className="back-icon">
          <Link to="/">
            <img src={Back} alt="back" className="back-icon" />
          </Link>
        </div>
        <form
          className="contact-form"
          name="contact"
          method="post"
          data-netlify="true"
          onSubmit="submit"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input
            type="text"
            placeholder="name"
            name="name"
            className="contact-name"
          />
          <input
            type="text"
            placeholder="email"
            name="email"
            className="contact-email"
          />
          <input
            type="text"
            placeholder="message"
            name="message"
            className="contact-message"
          />
          <button type="submit">Send</button>
        </form>
      </div>
      <div className="contact-right-part">
        <div className="contact-shape">
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
