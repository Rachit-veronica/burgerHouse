import React from "react";
import "./css/Card.style.css";
import popular from "./img/popularBurgen.jfif";

const Card = () => {
  return (
    <div className="cardOuterBody">
      <div className="cardInnerBody">
        <div className="popularCard">
          <div className="popularCardText">
            <p>TRY IT TODAY</p>
            <h1>MOST POPULAR BURGER</h1>
          </div>
        </div>
        <div className="rightcard">
          <div className="tasteCard">
            <div className="tasteCardText">
              <p>TRY IT TODAY</p>
              <h1>MORE FUN MORE TASTE</h1>
            </div>
          </div>
          <div className="chiliCard">
            <div className="chiliCardText">
              <p>TRY IT TODAY</p>
              <h1>FRESH & CHILI</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
