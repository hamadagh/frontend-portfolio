import React from "react";
import "./style.css";

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-left-part">
        <form
          className="contact-form"
          name="contact v1"
          method="post"
          data-netlify="true"
          onSubmit="submit"
        >
          <input type="text" placeholder="name" />
          <input type="text" placeholder="email" />
          <input type="text" placeholder="message" />
          <button>Send</button>
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
