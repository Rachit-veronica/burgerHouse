import React from "react";
import "./css/footer.style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelopeSquare,
  faInstagram,
  faFacebook,
  faRetweet,
  faWhatsapp,
} from "@fortawesome/free-solid-svg-icons";
import logoPhoto from "./img/logo.png";

const Footer = () => {
  return (
    <div className="footerOuterBody">
      <div className="footerInnerBody">
        <div className="footerText">
          <div className="footerTitle">
            <img src={logoPhoto} />
            <h1>BURGER HOUSE</h1>
          </div>
          <div className="aboutLink">
            <div className="footerAbout">
              <p>
                Quis velit non aliqua esse fugiat nostrud aute nulla aliqua
                culpa Lorem laborum ad. Lorem irure anim irure ullamco culpa
                veniam. Culpa velit velit incididunt et culpa duis magna.
              </p>
            </div>
            <div className="link">
              <p>
                <FontAwesomeIcon id="location" icon={faLocationDot} />
                MAIN ROAD,BULIDING NAME,COUNTRY
              </p>
              <p>
                <FontAwesomeIcon id="email" icon={faEnvelopeSquare} />
                INFO@COMPANYNAME.COM
              </p>
            </div>
          </div>
        </div>
        <div className="socialMediaLink">
          <p>COMPANY NAME 2020 ALL RIGHTS RESERVED.</p>
          <ul>
            <li>
              {/* <FontAwesomeIcon icon={faInstagram} /> */}
              <a href="#">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" />
              </a> 
            </li>
            <li>
              {/* <FontAwesomeIcon icon={faFacebook} /> */}
              <a href="#">
                <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yK/r/BHkEd6znUYJ.png" />
              </a>
            </li>
            <li>
              {/* <FontAwesomeIcon icon={ faRetweet} /> */}
              <a href="#">
                <img src="data:image/png;base64,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" />
              </a>
            </li>
            <li>
              {/* <FontAwesomeIcon icon={faWhatsapp} /> */}
              <a href="#">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/800px-WhatsApp.svg.png" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
