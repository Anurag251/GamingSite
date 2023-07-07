import React from "react";
import LogoComponent from "./Logo.component";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <footer>
      <div className="wrapper">
        <div className="footer-item-list">
          <div className="logo-sec">
            <LogoComponent />
          </div>

          <div className="item">
            <ul>
              <li>
                <Link to="/">
                  <button>Privacy Policy</button>
                </Link>
              </li>

              <li>
                <Link to="/">
                  <button>Terms & Conditions</button>
                </Link>
              </li>

              <li>
                <Link to="/">
                  <button>Refund & Cancellation</button>
                </Link>
              </li>

              <li>
                <Link to="/">
                  <button>Pricing Policy</button>
                </Link>
              </li>
            </ul>
          </div>

          <div className="item">
            <ul>
              <li>
                <Link to="/">
                  <button>Frequently Asked Questions</button>
                </Link>
              </li>

              <li>
                <Link to="/">
                  <button>Equal Employment Opportunity</button>
                </Link>
              </li>

              <li>
                <Link to="/">
                  <button>About Us</button>
                </Link>
              </li>

              <li>
                <Link to="/">
                  <button>Rules</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="social-links">
        <div className="wrapper">
          <ul className="all-links">
            <li>
              <a href="#">
                <button>
                  <i className="fab fa-twitter"></i>
                </button>
              </a>
            </li>

            <li>
              <a href="#">
                <button>
                  <i className="fab fa-instagram"></i>
                </button>
              </a>
            </li>

            <li>
              <a href="#">
                <button>
                  <i className="fab fa-youtube"></i>
                </button>
              </a>
            </li>

            <li>
              <a href="#">
                <button>
                  <i className="fab fa-discord"></i>
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
