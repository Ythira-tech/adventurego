import React from 'react';
import './WhyChooseUs.css';
import backgroundImage from '../assets/Adventure.jpeg';

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      title: 'Expertise & Time Savings',
      description: 'With over 5 years of specialized experience across East Africa, we handle all complex logistics. You save hundreds of hours of planning and research.',
      icon: 'fas fa-clock',
      color: '#2ecc71'
    },
    {
      id: 2,
      title: 'Safety First Approach',
      description: 'Your safety is our top priority. All our guides are first-aid certified, vehicles are regularly maintained, and we follow strict safety protocols.',
      icon: 'fas fa-shield-alt',
      color: '#27ae60'
    },
    {
      id: 3,
      title: 'Authentic Local Experience',
      description: 'We don\'t just show you East Africa—we help you live it. Connect with local communities, cultures, and wildlife in meaningful, respectful ways.',
      icon: 'fas fa-hands-helping',
      color: '#2ecc71'
    },
    {
      id: 4,
      title: 'Stress-Free Planning',
      description: 'From permits to accommodations, we manage every detail. Relax knowing everything is taken care of by our dedicated team of specialists.',
      icon: 'fas fa-calendar-check',
      color: '#27ae60'
    }
  ];

  return (
    <section className="why-choose-us">
      <div className="container">
        {/* Section Header - Stepped Style */}
        <div className="section-header">
          <h6 className="section-subtitle">Why AdventureGo</h6>
          <h2 className="section-title">
            Step Into <span className="highlight">Exceptional</span> Journeys
          </h2>
          <p className="section-description">
            We transform ordinary trips into extraordinary adventures. Here's how we ensure 
            your East African experience is seamless, safe, and truly unforgettable.
          </p>
        </div>

        {/* Reasons Grid - Card Style */}
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div 
              className="reason-card" 
              key={reason.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Number Indicator - Stepped Style */}
              <div className="step-indicator">
                <span className="step-number">0{index + 1}</span>
                <div className="step-line"></div>
              </div>

              {/* Card Content */}
              <div className="card-content">
                <div className="card-icon" style={{ backgroundColor: `${reason.color}20` }}>
                  <i className={reason.icon} style={{ color: reason.color }}></i>
                </div>
                <h3 className="card-title">{reason.title}</h3>
                <p className="card-description">{reason.description}</p>
              </div>

              {/* Decorative Accent */}
              <div className="card-accent" style={{ backgroundColor: reason.color }}></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="why-cta">
          <p className="cta-text">
            <strong>Ready for an adventure crafted just for you?</strong> Our team is here to answer all your questions.
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary">
              <i className="fas fa-comments"></i> Chat With Our Experts
            </button>
            <button className="btn btn-outline">
              <i className="fas fa-phone-alt"></i> Call Us Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;