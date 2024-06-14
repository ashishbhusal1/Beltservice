import React from "react";
import "./services.css";
import AboutCard from "./AboutCard";
import { AboutCardContent } from "../../storage/HomeDb";
import { AboutCardContent1 } from "../../storage/HomeDb";

function Services() {
  return (
    <section className="aboutServices flexcolumn">
      <AboutCard
        img={AboutCardContent.img}
        title={AboutCardContent.title}
        description={AboutCardContent.description}
        design={AboutCardContent.class}
      />
      <AboutCard
        img={AboutCardContent1.img}
        title={AboutCardContent1.title}
        description={AboutCardContent1.description}
        design={AboutCardContent1.class}
      />
    </section>
  );
}

export default Services;
