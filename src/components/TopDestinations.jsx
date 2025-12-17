import React from 'react';
import './TopDestinations.css';

const TopDestinations = () => {
  // Destinations data
  const destinations = [
    {
      id: 1,
      name: 'Maasai Mara',
      country: 'Kenya',
      flag: '🇰🇪',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'World-famous for the Great Migration and abundant wildlife.',
      bestFor: ['Safari', 'Wildlife', 'Photography'],
      featured: true,
      rating: 4.9
    },
    {
      id: 2,
      name: 'Serengeti',
      country: 'Tanzania',
      flag: '🇹🇿',
      image: 'https://images.unsplash.com/photo-1619983081563-430f63602796?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Vast plains hosting one of nature\'s greatest spectacles.',
      bestFor: ['Migration', 'Big Cats', 'Balloon Safari'],
      featured: true,
      rating: 4.8
    },
    {
      id: 3,
      name: 'Mount Kilimanjaro',
      country: 'Tanzania',
      flag: '🇹🇿',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Africa\'s highest peak offering challenging climbs.',
      bestFor: ['Trekking', 'Adventure', 'Summit'],
      featured: true,
      rating: 4.7
    },
    {
      id: 4,
      name: 'Bwindi Forest',
      country: 'Uganda',
      flag: '🇺🇬',
      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Home to endangered mountain gorillas in lush rainforest.',
      bestFor: ['Gorillas', 'Rainforest', 'Primates'],
      featured: true,
      rating: 4.9
    },
    {
      id: 5,
      name: 'Ngorongoro Crater',
      country: 'Tanzania',
      flag: '🇹🇿',
      image: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'World\'s largest intact volcanic caldera teeming with wildlife.',
      bestFor: ['Safari', 'Conservation', 'Landscape'],
      featured: false,
      rating: 4.8
    },
    {
      id: 6,
      name: 'Zanzibar',
      country: 'Tanzania',
      flag: '🇹🇿',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Spice islands with pristine beaches and rich history.',
      bestFor: ['Beach', 'Culture', 'History'],
      featured: false,
      rating: 4.6
    },
    {
      id: 7,
      name: 'Queen Elizabeth Park',
      country: 'Uganda',
      flag: '🇺🇬',
      image: 'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Diverse ecosystems with tree-climbing lions.',
      bestFor: ['Birding', 'Boating', 'Wildlife'],
      featured: false,
      rating: 4.5
    },
    {
      id: 8,
      name: 'Amboseli',
      country: 'Kenya',
      flag: '🇰🇪',
      image: 'https://images.unsplash.com/photo-1573843989-c9d7ad3f2001?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Iconic views of elephants with Mount Kilimanjaro backdrop.',
      bestFor: ['Elephants', 'Photography', 'Landscape'],
      featured: false,
      rating: 4.7
    }
  ];

  return (
    <section className="top-destinations">
      <div className="container">
        {/* Section Header */}
        <div className="destinations-header">
          <h6 className="section-subtitle">Explore East Africa</h6>
          <h2 className="section-title">
            Top <span className="highlight">Destinations</span>
          </h2>
          <p className="section-description">
            Discover the most breathtaking locations across Kenya, Tanzania, Uganda, and Rwanda.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="destinations-grid">
          {destinations.slice(0, 4).map((destination) => (
            <div 
              className="destination-card" 
              key={destination.id}
              data-aos="fade-up"
            >
              {/* Image with Overlay */}
              <div className="destination-image">
                <img src={destination.image} alt={destination.name} />
                <div className="image-gradient"></div>
                
                {/* Rating Badge */}
                <div className="rating-badge">
                  <i className="fas fa-star"></i>
                  <span>{destination.rating}</span>
                </div>
              </div>

              {/* Destination Info */}
              <div className="destination-info">
                <div className="destination-header">
                  <div>
                    <h3 className="destination-name">{destination.name}</h3>
                    <div className="country">
                      <span className="flag">{destination.flag}</span>
                      <span className="country-name">{destination.country}</span>
                    </div>
                  </div>
                  <button className="wishlist-btn">
                    <i className="far fa-heart"></i>
                  </button>
                </div>

                <p className="destination-description">{destination.description}</p>

                {/* Tags */}
                <div className="destination-tags">
                  {destination.bestFor.map((tag, index) => (
                    <span className="tag" key={index}>{tag}</span>
                  ))}
                </div>

                {/* Action Button */}
                <button className="destination-btn">
                  <span>Explore Destination</span>
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>

              {/* Hover Details */}
              <div className="destination-hover">
                <div className="hover-content">
                  <h4>Best Time to Visit</h4>
                  <p>June - October (Dry season for wildlife viewing)</p>
                  
                  <h4>Travel Tips</h4>
                  <ul>
                    <li><i className="fas fa-sun"></i> Pack light, breathable clothing</li>
                    <li><i className="fas fa-camera"></i> Bring binoculars & zoom lens</li>
                    <li><i className="fas fa-first-aid"></i> Malaria prophylaxis recommended</li>
                  </ul>
                  
                  <button className="btn btn-primary">
                    <i className="fas fa-calendar-alt"></i> Check Availability
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="destinations-cta">
          <p className="cta-text">
            Want to explore all our destinations? We have packages for every type of traveler.
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary">
              <i className="fas fa-map-marked-alt"></i> View All Destinations
            </button>
            <button className="btn btn-outline">
              <i className="fas fa-compass"></i> Get Personalized Itinerary
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopDestinations;