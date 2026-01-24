import React, { useState } from 'react';
import './PopularActivities.css';

const PopularActivities = () => {
  // All activities data
  const allActivities = [
    {
      id: 1,
      title: 'Safari Game Drives',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'wildlife',
      featured: true
    },
    {
      id: 2,
      title: 'Mountain Hiking',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'adventure',
      featured: true
    },
    {
      id: 3,
      title: 'Hot Air Balloon Safaris',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'scenic',
      featured: true
    },
    {
      id: 4,
      title: 'White Water Rafting',
      image: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'adventure',
      featured: true
    },
    {
      id: 5,
      title: 'Cultural Village Tours',
      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'cultural',
      featured: false
    },
    {
      id: 6,
      title: 'Bird Watching',
      image: 'https://images.unsplash.com/photo-1518834103328-93d45986dce1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'wildlife',
      featured: false
    },
    {
      id: 7,
      title: 'Beach & Island Getaways',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'leisure',
      featured: false
    },
    {
      id: 8,
      title: 'Photography Expeditions',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'specialty',
      featured: false
    },
    {
      id: 9,
      title: 'Wildlife Tracking',
      image: 'https://images.unsplash.com/photo-1573843989-c9d7ad3f2001?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'wildlife',
      featured: false
    },
    {
      id: 10,
      title: 'Camping & Stargazing',
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'adventure',
      featured: false
    }
  ];

  // State for filtering
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(8);

  // Filter activities
  const filteredActivities = activeFilter === 'all' 
    ? allActivities 
    : allActivities.filter(activity => activity.category === activeFilter);

  // Activities to display
  const displayedActivities = filteredActivities.slice(0, visibleCount);

  // Filter options
  const filters = [
    { id: 'all', label: 'All Activities' },
    { id: 'adventure', label: 'Adventure' },
    { id: 'wildlife', label: 'Wildlife' },
    { id: 'cultural', label: 'Cultural' },
    { id: 'leisure', label: 'Leisure' },
    { id: 'scenic', label: 'Scenic' },
    { id: 'specialty', label: 'Specialty' }
  ];

  return (
    <section className="activities-popular-section">
      <div className="activities-container">
        {/* Section Header */}
        <div className="activities-header-section">
          <h6 className="activities-subtitle">Experience Adventure</h6>
          <h2 className="activities-main-title">
            Popular <span className="activities-highlight">Activities</span>
          </h2>
          <p className="activities-description">
            From thrilling safaris to cultural immersions, discover the activities that make East Africa unforgettable.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="activities-filter-buttons">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`activities-filter-btn ${activeFilter === filter.id ? 'activities-filter-active' : ''}`}
              onClick={() => {
                setActiveFilter(filter.id);
                setVisibleCount(8);
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Activities Grid - PHOTOS ONLY */}
        <div className="activities-photos-grid">
          {displayedActivities.map((activity) => (
            <div 
              className="activities-photo-card" 
              key={activity.id}
            >
              {/* Image Container - PHOTO ONLY */}
              <div className="activities-photo-container">
                <img src={activity.image} alt={activity.title} className="activities-photo-image" />
                <div className="activities-photo-overlay"></div>
                
                {/* Title Label */}
                <div className="activities-title-container">
                  <h3 className="activities-photo-title">{activity.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredActivities.length && (
          <div className="activities-load-more">
            <button 
              className="activities-more-btn"
              onClick={() => setVisibleCount(prev => prev + 8)}
            >
              <i className="fas fa-plus"></i> Load More Activities
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PopularActivities;