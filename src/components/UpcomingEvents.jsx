import React from 'react';
import './UpcomingEvents.css';

const UpcomingEvents = () => {
  const events = [
    { id: 1, title: 'Great Migration Safari', date: 'Jul 15-22', month: 'JUL', day: '15', location: 'Maasai Mara', type: 'Safari', status: 'Filling Fast', seats: 4, color: '#2ecc71' },
    { id: 2, title: 'Kilimanjaro Summit', date: 'Aug 5-12', month: 'AUG', day: '05', location: 'Kilimanjaro', type: 'Trekking', status: 'Available', seats: 8, color: '#27ae60' },
    { id: 3, title: 'Gorilla Trekking', date: 'Sep 10-15', month: 'SEP', day: '10', location: 'Bwindi Forest', type: 'Wildlife', status: 'Limited', seats: 2, color: '#1abc9c' },
    { id: 4, title: 'Photography Workshop', date: 'Oct 3-8', month: 'OCT', day: '03', location: 'Amboseli', type: 'Workshop', status: 'New', seats: 10, color: '#3498db' },
  ];

  return (
    <section className="upcoming-events">
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

              <div className="timeline-content">
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