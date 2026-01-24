import React from 'react';
import './Destinations.css';

const KenyaDestinations = () => {
  const destinations = [
    {
      id: 1,
      name: 'Aberdares',
      image: 'https://i.pinimg.com/1200x/22/ec/10/22ec10ce2303b61ba40873f242ca3f3d.jpg'
    },
    {
      id: 2,
      name: 'Mt Kenya',
      image: 'https://i.pinimg.com/1200x/05/e8/31/05e831f17b50fe0f1d7c8f599cdd1b66.jpg'
    },
    {
      id: 3,
      name: 'Mt. Mtelo',
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      name: 'Mt Elgon',
      image: 'https://i.pinimg.com/736x/56/de/12/56de1205d88881629691daf29c7ee2ca.jpg'
    },
    {
      id: 6,
      name: 'Mt Kenya Forest',
      image:'https://i.pinimg.com/1200x/6b/7f/89/6b7f89619af793a673da59b7e6cf6140.jpg'
    },
    {
      id: 7,
      name: 'Giraffe Centre',
      image: 'https://i.pinimg.com/736x/4e/d8/03/4ed8030bbec4c114d373e043fc6a6ddd.jpg'
    },
    {
      id: 8,
      name: 'City Tour',
      image: 'https://i.pinimg.com/736x/24/32/b6/2432b6784d4714baf2984a679fa87516.jpg'
    },
    {
      id: 9,
      name: 'Taita Hills',
      image: 'https://i.pinimg.com/736x/0d/1f/e4/0d1fe4f99c5ab60e0210122d9afa3754.jpg'
    },
    {
      id: 10,
      name: 'Chalbi Desert',
      image: 'https://i.pinimg.com/1200x/e1/69/95/e16995deca26567489c19152862e35d8.jpg'
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
        </div>
      </section>
    </div>
  );
};

export default KenyaDestinations;