import React from "react";
import logoPhoto from "./img/logo.png";
import delivery from "./img/delivery-logo.png";

const Navbar = () => {
  const home = () => {
    if (window.screen.width > 860) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };
  const menu = () => {
    if (window.screen.width > 860) {
      window.scrollTo({ top: 1300, left: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 1650, left: 0, behavior: "smooth" });
    }
  };
  const story = () => {
    if (window.screen.width > 860) {
      window.scrollTo({ top: 1850, left: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 2400, left: 0, behavior: "smooth" });
    }
  };
  const contact = () => {
    if (window.screen.width > 860) {
      window.scrollTo({ top: 2400, left: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 2800, left: 0, behavior: "smooth" });
    }
  };
  return (
    <div className="navbarBody">
      <div className="logo">
        <img src={logoPhoto} />
        <p>BURGER HOUSE</p>
      </div>
      <div className="rightSideList">
        <div className="delivery">
          <img src={delivery} />
          <p>
            Express Delivery <a href="#">+1234567890</a>
          </p>
        </div>
        <div className="navbarList">
          <ul>
            <li>
              <a onClick={home}>HOME</a>
            </li>

            <li>
              <a onClick={menu}>MENU</a>
            </li>
            <li>
              <a onClick={story}>OUR STORY</a>
            </li>
            <li>
              <a onClick={contact}>CONTACT US</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
