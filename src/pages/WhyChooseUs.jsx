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
      <section className="why-hero">
        <div className="hero-overlay">
          <div className="container">
            <div className="hero-content">
              <h1>Why Choose AdventureGo?</h1>
              <p className="hero-subtitle">East Africa's Most Trusted Adventure Company</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="why-stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div className="stat-card" key={index}>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons Grid */}
      <section className="reasons-section">
        <div className="container">
          <div className="section-header">
            <h2>What Makes Us Different</h2>
            <p>Discover why thousands of adventurers trust us with their East African journeys</p>
          </div>

          <div className="reasons-grid">
            {reasons.map(reason => (
              <div className="reason-card" key={reason.id}>
                <div className="reason-icon">{reason.icon}</div>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <h2>What Our Adventurers Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-text">
                "The most amazing safari experience! Our guide was incredibly knowledgeable and made sure we saw all the Big Five."
              </div>
              <div className="testimonial-author">
                <div className="author-name">Michael Johnson</div>
                <div className="author-location">USA</div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-text">
                "Climbing Kilimanjaro with AdventureGo was life-changing. The support team was exceptional every step of the way."
              </div>
              <div className="testimonial-author">
                <div className="author-name">Sarah Williams</div>
                <div className="author-location">UK</div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-text">
                "Perfect family adventure! The kids loved it, and everything was perfectly organized from start to finish."
              </div>
              <div className="testimonial-author">
                <div className="author-name">The Müller Family</div>
                <div className="author-location">Germany</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;