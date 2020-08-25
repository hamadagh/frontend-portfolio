import React from "react";
import "./style.css";

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-left-part">
        <form
          className="contact-form"
          name="contact"
          method="post"
          data-netlify="true"
          onSubmit="submit"
        >
          <input type="hidden" name="from-name" value="contact" />
          <input type="text" placeholder="name" name="name" />
          <input type="text" placeholder="email" name="email" />
          <input type="text" placeholder="message" name="message" />
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
