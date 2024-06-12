import React from "react";
import { HeroContent } from "../../storage/HomeDb.js";
import "./hero.css";
import { HeroCard } from "../../storage/HomeDb.js";

function Hero() {
  return (
    <section className="hero flexrow">
      <div className="heroContent wrapper flexcolumn">
        <div className="title flexrow">
          <div className="title1 flexrow">
            <img src={HeroContent[0].img} alt="" />
            <p>{HeroContent[0].title[0]}</p>
          </div>
          <div className="title1 flexrow">
            <img src={HeroContent[0].img} alt="" />
            <p>{HeroContent[0].title[1]}</p>
          </div>
        </div>
        <div className="content">
          <h1>{HeroContent[0].description}</h1>
          <p>{HeroContent[0].miniDescription}</p>
        </div>
        <div className="buttons flexrow">
          <button className="buttonPrimary">Report a fault</button>
          <button className="buttonSecondary">Our services</button>
        </div>
      </div>
      <div className="heroImg">
        <div>
          <ul className="flexcolumn">
            {HeroCard.map((item) => {
              return (
                <li key={item.id} className={item.class} >
                  <img src={item.img} alt="" />
                  <div className="cardContent">
                    <h4>{item.name}</h4>
                    <p>{item.message}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero;
