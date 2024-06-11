import React from "react";
import "./header.css";
import { HeaderMenu } from "../storage/HomeDb";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="flexrow">
      <div className="logo">
        <img src="./logo.png" alt="" />
      </div>
      <div className="navbar">
        <ul className="flexrow">
          {HeaderMenu.map((item) => {
            return (
              <li key={item.id}>
                <NavLink to={item.link} className="links" activeClassname="active">{item.title}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}

export default Header;
