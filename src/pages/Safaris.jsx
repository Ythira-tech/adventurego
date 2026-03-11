import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import './Safaris.css';
import safari1 from '../assets/safaris/Bluesprings.jpg';
import safari2 from '../assets/safaris/Budge.jpg';
import safari3 from '../assets/safaris/Bus.JPG';
import safari4 from '../assets/safaris/Lake.jpg';

const Safaris = () => {
  const [safaris, setSafaris] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Special requests state
  const [specialRequest, setSpecialRequest] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  // Fetch safaris from backend
  useEffect(() => {
    fetchSafaris();
  }, []);

  const fetchSafaris = async () => {
    try {
      setLoading(true);
      const data = await api.get('/safaris');
      setSafaris(data);
      setError(null);
    } catch (error) {
      console.error('Error fetching safaris:', error);
      setError('Failed to load safaris. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const safariTypes = [
    { icon: '🦁', name: 'Big Five Safari', count: '12 tours' },
    { icon: '🎈', name: 'Luxury Safari', count: '8 tours' },
    { icon: '👨‍👩‍👧‍👦', name: 'Family Safari', count: '6 tours' },
    { icon: '📸', name: 'Photography Safari', count: '9 tours' },
    { icon: '🌙', name: 'Night Safari', count: '4 tours' },
    { icon: '🚶', name: 'Walking Safari', count: '7 tours' }
  ];

  // Handle special request form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!specialRequest.trim()) return;
    
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      await api.post('/safari-requests', { 
        request: specialRequest,
        type: 'special-request'
      });
      
      setIsSubmitted(true);
      setSpecialRequest('');
      
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting request:', error);
      setSubmitError('Failed to submit request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Show loading state
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading safaris...</p>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="error-container">
        <i className="fas fa-exclamation-circle"></i>
        <h2>Oops! Something went wrong</h2>
        <p>{error}</p>
        <button className="retry-btn" onClick={fetchSafaris}>
          <i className="fas fa-redo"></i> Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="safaris-page">
      {/* Hero Section */}
      <section className="safari-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Experience East Africa's <span className="highlight">Wild Wonders</span></h1>
            <p>From the Great Migration to Big Five encounters, our safaris offer unforgettable wildlife experiences with expert guides and sustainable tourism practices.</p>
            <div className="hero-search">
              <div className="search-box">
                <input type="text" placeholder="Search safaris by location, duration, or budget..." />
                <button className="search-btn">
                  <i className="fas fa-search"></i> Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safari Types */}
      <section className="safari-types">
        <div className="container">
          <div className="section-header">
            <h2>Safari <span className="highlight">Experiences</span></h2>
            <p>Choose from our curated selection of safari adventures</p>
          </div>
          
          <div className="types-grid">
            {safariTypes.map((type, index) => (
              <div key={index} className="type-card">
                <div className="type-icon">{type.icon}</div>
                <h3>{type.name}</h3>
                <p>{type.count}</p>
                <button className="type-btn">Explore</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Safaris */}
      <section className="featured-safaris">
        <div className="container">
          <div className="section-header">
            <h2>Featured <span className="highlight">Safaris</span></h2>
            <p>Our most popular and highly-rated safari packages</p>
          </div>
          
          {safaris.length === 0 ? (
            <div className="no-safaris">
              <i className="fas fa-paw"></i>
              <h3>No Safaris Available</h3>
              <p>Check back soon for new safari packages.</p>
            </div>
          ) : (
            <div className="safaris-grid">
              {safaris.map(safari => (
                <div key={safari.id} className={`safari-card ${safari.featured ? 'featured' : ''}`}>
                  {safari.featured && <span className="featured-badge">Featured</span>}
                  <div className="safari-image">
                    <img src={safari.image || safari1} alt={safari.title} />
                    <div className="safari-rating">
                      <i className="fas fa-star"></i>
                      <span>{safari.rating || 4.5}</span>
                      <span className="reviews">({safari.reviews || 100} reviews)</span>
                    </div>
                  </div>
                  <div className="safari-content">
                    <h3>{safari.title}</h3>
                    <div className="safari-meta">
                      <span className="duration">
                        <i className="far fa-calendar"></i> {safari.duration || '5 Days / 4 Nights'}
                      </span>
                      <span className="locations">
                        <i className="fas fa-map-marker-alt"></i> {safari.locations?.join(', ') || 'Various Locations'}
                      </span>
                    </div>
                    <div className="safari-highlights">
                      {safari.highlights?.map((highlight, index) => (
                        <span key={index} className="highlight-tag">{highlight}</span>
                      ))}
                    </div>
                    <div className="safari-footer">
                      <div className="safari-price">
                        <span className="from">From</span>
                        <span className="price">{safari.price || '$0'}</span>
                        <span className="per-person">per person</span>
                      </div>
                      <div className="safari-actions">
                        <button className="btn-details">View Details</button>
                        <button className="btn-book">Book Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Safari Highlights */}
      <section className="safari-highlights-section">
        <div className="container">
          <div className="highlight-content">
            <div className="highlight-text">
              <h2>Why Choose AdventureGo Safaris?</h2>
              <div className="highlight-list">
                <div className="highlight-item">
                  <div className="highlight-icon">
                    <i className="fas fa-user-shield"></i>
                  </div>
                  <div className="highlight-details">
                    <h4>Expert Local Guides</h4>
                    <p>Certified guides with 10+ years of experience</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">
                    <i className="fas fa-leaf"></i>
                  </div>
                  <div className="highlight-details">
                    <h4>Sustainable Tourism</h4>
                    <p>Eco-friendly practices that protect wildlife</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">
                    <i className="fas fa-hotel"></i>
                  </div>
                  <div className="highlight-details">
                    <h4>Premium Accommodation</h4>
                    <p>Carefully selected lodges and luxury camps</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">
                    <i className="fas fa-camera"></i>
                  </div>
                  <div className="highlight-details">
                    <h4>Photography Support</h4>
                    <p>Professional photography guidance included</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="highlight-image">
              <img src={safari1} alt="Safari Experience" />
            </div>
          </div>
        </div>
      </section>

      {/* Special Requests Only */}
      <section className="safari-requests-section">
        <div className="container">
          <div className="requests-content">
            {isSubmitted ? (
              <div className="success-message">
                <i className="fas fa-check-circle"></i>
                <h2>Request Sent Successfully!</h2>
                <p>Thank you for your special requests. Our safari experts will contact you to discuss your preferences.</p>
                <button 
                  className="btn-new-request"
                  onClick={() => setIsSubmitted(false)}
                >
                  <i className="fas fa-plus"></i> Make Another Request
                </button>
              </div>
            ) : (
              <>
                <div className="requests-header">
                  <h2>Have <span className="highlight">Special Requests?</span></h2>
                  <p>Tell us about your preferences and we'll customize your safari experience.</p>
                </div>

                {submitError && (
                  <div className="error-message">
                    <i className="fas fa-exclamation-circle"></i>
                    <p>{submitError}</p>
                  </div>
                )}

                <form className="requests-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="specialRequests">
                      <i className="fas fa-comment-dots"></i> Special Requests & Preferences *
                    </label>
                    <textarea
                      id="specialRequests"
                      name="specialRequests"
                      value={specialRequest}
                      onChange={(e) => setSpecialRequest(e.target.value)}
                      placeholder="Tell us about your preferences: dietary restrictions, accommodation preferences, specific animals you want to see, photography needs, special occasions, etc."
                      rows="6"
                      required
                      disabled={isSubmitting}
                    />
                    <div className="char-count">
                      {specialRequest.length}/500 characters
                    </div>
                  </div>

                  <div className="form-footer">
                    <button 
                      type="submit" 
                      className="submit-request-btn"
                      disabled={isSubmitting || !specialRequest.trim()}
                    >
                      {isSubmitting ? (
                        <>
                          <i className="fas fa-spinner fa-spin"></i> Sending Request...
                        </>
                      ) : (
                        <>
                          <i className="fas fa-paper-plane"></i> Send Request to Our Team
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Safaris;