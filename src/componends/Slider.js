import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "./img/1Slider.png";
import data from "./sliderData.json";

const Silder = () => {
  return (
    <div>
      <div className="sliderBody">
        <Carousel>
          {data.map((data) => {
            return (
              <Carousel.Item>
                <div className="sliderItem">
                  <div className="sliderText">
                    <p>{data.aboutBurer}</p>
                    <h1>{data.burerName}</h1>
                    <h2>{data.day}</h2>
                  </div>
                  <div className="sliderImg">
                    <img src={img} alt="First slide" />
                  </div>
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Silder;
