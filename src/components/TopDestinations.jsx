import React from 'react';
import { Link } from 'react-router-dom';
import './TopDestinations.css';

const TopDestinations = () => {
  // Country data with background images
  const countries = [
    {
      id: 'uganda',
      flag: '🇺🇬',
      color: '#FCD116',
      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      buttonText: 'Explore Uganda'
    },
    {
      id: 'kenya',
      flag: '🇰🇪',
      color: '#000000',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      buttonText: 'Discover Kenya'
    },
    {
      id: 'tanzania',
      flag: '🇹🇿',
      color: '#1EB53A',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      buttonText: 'Experience Tanzania'
    }
  ];

  return (
    <section className="top-destinations">
      <div className="container">
        {/* Section Header */}
        <div className="destinations-header">
          <h6 className="section-subtitle">Discover East Africa</h6>
          <h2 className="section-title">
            Our Top <span className="highlight">Destinations</span>
          </h2>
          <p className="section-description">
            Click on a country to discover its breathtaking destinations
          </p>
        </div>

        {/* Country Cards Grid - Clean & Simple */}
        <div className="countries-grid">
          {countries.map((country, index) => (
            <Link 
              to={`/destinations/${country.id}`} 
              className={`country-card ${index === 1 ? 'elevated' : ''}`}
              key={country.id}
              style={{ 
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${country.image})`,
                borderLeft: `5px solid ${country.color}`
              }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Country Flag Badge */}
              <div className="country-badge" style={{ backgroundColor: country.color }}>
                <span className="flag">{country.flag}</span>
                <span className="country-name">{country.name}</span>
              </div>

              {/* Simple Country Content - Only Title & Button */}
              <div className="country-content">
                <div className="content-header">
                  <h3 className="country-title">
                    {country.name}
                    <span className="country-subtitle">{country.subtitle}</span>
                  </h3>
                </div>

                {/* Simple Button */}
                <div className="country-btn">
                  <span>{country.buttonText}</span>
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="country-overlay" style={{ backgroundColor: country.color + '30' }}></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopDestinations;