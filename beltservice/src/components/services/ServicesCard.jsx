import React from "react";
import "./servicescard.css";
import { FaCheck } from "react-icons/fa";

function ServicesCard({
  img,
  title,
  description,
  title2,
  desc1,
  desc2,
  l1,
  l2,
  l3,
  l4,
  design,
}) {
  return (
    <section className={design}>
      <div className="CardImg flexcolumn">
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
        <button className="buttonPrimary">Report</button>
      </div>
      <div className="ServiceCard flexcolumn">
        <h2>{title2}</h2>
        <p>{desc1}</p>
        <p>{desc2}</p>
        <ul className="flexrow ServiceCardUl">
          <div className="flexcolumn ServiceCardDiv">
            <li className="flexrow ServiceCardLi">
              <FaCheck className="check" />
              <p>{l1}</p>
            </li>
            <li className="flexrow ServiceCardLi">
              <FaCheck className="check" />
              <p>{l2}</p>
            </li>
          </div>
          <div className="flexcolumn ServiceCardDiv">
            <li className="flexrow ServiceCardLi">
              <FaCheck className="check" />
              <p>{l3}</p>
            </li>
            <li className="flexrow ServiceCardLi">
              <FaCheck className="check" />
              <p>{l4}</p>
            </li>
          </div>
        </ul>
      </div>
    </section>
  );
}

export default ServicesCard;
