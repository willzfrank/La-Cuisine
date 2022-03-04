import React from "react";
import { images } from "../../constants";

import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="aboutUs__container--box" id="about">
      <div className="aboutUs__container--G">
        <img src={images.G} alt="la-cuisine" />
      </div>
      <div className="aboutUs__container">
        <div className="aboutUs__container--AboutUs">
          <h2>About Us</h2>
          <img src={images.spoon} alt="la-cuisine" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit odio
            consequatur, sit exercitationem ab excepturi! Illo fugit voluptatum
            accusantium animi necessitatibus itaque magnam reiciendis ipsam,
            porro id ut culpa dolorem?
          </p>
          <button type="button">Know More</button>
        </div>
        <div className="aboutUs__container--knife">
          <img src={images.knife} alt="la-cuisine" />
        </div>
        <div className="aboutUs__container--History">
          <h2>Our History</h2>
          <img src={images.spoon} alt="la-cuisine" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit odio
            consequatur, sit exercitationem ab excepturi! Illo fugit voluptatum
            accusantium animi necessitatibus itaque magnam reiciendis ipsam,
            porro id ut culpa dolorem?
          </p>
          <button type="button">Know More</button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
