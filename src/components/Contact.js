import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Back from "./images/back.png";
import { Link } from "react-router-dom";
import "./style.css";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

function Contact() {
  let history = useHistory();
  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormInfo({ [e.target.name]: e.target.value });
    console.log(formInfo);
  };
  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", formInfo }),
    })
      .then(() => console.log("sent !"))
      .catch((error) => alert(error));
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
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="contact-name"
              value={formInfo.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              placeholder="Email"
              name="email"
              className="contact-email"
              value={formInfo.email}
              onChange={handleChange}
              required
            />
            <textarea
              type="text"
              placeholder="Message"
              name="message"
              className="contact-message"
              value={formInfo.message}
              onChange={handleChange}
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
