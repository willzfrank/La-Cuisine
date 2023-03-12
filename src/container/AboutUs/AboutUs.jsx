import React from 'react';
import { images } from '../../constants';

import './AboutUs.css';

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
          <p className="sub__text">
            Lueur - where we're serious about food, but not about ourselves! Our
            chefs use only the freshest, highest quality ingredients to create
            visually stunning and mouth-watering dishes. Our staff will make
            sure your experience is unforgettable - unless you forget your
            pants, then that's on you. So come hungry, leave happy, and don't
            forget to wear pants - or do, we won't judge. See you at Lueur!
          </p>
          <button type="button">Know More</button>
        </div>
        <div className="aboutUs__container--knife">
          <img src={images.knife} alt="la-cuisine" />
        </div>
        <div className="aboutUs__container--History">
          <h2>Our History</h2>
          <img src={images.spoon} alt="la-cuisine" />
          <p className="sub__text">
            Once upon a time, a group of friends who loved food decided to open
            a restaurant. They called it Lueur, which is French for "glow"
            (because good food makes you feel radiant, right?). Despite some
            hiccups (like a kitchen fire caused by a chef with a flamethrower),
            Lueur became a community favourite.
          </p>
          <button type="button">Know More</button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
