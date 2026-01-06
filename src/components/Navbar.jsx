import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
// Import your logo image - update the path to match your actual logo file
import logoImage from '../assets/Advlogo.jpeg'; // Change this to your actual logo filename

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Updated navItems with all requested links and proper paths
  const navItems = [
    { text: 'Home', path: '/', active: true },
    { text: 'Events', path: '/events' },
    { text: 'Safaris+', path: '/safaris' },
    { text: 'Shop', path: '/shop' },
    { text: 'Blog', path: '/blog' },
    { text: 'Contact', path: '/contact' },
    { text: 'Book Now', path: '/booking', highlight: true },
    { text: 'Register', path: '/register' }
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : 'transparent'}`}>
      <div className="nav-container container">
        {/* Logo pushed to extreme left */}
        <div className="logo-container">
          <Link to="/" className="logo">
            <img src={logoImage} alt="AdventureGo Logo" className="logo-img" />
            <span className="logo-text">Adventure<span>Go</span></span>
          </Link>
        </div>

        {/* Menu Background Container */}
        <div className={`nav-menu-background ${isScrolled ? 'green' : ''}`}>
          {/* Desktop Menu pushed to extreme right */}
          <div className="nav-menu-container">
            <ul className="nav-menu">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className={`nav-link ${item.active ? 'active' : ''} ${item.highlight ? 'highlight' : ''}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Hamburger Menu */}
            <button className="hamburger" onClick={toggleMobileMenu}>
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-menu-container ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul className="mobile-menu">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className={`mobile-link ${item.active ? 'active' : ''} ${item.highlight ? 'highlight' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;