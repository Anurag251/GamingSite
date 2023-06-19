import React from "react";
import bannerImage from "../assets/images/bannerBg.png";

const BannerComponent = () => {
  const qrImage =
    "https://www.sostronk.com/static/5cb11a29a29ca10abb27681c3fb28f8e/19c38/qrcode.webp";

  return (
    <div className="banner">
      <div className="image-sec">
        <img src={bannerImage} alt="" />
      </div>

      <div className="content-sec">
        <h1>
          Play <span>Games</span> Win <span>Cash</span>
        </h1>
        <h2>
          Daily tournaments worth <span>Rs. 10 lakhs+</span> everyday!
        </h2>

        <div className="qr-sec">
          <img src={qrImage} alt="" />
        </div>

        <div className="button-group">
          <button className="download">Download</button>
        </div>

        <div className="company">
          A{" "}
          <img
            src="https://www.sostronk.com/static/6bbe5ed5619bcd162d20230619e8df9b/f4810/dream11-logo.webp"
            alt=""
          />{" "}
          Company
        </div>
      </div>
    </div>
  );
};

export default BannerComponent;
