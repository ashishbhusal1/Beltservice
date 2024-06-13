import React from "react";
import "./faq.css";

function Faq() {
  return (
    <section className="faq flexrow">
      <div className="wrapper faqWrapper">
        <div className="faqLeft"></div>
        <div className="faqRight flexcolumn">
          <h2>FAQ's</h2>
          <p>Duis ultricies malesuada leo vel aliquet?</p>
          <div className="faqLine"></div>
          <p>Class aptent taciti sociosqu torquent?</p>
          <button className="buttonPrimary faqButton">FAQ's</button>
        </div>
      </div>
    </section>
  );
}

export default Faq;
