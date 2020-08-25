import React from "react";
import { useHistory } from "react-router-dom";
import Back from "./images/back.png";
import { Link } from "react-router-dom";
import "./style.css";

function Contact() {
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/done");
  };
  return (
    <div className="contact-page">
      <div className="contact-left-part">
        <div className="back-icon">
          <Link to="/">
            <img src={Back} alt="back" className="back-icon" />
          </Link>
        </div>
        <div className="form-container">
          <form
            className="contact-form"
            name="contact"
            method="post"
            data-netlify="true"
            onSubmit={handleSubmit}
            action="/done"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="contact-name"
              required
            />
            <input
              type="text"
              placeholder="Email"
              name="email"
              className="contact-email"
              required
            />
            <textarea
              type="text"
              placeholder="Message"
              name="message"
              className="contact-message"
              required
            />
            <button type="submit" className="contact-form-button">
              Send
            </button>
          </form>
        </div>
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
