import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  // Updated Quick Links
  const quickLinks = [
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about' },
    { name: 'Shop', url: '/shop' },
    { name: 'Why Choose Us', url: '/why-choose-us' },
    { name: 'Book Now', url: '/booking' },
    { name: 'Contact', url: '/contact' }
  ];

  // Updated Social Links with real URLs
  const socialLinks = [
    { name: 'facebook', icon: 'fab fa-facebook-f', url: 'https://www.facebook.com/share/1aYFgptMxd/' },
    { name: 'instagram', icon: 'fab fa-instagram', url: 'https://www.instagram.com/adventurego_kenya_?igsh=Z2VzeGo2aWxybG54' },
    { name: 'whatsapp', icon: 'fab fa-whatsapp', url: 'https://wa.me/254711480765' }
  ];

  // Contact Information
  const contactInfo = [
    { type: 'phone', icon: 'fas fa-phone-alt', value: '+254 711 480 765', url: 'tel:+254711480765' },
    { type: 'email', icon: 'fas fa-envelope', value: 'hello@adventurego.co.ke', url: 'mailto:hello@adventurego.co.ke' },
    { type: 'hours', icon: 'fas fa-clock', value: '24/7 Support', url: null }
  ];

  // Legal Links
  const legalLinks = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms & Conditions', url: '/terms' },
    { name: 'Contact Us', url: '/contact' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        {/* Main Footer Content - 2 Columns */}
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
              <p className="brand-description">
                Creating unforgettable adventures across Kenya, Tanzania, and Uganda since 2020.
              </p>
              <div className="social-links">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name}
                    href={social.url} 
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
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
            <h3 className="footer-title">Quick Navigation</h3>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.url}>
                    <i className="fas fa-chevron-right"></i> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Legal Links - Now in a visible section */}
            <h3 className="footer-title legal-title">Legal</h3>
            <div className="legal-links-footer">
              {legalLinks.map((link) => (
                <Link key={link.name} to={link.url} className="legal-link">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="contact-bar">
          {contactInfo.map((contact) => (
            <div className="contact-item" key={contact.type}>
              <i className={contact.icon}></i>
              {contact.url ? (
                <a href={contact.url}>{contact.value}</a>
              ) : (
                <span>{contact.value}</span>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} AdventureGo East Africa. All rights reserved.</p>
          </div>
          <div className="certification">
            <span className="cert-badge">✈️ Licensed Tour Operator</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;