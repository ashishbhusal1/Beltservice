import React from "react";
import "./awards.css";
import { apple } from "../../../scripts/Images";

function Awards() {
  return (
    <section className="AboutAwards flexcolumn">
      <div className="AboutApple flexcolumn">
        <img src={apple} alt="" />
        <p>Authorized service provider</p>
      </div>
      <h2>
        Fusce ut velit laoreet, tempus arcu eu, molestie tortor. Nam vel justo
        cursus
      </h2>
      <button className="buttonPrimary">See the awards</button>
    </section>
  );
}

export default Awards;
