import React, { useState } from "react";
import "./Navbar.scss";
import search from "../assets/magnifying-glass-icon.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-search-bar">
        <img src={search} alt="" className="navbar-search-img" />
        <input type="text" />
      </div>

      <div>Categories</div>
      <div>Website Builders</div>
      <div>Today's deals</div>
    </div>
  );
};

export default Navbar;
