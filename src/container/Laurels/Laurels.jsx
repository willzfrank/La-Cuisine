import React from "react";
import SubHeading from "../../components/SubHeading/SubHeading";
import { data, images } from "../../constants";

import "./Laurels.css";
const Award = ({ award: { title, imgUrl, subtitle } }) => (
  <div className="award__container--box">
    <div>
      <img src={imgUrl} alt="la-cuisine" />
    </div>
    <div>
      <p className="award__text" style={{ color: "#DCCA87" }}>
        {title}
      </p>
      <p className="award__text">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => {
  return (
    <section className="laurels__container--box">
      <div className="laurels__container">
        <SubHeading title="Awards & Recognition" />
        <h2>Our Laurels</h2>
        <div>
          {data.awards.map((award) => {
            return (
              <Award
                key={award.title}
                award={award}
                title={award.title}
                url={award.imgUrl}
                subtitle={award.subtitle}
              />
            );
          })}
        </div>
      </div>
      <div>
        <img
          src={images.laurels}
          alt="la-cuisine"
          className="laurels__container--images"
        />
      </div>
    </section>
  );
};

export default Laurels;
