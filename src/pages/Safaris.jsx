import React from 'react';
import './Safaris.css';
import safari1 from '../assets/safaris/Bluesprings.jpg';
import safari2 from '../assets/safaris/Budge.jpg';
import safari3 from '../assets/safaris/Bus.JPG';
import safari4 from '../assets/safaris/Lake.jpg';

const Safaris = () => {
  const safaris = [
    {
      id: 1,
      title: 'Maasai Mara Great Migration Safari',
      duration: '5 Days / 4 Nights',
      locations: ['Maasai Mara', 'Nairobi'],
      highlights: ['Great Migration', 'Big Five', 'Hot Air Balloon', 'Cultural Visits'],
      price: '$1,499',
      rating: 4.9,
      reviews: 127,
      image: safari1,
      featured: true
    },
    {
      id: 2,
      title: 'Serengeti Wilderness Expedition',
      duration: '7 Days / 6 Nights',
      locations: ['Serengeti', 'Ngorongoro'],
      highlights: ['Lion Tracking', 'Wildebeest Crossing', 'Luxury Tents', 'Night Safaris'],
      price: '$2,199',
      rating: 4.8,
      reviews: 89,
      image: safari2,
      featured: true
    },
    {
      id: 3,
      title: 'Amboseli Elephant Safari',
      duration: '4 Days / 3 Nights',
      locations: ['Amboseli', 'Kilimanjaro View'],
      highlights: ['Elephant Herds', 'Kilimanjaro Views', 'Bird Watching', 'Maasai Village'],
      price: '$899',
      rating: 4.7,
      reviews: 156,
      image: safari3,
      featured: false
    },
    {
      id: 4,
      title: 'Lake Nakuru Flamingo Safari',
      duration: '3 Days / 2 Nights',
      locations: ['Lake Nakuru', 'Lake Naivasha'],
      highlights: ['Flamingo Flocks', 'Rhino Sanctuary', 'Hells Gate Biking', 'Boat Rides'],
      price: '$649',
      rating: 4.6,
      reviews: 93,
      image: safari4,
      featured: false
    }
  ];

  const safariTypes = [
    { icon: '🦁', name: 'Big Five Safari', count: '12 tours' },
    { icon: '🎈', name: 'Luxury Safari', count: '8 tours' },
    { icon: '👨‍👩‍👧‍👦', name: 'Family Safari', count: '6 tours' },
    { icon: '📸', name: 'Photography Safari', count: '9 tours' },
    { icon: '🌙', name: 'Night Safari', count: '4 tours' },
    { icon: '🚶', name: 'Walking Safari', count: '7 tours' }
  ];

  return (
    <div className="safaris-page">
      {/* Hero Section */}
      <section className="safari-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Experience East Africa's <span className="highlight">Wild Wonders</span></h1>
            <p>From the Great Migration to Big Five encounters, our safaris offer unforgettable wildlife experiences with expert guides and sustainable tourism practices.</p>
            <div className="hero-search">
              <div className="search-box">
                <input type="text" placeholder="Search safaris by location, duration, or budget..." />
                <button className="search-btn">
                  <i className="fas fa-search"></i> Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safari Types */}
      <section className="safari-types">
        <div className="container">
          <div className="section-header">
            <h2>Safari <span className="highlight">Experiences</span></h2>
            <p>Choose from our curated selection of safari adventures</p>
          </div>
          
          <div className="types-grid">
            {safariTypes.map((type, index) => (
              <div key={index} className="type-card">
                <div className="type-icon">{type.icon}</div>
                <h3>{type.name}</h3>
                <p>{type.count}</p>
                <button className="type-btn">Explore</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Safaris */}
      <section className="featured-safaris">
        <div className="container">
          <div className="section-header">
            <h2>Featured <span className="highlight">Safaris</span></h2>
            <p>Our most popular and highly-rated safari packages</p>
          </div>
          
          <div className="safaris-grid">
            {safaris.map(safari => (
              <div key={safari.id} className={`safari-card ${safari.featured ? 'featured' : ''}`}>
                {safari.featured && <span className="featured-badge">Featured</span>}
                <div className="safari-image">
                  <img src={safari.image} alt={safari.title} />
                  <div className="safari-rating">
                    <i className="fas fa-star"></i>
                    <span>{safari.rating}</span>
                    <span className="reviews">({safari.reviews} reviews)</span>
                  </div>
                </div>
                <div className="safari-content">
                  <h3>{safari.title}</h3>
                  <div className="safari-meta">
                    <span className="duration"><i className="far fa-calendar"></i> {safari.duration}</span>
                    <span className="locations"><i className="fas fa-map-marker-alt"></i> {safari.locations.join(', ')}</span>
                  </div>
                  <div className="safari-highlights">
                    {safari.highlights.map((highlight, index) => (
                      <span key={index} className="highlight-tag">{highlight}</span>
                    ))}
                  </div>
                  <div className="safari-footer">
                    <div className="safari-price">
                      <span className="from">From</span>
                      <span className="price">{safari.price}</span>
                      <span className="per-person">per person</span>
                    </div>
                    <div className="safari-actions">
                      <button className="btn-details">View Details</button>
                      <button className="btn-book">Book Now</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safari Highlights */}
      <section className="safari-highlights-section">
        <div className="container">
          <div className="highlight-content">
            <div className="highlight-text">
              <h2>Why Choose AdventureGo Safaris?</h2>
              <div className="highlight-list">
                <div className="highlight-item">
                  <div className="highlight-icon">
                    <i className="fas fa-user-shield"></i>
                  </div>
                  <div className="highlight-details">
                    <h4>Expert Local Guides</h4>
                    <p>Certified guides with 10+ years of experience</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">
                    <i className="fas fa-leaf"></i>
                  </div>
                  <div className="highlight-details">
                    <h4>Sustainable Tourism</h4>
                    <p>Eco-friendly practices that protect wildlife</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">
                    <i className="fas fa-hotel"></i>
                  </div>
                  <div className="highlight-details">
                    <h4>Premium Accommodation</h4>
                    <p>Carefully selected lodges and luxury camps</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">
                    <i className="fas fa-camera"></i>
                  </div>
                  <div className="highlight-details">
                    <h4>Photography Support</h4>
                    <p>Professional photography guidance included</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="highlight-image">
              <img src={safari1} alt="Safari Experience" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="safari-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready for Your Adventure?</h2>
            <p>Contact our safari experts to customize your perfect wildlife experience</p>
            <div className="cta-buttons">
              <button className="btn-primary">
                <i className="fas fa-phone-alt"></i> Call Us: +254 700 123 456
              </button>
              <button className="btn-secondary">
                <i className="fas fa-comments"></i> Live Chat
              </button>
              <button className="btn-outline">
                <i className="fas fa-file-alt"></i> Get Custom Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Safaris;