import React, { useState } from 'react';
import './Navbar.css';
// Import your logo image - update the path to match your actual logo file
import logoImage from '../assets/Advlogo.jpeg'; // Change this to your actual logo filename

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { text: 'Home', active: true },
    { text: 'Events' },
    { text: 'Contact' },
    { text: 'Book Now', highlight: true },
    { text: 'Register' }
  ];

  return (
    <nav className="navbar transparent">
      <div className="nav-container container">
        {/* Logo pushed to extreme left */}
        <div className="logo-container">
          <a href="/" className="logo">
            <img src={logoImage} alt="AdventureGo Logo" className="logo-img" />
            <span className="logo-text">Adventure<span>Go</span></span>
          </a>
        </div>

        {/* Desktop Menu pushed to extreme right */}
        <div className="nav-menu-container">
          <ul className="nav-menu">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className={`nav-link ${item.active ? 'active' : ''} ${item.highlight ? 'highlight' : ''}`}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger Menu */}
          <button className="hamburger" onClick={toggleMobileMenu}>
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-menu-container ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul className="mobile-menu">
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={`mobile-link ${item.active ? 'active' : ''} ${item.highlight ? 'highlight' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;