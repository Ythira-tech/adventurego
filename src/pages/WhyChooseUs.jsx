import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      title: 'Expert Local Guides',
      description: 'Our guides are local experts with years of experience and deep knowledge of East African ecosystems.',
      icon: '👨‍🏫'
    },
    {
      id: 2,
      title: 'Safety First',
      description: 'We maintain the highest safety standards with certified equipment and emergency protocols.',
      icon: '🛡️'
    },
    {
      id: 3,
      title: 'Sustainable Tourism',
      description: 'We prioritize eco-friendly practices and support local conservation efforts.',
      icon: '🌱'
    },
    {
      id: 4,
      title: 'Customizable Adventures',
      description: 'Tailor your adventure to match your interests, fitness level, and schedule.',
      icon: '🎯'
    },
    {
      id: 5,
      title: '24/7 Support',
      description: 'Our team is available round the clock to assist you before, during, and after your adventure.',
      icon: '📞'
    },
    {
      id: 6,
      title: 'Best Value',
      description: 'Premium experiences at competitive prices with no hidden costs.',
      icon: '💰'
    }
  ];

  const stats = [
    { number: '98%', label: 'Customer Satisfaction' },
    { number: '5000+', label: 'Happy Adventurers' },
    { number: '50+', label: 'Expert Guides' },
    { number: '3', label: 'Countries Covered' }
  ];

  return (
    <div className="why-choose-us-page">
      {/* Hero Section */}
      <section className="why-hero-section">
        <div className="why-hero-overlay">
          <div className="why-container">
            <div className="why-hero-content">
              <h1 className="why-hero-title">Why Choose AdventureGo?</h1>
              <p className="why-hero-subtitle">East Africa's Most Trusted Adventure Company</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="why-stats-section">
        <div className="why-container">
          <div className="why-stats-grid">
            {stats.map((stat, index) => (
              <div className="why-stat-card" key={index}>
                <div className="why-stat-number">{stat.number}</div>
                <div className="why-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons Grid */}
      <section className="why-reasons-section">
        <div className="why-container">
          <div className="why-section-header">
            <h2 className="why-section-title">What Makes Us Different</h2>
            <p className="why-section-description">Discover why thousands of adventurers trust us with their East African journeys</p>
          </div>

          <div className="why-reasons-grid">
            {reasons.map(reason => (
              <div className="why-reason-card" key={reason.id}>
                <div className="why-reason-icon">{reason.icon}</div>
                <h3 className="why-reason-title">{reason.title}</h3>
                <p className="why-reason-description">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="why-testimonials-section">
        <div className="why-container">
          <h2 className="why-testimonials-title">What Our Adventurers Say</h2>
          <div className="why-testimonials-grid">
            <div className="why-testimonial-card">
              <div className="why-testimonial-text">
                "The most amazing safari experience! Our guide was incredibly knowledgeable and made sure we saw all the Big Five."
              </div>
              <div className="why-testimonial-author">
                <div className="why-author-name">Michael Johnson</div>
                <div className="why-author-location">USA</div>
              </div>
            </div>
            <div className="why-testimonial-card">
              <div className="why-testimonial-text">
                "Climbing Kilimanjaro with AdventureGo was life-changing. The support team was exceptional every step of the way."
              </div>
              <div className="why-testimonial-author">
                <div className="why-author-name">Sarah Williams</div>
                <div className="why-author-location">UK</div>
              </div>
            </div>
            <div className="why-testimonial-card">
              <div className="why-testimonial-text">
                "Perfect family adventure! The kids loved it, and everything was perfectly organized from start to finish."
              </div>
              <div className="why-testimonial-author">
                <div className="why-author-name">The Müller Family</div>
                <div className="why-author-location">Germany</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;