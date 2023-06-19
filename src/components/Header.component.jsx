import logoImage from "../assets/images/Screenshot 2023-06-17 at 12.05.28 PM.png";

const HeaderComponent = () => {
  return (
    <header>
      <div className="wrapper">
        <nav>
          <div className="logo">
            <img src={logoImage} alt="logo" />
          </div>

          <ul className="navs">
            <li>
              <button className="navbtn">Home</button>
            </li>

            <li>
              <button className="navbtn">FAQ</button>
            </li>

            <li>
              <button className="navbtn">Rules</button>
            </li>
          </ul>

          <div></div>
        </nav>
      </div>
    </header>
  );
};

export default HeaderComponent;
