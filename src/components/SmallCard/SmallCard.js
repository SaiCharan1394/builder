import React from "react";
import "./SmallCard.scss";
const SmallCard = ({
  image,
  offer,
  offerTime,
  heading,
  text,
  oldPrice,
  newPrice,
}) => {
  return (
    <div className="small-card">
      <img src={image} alt="" />
      <div className="offer-sec">
        <div className="offer">{offer}</div>
        <div className="offer">{offerTime}</div>
      </div>
      <div className="heading">{heading}</div>
      <div className="text">{text}</div>
      <div className="price-sec">
        <div className="new">{newPrice}</div>
        <div className="old">{oldPrice}</div>
        <div className="price-sec-offer">{offer}</div>
      </div>

      <button className="view-button">View Deal</button>
    </div>
  );
};

export default SmallCard;
