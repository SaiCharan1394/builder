import React from "react";
import "./MainText.css";
import tickmark from "../assets/tickmark.png";
import imark from "../assets/imark.png";
import dropdown from "../assets/dropdown.png";
const Maintext = () => {
  return (
    <div className="main-text">
      <div>
        <div className="heading">Best Website builders in the US</div>
        <hr />
        <div className="time">
          <div className="update-disclosure">
            <div className="update-disclosure-child">
              <img src={tickmark} alt="" />
              <div> Last Updated - February 22, 2020</div>
            </div>
            <div className="update-disclosure-child">
              <img src={imark} alt="" />
              <div>Advertising Disclosure</div>
            </div>
          </div>
          <div className="update-disclosure-child2">
            <div>Top Relevent </div>
            <img src={dropdown} alt="" />
          </div>
        </div>
        <hr />
      </div>
      <div className="services">
        <div>Tools</div>
        <div>AWS Builder</div>
        <div>Start Build</div>
        <div>Build Supplies</div>
        <div>Tooling</div>
        <div>BlueHosting</div>
      </div>
      <div className="page-indicater">
      Home
        <li>Hosting for all</li>
        <li>Hosting</li>
        <li>Hosting6</li>
        <li>Hosting5</li>
      </div>
    </div>
  );
};

export default Maintext;
