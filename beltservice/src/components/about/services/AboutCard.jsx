import React from "react";
import "./aboutcard.css";

function AboutCard({ img, title, description, design }) {
  return (
    <section className="servicesCard wrapper">
      <div className={design}>
        <div className="ServicesCardImg">
          <img src={img} alt="" />
        </div>
        <div className="ServicesCardContent flexcolumn">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
}

export default AboutCard;
