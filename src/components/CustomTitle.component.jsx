import slashIcon from "../assets/images/slash.svg";

const CustomTitleComponent = ({children}) => {
  return (
    <div className="custom-title">
      <div className="slash">
        <img src={slashIcon} alt="" />
      </div>
      <div className="title">
      {children}
      </div>
    </div>
  );
};

export default CustomTitleComponent;
