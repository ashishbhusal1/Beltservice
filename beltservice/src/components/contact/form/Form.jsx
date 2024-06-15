import React from "react";
import "./form.css";

function Form() {
  return (
    <section className="Form flexrow">
      <div className="wrapper FormWrapper">
        <div className="FormLeft"></div>
        <div className="FormRight flexcolumn">
          <h2>Send us report</h2>
          <div className="inputs flexcolumn">
            <div className="first flexrow">
              <input
                type="text"
                placeholder="Your name"
                className="NameInput"
              />
              <input
                type="email"
                placeholder="Your e-mail"
                className="EmailInput"
              />
            </div>
            <input type="text" placeholder="Subject" className="SubjectInput" />
            <textarea placeholder="Message" className="MessageInput"></textarea>
          </div>

          <button className="buttonPrimary FormButton">Send A Message</button>
        </div>
      </div>
    </section>
  );
}

export default Form;
