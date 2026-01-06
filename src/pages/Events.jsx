import React from 'react';
import './Events.css';
import event1 from '../assets/events/Adventure.jpeg';
import event2 from '../assets/events/Advlogo.jpeg';
import event3 from '../assets/events/Ololokwe.jpg';
import event4 from '../assets/events/Waterfall.jpg';

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'Annual Mountain Trek Challenge',
      date: 'March 15-17, 2024',
      location: 'Mount Kenya',
      description: 'Join our 3-day trekking challenge across Mount Kenya\'s scenic trails. Suitable for both beginners and experienced hikers.',
      image: event1,
      category: 'Adventure',
      price: '$299',
      spots: '12/25 spots left'
    },
    {
      id: 2,
      title: 'Wildlife Safari Expedition',
      date: 'April 5-10, 2024',
      location: 'Maasai Mara National Reserve',
      description: 'Experience the great migration up close with expert guides. Luxury camping and photography workshops included.',
      image: event2,
      category: 'Wildlife',
      price: '$899',
      spots: '5/15 spots left'
    },
    {
      id: 3,
      title: 'Cultural Heritage Festival',
      date: 'May 20-22, 2024',
      location: 'Lamu Island',
      description: 'Celebrate Swahili culture with traditional music, food, and crafts. Interactive workshops and cultural exchanges.',
      image: event3,
      category: 'Culture',
      price: '$199',
      spots: '20/30 spots left'
    },
    {
      id: 4,
      title: 'Beach Conservation Weekend',
      date: 'June 8-9, 2024',
      location: 'Diani Beach',
      description: 'Combine beach relaxation with environmental conservation. Includes turtle watching and coral reef education.',
      image: event4,
      category: 'Conservation',
      price: '$149',
      spots: '18/20 spots left'
    }
  ];

  const upcomingEvents = [
    { id: 5, title: 'Hot Air Balloon Safari', date: 'July 12, 2024', location: 'Serengeti' },
    { id: 6, title: 'Gorilla Trekking Adventure', date: 'August 3-6, 2024', location: 'Bwindi Forest' },
    { id: 7, title: 'Desert Star Gazing', date: 'September 15, 2024', location: 'Samburu' },
    { id: 8, title: 'River Rafting Challenge', date: 'October 20, 2024', location: 'Tana River' }
  ];

  return (
    <div className="events-page">
      {/* Hero Section */}
      <section className="events-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Upcoming <span className="highlight">Adventures</span></h1>
            <p>Join unforgettable experiences across East Africa. From mountain treks to wildlife safaris, find your next adventure.</p>
            <div className="hero-stats">
              <div className="stat">
                <span className="number">48+</span>
                <span className="label">Events This Year</span>
              </div>
              <div className="stat">
                <span className="number">2,500+</span>
                <span className="label">Happy Adventurers</span>
              </div>
              <div className="stat">
                <span className="number">15</span>
                <span className="label">Expert Guides</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="featured-events">
        <div className="container">
          <div className="section-header">
            <h2>Featured <span className="highlight">Events</span></h2>
            <p>Hand-picked adventures for the ultimate experience</p>
          </div>
          
          <div className="events-grid">
            {events.map(event => (
              <div key={event.id} className="event-card">
                <div className="event-image">
                  <img src={event.image} alt={event.title} />
                  <span className="event-category">{event.category}</span>
                </div>
                <div className="event-content">
                  <div className="event-meta">
                    <span className="date"><i className="far fa-calendar"></i> {event.date}</span>
                    <span className="location"><i className="fas fa-map-marker-alt"></i> {event.location}</span>
                  </div>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  <div className="event-footer">
                    <div className="event-price">
                      <span className="price">{event.price}</span>
                      <span className="duration">per person</span>
                    </div>
                    <div className="event-availability">
                      <span className="spots">{event.spots}</span>
                      <button className="btn-book">Book Now</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="upcoming-events">
        <div className="container">
          <div className="section-header">
            <h2>Upcoming <span className="highlight">Events</span></h2>
            <p>Mark your calendar for these exciting adventures</p>
          </div>
          
          <div className="upcoming-list">
            {upcomingEvents.map(event => (
              <div key={event.id} className="upcoming-item">
                <div className="upcoming-date">
                  <div className="date-badge">
                    <span className="month">{event.date.split(' ')[0]}</span>
                    <span className="day">{event.date.split(' ')[1].replace(',', '')}</span>
                  </div>
                </div>
                <div className="upcoming-details">
                  <h4>{event.title}</h4>
                  <p><i className="fas fa-map-marker-alt"></i> {event.location}</p>
                </div>
                <div className="upcoming-actions">
                  <button className="btn-outline">Remind Me</button>
                  <button className="btn-primary">Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="events-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Can't Find What You're Looking For?</h2>
            <p>Customize your own adventure or join our newsletter for exclusive event announcements.</p>
            <div className="cta-buttons">
              <button className="btn-primary">Customize Adventure</button>
              <button className="btn-secondary">Subscribe to Newsletter</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;