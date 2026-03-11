import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../services/api';
import './UpcomingEvents.css';

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageErrors, setImageErrors] = useState({});

  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const data = await api.get('/events');
      console.log('Events loaded:', data);
      setEvents(data);
      setError(null);
    } catch (error) {
      console.error('Error fetching events:', error);
      setError('Failed to load events. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleImageError = (eventId) => {
    setImageErrors(prev => ({ ...prev, [eventId]: true }));
  };

  const checkScrollPosition = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  useEffect(() => {
    checkScrollPosition();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollPosition);
      return () => container.removeEventListener('scroll', checkScrollPosition);
    }
  }, [events]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const scrollLeftArrow = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRightArrow = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  if (loading) return <div className="loading">Loading events...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <section className="events-upcoming-section">
      <div className="events-container">
        <div className="events-header-section">
          <h6 className="events-subtitle">Upcoming Events</h6>
          <h2 className="events-title">Don't Miss These <span className="events-highlight">Adventures</span></h2>
          <p className="events-description">Book your spot before they fill up.</p>
        </div>

        {events.length === 0 ? (
          <div className="no-events">No upcoming events</div>
        ) : (
          <div className="events-scroll-wrapper">
            {showLeftArrow && (
              <button className="events-scroll-arrow events-arrow-left" onClick={scrollLeftArrow}>
                <i className="fas fa-chevron-left"></i>
              </button>
            )}

            <div 
              className="events-scroll-container"
              ref={scrollContainerRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              <div className="events-cards-track">
                {events.map((event) => (
                  <div 
                    className="events-card-item" 
                    key={event.id}
                    style={{ 
                      backgroundImage: imageErrors[event.id] 
                        ? 'none' 
                        : `url(http://localhost:5000${event.image}?t=${Date.now()})`,
                      backgroundColor: imageErrors[event.id] ? '#2ecc71' : 'transparent'
                    }}
                  >
                    {imageErrors[event.id] && (
                      <div style={{ 
                        color: 'white', 
                        padding: '20px', 
                        textAlign: 'center',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        {event.title}
                      </div>
                    )}
                    
                    <Link to={`/events/${event.slug}`} className="events-view-details-btn">
                      <i className="fas fa-eye"></i> View Details
                    </Link>

                    <div className="events-card-content">
                      <div className="events-type-badge">{event.type}</div>
                      <div className="events-info-section">
                        <h3 className="events-card-title">{event.title}</h3>
                        <div className="events-meta-info">
                          <div className="events-meta-item">
                            <i className="fas fa-calendar-alt"></i>
                            <span>{event.date}</span>
                          </div>
                          <div className="events-meta-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="events-card-footer">
                        <div className="events-price-tag">
                          <i className="fas fa-tag"></i>
                          <span>{event.price}</span>
                        </div>
                        <div className="events-seats-info">
                          <i className="fas fa-users"></i>
                          <span>{event.seats} seats left</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {showRightArrow && (
              <button className="events-scroll-arrow events-arrow-right" onClick={scrollRightArrow}>
                <i className="fas fa-chevron-right"></i>
              </button>
            )}
          </div>
        )}

        <div className="events-scroll-indicator">
          <div className="events-scroll-dots">
            <div className="events-scroll-track">
              <div className="events-scroll-thumb"></div>
            </div>
          </div>
          <span className="events-scroll-hint">← Scroll or drag →</span>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;