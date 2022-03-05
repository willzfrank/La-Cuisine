import React from "react";
import SubHeading from "../../components/SubHeading/SubHeading";
import { images } from "../../constants";

import "./Chef.css";

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
        <SubHeading title="Chef's Word" />
        <h2>What We Believe In</h2>
      </div>
      <div className="chef__container--quotebox">
        <div className="chef__container--quote">
          <img src={images.quote} alt="la-cuisine" />
        </div>
        <div className="chef__container--quotetextbox">
          <p className="chef__container--quotetext flex__end">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
            soluta nulla facilis.
          </p>
        </div>
        <p className="chef__container--quotetext">
          quam modi, porro ipsa obcaecati,Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptas necessitatibus similique quod. Nostrum
          totam veritatis excepturi est ipsa vitae, eveniet cupiditate veniam
          ullam ea, perferendis doloribus molestiae eos ipsum molestias.
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
