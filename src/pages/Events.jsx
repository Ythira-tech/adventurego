import React from 'react';
import './Events.css';

const Events = () => {
  const events = [
    {
      id: 1,
      title: 'Annual Mountain Trek Challenge',
      date: 'March 15-17, 2024',
      location: 'Mount Kenya',
      description: 'Join our 3-day trekking challenge across Mount Kenya\'s scenic trails. Suitable for both beginners and experienced hikers.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Adventure',
      price: '$299',
      duration: '3 days',
      difficulty: 'Moderate',
      spots: '12/25'
    },
    {
      id: 2,
      title: 'Wildlife Safari Expedition',
      date: 'April 5-10, 2024',
      location: 'Maasai Mara National Reserve',
      description: 'Experience the great migration up close with expert guides. Luxury camping and photography workshops included.',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80',
      category: 'Wildlife',
      price: '$899',
      duration: '6 days',
      difficulty: 'Easy',
      spots: '5/15'
    },
    {
      id: 3,
      title: 'Cultural Heritage Festival',
      date: 'May 20-22, 2024',
      location: 'Lamu Island',
      description: 'Celebrate Swahili culture with traditional music, food, and crafts. Interactive workshops and cultural exchanges.',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Culture',
      price: '$199',
      duration: '3 days',
      difficulty: 'Easy',
      spots: '20/30'
    },
    {
      id: 4,
      title: 'Beach Conservation Weekend',
      date: 'June 8-9, 2024',
      location: 'Diani Beach',
      description: 'Combine beach relaxation with environmental conservation. Includes turtle watching and coral reef education.',
      image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80',
      category: 'Conservation',
      price: '$149',
      duration: '2 days',
      difficulty: 'Easy',
      spots: '18/20'
    },
    {
      id: 5,
      title: 'Hot Air Balloon Safari',
      date: 'July 12, 2024',
      location: 'Serengeti',
      description: 'Experience breathtaking views of the Serengeti plains from a hot air balloon. Includes champagne breakfast.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Adventure',
      price: '$450',
      duration: '1 day',
      difficulty: 'Easy',
      spots: '8/12'
    },
    {
      id: 6,
      title: 'Gorilla Trekking Adventure',
      date: 'August 3-6, 2024',
      location: 'Bwindi Forest',
      description: 'An unforgettable encounter with mountain gorillas in their natural habitat. Led by expert trackers.',
      image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Wildlife',
      price: '$1500',
      duration: '4 days',
      difficulty: 'Challenging',
      spots: '6/10'
    },
    {
      id: 7,
      title: 'Desert Star Gazing',
      date: 'September 15, 2024',
      location: 'Samburu',
      description: 'Experience the magic of the desert night sky with professional astronomers and traditional storytelling.',
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Nature',
      price: '$120',
      duration: '1 night',
      difficulty: 'Easy',
      spots: '15/20'
    },
    {
      id: 8,
      title: 'River Rafting Challenge',
      date: 'October 20, 2024',
      location: 'Tana River',
      description: 'White water rafting adventure through rapids and calm waters. All equipment and safety gear provided.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Extreme',
      price: '$180',
      duration: '1 day',
      difficulty: 'Difficult',
      spots: '10/15'
    },
    {
      id: 9,
      title: 'Bird Watching Expedition',
      date: 'November 10-12, 2024',
      location: 'Kakamega Forest',
      description: 'Discover over 300 bird species in Kenya\'s only tropical rainforest. Guided by expert ornithologists.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      category: 'Nature',
      price: '$320',
      duration: '3 days',
      difficulty: 'Moderate',
      spots: '14/18'
    }
  ];

  const categories = ['All', 'Adventure', 'Wildlife', 'Culture', 'Conservation', 'Nature', 'Extreme'];

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
              {categories.map((category, index) => (
                <button 
                  key={index} 
                  className={`category-btn ${index === 0 ? 'active' : ''}`}
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
          <div className="events-grid-container">
            {events.map(event => (
              <div key={event.id} className="event-card">
                {/* Card Image with Category Badge */}
                <div className="card-image">
                  <img src={event.image} alt={event.title} />
                  <div className="category-badge">{event.category}</div>
                  <div className="difficulty-badge difficulty-{event.difficulty.toLowerCase()}">
                    {event.difficulty}
                  </div>
                </div>

                {/* Card Content */}
                <div className="card-content">
                  <div className="card-header">
                    <h3>{event.title}</h3>
                    <div className="price-tag">{event.price}</div>
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
                      <span>{event.duration}</span>
                    </div>
                  </div>

                  {/* Progress Bar for Spots */}
                  <div className="spots-progress">
                    <div className="progress-header">
                      <span>Available Spots</span>
                      <span className="spots-count">{event.spots} left</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ 
                        width: `${(parseInt(event.spots.split('/')[0]) / parseInt(event.spots.split('/')[1])) * 100}%` 
                      }}></div>
                    </div>
                  </div>

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

          {/* Load More Button */}
          <div className="load-more">
            <button className="btn-load-more">
              <i className="fas fa-sync-alt"></i> Load More Events
            </button>
          </div>

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