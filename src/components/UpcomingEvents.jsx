import React from 'react';
import './UpcomingEvents.css';

const UpcomingEvents = () => {
  const events = [
    { 
      id: 1, 
      title: 'Mangunyo Forest, Aberdares', 
      date: 'Dec 6', 
      month: 'DEC', 
      day: '6', 
      location: 'Aberdares National Park', 
      type: 'Hiking', 
      status: 'Ksh.3,850', 
      seats: 4, 
      color: '#2ecc71',
      image: 'https://www.lakenakurukenya.com/wp-content/uploads/2022/04/aberdare3-750x450.jpg'
    },
    { 
      id: 2, 
      title: 'Mt. Ol Doinyo Lengai/Lake Natron/Engaresero', 
      date: 'Dec 12-14', 
      month: 'DEC', 
      day: '12', 
      location: 'Tanzania', 
      type: 'Adventure', 
      status: 'Ksh.54,900', 
      seats: 8, 
      color: '#27ae60',
      image: 'https://www.lightsonafrica.com/wp-content/uploads/2024/07/Ol-Doinyo-Lengai-Mountain-Lake-Natron-Tanzania.jpg'
    },
    { 
      id: 3, 
      title: 'Chyulu Hills', 
      date: 'Dec 22-23', 
      month: 'DEC', 
      day: '22', 
      location: 'Amboselli', 
      type: 'Wildlife', 
      status: 'Ksh.15,000', 
      seats: 2, 
      color: '#1abc9c',
      image: 'https://www.amboseliparkkenya.com/wp-content/uploads/2024/10/chyulu-hills-safari-lodges-ol-donyo-800x500-163-1.jpg'
    },
    { 
      id: 4, 
      title: 'Photography Workshop', 
      date: 'Oct 3-8', 
      month: 'OCT', 
      day: '03', 
      location: 'Amboseli', 
      type: 'Workshop', 
      status: 'New', 
      seats: 10, 
      color: '#3498db',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
  ];

  // SVG Icons - UPDATED WITH VISIBLE COLORS
  const ElephantIcon = () => (
    <svg className="animal-icon" viewBox="0 0 100 100">
      <path d="M50,20 Q70,10 80,30 Q85,45 75,60 Q65,75 50,80 Q35,75 25,60 Q15,45 20,30 Q30,10 50,20" 
            fill="rgba(46, 204, 113, 0.5)" stroke="rgba(46, 204, 113, 0.6)" strokeWidth="2"/>
      <circle cx="40" cy="35" r="3" fill="rgba(46, 204, 113, 0.7)"/>
      <circle cx="60" cy="35" r="3" fill="rgba(46, 204, 113, 0.7)"/>
      <path d="M50,65 Q55,75 45,75 Q40,70 50,65" fill="rgba(46, 204, 113, 0.6)"/>
    </svg>
  );

  const LionIcon = () => (
    <svg className="animal-icon" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="40" fill="rgba(46, 204, 113, 0.5)" stroke="rgba(46, 204, 113, 0.6)" strokeWidth="2"/>
      <circle cx="40" cy="40" r="5" fill="rgba(46, 204, 113, 0.7)"/>
      <circle cx="60" cy="40" r="5" fill="rgba(46, 204, 113, 0.7)"/>
      <path d="M35,55 Q50,65 65,55" stroke="rgba(46, 204, 113, 0.7)" strokeWidth="3" fill="none"/>
      {/* Mane */}
      <path d="M50,30 Q45,15 30,20 Q25,25 30,35 Q35,30 50,30" fill="rgba(46, 204, 113, 0.4)"/>
      <path d="M50,30 Q55,15 70,20 Q75,25 70,35 Q65,30 50,30" fill="rgba(46, 204, 113, 0.4)"/>
    </svg>
  );

  const GiraffeIcon = () => (
    <svg className="animal-icon" viewBox="0 0 100 100">
      {/* Body */}
      <rect x="40" y="40" width="20" height="40" rx="5" fill="rgba(46, 204, 113, 0.5)" stroke="rgba(46, 204, 113, 0.6)" strokeWidth="2"/>
      {/* Neck */}
      <rect x="45" y="20" width="10" height="25" rx="3" fill="rgba(46, 204, 113, 0.5)" stroke="rgba(46, 204, 113, 0.6)" strokeWidth="2"/>
      {/* Head */}
      <circle cx="50" cy="15" r="8" fill="rgba(46, 204, 113, 0.5)" stroke="rgba(46, 204, 113, 0.6)" strokeWidth="2"/>
      {/* Spots */}
      <circle cx="45" cy="50" r="3" fill="rgba(46, 204, 113, 0.7)"/>
      <circle cx="55" cy="60" r="3" fill="rgba(46, 204, 113, 0.7)"/>
      <circle cx="48" cy="70" r="3" fill="rgba(46, 204, 113, 0.7)"/>
    </svg>
  );

  return (
    <section className="upcoming-events">
      {/* Floating Animal Icons - NOW VISIBLE */}
      <div className="floating-icons">
        <div className="icon-1">
          <ElephantIcon />
        </div>
        <div className="icon-2">
          <LionIcon />
        </div>
        <div className="icon-3">
          <GiraffeIcon />
        </div>
      </div>
      
      <div className="container">
        <div className="events-header">
          <h6 className="section-subtitle">Upcoming Events</h6>
          <h2 className="section-title">Don't Miss These <span className="highlight">Adventures</span></h2>
          <p className="section-description">Book your spot before they fill up.</p>
        </div>

        <div className="events-timeline">
          {events.map((event, index) => (
            <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={event.id}>
              <div className="timeline-date" style={{ borderColor: event.color }}>
                <div className="date-month">{event.month}</div>
                <div className="date-day" style={{ backgroundColor: event.color }}>{event.day}</div>
              </div>

              {/* Timeline Content with Background Image */}
              <div 
                className="timeline-content"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${event.image})`
                }}
              >
                <div className="content-overlay"></div>
                
                <div className="content-header">
                  <h3 className="event-title">{event.title}</h3>
                  <div className="event-meta">
                    <span><i className="fas fa-map-marker-alt"></i> {event.location}</span>
                    <span><i className="fas fa-calendar-alt"></i> {event.date}</span>
                  </div>
                </div>

                <div className="event-details">
                  <span className="type-tag" style={{ backgroundColor: event.color }}>{event.type}</span>
                  <span className={`status-badge ${event.status.toLowerCase().replace(' ', '-')}`}>{event.status}</span>
                  <span className="seats-info"><i className="fas fa-users"></i> {event.seats} seats</span>
                </div>

                <div className="event-actions">
                  <button className="btn-details">Details</button>
                  <button className="btn-book" style={{ backgroundColor: event.color }}>Book Now</button>
                </div>
              </div>

              {index < events.length - 1 && (
                <div className="timeline-connector" style={{ backgroundColor: event.color }}></div>
              )}
            </div>
          ))}
        </div>

        <div className="events-footer">
          <button className="btn-view-all">View All Events <i className="fas fa-arrow-right"></i></button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;