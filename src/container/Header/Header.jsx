import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="header__text--container">
        <SubHeading title="Discover new taste horizons!" />
        <h1>Master Fine Dining. </h1>
        <p>
          Elevate your culinary journey with fine dining mastery. Indulge in
          expertly crafted flavors, elegant presentation, and unforgettable
          experiences. Unlock the secrets to gastronomic excellence and embark
          on a journey of culinary delight.
        </p>
        <button type="button" className="header__button">
          Explore Menu
        </button>
      </div>
    </header>
  );
};

export default Header;
