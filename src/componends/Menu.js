import React from "react";
import "./css/menu.style.css";
import menuData from "./menuData.json";
import photo from "./img/menuItem1.jpg";
const Menu = () => {
  const order = () => {
    if (window.screen.width > 860) {
      window.scrollTo({ top: 2400, left: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 2800, left: 0, behavior: "smooth" });
    }
  };
  return (
    <div className="orderOuterBody">
      <div className="orderInnerBody">
        <div className="orderText">
          <div className="tag">
            <h4>ALWAYS TASTRY BURGER</h4>
          </div>
          <h1>CHOOSE & ENJOY</h1>
          <p>
            Magna laboris non cupidatat enim Lorem laborum ad velit excepteur
            nisi veniam cupidatat ex. Pariatur elit sunt anim nisi occaecat esse
            qui amet elit consequat officia reprehenderit exercitation in. Sit
            commodo nulla magna ut ullamco aliquip commodo elit do esse.
          </p>
        </div>
        <div className="itemCardBody">
          {menuData.map((item) => {
            return (
              <div className="itemCard">
                <div className="cardItemImg">
                  <img src={item.img} />
                </div>
                <div className="cardTextItem">
                  <h1>{item.name}</h1>
                  <p>{item.about}</p>
                </div>
                <button onClick={order}>Order Now</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
