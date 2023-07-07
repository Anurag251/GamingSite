/* eslint-disable react/prop-types */
import { Fragment } from "react";
import slashIcon from "../assets/images/slash.svg";

const CustomTitleComponent = ({ children, desc }) => {
  return (
    <div className="custom-title">
      <div className="slash">
        <img src={slashIcon} alt="" />
      </div>
      <div className="title">
        {children}
        {desc ? (
          <Fragment>
            <p
              className="title-desc"
              dangerouslySetInnerHTML={{
                __html: desc,
              }}
            />
          </Fragment>
        ) : null}
      </div>
    </div>
  );
};

export default CustomTitleComponent;
