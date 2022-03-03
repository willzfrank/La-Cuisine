import React from "react";
import SubHeading from "../../components/SubHeading/SubHeading";
import "./Header.css";
import { images } from "../../constants";

const Header = () => {
  return (
    <header>
      <div className="header__text--container">
        <SubHeading title="Chase the new flavour" />
        <h1>The Key To Fine Dining </h1>
        <p>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus
        </p>
        <button type="button" className="header__button">
          Explore Menu
        </button>
      </div>
      <div>
        <img src={images.welcome} alt="La-Cuisine" className="header__image" />
      </div>
    </header>
  );
};

export default Header;
