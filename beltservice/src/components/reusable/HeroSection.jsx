import React from "react";
import "./herosection.css";
import { Link } from "react-router-dom";

function HeroSection({ title, description, buttonText, img1, img2,link }) {
  return (
    <section className="heroSection">
      <div className="wrapper HeroWrapper flexrow">
        <div className="HeroContent">
          <h1>{title}</h1>
          <p>{description}</p>
          <Link to={link}>
          <button className="buttonPrimary">{buttonText}</button>
          </Link>
        </div>
        <div className="HeroImg flexrow">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
