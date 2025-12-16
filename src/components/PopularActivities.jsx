import React, { useState } from 'react';
import './PopularActivities.css';

const PopularActivities = () => {
  // All activities data
  const allActivities = [
    {
      id: 1,
      title: 'Safari Game Drives',
      description: 'Witness the Big Five in their natural habitat with expert guides.',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: 'fas fa-binoculars',
      category: 'wildlife',
      featured: true
    },
    {
      id: 2,
      title: 'Mountain Hiking',
      description: 'Conquer peaks like Kilimanjaro and Mount Kenya with experienced guides.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: 'fas fa-mountain',
      category: 'adventure',
      featured: true
    },
    {
      id: 3,
      title: 'Hot Air Balloon Safaris',
      description: 'Soar above the savanna at sunrise for breathtaking aerial views.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: 'fas fa-hot-air-balloon',
      category: 'scenic',
      featured: true
    },
    {
      id: 4,
      title: 'White Water Rafting',
      description: 'Navigate thrilling rapids on East Africa\'s wild rivers.',
      image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: 'fas fa-water',
      category: 'adventure',
      featured: true
    },
    {
      id: 5,
      title: 'Cultural Village Tours',
      description: 'Immerse yourself in local Maasai and tribal communities.',
      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: 'fas fa-users',
      category: 'cultural',
      featured: false
    },
    {
      id: 6,
      title: 'Bird Watching',
      description: 'Spot exotic bird species in diverse East African ecosystems.',
      image: 'https://images.unsplash.com/photo-1518834103328-93d45986dce1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: 'fas fa-dove',
      category: 'wildlife',
      featured: false
    },
    {
      id: 7,
      title: 'Beach & Island Getaways',
      description: 'Relax on pristine beaches of Zanzibar and coastal Kenya.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: 'fas fa-umbrella-beach',
      category: 'leisure',
      featured: false
    },
    {
      id: 8,
      title: 'Photography Expeditions',
      description: 'Capture stunning wildlife and landscape shots with pros.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: 'fas fa-camera',
      category: 'specialty',
      featured: false
    }
  ];

  // State for filtering
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(4);

  // Filter activities
  const filteredActivities = activeFilter === 'all' 
    ? allActivities 
    : allActivities.filter(activity => activity.category === activeFilter);

  // Activities to display (first 4 or filtered)
  const displayedActivities = filteredActivities.slice(0, visibleCount);

  // Filter options
  const filters = [
    { id: 'all', label: 'All Activities' },
    { id: 'adventure', label: 'Adventure' },
    { id: 'wildlife', label: 'Wildlife' },
    { id: 'cultural', label: 'Cultural' },
    { id: 'leisure', label: 'Leisure' }
  ];

  return (
    <section className="popular-activities">
      <div className="container">
        {/* Section Header */}
        <div className="activities-header">
          <h6 className="section-subtitle">Experience Adventure</h6>
          <h2 className="section-title">
            Popular <span className="highlight">Activities</span>
          </h2>
          <p className="section-description">
            From thrilling safaris to cultural immersions, discover the activities that make East Africa unforgettable.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="activities-filter">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => {
                setActiveFilter(filter.id);
                setVisibleCount(4);
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Activities Grid */}
        <div className="activities-grid">
          {displayedActivities.map((activity) => (
            <div 
              className="activity-card" 
              key={activity.id}
              data-aos="fade-up"
            >
              {/* Image Container */}
              <div className="card-image">
                <img src={activity.image} alt={activity.title} />
                <div className="image-overlay"></div>
                
                {/* Category Badge */}
                <div className="category-badge">
                  <i className={activity.icon}></i>
                  <span>{activity.category}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="card-content">
                <h3 className="card-title">{activity.title}</h3>
                <p className="card-description">{activity.description}</p>
                
                {/* Action Button */}
                <button className="activity-btn">
                  <span>Explore Activity</span>
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>

              {/* Hover Effect Layer */}
              <div className="card-hover-layer">
                <div className="hover-content">
                  <h4>What to Expect</h4>
                  <ul>
                    <li><i className="fas fa-check"></i> Expert guides</li>
                    <li><i className="fas fa-check"></i> All equipment provided</li>
                    <li><i className="fas fa-check"></i> Safety briefing</li>
                    <li><i className="fas fa-check"></i> Photo opportunities</li>
                  </ul>
                  <button className="btn btn-primary">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More / View All Button */}
        {visibleCount < filteredActivities.length && (
          <div className="view-more-container">
            <button 
              className="btn btn-outline"
              onClick={() => setVisibleCount(prev => prev + 4)}
            >
              <i className="fas fa-plus"></i> Load More Activities
            </button>
          </div>
        )}

        {/* View All Link */}
        <div className="view-all-link">
          <a href="#all-activities" className="view-all">
            View All Activities <i className="fas fa-chevron-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PopularActivities;