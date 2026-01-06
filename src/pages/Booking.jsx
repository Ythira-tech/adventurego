import React, { useState } from 'react';
import './Booking.css';

const Booking = () => {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    // Step 1: Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Step 2: Trip Details
    destination: '',
    tourType: '',
    travelDate: '',
    numberOfPeople: '1',
    
    // Step 3: Additional Preferences
    accommodation: 'standard',
    meals: 'included',
    specialRequests: ''
  });

  const tours = [
    { id: 'everest', name: 'Everest Base Camp Trek', duration: '14 days', price: '$1400' },
    { id: 'annapurna', name: 'Annapurna Circuit', duration: '18 days', price: '$1600' },
    { id: 'langtang', name: 'Langtang Valley Trek', duration: '10 days', price: '$900' },
    { id: 'chitwan', name: 'Chitwan Jungle Safari', duration: '5 days', price: '$500' },
    { id: 'pokhara', name: 'Pokhara Adventure Package', duration: '7 days', price: '$700' },
    { id: 'custom', name: 'Custom Adventure Tour', duration: 'Custom', price: 'Custom' }
  ];

  const handleChange = (e) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    });
  };

  const nextStep = () => {
    setStep(step + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would submit to a backend here
    console.log('Booking submitted:', bookingData);
    setStep(4); // Success step
  };

  const calculateTotal = () => {
    // Simple calculation logic
    const basePrices = {
      'everest': 1400,
      'annapurna': 1600,
      'langtang': 900,
      'chitwan': 500,
      'pokhara': 700,
      'custom': 1000
    };
    
    const people = parseInt(bookingData.numberOfPeople) || 1;
    const basePrice = basePrices[bookingData.destination] || 1000;
    
    let total = basePrice * people;
    
    // Add accommodation upgrade
    if (bookingData.accommodation === 'deluxe') total += people * 200;
    if (bookingData.accommodation === 'luxury') total += people * 500;
    
    return total;
  };

  return (
    <div className="booking-page">
      {/* Hero Section */}
      <section className="booking-hero">
        <div className="hero-overlay">
          <div className="container">
            <h1>Book Your Adventure</h1>
            <p>Start your journey with us - Simple, secure, and seamless booking</p>
          </div>
        </div>
      </section>

      <div className="container">
        {/* Booking Progress */}
        <div className="booking-progress">
          <div className={`progress-step ${step >= 1 ? 'active' : ''}`}>
            <div className="step-number">1</div>
            <div className="step-label">Personal Info</div>
          </div>
          <div className={`progress-line ${step >= 2 ? 'active' : ''}`}></div>
          <div className={`progress-step ${step >= 2 ? 'active' : ''}`}>
            <div className="step-number">2</div>
            <div className="step-label">Trip Details</div>
          </div>
          <div className={`progress-line ${step >= 3 ? 'active' : ''}`}></div>
          <div className={`progress-step ${step >= 3 ? 'active' : ''}`}>
            <div className="step-number">3</div>
            <div className="step-label">Preferences</div>
          </div>
          <div className={`progress-line ${step >= 4 ? 'active' : ''}`}></div>
          <div className={`progress-step ${step >= 4 ? 'active' : ''}`}>
            <div className="step-number">4</div>
            <div className="step-label">Confirmation</div>
          </div>
        </div>

        {/* Step 1: Personal Information */}
        {step === 1 && (
          <div className="booking-step">
            <h2>Personal Information</h2>
            <p>Let's start with your basic details</p>
            
            <form className="booking-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={bookingData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your first name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={bookingData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={bookingData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={bookingData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              
              <div className="button-group">
                <button type="button" className="next-btn" onClick={nextStep}>
                  Next: Trip Details <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Step 2: Trip Details */}
        {step === 2 && (
          <div className="booking-step">
            <h2>Trip Details</h2>
            <p>Tell us about your adventure preferences</p>
            
            <form className="booking-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="destination">Select Destination *</label>
                  <select
                    id="destination"
                    name="destination"
                    value={bookingData.destination}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Choose a destination</option>
                    {tours.map(tour => (
                      <option key={tour.id} value={tour.id}>
                        {tour.name} - {tour.duration} - {tour.price}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="tourType">Tour Type</label>
                  <select
                    id="tourType"
                    name="tourType"
                    value={bookingData.tourType}
                    onChange={handleChange}
                  >
                    <option value="">Select tour type</option>
                    <option value="group">Group Tour</option>
                    <option value="private">Private Tour</option>
                    <option value="family">Family Package</option>
                    <option value="solo">Solo Adventure</option>
                  </select>
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="travelDate">Preferred Travel Date *</label>
                  <input
                    type="date"
                    id="travelDate"
                    name="travelDate"
                    value={bookingData.travelDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="numberOfPeople">Number of People *</label>
                  <select
                    id="numberOfPeople"
                    name="numberOfPeople"
                    value={bookingData.numberOfPeople}
                    onChange={handleChange}
                    required
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="button-group">
                <button type="button" className="prev-btn" onClick={prevStep}>
                  <i className="fas fa-arrow-left"></i> Back
                </button>
                <button type="button" className="next-btn" onClick={nextStep}>
                  Next: Preferences <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Step 3: Additional Preferences */}
        {step === 3 && (
          <div className="booking-step">
            <h2>Additional Preferences</h2>
            <p>Customize your adventure experience</p>
            
            <div className="preferences-grid">
              <div className="preference-card">
                <h3>Accommodation Type</h3>
                <div className="option-group">
                  <label className="option-item">
                    <input
                      type="radio"
                      name="accommodation"
                      value="standard"
                      checked={bookingData.accommodation === 'standard'}
                      onChange={handleChange}
                    />
                    <div className="option-content">
                      <h4>Standard</h4>
                      <p>Comfortable hotels & lodges</p>
                      <span className="price-tag">Included</span>
                    </div>
                  </label>
                  
                  <label className="option-item">
                    <input
                      type="radio"
                      name="accommodation"
                      value="deluxe"
                      checked={bookingData.accommodation === 'deluxe'}
                      onChange={handleChange}
                    />
                    <div className="option-content">
                      <h4>Deluxe</h4>
                      <p>4-star hotels with premium amenities</p>
                      <span className="price-tag">+$200/person</span>
                    </div>
                  </label>
                  
                  <label className="option-item">
                    <input
                      type="radio"
                      name="accommodation"
                      value="luxury"
                      checked={bookingData.accommodation === 'luxury'}
                      onChange={handleChange}
                    />
                    <div className="option-content">
                      <h4>Luxury</h4>
                      <p>5-star resorts & boutique hotels</p>
                      <span className="price-tag">+$500/person</span>
                    </div>
                  </label>
                </div>
              </div>
              
              <div className="preference-card">
                <h3>Meal Plan</h3>
                <div className="option-group">
                  <label className="option-item">
                    <input
                      type="radio"
                      name="meals"
                      value="included"
                      checked={bookingData.meals === 'included'}
                      onChange={handleChange}
                    />
                    <div className="option-content">
                      <h4>Full Board</h4>
                      <p>Breakfast, lunch, and dinner included</p>
                    </div>
                  </label>
                  
                  <label className="option-item">
                    <input
                      type="radio"
                      name="meals"
                      value="breakfast"
                      checked={bookingData.meals === 'breakfast'}
                      onChange={handleChange}
                    />
                    <div className="option-content">
                      <h4>Breakfast Only</h4>
                      <p>Daily breakfast included</p>
                    </div>
                  </label>
                  
                  <label className="option-item">
                    <input
                      type="radio"
                      name="meals"
                      value="none"
                      checked={bookingData.meals === 'none'}
                      onChange={handleChange}
                    />
                    <div className="option-content">
                      <h4>Self-Catered</h4>
                      <p>Arrange your own meals</p>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            
            <div className="form-group full-width">
              <label htmlFor="specialRequests">Special Requests</label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                value={bookingData.specialRequests}
                onChange={handleChange}
                rows="4"
                placeholder="Any dietary requirements, accessibility needs, or special requests..."
              ></textarea>
            </div>
            
            {/* Price Summary */}
            <div className="price-summary">
              <h3>Price Summary</h3>
              <div className="summary-details">
                <div className="summary-row">
                  <span>Base Price ({bookingData.numberOfPeople} {bookingData.numberOfPeople === '1' ? 'person' : 'people'})</span>
                  <span>${calculateTotal()}</span>
                </div>
                <div className="summary-total">
                  <span>Total Estimated Cost</span>
                  <span className="total-amount">${calculateTotal()}</span>
                </div>
                <p className="summary-note">* Final price may vary based on season and availability</p>
              </div>
            </div>
            
            <div className="button-group">
              <button type="button" className="prev-btn" onClick={prevStep}>
                <i className="fas fa-arrow-left"></i> Back
              </button>
              <button type="button" className="submit-btn" onClick={handleSubmit}>
                Complete Booking <i className="fas fa-check"></i>
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Confirmation */}
        {step === 4 && (
          <div className="confirmation-step">
            <div className="confirmation-icon">
              <i className="fas fa-check-circle"></i>
            </div>
            <h2>Booking Confirmed!</h2>
            <p className="confirmation-message">
              Thank you for booking with AdventureGo! We've received your request and will contact you within 24 hours to confirm the details.
            </p>
            
            <div className="confirmation-details">
              <h3>Booking Summary</h3>
              <div className="details-grid">
                <div className="detail-item">
                  <span className="detail-label">Booking Reference:</span>
                  <span className="detail-value">ADV-{Math.random().toString(36).substr(2, 8).toUpperCase()}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Name:</span>
                  <span className="detail-value">{bookingData.firstName} {bookingData.lastName}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Destination:</span>
                  <span className="detail-value">
                    {tours.find(t => t.id === bookingData.destination)?.name || 'Custom Tour'}
                  </span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Travel Date:</span>
                  <span className="detail-value">{bookingData.travelDate || 'To be confirmed'}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Total Estimated:</span>
                  <span className="detail-value total-price">${calculateTotal()}</span>
                </div>
              </div>
            </div>
            
            <div className="confirmation-actions">
              <p>We'll send a confirmation email to <strong>{bookingData.email}</strong> shortly.</p>
              <div className="action-buttons">
                <button className="print-btn" onClick={() => window.print()}>
                  <i className="fas fa-print"></i> Print Confirmation
                </button>
                <button className="home-btn" onClick={() => setStep(1)}>
                  <i className="fas fa-home"></i> Book Another Adventure
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Quick Booking Tips */}
        <div className="booking-tips">
          <h3>Quick Booking Tips</h3>
          <div className="tips-grid">
            <div className="tip">
              <i className="fas fa-shield-alt"></i>
              <h4>Secure Payment</h4>
              <p>All transactions are encrypted and secure</p>
            </div>
            <div className="tip">
              <i className="fas fa-undo"></i>
              <h4>Flexible Cancellation</h4>
              <p>Free cancellation up to 30 days before departure</p>
            </div>
            <div className="tip">
              <i className="fas fa-headset"></i>
              <h4>24/7 Support</h4>
              <p>Our adventure experts are always here to help</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;