import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <main className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        
        <div className="hero-content container">
          <div className="hero-text">
            <h6 className="hero-subtitle">Discover The Wilderness</h6>
            <h1 className="hero-title">
              Experience the <span className="highlight-text">Heart of East Africa</span>
            </h1>
            
            <p className="hero-description">
              Journey into the wild where golden savannas meet majestic wildlife across Kenya, Tanzania, Uganda, and Rwanda. 
              Our expert guides will take you on an unforgettable safari adventure, creating memories that will last a lifetime.
            </p>
            
            <div className="hero-buttons">
              <button className="btn btn-primary">Explore Our Safaris</button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <i className="fas fa-chevron-down"></i>
        </div>
      </section>
    </main>
  );
};

export default Home;