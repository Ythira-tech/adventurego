import React from 'react';
import './Footer.css';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', url: '#' },
    { name: 'Safari Packages', url: '#' },
    { name: 'Destinations', url: '#' },
    { name: 'Book Now', url: '#' },
    { name: 'Contact', url: '#' }
  ];

  const countries = [
    { name: 'Kenya', icon: '🇰🇪', cities: ['Nairobi', 'Mombasa', 'Maasai Mara'] },
    { name: 'Tanzania', icon: '🇹🇿', cities: ['Arusha', 'Zanzibar', 'Serengeti'] },
    { name: 'Uganda', icon: '🇺🇬', cities: ['Kampala', 'Entebbe', 'Bwindi'] }
  ];

  const socialLinks = [
    { name: 'facebook', icon: 'fab fa-facebook-f', url: '#' },
    { name: 'instagram', icon: 'fab fa-instagram', url: '#' },
    { name: 'whatsapp', icon: 'fab fa-whatsapp', url: '#' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        {/* Main Footer Content - 3 Columns */}
        <div className="footer-main">
          {/* Column 1: Brand */}
          <div className="footer-col">
            <div className="footer-brand">
              <div className="footer-logo">
                <span className="logo-text">Adventure<span>Go</span></span>
              </div>
              <p className="brand-tagline">
                East Africa's Premier Safari Experience
              </p>
              <div className="social-links">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name}
                    href={social.url} 
                    className="social-link"
                    aria-label={social.name}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.url}>
                    <i className="fas fa-chevron-right"></i> {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Countries */}
          <div className="footer-col">
            <h3 className="footer-title">Our Regions</h3>
            <div className="countries-list">
              {countries.map((country) => (
                <div key={country.name} className="country-item">
                  <div className="country-header">
                    <span className="country-flag">{country.icon}</span>
                    <span className="country-name">{country.name}</span>
                  </div>
                  <div className="country-cities">
                    {country.cities.map(city => (
                      <span key={city} className="city-tag">{city}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="contact-bar">
          <div className="contact-item">
            <i className="fas fa-phone-alt"></i>
            <a href="tel:+254712345678">+254 712 345 678</a>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <a href="mailto:hello@adventurego.co.ke">hello@adventurego.co.ke</a>
          </div>
          <div className="contact-item">
            <i className="fas fa-clock"></i>
            <span>24/7 Support</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} AdventureGo. All rights reserved.</p>
          </div>
          <div className="legal-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;