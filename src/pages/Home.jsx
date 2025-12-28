import React, { useState, useEffect, useCallback } from 'react';
import './Home.css';

const Home = () => {
  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: 'GO\nOUT\n&\nSTAY\nTHERE!',
      subtitle: 'AdventureGo East Africa',
      description: 'Where golden savannas meet majestic wildlife across Kenya, Tanzania, and Uganda.',
      color: '#2ecc71'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: 'GO\nOUT\n&\nSTAY\nTHERE!',
      subtitle: 'AdventureGo East Africa',
      description: 'Challenge yourself with our expert-guided mountain expeditions.',
      color: '#27ae60'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: 'GO\nOUT\n&\nSTAY\nTHERE!',
      subtitle: 'AdventureGo East Africa',
      description: 'Relax on untouched shores and experience Swahili coastal culture.',
      color: '#1abc9c'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      title: 'GO\nOUT\n&\nSTAY\nTHERE!',
      subtitle: 'AdventureGo East Africa',
      description: 'Connect authentically with East Africa\'s diverse cultures and traditions.',
      color: '#3498db'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState('right'); // 'right' or 'left' for animation direction

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = useCallback(() => {
    setDirection('right');
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setDirection('left');
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  const goToSlide = (index) => {
    if (index === currentSlide) return;
    setDirection(index > currentSlide ? 'right' : 'left');
    setCurrentSlide(index);
  };

  return (
    <main className="home-page">
      {/* Hero Slideshow */}
      <section className="hero-slideshow">
        {/* Slides Container */}
        <div className="slides-container">
          {slides.map((slide, index) => (
            <div 
              key={slide.id}
              className={`slide ${index === currentSlide ? 'active' : ''} ${direction}`}
              style={{ 
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url(${slide.image})`,
                '--slide-color': slide.color
              }}
            >
              {/* Animated Overlay Pattern */}
              <div className="pattern-overlay"></div>
              
              {/* Slide Content */}
              <div className="slide-content">
                <div className="container">
                  <div className="slide-text" data-aos="fade-up" data-aos-delay="200">
                    <h6 className="hero-subtitle">{slide.subtitle}</h6>
                    <h1 className="hero-title">
                      {slide.title.split(' ').map((word, i) => (
                        <span key={i} className="title-word">{word} </span>
                      ))}
                    </h1>
                    <p className="hero-description">{slide.description}</p>
                    
                    
                  </div>
                </div>
              </div>

              {/* Slide Number Indicator */}
              <div className="slide-number">
                <span className="current">0{index + 1}</span>
                <span className="total">/0{slides.length}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <button className="slide-nav prev" onClick={prevSlide} aria-label="Previous slide">
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="slide-nav next" onClick={nextSlide} aria-label="Next slide">
          <i className="fas fa-chevron-right"></i>
        </button>

        {/* Slide Dots */}
        <div className="slide-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className="dot-progress"></div>
            </button>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <span>Scroll to explore</span>
        </div>

        {/* Social Media Quick Links */}
        <div className="hero-social">
          <a href="#" className="social-link" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="social-link" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="social-link" aria-label="Whatsapp">
            <i className="fab fa-whatsapp"></i>
          </a>
          <div className="social-line"></div>
        </div>
      </section>
    </main>
  );
};

export default Home;