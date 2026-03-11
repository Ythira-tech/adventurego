import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { api } from '../services/api';
import './EventDetail.css';

const EventDetail = () => {
  const { eventSlug } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_BASE_URL = process.env.REACT_APP_API_URL?.replace('/api', '') || 'http://localhost:5000';

  useEffect(() => {
    fetchEvent();
  }, [eventSlug]);

  const fetchEvent = async () => {
    try {
      setLoading(true);
      const data = await api.get(`/events/${eventSlug}`);
      setEvent(data);
      setError(null);
    } catch (error) {
      console.error('Error fetching event:', error);
      setError('Failed to load event details. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Show loading state
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading event details...</p>
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
        <Link to="/events" className="back-btn">
          <i className="fas fa-arrow-left"></i> Back to Events
        </Link>
      </div>
    );
  }

  // Show not found state
  if (!event) {
    return (
      <div className="event-not-found">
        <i className="fas fa-map-marker-alt"></i>
        <h1>Event Not Found</h1>
        <p>The event you're looking for doesn't exist or may have been removed.</p>
        <Link to="/events" className="back-btn">Back to Events</Link>
      </div>
    );
  }

  return (
    <div className="event-detail-page">
      {/* Hero Section - FIXED: Added base URL to image */}
      <section 
        className="event-hero" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${API_BASE_URL}${event.image})` 
        }}
      >
        <div className="container">
          <div className="event-hero-content">
            <div className="event-hero-badge">{event.type}</div>
            <h1 className="event-hero-title">{event.title}</h1>
            <div className="event-hero-meta">
              <span className="event-date">
                <i className="fas fa-calendar"></i> {event.date}
              </span>
              <span className="event-location">
                <i className="fas fa-map-marker-alt"></i> {event.location}
              </span>
              <span className="event-price">
                <i className="fas fa-tag"></i> {event.price}
              </span>
              <span className="event-seats">
                <i className="fas fa-users"></i> {event.seats} seats left
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="event-details-section">
        <div className="container">
          <div className="event-details-grid">
            {/* Left Column - Key Information */}
            <div className="event-info-column">
              <div className="info-card">
                <h3 className="info-title">
                  <i className="fas fa-road"></i> Trip Details
                </h3>
                <div className="info-grid">
                  <div className="info-item">
                    <span className="info-label">Drive Duration</span>
                    <span className="info-value">{event.driveDuration}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Hiking Distance</span>
                    <span className="info-value">{event.hikingDistance}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Difficulty</span>
                    <span className="info-value difficulty-badge">{event.difficulty}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Hiking Hours</span>
                    <span className="info-value">{event.hikingHours}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Departure Time</span>
                    <span className="info-value">{event.departureTime}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Return Time</span>
                    <span className="info-value">{event.returnTime}</span>
                  </div>
                </div>
              </div>

              <div className="info-card">
                <h3 className="info-title">
                  <i className="fas fa-map-marker-alt"></i> Pick-up Points
                </h3>
                <ul className="pickup-list">
                  {event.pickPoints?.map((point, index) => (
                    <li key={index} className="pickup-item">
                      <i className="fas fa-check-circle"></i> {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="book-now-card">
                <h3>Ready for Adventure?</h3>
                <p>Limited seats available. Book now to secure your spot!</p>
                <Link to={`/booking?event=${event.slug}`} className="book-now-btn">
                  <i className="fas fa-ticket-alt"></i> Book This Event
                </Link>
                <Link to="/events" className="back-to-events">
                  <i className="fas fa-arrow-left"></i> Back to All Events
                </Link>
              </div>
            </div>

            {/* Right Column - Detailed Information */}
            <div className="event-details-column">
              <div className="details-card">
                <h2 className="details-title">Event Description</h2>
                <p className="event-description">{event.description}</p>
              </div>

              <div className="details-card">
                <h2 className="details-title">
                  <i className="fas fa-tshirt"></i> What to Wear
                </h2>
                <ul className="details-list">
                  {event.whatToWear?.map((item, index) => (
                    <li key={index} className="details-item">
                      <i className="fas fa-check"></i> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="details-card">
                <h2 className="details-title">
                  <i className="fas fa-suitcase"></i> Items to Carry
                </h2>
                <ul className="details-list">
                  {event.itemsToCarry?.map((item, index) => (
                    <li key={index} className="details-item">
                      <i className="fas fa-check"></i> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="details-card">
                <h2 className="details-title">
                  <i className="fas fa-check-circle"></i> What's Included
                </h2>
                <ul className="inclusives-list">
                  {event.inclusives?.map((item, index) => (
                    <li key={index} className="inclusive-item">
                      <div className="inclusive-icon">
                        {index === 0 && <i className="fas fa-bus"></i>}
                        {index === 1 && <i className="fas fa-user-tie"></i>}
                        {index === 2 && <i className="fas fa-id-badge"></i>}
                        {index === 3 && <i className="fas fa-first-aid"></i>}
                        {index === 4 && <i className="fas fa-camera"></i>}
                        {index === 5 && <i className="fas fa-ticket"></i>}
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetail;