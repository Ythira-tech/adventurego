import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay">
          <div className="container">
            <div className="hero-content">
              <h1>About AdventureGo</h1>
              <p className="hero-subtitle">Creating Unforgettable East African Adventures Since 2020</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="our-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2020, AdventureGo was born from a passion for East Africa's breathtaking landscapes, 
                diverse wildlife, and rich cultural heritage. What started as a small group of adventure enthusiasts 
                has grown into East Africa's premier safari and adventure company.
              </p>
              <p>
                We believe that travel should be transformative. Our mission is to connect people with the raw beauty 
                of East Africa while promoting sustainable tourism and supporting local communities.
              </p>
            </div>
            <div className="story-image">
              <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Our Story" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="our-team">
        <div className="container">
          <h2>Meet Our Expert Guides</h2>
          <p className="section-description">
            Our team of certified guides and adventure specialists ensure your safety and enjoyment
          </p>
          
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Guide" />
              </div>
              <div className="member-info">
                <h3>John Mwangi</h3>
                <p className="member-role">Head Safari Guide</p>
                <p>15+ years experience in wildlife tracking and conservation</p>
              </div>
            </div>
            
            <div className="team-member">
              <div className="member-image">
                <img src="https://images.unsplash.com/photo-1494790108755-2616b786d4d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Guide" />
              </div>
              <div className="member-info">
                <h3>Sarah Achieng</h3>
                <p className="member-role">Mountain Expedition Leader</p>
                <p>Certified mountaineer with 8 Kilimanjaro summits</p>
              </div>
            </div>
            
            <div className="team-member">
              <div className="member-image">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Guide" />
              </div>
              <div className="member-info">
                <h3>David Omondi</h3>
                <p className="member-role">Cultural Experience Coordinator</p>
                <p>Expert in East African cultures and community tourism</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="our-values">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🌿</div>
              <h3>Sustainability</h3>
              <p>We prioritize eco-friendly practices and support conservation efforts</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Community</h3>
              <p>We work with local communities to ensure tourism benefits everyone</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⭐</div>
              <h3>Excellence</h3>
              <p>We maintain the highest standards of safety and service quality</p>
            </div>
            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h3>Passion</h3>
              <p>Our love for East Africa drives everything we do</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;