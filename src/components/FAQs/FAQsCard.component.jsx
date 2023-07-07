import React, { useState } from "react";

const FAQsCardComponent = () => {
  const [faq, setFaq] = useState(false);
  return (
    <div
      className={`FAQsCard ${faq ? "active" : ""}`}
      onClick={() => setFaq(!faq)}
    >
      <div className="FAQs-title">
        1. What is the SoStronk app?
        <i className="fas fa-times"></i>
      </div>

      <div className={`FAQs-body`}>
        <p className="desc">
          SoStronk is India's 1st social gaming platform which is built for
          Battle Royale gamers, enabling them to earn great rewards just for
          playing their regular games. SoStronk is India's 1st social gaming
          platform which is built for Battle Royale gamers, enabling them to
          earn great rewards just for playing their regular games. SoStronk is
          India's 1st social gaming platform
        </p>
      </div>
    </div>
  );
};

export default FAQsCardComponent;
