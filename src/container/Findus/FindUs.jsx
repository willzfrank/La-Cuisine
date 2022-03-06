import React from "react";
import "./Findus.css";

import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => (
  <div className="findus__container--box" id="contact">
    <div className="findus__container">
      <SubHeading title="Contact" />
      <h1
        className="findus__container__headertext"
        style={{ marginBottom: "3rem" }}
      >
        Find Us
      </h1>
      <div className="findus__container-content">
        <p className="findus__container__text">
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G
        </p>
        <p
          className="findus__container__textcormorant"
          style={{ color: "#DCCA87", margin: "2rem 0" }}
        >
          Opening Hours
        </p>
        <p className="findus__container__text">
          Mon - Fri: 10:00 am - 02:00 am
        </p>
        <p className="findus__container__text">
          Sat - Sun: 10:00 am - 03:00 am
        </p>
      </div>
      <button
        type="button"
        className="findus__container__button"
        style={{ marginTop: "2rem" }}
      >
        Visit Us
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
