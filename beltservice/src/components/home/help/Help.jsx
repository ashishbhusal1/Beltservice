import React from "react";
import "./help.css";
import { HelpCard, HelpContent } from "../../storage/HomeDb";
import { IoStar } from "react-icons/io5";

function Help() {
  return (
    <section className="help">
      <div className="wrapper flexcolumn">
        <div className="upperHelp flexrow">
          <div className="upperContent flexcolumn">
            <h2>{HelpContent.title}</h2>
            <p>{HelpContent.description}</p>
          </div>
          <img src={HelpContent.img} />
          <div className="rating flexcolumn">
            <div className="icons flexrow">
              <IoStar className="star" />
              <IoStar className="star" />
              <IoStar className="star" />
              <IoStar className="star" />
              <IoStar className="star" />
            </div>
            <h3>{HelpContent.rating}</h3>
            <p>{HelpContent.ratings}</p>
          </div>
        </div>
        <div className="bottomHelp">
          <ul className="flexrow helpUl">
            {HelpCard.map((item) => (
              <li key={item.id} className={item.class}>
                <img src={item.img} alt="" />
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.message}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Help;
