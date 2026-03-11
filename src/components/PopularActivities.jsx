import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import './PopularActivities.css';

const PopularActivities = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    try {
      const data = await api.get('/activities');
      setActivities(data);
    } catch (error) {
      console.error('Error fetching activities:', error);
    } finally {
      setLoading(false);
    }
  };

  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(8);

  // ✅ UPDATED FILTERS - Only these 7 options
  const filters = [
    { id: 'all', label: 'All Activities' },
    { id: 'hiking', label: 'Hiking' },
    { id: 'wildlife', label: 'Wildlife' },
    { id: 'beach-safari', label: 'Beach Safari' },
    { id: 'camping', label: 'Camping' },
    { id: 'glamping', label: 'Glamping' },
    { id: 'nature', label: 'Nature' }
  ];

  if (loading) {
    return <div className="loading">Loading activities...</div>;
  }

  const filteredActivities = activeFilter === 'all' 
    ? activities 
    : activities.filter(activity => activity.category === activeFilter);

  const displayedActivities = filteredActivities.slice(0, visibleCount);

  return (
    <section className="activities-popular-section">
      <div className="activities-container">
        <div className="activities-header-section">
          <h6 className="activities-subtitle">Experience Adventure</h6>
          <h2 className="activities-main-title">
            Popular <span className="activities-highlight">Activities</span>
          </h2>
          <p className="activities-description">
            From thrilling safaris to cultural immersions, discover the activities that make East Africa unforgettable.
          </p>
        </div>

        {/* ✅ UPDATED FILTER BUTTONS */}
        <div className="activities-filter-buttons">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`activities-filter-btn ${activeFilter === filter.id ? 'activities-filter-active' : ''}`}
              onClick={() => {
                setActiveFilter(filter.id);
                setVisibleCount(filter.id === 'all' ? 8 : 6);
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="activities-photos-grid">
          {displayedActivities.map((activity) => (
            <div className="activities-photo-card" key={activity.id}>
              <div className="activities-photo-container">
                <img 
                  src={`http://localhost:5000${activity.image}`} 
                  alt={activity.title} 
                  className="activities-photo-image"
                  onError={(e) => {
                    console.log('Image failed to load:', activity.image);
                    e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found';
                  }}
                />
                <div className="activities-photo-overlay"></div>
                <div className="activities-title-container">
                  <h3 className="activities-photo-title">{activity.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < filteredActivities.length && (
          <div className="activities-load-more">
            <button 
              className="activities-more-btn"
              onClick={() => {
                if (activeFilter === 'all') {
                  setVisibleCount(prev => prev + 8);
                } else {
                  setVisibleCount(prev => prev + 3);
                }
              }}
            >
              <i className="fas fa-plus"></i> 
              {activeFilter === 'all' ? 'Load More Activities' : `Load More ${filters.find(f => f.id === activeFilter)?.label}`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PopularActivities;