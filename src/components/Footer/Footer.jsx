import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";
import insta_icon from "../Assets/instagram_icon.png"
import pinterest from "../Assets/pintester_icon.png"
import watsup from "../Assets/whatsapp_icon.png"
export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons">
            <img src={insta_icon} alt="" />
        </div>
        <div className="footer-icons">
            <img src={pinterest} alt="" />
        </div>
        <div className="footer-icons">
            <img src={watsup} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023- All Right Reserved</p>
      </div>
    </div>
  );
};
