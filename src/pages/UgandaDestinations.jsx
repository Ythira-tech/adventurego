import React from 'react';
import './Destinations.css';

const UgandaDestinations = () => {
  const destinations = [
    {
      id: 1,
      name: 'Mt Elgon (Wagagai)',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      name: 'Mt Elgon Traverse',
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      name: 'Virunga Mountains',
      image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      name: 'Sipi Village',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      name: 'Bwindi Forest',
      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      name: 'Murchison Falls',
      image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="destinations-page uganda-page">
      {/* Hero Section */}
      <section className="country-hero">
        <div className="hero-overlay">
          <div className="container">
            <div className="hero-content">
              <div className="country-flag">🇺🇬</div>
              <h1>Uganda Destinations</h1>
              <p className="hero-subtitle">The Pearl of Africa</p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="photo-grid-section">
        <div className="container">
          <div className="photo-grid">
            {destinations.map(destination => (
              <div className="photo-card" key={destination.id}>
                <div 
                  className="photo-image"
                  style={{ backgroundImage: `url(${destination.image})` }}
                >
                  <div className="photo-label">{destination.name}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="page-stats">
            <div className="stat">
              <span className="number">{destinations.length}</span>
              <span className="label">Destinations</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UgandaDestinations;