import React from "react";
import { aboutHero1, aboutHero2 } from "../../scripts/Images";
import "./herosection.css";

function HeroSection({ title, description, buttonText, img1, img2 }) {
  return (
    <section className="heroSection">
      <div className="wrapper HeroWrapper flexrow">
        <div className="HeroContent">
          <h1>{title}</h1>
          <p>{description}</p>
          <button className="buttonPrimary">{buttonText}</button>
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
