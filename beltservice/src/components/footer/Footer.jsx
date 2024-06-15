import React from "react";
import "./footer.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSkype } from "react-icons/fa6";
import { GrLinkTop } from "react-icons/gr";

function Footer() {
  return (
    <footer className="footer">
      <div className="footWrapper wrapper flexcolumn">
        <div className="footerTop">
          <h2>Visit our office if you want</h2>
          <div className="footerIcons flexrow">
            <a href="#">
              <FaLocationDot className="footerLocation" />
              Level 13, 2 Elizabeth St, Melbourne
            </a>
            <div className="footerIcon flexrow">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
            </div>
          </div>
          <div className="footerMap flexrow">
            <div className="map"></div>
            <div className="phone flexcolumn">
              <div className="number flexrow">
                <p className="first">+61 (0) 3 8376 6285</p>
                <p>+61 (0) 3 8376 6284</p>
              </div>
              <a href="#">Have a problem? noreply@ashish.com</a>
            </div>
          </div>
          <a href="#">
            <FaSkype className="footerSkype" />
            Online conversation? Skype: ItService
          </a>
          <div className="footerDay flexrow">
            <p>MONDAY 8AM-5PM</p>
            <p>TUESDAY 8AM-3PM</p>
            <p>WEDNESDAY 8AM-5PM</p>
            <p>THURSDAY 8AM-3PM</p>
            <p>FRIDAY 8AM-5PM</p>
          </div>
          <div className="footerLine flexrow">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
            <div className="line4"></div>
            <div className="line5"></div>
          </div>
          <div className="line6"></div>
        </div>
        <div className="footerBottom flexrow">
          <p>
            © 2024 ITService. Devsign Technologies - HTML by{" "}
            <a href="#"> BeantownThemes</a>
          </p>
          <GrLinkTop />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
