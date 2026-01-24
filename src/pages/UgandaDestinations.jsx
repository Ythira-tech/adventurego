import React from 'react';
import './Destinations.css';

const UgandaDestinations = () => {
  const destinations = [
    {
      id: 1,
      name: 'Mt Elgon (Wagagai)',
      image: 'https://i.pinimg.com/1200x/4a/b1/2a/4ab12a56fdbbd1b9422550cf5455edd1.jpg'
    },
    {
      id: 2,
      name: 'Mt Elgon Traverse',
      image: 'https://i.pinimg.com/736x/56/de/12/56de1205d88881629691daf29c7ee2ca.jpg'
    },
    {
      id: 3,
      name: 'Virunga Mountains',
      image: 'https://i.pinimg.com/1200x/1d/b0/8f/1db08f5f585c4d8cd24035382a4b3ca3.jpg'
    },
    {
      id: 4,
      name: 'Sipi Village',
      image: 'https://i.pinimg.com/736x/35/77/c5/3577c5e1159e601ed5895d93c439a547.jpg'
    },
    {
      id: 5,
      name: 'Bwindi Forest',
      image: 'https://i.pinimg.com/736x/8a/79/83/8a7983b7e5f61aba24a42c9d6329bf77.jpg'
    },
    {
      id: 6,
      name: 'Murchison Falls',
      image: 'https://i.pinimg.com/736x/4f/fc/84/4ffc84cb985a075626662bea126f5ec7.jpg'
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
        </div>
      </section>
    </div>
  );
};

export default UgandaDestinations;