import React from "react";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav__mainContainer">
        <div className="nav__mainContainer--logo">La Cuisine</div>
        <div>
          <ul className="nav__mainContainer--linkContainer">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#pages">Pages</a>
            </li>
            <li>
              <a href="#contactus">Contact Us</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#landing">Landing</a>
            </li>
          </ul>
        </div>
        <div>
          <div className="nav__mainContainer--loginContainerBox">
            <div className="nav__mainContainer--login">
              <a href="#login">Log in / Registration</a>
            </div>

            <div className="nav__mainContainer--loginDivider"></div>
            <div className="nav__mainContainer--login">
              <a href="#book">Book Table</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
