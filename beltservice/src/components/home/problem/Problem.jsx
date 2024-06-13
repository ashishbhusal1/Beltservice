import React from "react";
import { ProblemCard, ProblemContent } from "../../storage/HomeDb";
import { FaCheck } from "react-icons/fa6";

import "./problem.css";

function Problem() {
  return (
    <section className="problem wrapper flexcolumn">
      <div className="upper flexrow">
        <h2>{ProblemContent.title}</h2>
        <p>{ProblemContent.description}</p>
      </div>
      <div className="bottom flexrow">
        <div className="problemContent flexcolumn">
          <p>{ProblemContent.miniDescription[0]}</p>
          <button className="buttonPrimary">Services</button>
          <div className="problemLink flexcolumn">
            <p>
              <FaCheck className="faCheck"/>
              {ProblemContent.miniDescription[1]}
            </p>
            <span>{ProblemContent.link[0]}</span>
            <div className="line"></div>
            <span>{ProblemContent.link[1]}</span>
          </div>
        </div>
        <div className="problemCards">
          <ul className="flexStyle">
            {ProblemCard.map((card) => (
              <li key={card.id} className="cardStyle flexcolumn">
                <img src={card.img} alt={card.title} className="imgStyle˝" />
                <h2>{card.title}</h2>
                <p>{card.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Problem;
