import React, { useState, useEffect, useCallback } from 'react';
import UpcomingEvents from '../components/UpcomingEvents';
import TopDestinations from '../components/TopDestinations';
import PopularActivities from '../components/PopularActivities';
import AlphaWolves from '../components/AlphaWolves';
import Footer from '../components/Footer';

import pictureOne from '../assets/home/Home-1.JPG';
import pictureTwo from '../assets/home/Night.jpg';
import pictureThree from '../assets/home/Ololokwe.jpg';
import pictureFour from '../assets/home/Hike.jpg';
import './Home.css';

const Home = () => {
  const slides = [
    {
      image: pictureOne,
      title: 'GO\nOUT\n&\nSTAY\nTHERE!',
      subtitle: 'AdventureGo East Africa',
      color: '#2ecc71'
    },
    {
      image: pictureTwo,
      title: 'GO\nOUT\n&\nSTAY\nTHERE!',
      subtitle: 'AdventureGo East Africa',
      color: '#27ae60'
    },
    {
      image: pictureThree,
      title: 'GO\nOUT\n&\nSTAY\nTHERE!',
      subtitle: 'AdventureGo East Africa',
      color: '#1abc9c'
    },
    {
      image: pictureFour,
      title: 'GO\nOUT\n&\nSTAY\nTHERE!',
      subtitle: 'AdventureGo East Africa',
      color: '#3498db'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState('right');

  // Social Media Links - ADD YOUR REAL LINKS HERE
  const socialLinks = {
    instagram: 'https://www.instagram.com/adventurego_kenya_?igsh=Z2VzeGo2aWxybG54', // Replace with your Instagram
    facebook: 'https://www.facebook.com/share/1aYFgptMxd/',        // Replace with your Facebook
    whatsapp: 'https://wa.me/254 711 480765'           // Replace with your WhatsApp
  };

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
              key={index}
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

              {/* REMOVED Slide Number Indicator */}
              {/* <div className="slide-number">
                <span className="current">0{index + 1}</span>
                <span className="total">/0{slides.length}</span>
              </div> */}
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

        {/* Social Media Quick Links - UPDATED WITH REAL LINKS */}
        <div className="hero-social">
          <a 
            href={socialLinks.instagram} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link" 
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a 
            href={socialLinks.facebook} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link" 
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a 
            href={socialLinks.whatsapp} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link" 
            aria-label="Whatsapp"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
          <div className="social-line"></div>
        </div>
      </section>

      {/* Home Page Components */}
      <UpcomingEvents />
      <TopDestinations />
      <PopularActivities />
      <AlphaWolves />
      <Footer />
    </main>
  );
};

export default Home;