import React from "react";

const WhyGamersLoveComponent = () => {
  const image1 =
    "https://www.sostronk.com/static/205d950a738230ad30d7253cf0ad5c65/6c05d/dq.webp";
  const image2 =
    "https://www.sostronk.com/static/16035f0c3299c965e09bd629f6524cb7/6c05d/fairplay.webp";

  return (
    <div className="why-gamers-love">
      <div className="wrapper">
        <div className="item">
          <div className="item-title">
            Introducing <span>GUARDIAN</span>
          </div>

          <div className="inner">
            <div className="image-sec">
              <img className="image1" src={image1} alt="" />
              <img className="image2" src={image2} alt="" />
            </div>

            <div className="content-sec">
              <ul>
                <li>
                  <i className="fas fa-check"></i>
                  World's best mobile ANTI-CHEAT System
                </li>

                <li>
                  <i className="fas fa-check"></i>
                  FairPlay Guaranteed!
                </li>

                <li>
                  <i className="fas fa-check"></i>
                  INSTANT Disqualifying & Anti-fraud
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="item-title">
            Immersive <span>In-Game</span> Experience
          </div>

          <div className="inner">
            <div className="image-sec">
              <img className="image1" src={image1} alt="" />
              <img className="image2" src={image2} alt="" />
            </div>

            <div className="content-sec">
              <ul>
                <li>
                  <i className="fas fa-check"></i>
                  World’s first SEAMLESS In-game System
                </li>

                <li>
                  <i className="fas fa-check"></i>
                  LIVE Contest Feed. Never leave your Game!
                </li>

                <li>
                  <i className="fas fa-check"></i>
                  INSTANT Updates
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyGamersLoveComponent;
