import React, { useState, useRef, useEffect } from 'react';
import './UpcomingEvents.css';

const UpcomingEvents = () => {
  const events = [
    { 
      id: 1, 
      title: 'Mangunyo Forest, Aberdares', 
      date: 'Dec 6', 
      location: 'Aberdares National Park', 
      type: 'Hiking', 
      price: 'Ksh.3,850', 
      seats: 4,
      image: 'https://www.lakenakurukenya.com/wp-content/uploads/2022/04/aberdare3-750x450.jpg'
    },
    { 
      id: 2, 
      title: 'Mt. Ol Doinyo Lengai', 
      date: 'Dec 12-14', 
      location: 'Tanzania', 
      type: 'Adventure', 
      price: 'Ksh.54,900', 
      seats: 8,
      image: 'https://www.lightsonafrica.com/wp-content/uploads/2024/07/Ol-Doinyo-Lengai-Mountain-Lake-Natron-Tanzania.jpg'
    },
    { 
      id: 3, 
      title: 'Chyulu Hills', 
      date: 'Dec 22-23', 
      location: 'Amboselli', 
      type: 'Wildlife', 
      price: 'Ksh.15,000', 
      seats: 2,
      image: 'https://www.amboseliparkkenya.com/wp-content/uploads/2024/10/chyulu-hills-safari-lodges-ol-donyo-800x500-163-1.jpg'
    },
    { 
      id: 4, 
      title: 'Photography Workshop', 
      date: 'Oct 3-8', 
      location: 'Amboseli', 
      type: 'Workshop', 
      price: 'Contact for Price', 
      seats: 10,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    { 
      id: 5, 
      title: 'Maasai Mara Safari', 
      date: 'Jan 15-18', 
      location: 'Narok', 
      type: 'Wildlife', 
      price: 'Ksh.22,500', 
      seats: 6,
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    { 
      id: 6, 
      title: 'Mt. Kenya Summit', 
      date: 'Feb 5-7', 
      location: 'Nyeri', 
      type: 'Hiking', 
      price: 'Ksh.18,900', 
      seats: 3,
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Check scroll position to show/hide arrows
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
  }, []);

  // Mouse drag functionality
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

  // Arrow navigation
  const scrollLeftArrow = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -400,
        behavior: 'smooth'
      });
    }
  };

  const scrollRightArrow = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 400,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="upcoming-events">
      <div className="container">
        <div className="events-header">
          <h6 className="section-subtitle">Upcoming Events</h6>
          <h2 className="section-title">Don't Miss These <span className="highlight">Adventures</span></h2>
          <p className="section-description">Book your spot before they fill up.</p>
        </div>

        <div className="scroll-container-wrapper">
          {/* Left Arrow */}
          {showLeftArrow && (
            <button className="scroll-arrow left-arrow" onClick={scrollLeftArrow}>
              <i className="fas fa-chevron-left"></i>
            </button>
          )}

          {/* Horizontal Scroll Container */}
          <div 
            className="scroll-container"
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            <div className="cards-track">
              {events.map((event) => (
                <div 
                  className="event-card" 
                  key={event.id}
                  style={{ backgroundImage: `url(${event.image})` }}
                >
                  {/* Content Overlay */}
                  <div className="card-content">
                    <div className="event-badge">{event.type}</div>
                    <div className="event-info">
                      <h3 className="event-title">{event.title}</h3>
                      <div className="event-meta">
                        <div className="meta-item">
                          <i className="fas fa-calendar-alt"></i>
                          <span>{event.date}</span>
                        </div>
                        <div className="meta-item">
                          <i className="fas fa-map-marker-alt"></i>
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="event-footer">
                      <div className="price-tag">
                        <i className="fas fa-tag"></i>
                        <span>{event.price}</span>
                      </div>
                      <div className="seats-info">
                        <i className="fas fa-users"></i>
                        <span>{event.seats} seats left</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          {showRightArrow && (
            <button className="scroll-arrow right-arrow" onClick={scrollRightArrow}>
              <i className="fas fa-chevron-right"></i>
            </button>
          )}
        </div>

        <div className="scroll-indicator">
          <div className="scroll-dots">
            <div className="scroll-track">
              <div className="scroll-thumb"></div>
            </div>
          </div>
          <span className="scroll-hint">← Scroll or drag →</span>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;