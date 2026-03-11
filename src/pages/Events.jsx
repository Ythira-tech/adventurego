import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import './Events.css';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(9);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const data = await api.get('/events');
      console.log('Fetched events:', data); // Debug log
      setEvents(data);
      setError(null);
    } catch (error) {
      console.error('Error fetching events:', error);
      setError('Failed to load events. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Categories based on event types from your data
  const categories = ['All', 'Hiking', 'Adventure', 'Wildlife', 'Workshop'];

  // Filter events by type (not category)
  const filteredEvents = activeCategory === 'All' 
    ? events 
    : events.filter(event => event.type === activeCategory);

  const displayedEvents = filteredEvents.slice(0, visibleCount);

  // Calculate spots remaining (if needed for progress bar)
  const calculateSpotsPercentage = (seats) => {
    // Assuming seats is a number like 4 (available spots)
    // You can adjust this logic based on how you want to display
    return seats ? 100 - (seats * 10) : 50; // Just a placeholder calculation
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

  // Show error state
  if (error) {
    return (
      <div className="error-container">
        <i className="fas fa-exclamation-circle"></i>
        <h2>Oops! Something went wrong</h2>
        <p>{error}</p>
        <button className="retry-btn" onClick={fetchEvents}>
          <i className="fas fa-redo"></i> Try Again
        </button>
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
                    <img src={`http://localhost:5000${event.image}`} alt={event.title} />
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
                      <button className="btn-details">
                        <i className="far fa-eye"></i> View Details
                      </button>
                      <button className="btn-book">
                        <i className="far fa-calendar-check"></i> Book Now
                      </button>
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