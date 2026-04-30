import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './UpcomingEvents.css';

// Import local images from src/assets/events
import event1 from '../assets/events/Adventure.jpeg';
import event2 from '../assets/events/Advlogo.jpeg';
import event3 from '../assets/events/Ololokwe.jpg';
import event4 from '../assets/events/register-bg.jpg';
import event5 from '../assets/events/Waterfall.jpg';
import event6 from '../assets/events/Adventure.jpeg';

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

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
      slug: 'mangunyo-forest-aberdares'
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
      slug: 'mt-ol-doinyo-lengai'
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
      slug: 'chyulu-hills'
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
      slug: 'photography-workshop'
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
      slug: 'maasai-mara-safari'
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
      slug: 'mt-kenya-summit'
    }
  ];

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setEvents(eventsData);
      setLoading(false);
    }, 500);
  }, []);

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
                      backgroundImage: `url(${event.image})`
                    }}
                  >
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