import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import { images } from '../../constants';

import './Chef.css';

const Chef = () => (
  <section className="chef__container--box">
    <div className="chef__container--chefimagebox">
      <img
        src={images.chef}
        alt="la-cuisine"
        className="chef__container--imagechef"
      />
    </div>
    <div>
      <div>
        <SubHeading title="Chef's Perspective" />
        <h2>Guiding Principles</h2>
      </div>
      <div className="chef__container--quotebox">
        <div className="chef__container--quote">
          <img src={images.quote} alt="la-cuisine" />
        </div>
        <div className="chef__container--quotetextbox">
          <p className="chef__container--quotetext flex__end">
            At Lueur Restaurant, we believe that cooking is a labor of love. We
            put our heart and soul into every dish, striving for nothing less
            than magic.
          </p>
        </div>
        <p className="chef__container--quotetext">
          While we take our food seriously, we don't take ourselves too
          seriously. Accidents happen, but we embrace them as reminders that
          even the smallest things can add depth and flavor. Our guiding
          principle is simple: approach cooking with passion and an open mind,
          always striving for perfection in the midst of imperfection.
        </p>
      </div>
      <div className="chef__container--name">
        <p>Kevin Luo</p>
        <p className="chef__container--quotetext">Chef & Founder</p>
        <img src={images.sign} alt="Signature" />
      </div>
    </div>
  </section>
);

export default Chef;
