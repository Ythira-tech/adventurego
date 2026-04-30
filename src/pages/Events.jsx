import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Events.css';

// Import local images from src/assets/events
import event1 from '../assets/events/Adventure.jpeg';
import event2 from '../assets/events/Advlogo.jpeg';
import event3 from '../assets/events/Ololokwe.jpg';
import event4 from '../assets/events/register-bg.jpg';
import event5 from '../assets/events/Waterfall.jpg';
import event6 from '../assets/events/Adventure.jpeg';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(9);

  // Hardcoded events data with local images
  const eventsData = [
    {
      id: 1,
      title: 'Mangunyo Forest, Aberdares',
      date: 'Dec 6',
      location: 'Aberdares National Park',
      type: 'Hiking',
      price: 'Ksh.3,850',
      seats: 4,
      image: event1,
      slug: 'mangunyo-forest-aberdares',
      description: 'Explore the lush Mangunyo Forest in the Aberdares Range, known for its beautiful waterfalls, diverse birdlife, and stunning views.',
      difficulty: 'Moderate',
      driveDuration: '3-4 hours'
    },
    {
      id: 2,
      title: 'Mt. Ol Doinyo Lengai',
      date: 'Dec 12-14',
      location: 'Tanzania',
      type: 'Adventure',
      price: 'Ksh.54,900',
      seats: 8,
      image: event2,
      slug: 'mt-ol-doinyo-lengai',
      description: 'Conquer the "Mountain of God" - Ol Doinyo Lengai, an active volcano in Tanzania.',
      difficulty: 'Challenging',
      driveDuration: '6-7 hours'
    },
    {
      id: 3,
      title: 'Chyulu Hills',
      date: 'Dec 22-23',
      location: 'Amboselli',
      type: 'Wildlife',
      price: 'Ksh.15,000',
      seats: 2,
      image: event3,
      slug: 'chyulu-hills',
      description: 'Experience the beautiful Chyulu Hills with stunning views and wildlife sightings.',
      difficulty: 'Easy',
      driveDuration: '4-5 hours'
    },
    {
      id: 4,
      title: 'Photography Workshop',
      date: 'Oct 3-8',
      location: 'Amboseli',
      type: 'Workshop',
      price: 'Contact for Price',
      seats: 10,
      image: event4,
      slug: 'photography-workshop',
      description: 'Learn wildlife photography from professional photographers in the stunning Amboseli landscape.',
      difficulty: 'Easy',
      driveDuration: '4 hours'
    },
    {
      id: 5,
      title: 'Maasai Mara Safari',
      date: 'Jan 15-18',
      location: 'Narok',
      type: 'Wildlife',
      price: 'Ksh.22,500',
      seats: 6,
      image: event5,
      slug: 'maasai-mara-safari',
      description: 'Experience the world-famous Maasai Mara with its abundant wildlife and stunning landscapes.',
      difficulty: 'Easy',
      driveDuration: '5-6 hours'
    },
    {
      id: 6,
      title: 'Mt. Kenya Summit',
      date: 'Feb 5-7',
      location: 'Nyeri',
      type: 'Hiking',
      price: 'Ksh.18,900',
      seats: 3,
      image: event6,
      slug: 'mt-kenya-summit',
      description: 'Summit Mount Kenya, Africa\'s second-highest peak, with experienced guides.',
      difficulty: 'Challenging',
      driveDuration: '3-4 hours'
    }
  ];

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setEvents(eventsData);
      setLoading(false);
    }, 500);
  }, []);

  // Categories based on event types
  const categories = ['All', 'Hiking', 'Adventure', 'Wildlife', 'Workshop'];

  // Filter events by type
  const filteredEvents = activeCategory === 'All' 
    ? events 
    : events.filter(event => event.type === activeCategory);

  const displayedEvents = filteredEvents.slice(0, visibleCount);

  const calculateSpotsPercentage = (seats) => {
    const maxSeats = 10;
    return ((maxSeats - seats) / maxSeats) * 100;
  };

  // Show loading state
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading events...</p>
      </div>
    );
  }

  return (
    <div className="events-page">
      {/* Hero Section */}
      <section className="events-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Upcoming <span className="highlight">Adventures</span></h1>
            <p>Join unforgettable experiences across East Africa. From mountain treks to wildlife safaris, find your next adventure.</p>
          </div>
        </div>
      </section>

      {/* Events Grid Section */}
      <section className="events-grid-section">
        <div className="container">
          {/* Filter Section */}
          <div className="events-filter">
            <div className="filter-header">
              <h2>Discover Your Next Adventure</h2>
              <p>Browse through our curated collection of upcoming events</p>
            </div>
            <div className="category-filters">
              {categories.map((category) => (
                <button 
                  key={category}
                  className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => {
                    setActiveCategory(category);
                    setVisibleCount(9);
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="search-filter">
              <div className="search-box">
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Search events..." />
              </div>
              <div className="sort-options">
                <span>Sort by:</span>
                <select>
                  <option>Most Popular</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Date: Soonest</option>
                </select>
              </div>
            </div>
          </div>

          {/* Events Grid */}
          {displayedEvents.length === 0 ? (
            <div className="no-events">
              <i className="fas fa-calendar-times"></i>
              <h3>No Events Found</h3>
              <p>There are no events in this category at the moment.</p>
            </div>
          ) : (
            <div className="events-grid-container">
              {displayedEvents.map(event => (
                <div key={event.id} className="event-card">
                  {/* Card Image with Type Badge */}
                  <div className="card-image">
                    <img src={event.image} alt={event.title} />
                    <div className="category-badge">{event.type}</div>
                    <div className={`difficulty-badge difficulty-${event.difficulty?.toLowerCase() || 'moderate'}`}>
                      {event.difficulty || 'Moderate'}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="card-content">
                    <div className="card-header">
                      <h3>{event.title}</h3>
                      <div className="price-tag">{event.price || '$0'}</div>
                    </div>
                    
                    <p className="card-description">{event.description}</p>
                    
                    <div className="card-details">
                      <div className="detail-item">
                        <i className="far fa-calendar"></i>
                        <span>{event.date}</span>
                      </div>
                      <div className="detail-item">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>{event.location}</span>
                      </div>
                      <div className="detail-item">
                        <i className="far fa-clock"></i>
                        <span>{event.driveDuration || 'Full day'}</span>
                      </div>
                    </div>

                    {/* Progress Bar for Seats */}
                    {event.seats && (
                      <div className="spots-progress">
                        <div className="progress-header">
                          <span>Available Spots</span>
                          <span className="spots-count">{event.seats} seats left</span>
                        </div>
                        <div className="progress-bar">
                          <div 
                            className="progress-fill" 
                            style={{ width: `${calculateSpotsPercentage(event.seats)}%` }}
                          ></div>
                        </div>
                      </div>
                    )}

                    {/* Card Footer */}
                    <div className="card-footer">
                      <Link to={`/events/${event.slug}`} className="btn-details">
                        <i className="far fa-eye"></i> View Details
                      </Link>
                      <Link to="/booking" className="btn-book">
                        <i className="far fa-calendar-check"></i> Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Load More Button */}
          {visibleCount < filteredEvents.length && (
            <div className="load-more">
              <button 
                className="btn-load-more"
                onClick={() => setVisibleCount(prev => prev + 6)}
              >
                <i className="fas fa-sync-alt"></i> Load More Events
              </button>
            </div>
          )}

          {/* Newsletter CTA */}
          <div className="newsletter-cta">
            <div className="cta-icon">
              <i className="far fa-envelope"></i>
            </div>
            <div className="cta-content">
              <h3>Never Miss an Adventure</h3>
              <p>Subscribe to our newsletter and be the first to know about new events and exclusive offers.</p>
              <div className="subscribe-form">
                <input type="email" placeholder="Enter your email address" />
                <button className="btn-subscribe">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;