import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="container">
        {/* Section Header */}
        <div className="about-header">
          <h6 className="section-subtitle">Our Story</h6>
          <h2 className="section-title">
            More Than <span className="highlight">Adventure</span>
          </h2>
          <p className="section-description">
            We are storytellers, conservationists, and bridge-builders between travelers and East Africa's wild heart.
          </p>
        </div>

        {/* Main Story - Left/Right Layout */}
        <div className="story-container">
          {/* Left: Mission & Vision */}
          <div className="story-left">
            <div className="story-block">
              <div className="story-icon">
                <i className="fas fa-bullseye"></i>
              </div>
              <h3>Our Mission</h3>
              <p>
                To create transformative travel experiences that respect wildlife, support local communities, 
                and leave a positive footprint on East Africa's precious ecosystems.
              </p>
            </div>

            <div className="story-block">
              <div className="story-icon">
                <i className="fas fa-eye"></i>
              </div>
              <h3>Our Vision</h3>
              <p>
                A world where sustainable tourism protects natural wonders while allowing travelers 
                to connect deeply with wild places and diverse cultures.
              </p>
            </div>

            <div className="story-block">
              <div className="story-icon">
                <i className="fas fa-hands-helping"></i>
              </div>
              <h3>Our Impact</h3>
              <ul className="impact-list">
                <li><i className="fas fa-check"></i> 15+ local communities supported</li>
                <li><i className="fas fa-check"></i> Conservation projects funded</li>
                <li><i className="fas fa-check"></i> 100% local guide employment</li>
                <li><i className="fas fa-check"></i> Plastic-free operations</li>
              </ul>
            </div>
          </div>

          {/* Center: Main Story */}
          <div className="story-center">
            <div className="main-story">
              <h3>The AdventureGo Journey</h3>
              <p className="story-lead">
                It began with a simple idea: <strong>adventure should benefit both traveler and host.</strong>
              </p>
              
              <div className="story-content">
                <p>
                  Founded in 2018 by a team of passionate guides and conservationists, AdventureGo started 
                  as a small group of friends leading safaris in Kenya's Maasai Mara. We quickly realized that 
                  tourism had the power to do more than just show beautiful places—it could protect them.
                </p>
                
                <p>
                  Today, we operate across four East African countries, working with over 50 local guides 
                  and community partners. Every trip we design balances exhilarating adventure with meaningful 
                  cultural exchange and environmental responsibility.
                </p>
                
                <div className="story-quote">
                  <i className="fas fa-quote-left"></i>
                  <p>We don't just take you to East Africa—we help you become part of its story.</p>
                </div>
                
                <p>
                  From the savannas of Kenya to the mountains of Tanzania, the forests of Uganda to the 
                  beaches of Zanzibar, we're committed to experiences that are as authentic as they are unforgettable.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Values & Principles */}
          <div className="story-right">
            <div className="values-section">
              <h3>Our Core Values</h3>
              
              <div className="value-item">
                <span className="value-number">01</span>
                <div className="value-content">
                  <h4>Respect for Nature</h4>
                  <p>Minimal impact, maximum appreciation for wildlife and ecosystems.</p>
                </div>
              </div>
              
              <div className="value-item">
                <span className="value-number">02</span>
                <div className="value-content">
                  <h4>Authentic Connections</h4>
                  <p>Genuine interactions with local communities and cultures.</p>
                </div>
              </div>
              
              <div className="value-item">
                <span className="value-number">03</span>
                <div className="value-content">
                  <h4>Safety & Excellence</h4>
                  <p>Uncompromising standards for guest safety and service quality.</p>
                </div>
              </div>
              
              <div className="value-item">
                <span className="value-number">04</span>
                <div className="value-content">
                  <h4>Sustainable Growth</h4>
                  <p>Tourism that benefits local economies and protects environments.</p>
                </div>
              </div>
            </div>

            {/* Founder Note */}
            <div className="founder-note">
              <div className="founder-quote">
                <i className="fas fa-quote-right"></i>
                <p>"We measure success not by miles traveled, but by lives touched and habitats preserved."</p>
              </div>
              <div className="founder-info">
                <div className="founder-avatar">
                  <i className="fas fa-user"></i>
                </div>
                <div>
                  <h5>Samuel Kariuki</h5>
                  <p>Founder & Lead Guide</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Banner */}
        <div className="stats-banner">
          <div className="stat-item">
            <h3>5+</h3>
            <p>Years of Excellence</p>
          </div>
          <div className="stat-item">
            <h3>4</h3>
            <p>East African Countries</p>
          </div>
          <div className="stat-item">
            <h3>5000+</h3>
            <p>Happy Travelers</p>
          </div>
          <div className="stat-item">
            <h3>98%</h3>
            <p>Repeat & Referral Rate</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Local Guides</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="about-cta">
          
          <div className="cta-buttons">
            <button className="btn-cta primary">
              <i className="fas fa-calendar-check"></i> Book Your Adventure
            </button>
            <button className="btn-cta secondary">
              <i className="fas fa-comments"></i> Chat With Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;