import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import MainCardData from "../MainCard/MainCardData";
import "./Body.css"
import SmallCardData from "../SmallCard/SmallCardData";
import Maintext from "../MainText/Maintext";
import SignUp from "../SignUp.js/SignUp";
const Body = () => {
  return (
    <div className="container">
      <Navbar />
      <Maintext/>
      <MainCardData />
      <SmallCardData/>
      <SignUp/>
      <Footer />
    </div>
  );
};

export default Body;
