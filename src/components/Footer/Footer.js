import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div>
        <ul>
          <h3>Categories</h3>
          <li>Web Builder</li>
          <li>Hosting</li>
          <li>Data Center</li>
          <li>Robotic-Automation</li>
        </ul>
      </div>
      <div>
        <ul>
          <h3>Contact</h3>
          <li>Contact</li>
          <li>Privacy Policy</li>
          <li>Terms Of Service</li>
          <li>Categories</li>
          <li>About</li>
        </ul>
      </div>
      <div className="country-dropdown">United States</div>
    </div>
  );
};

export default Footer;
