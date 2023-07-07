import React from "react";

const RatingCardComponent = () => {
  return (
    <div className="RatingCard">
      <div className="image-sec">
        <img
          src="https://www.sostronk.com/static/61c55ac068b2336d354ce1c10087bbad/8e1c4/user-review-1.webp"
          alt=""
        />
      </div>

      <div className="content">
        <h4 className="name">Abhineet</h4>
        <h5 className="wins">winnings: ₹ 4000+</h5>

        <div className="stars">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
        </div>
        <p>
          I earned more ₹13500+ within 1 month. SoStronk is really great app
          I've ever seen. I love the sostronk app.
        </p>
      </div>
    </div>
  );
};

export default RatingCardComponent;
