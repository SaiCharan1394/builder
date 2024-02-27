import React, { useState } from "react";
import "./MainCard.css";
import blueDropDown from "../assets/blue-drop-down.png";

const MainCard = ({
  cardNo,
  image,
  imageHeading,
  heading,
  headingText,
  subHeading,
  whatYouGet,
  rating,
  complement,
  suggestionIcon,
  suggestionText,
  suggestionValue,
  starRating,
  ratingPer,
  ratingText,
  servicesIcon,
  servicesText,
  offer
}) => {
  const [showMoreOpen, setShowMoreOpen] = useState(false);

  return (
    <div className="main-card">
      {suggestionValue ? (
        <div className="best-box">
          <img src={suggestionIcon} alt="Suggestion Icon" />
          <div>{suggestionText}</div>
        </div>
      ) : null}
      <div className="card-no">
        <p>{cardNo}</p>
      </div>
      <div className="card-image-sec">
        <img src={image} alt={imageHeading} />
        <p>{imageHeading}</p>
      </div>
      <div className="card-desc-sec">
        <div className="heading">
          <p>
            <span>{heading}</span>
            {headingText}
          </p>
        </div>
        {showMoreOpen && (<div className="offer">{offer}</div>)}
        <div className="sub-heading">
          <p>{subHeading}</p>
          {!showMoreOpen && (
            <ul>
              <li>{whatYouGet}</li>
            </ul>
          )}
          {showMoreOpen && ratingPer && ratingText && (
            <div className="after-showmore">
              {ratingPer.split(",").map((rating, index) => (
                <div className="rating-text" key={`rating_${index}`}>
                  <div className="rating">{`${rating.trim()}`}</div>{" "}
                  <div className="text">{`${ratingText
                    .split(",")
                    [index].trim()}`}</div>
                </div>
              ))}
            </div>
          )}
        </div>
        {showMoreOpen && servicesIcon && servicesText && (
          <div className="showmore-dropdown">
            <div className="heading">Why we love it</div>
            {servicesIcon.split(",").map((icon, index) => (
              <div className="icon-text" key={`icon_${index}`}>
                <img src={`${icon.trim()}`} className="icon" />
                <div className="service-text">{`${servicesText
                  .split(",")
                  [index].trim()}`}</div>
              </div>
            ))}
          </div>
        )}
        <div className={`show-more ${showMoreOpen &&("button-after-click")}`}>
          <button  onClick={() => setShowMoreOpen((prevState) => !prevState)}>
            {!showMoreOpen ? "Show More" : "Show Less"}
          </button>
          {!showMoreOpen ? <img src={blueDropDown} alt="Blue Drop Down" /> : ""}
        </div>
      </div>
      <div className="card-rating-sec">
        <div className="rating-sec">
          <p className="rating">{rating}</p>
          <p className="complement">{complement}</p>
          <img src={starRating} alt="Star Rating" />
        </div>
        <div>
          <button type="button" className="view">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
