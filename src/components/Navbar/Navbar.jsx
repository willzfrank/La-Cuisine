import React, { useEffect, useState } from 'react';

import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 0);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function toggleMobileMenu() {
    setMobileMenuOpen(!mobileMenuOpen);
  }
  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div>
        <div className="nav__mainContainer">
          <div className="nav__mainContainer--logo"> Lueur</div>
          <div>
            <ul className="nav__mainContainer--linkContainer">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#pages">Menu</a>
              </li>
              <li>
                <a href="#contactus">About Us</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#contactus">Our Chefs</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="nav__mainContainer--loginContainerBox">
              <div className="nav__mainContainer--login">
                <a href="#login">Contact Us</a>
              </div>

              <div className="nav__mainContainer--loginDivider"></div>
              <div className="nav__mainContainer--login">
                <a href="#book">Book Table</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`mobile__mainContainer nav ${scrolled ? 'scrolled' : ''}`}
      >
        <div className="mobile__mainContainer--logo"> Lueur</div>

        <button className="hidden-bar-opener" onClick={toggleMobileMenu}>
          <span className="hamburger">
            <span className="top-bun"></span>
            <span className="meat"></span>
            <span className="bottom-bun"></span>
          </span>
        </button>
      </div>
      {mobileMenuOpen && (
        <div>
          <ul
            className={`mobile__mainContainer--linkContainer ${
              mobileMenuOpen ? 'slide-down' : 'slide-up'
            }`}
          >
            <li>
              <a href="#home" onClick={toggleMobileMenu}>
                Home
              </a>
              <i className="uil uil-angle-right-b"></i>
            </li>
            <li>
              <a href="#pages" onClick={toggleMobileMenu}>
                Menu
              </a>
              <i className="uil uil-angle-right-b"></i>
            </li>
            <li>
              <a href="#contactus" onClick={toggleMobileMenu}>
                About Us
              </a>
              <i className="uil uil-angle-right-b"></i>
            </li>
            <li>
              <a href="#blog" onClick={toggleMobileMenu}>
                Blog
              </a>
              <i className="uil uil-angle-right-b"></i>
            </li>
            <li>
              <a href="#contactus" onClick={toggleMobileMenu}>
                Our Chefs
              </a>
              <i className="uil uil-angle-right-b"></i>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
