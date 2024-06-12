import React from "react";
import { ServiceContent } from "../../storage/HomeDb";
import "./service.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

function Service() {
  return (
    <section className="wrapper serviceWrapper flexcolumn">
      <div className="apple flexrow">
        <img src={ServiceContent.img} alt="" />
        <p>{ServiceContent.title}</p>
      </div>
      <div className="content flexrow">
        <div className="desc">
          <p>{ServiceContent.description}</p>
        </div>
        <div className="minidesc flexcolumn">
          <p>{ServiceContent.miniDescription}</p>
          <button className="buttonPrimary">About us</button>
          <div className="flexrow icon">
            <FaLocationDot />
            <span>{ServiceContent.location}</span>
          </div>
          <div className="flexrow icon">
            <FaTelegramPlane />
            <span>{ServiceContent.mail}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
