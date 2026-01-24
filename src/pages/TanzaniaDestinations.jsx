import React from 'react';
import './Destinations.css';

const TanzaniaDestinations = () => {
  const destinations = [
    {
      id: 1,
      name: 'Mt. Kilimanjaro',
      image: 'https://i.pinimg.com/1200x/cc/86/5b/cc865b52a3d1cce78d91e973ba8507da.jpg'
    },
    {
      id: 2,
      name: 'Mt. Meru',
      image: 'https://i.pinimg.com/736x/5b/27/59/5b27593e178654767f44871d332bcc0d.jpg'
    },
    {
      id: 3,
      name: 'Mt Hanang',
      image: 'https://i.pinimg.com/1200x/5d/49/a6/5d49a66a702941b61a9d99ca181ae4dc.jpg'
    },
    {
      id: 4,
      name: 'Kikuletwa Springs',
      image: 'https://i.pinimg.com/736x/54/71/eb/5471ebb466987c5ce770a5660bfb5ae3.jpg'
    },
    {
      id: 5,
      name: 'Materuni Falls',
      image: 'https://i.pinimg.com/1200x/e4/20/94/e42094f13983d97ab67047a0811491b8.jpg'
    },
    {
      id: 6,
      name: 'Mt. Longido',
      image: 'https://i.pinimg.com/1200x/37/80/27/378027ac501f033f7351437c04714ab1.jpg'
    },
    {
      id: 7,
      name: 'Mt Ol Doinyo Lengai',
      image: 'https://i.pinimg.com/1200x/ba/3d/da/ba3ddaf9aea76a08b9d53d753ca212ed.jpg'
    },
    {
      id: 8,
      name: 'Usambara Mountains',
      image: 'https://i.pinimg.com/736x/f0/73/99/f0739977a12f11cd4678974b835ab07b.jpg'
    },
    {
      id: 9,
      name: 'Magoroto Forest',
      image: 'https://i.pinimg.com/1200x/ca/cb/7e/cacb7e1b0438bb63031cb7f67731198d.jpg'
    },
    {
      id: 10,
      name: 'Pare Mountains',
      image: 'https://i.pinimg.com/1200x/f0/44/c6/f044c6c5cd6ec0a0a02e07dd98204089.jpg'
    },
    {
      id: 11,
      name: 'Lake Duluti',
      image: 'https://i.pinimg.com/1200x/de/b8/55/deb855a6f34f5f82e99da3d12cf7fc26.jpg'
    },
    {
      id: 12,
      name: 'Arusha National Park',
      image: 'https://i.pinimg.com/736x/a8/f9/a4/a8f9a4c9bd246daed6a88238860d5a99.jpg'
    },
    {
      id: 13,
      name: 'City Tour',
      image: 'https://i.pinimg.com/1200x/3a/eb/bd/3aebbd5b1b4e64f685d1193359b94440.jpg'
    }
  ];

  return (
    <div className="destinations-page tanzania-page">
      {/* Hero Section */}
      <section className="country-hero">
        <div className="hero-overlay">
          <div className="container">
            <div className="hero-content">
              <div className="country-flag">🇹🇿</div>
              <h1>Tanzania Destinations</h1>
              <p className="hero-subtitle">Land of Kilimanjaro & Serengeti</p>
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

export default TanzaniaDestinations;