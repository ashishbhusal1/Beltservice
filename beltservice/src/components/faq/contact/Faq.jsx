import React from "react";
import "./faq.css";

function Faq() {
  return (
    <section className="Faq flexrow">
      <div className="wrapper FaqWrapper">
        <div className="FaqLeft"></div>
        <div className="FaqRight flexcolumn">
          <h2>If you have any doubts, please send us a message</h2>
          <p>
            Ut ex turpis, faucibus sed feugiat ut, tempus nec nisi. Etiam
            vehicula est ut erat congue, et pulvinar sit lorem nibh aliquet.
          </p>

          <button className="buttonPrimary FaqButton">Contact</button>
        </div>
      </div>
    </section>
  );
}

export default Faq;
