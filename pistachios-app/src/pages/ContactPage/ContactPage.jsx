import React from "react";
import "./ContactPage.css";

function ContactPage() {
  return (
    <div className="contactMain">
      <div className="contactHeader">
        <h1 className="contactTitle">Contact Us</h1>
        <h3 className="contactSubtitle">We'd love to hear from you!</h3>
      </div>

      <div className="contactInfoContainer">
        <div className="contactItem">
          <h2 className="contactLabel">Email</h2>
          <p className="contactText">pistachios@gmail.com</p>
        </div>

        <div className="contactItem">
          <h2 className="contactLabel">Address</h2>
          <p className="contactText">
            1 Pistachio Lane<br />Albany, NY 12205
          </p>
        </div>

        <div className="contactItem">
          <h2 className="contactLabel">Instagram</h2>
          <p className="contactText">@PISTACHIOBAR</p>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
