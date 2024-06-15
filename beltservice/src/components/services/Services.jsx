import React from "react";
import "./services.css";
import ServicesCard from "./ServicesCard";
import { ServicesCardContent } from "../storage/HomeDb";

function Services() {
  return (
    <section className="Services">
      <div className="wrapper flexcolumn">
        <div className="ServicesCheck flexcolumn">
          <h2>Check what we can do for you</h2>
          <p>
            Ut ex turpis, faucious sed teugiat ut, tempus nec nisi. ttiam
            vehicula est ut erat congue, et pulvinar sit lorem nibh aliquet.
          </p>
        </div>
        {ServicesCardContent.map((service, index) => (
          <ServicesCard
            key={index}
            img={service.img}
            title={service.title}
            title2={service.title2}
            description={service.description}
            desc1={service.desc1}
            desc2={service.desc2}
            l1={service.l1}
            l2={service.l2}
            l3={service.l3}
            l4={service.l4}
            design={service.class}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;
