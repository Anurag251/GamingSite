import React from "react";
import FAQsCardComponent from "./FAQsCard.component";

const FAQsComponent = () => {
  return (
    <div className="FAQs">
      <div className="wrapper">
        <div className="FAQs-list">
          <FAQsCardComponent />
          <FAQsCardComponent />
          <FAQsCardComponent />
          <FAQsCardComponent />
          <FAQsCardComponent />
          <FAQsCardComponent />
          <FAQsCardComponent />
          <FAQsCardComponent />
        </div>
      </div>
    </div>
  );
};

export default FAQsComponent;
