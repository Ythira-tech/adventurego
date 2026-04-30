import React, { useState, useEffect } from 'react';
import './PopularActivities.css';

// Import local images from src/assets/activities
// Update these paths to match your actual image filenames
import activity1 from '../assets/activities/Hiking-1.jpg';
import activity2 from '../assets/activities/Ololokwe.jpg';
import activity3 from '../assets/activities/Hike.jpg';
import activity4 from '../assets/activities/Wildlife-2.jpg';
import activity5 from '../assets/activities/Wildlife-3.jpg';
import activity6 from '../assets/activities/Wildlife-1.JPG';
import activity7 from '../assets/activities/Beach-1.jpeg';
import activity8 from '../assets/activities/Beach-2.jpeg';
import activity9 from '../assets/activities/Beach-3.jpg';
import activity10 from '../assets/activities/Camping-1.jpg';
import activity11 from '../assets/activities/Camping-2.jpg';
import activity12 from '../assets/activities/Camping-3.jpg';
import activity13 from '../assets/activities/Glamping-1.jpg';
import activity14 from '../assets/activities/Glamping-2.jpg';
import activity15 from '../assets/activities/Glamping-3.jpg';
import activity16 from '../assets/activities/Nature-1.jpg';
import activity17 from '../assets/activities/Nature-2.jpg';
import activity18 from '../assets/activities/Nature-3.jpg';

const PopularActivities = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  // Hardcoded activities data with local images
  const activitiesData = [
    // Hiking - 3 photos
    {
      id: 1,
      title: 'Hiking',
      image: activity1,
      category: 'hiking'
    },
    {
      id: 2,
      title: 'Ololokwe',
      image: activity2,
      category: 'hiking'
    },
    {
      id: 3,
      title: 'Trekking',
      image: activity3,
      category: 'hiking'
    },
    // Wildlife - 3 photos
    {
      id: 4,
      title: 'Dives',
      image: activity4,
      category: 'wildlife'
    },
    {
      id: 5,
      title: 'Waterbuck',
      image: activity5,
      category: 'wildlife'
    },
    {
      id: 6,
      title: 'Giraffe',
      image: activity6,
      category: 'wildlife'
    },
    // Beach Safari - 3 photos
    {
      id: 7,
      title: 'Beach Safari',
      image: activity7,
      category: 'beach-safari'
    },
    {
      id: 8,
      title: 'Coastal Tour',
      image: activity8,
      category: 'beach-safari'
    },
    {
      id: 9,
      title: 'Beach Safari',
      image: activity9,
      category: 'beach-safari'
    },
    // Camping - 3 photos
    {
      id: 10,
      title: 'Mountain Camping',
      image: activity10,
      category: 'camping'
    },
    {
      id: 11,
      title: 'Camping',
      image: activity11,
      category: 'camping'
    },
    {
      id: 12,
      title: 'Wilderness Camping',
      image: activity12,
      category: 'camping'
    },
    // Glamping - 3 photos
    {
      id: 13,
      title: 'Luxury Glamping',
      image: activity13,
      category: 'glamping'
    },
    {
      id: 14,
      title: 'Glamping Resort',
      image: activity14,
      category: 'glamping'
    },
    {
      id: 15,
      title: 'Glamping Resort',
      image: activity15,
      category: 'glamping'
    },
    // Nature - 3 photos
    {
      id: 16,
      title: 'Lake',
      image: activity16,
      category: 'nature'
    },
    {
      id: 17,
      title: 'Bush',
      image: activity17,
      category: 'nature'
    },
    {
      id: 18,
      title: 'Waterfall',
      image: activity18,
      category: 'nature'
    }
  ];

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setActivities(activitiesData);
      setLoading(false);
    }, 500);
  }, []);

  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(8);

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
                  src={activity.image} 
                  alt={activity.title} 
                  className="activities-photo-image"
                  onError={(e) => {
                    console.log('Image failed to load:', activity.title);
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