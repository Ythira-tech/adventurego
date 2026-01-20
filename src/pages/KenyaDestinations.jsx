import React from 'react';
import './Destinations.css';

const KenyaDestinations = () => {
  const destinations = [
    {
      id: 1,
      name: 'Aberdares',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      name: 'Mt Kenya',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      name: 'Mt. Mtelo',
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      name: 'Mt Elgon',
      image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      name: 'Mt Elgon Traverse',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      name: 'Mt Kenya Forest',
      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 7,
      name: 'Giraffe Centre',
      image: 'https://images.unsplash.com/photo-1573843989-c9d7ad3f2001?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 8,
      name: 'City Tour',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 9,
      name: 'Taita Hills',
      image: 'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 10,
      name: 'Chalbi Desert',
      image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="destinations-page kenya-page">
      {/* Hero Section */}
      <section className="country-hero">
        <div className="hero-overlay">
          <div className="container">
            <div className="hero-content">
              <div className="country-flag">🇰🇪</div>
              <h1>Kenya Destinations</h1>
              <p className="hero-subtitle">Wildlife Capital of the World</p>
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

export default KenyaDestinations;