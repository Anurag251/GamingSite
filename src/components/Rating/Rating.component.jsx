import React from "react";
import RatingCardComponent from "./RatingCard.component";

import charImage from "../../assets/images/rating-sec-character.webp";
import flagImage from "../../assets/images/flags.webp";

const RatingComponent = () => {
  return (
    <div className="RatingComponent">
      <div className="wrapper">
        <div className="inner-sec">
          <div className="char-image">
            <img src={charImage} alt="character" />
          </div>
          <div className="flag-image">
            <img src={flagImage} alt="flag" />
          </div>

          <div className="rating-list">
            <RatingCardComponent />
            <RatingCardComponent />
            <RatingCardComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingComponent;
