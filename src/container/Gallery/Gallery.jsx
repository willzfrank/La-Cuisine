import React from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs"; // for the left and right arrow!!!

import { SubHeading } from "../../components";
import { images } from "../../constants";

import "./Gallery.css";

const Gallery = () => {
  const scrollRef = React.useRef(null); //  for the box containing the images !!!

  const scroll = (direction) => {
    const { current } = scrollRef; // destructuring scrollref from useRef

    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  return (
    <div className="app__gallery">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="app__gallery--headertext">Photo Gallery</h1>
        <p
          className="app__gallery--text"
          style={{ color: "#AAAAAA", marginTop: "2rem" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button type="button" className="app__gallery--button">
          View More
        </button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[
            images.gallery01,
            images.gallery02,
            images.gallery03,
            images.gallery04,
          ].map((image, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery_image-${index + 1}`} // provide a string as a key because we imported the images plus we dynamically added plus one to the index so it counts with every image
            >
              <img src={image} alt="gallery_image" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        {/* container for directional-arrows */}
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          {/* container for directional-arrows */}
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
          {/* container for directional-arrows no onclickargument because we using useref to specify the direction based on its current div position */}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
