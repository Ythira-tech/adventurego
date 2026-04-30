import React, { useState } from 'react';
import { api } from '../services/api';
import './Booking.css';

const Booking = () => {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [paymentChoice, setPaymentChoice] = useState('payLater'); // 'payNow' or 'payLater'
  const [mpesaNumber, setMpesaNumber] = useState('');
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
    numberOfAdults: '1',
    numberOfChildren: '0',
    
    // Step 3: Additional Preferences
    specialRequests: ''
  });

  // M-Pesa Till Number (Buy Goods & Services)
  const MPESA_TILL_NUMBER = '5496587';

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

  const handleSubmit = async (paymentReference = null) => {
    setSubmitting(true);
    setSubmitError(null);
    
    try {
      // Prepare booking data with payment info
      const bookingPayload = {
        ...bookingData,
        paymentChoice,
        paymentReference: paymentReference || null,
        paymentStatus: paymentChoice === 'payNow' ? 'pending_payment' : 'pending',
        totalPrice: calculateTotal(),
        mpesaNumber: paymentChoice === 'payNow' ? mpesaNumber : null
      };
      
      // Submit booking to backend
      await api.post('/bookings', bookingPayload);
      setStep(4); // Success step
    } catch (error) {
      console.error('Error submitting booking:', error);
      setSubmitError('Failed to submit booking. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleMpesaPayment = () => {
    if (!mpesaNumber || mpesaNumber.length < 10) {
      setSubmitError('Please enter a valid M-Pesa phone number');
      return;
    }
    
    // Show payment instructions
    const totalAmount = calculateTotal();
    const message = `Please complete payment of $${totalAmount} (approx KES ${(totalAmount * 145).toLocaleString()}) via M-Pesa Buy Goods & Services:\n\n` +
      `Till Number: ${MPESA_TILL_NUMBER}\n` +
      `Account/Reference: ADV-${Date.now().toString(36).toUpperCase()}\n\n` +
      `After payment, click OK to submit your booking request.`;
    
    if (window.confirm(message)) {
      handleSubmit(`MPESA-${Date.now()}`);
    }
  };

  const calculateTotal = () => {
    const basePrices = {
      'everest': 1400,
      'annapurna': 1600,
      'langtang': 900,
      'chitwan': 500,
      'pokhara': 700,
      'custom': 1000
    };
    
    const adults = parseInt(bookingData.numberOfAdults) || 1;
    const children = parseInt(bookingData.numberOfChildren) || 0;
    const basePrice = basePrices[bookingData.destination] || 1000;
    
    // Children half price
    let total = (basePrice * adults) + (basePrice * 0.5 * children);
    
    return total;
  };

  return (
    <div className="booking-page">
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
            <div className="step-label">Payment</div>
          </div>
          <div className={`progress-line ${step >= 4 ? 'active' : ''}`}></div>
          <div className={`progress-step ${step >= 4 ? 'active' : ''}`}>
            <div className="step-number">4</div>
            <div className="step-label">Confirmation</div>
          </div>
        </div>

        {/* Error Message */}
        {submitError && (
          <div className="error-message">
            <i className="fas fa-exclamation-circle"></i>
            <p>{submitError}</p>
          </div>
        )}

        {/* Step 1: Personal Information */}
        {step === 1 && (
          <div className="booking-step">
            <h2>Personal Information</h2>
            <p>Let's start with your basic details</p>
            
            <form className="booking-form" onSubmit={(e) => e.preventDefault()}>
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
            
            <form className="booking-form" onSubmit={(e) => e.preventDefault()}>
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
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="numberOfAdults">Number of Adults *</label>
                  <select
                    id="numberOfAdults"
                    name="numberOfAdults"
                    value={bookingData.numberOfAdults}
                    onChange={handleChange}
                    required
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Adult' : 'Adults'}</option>
                    ))}
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="numberOfChildren">Number of Children</label>
                  <select
                    id="numberOfChildren"
                    name="numberOfChildren"
                    value={bookingData.numberOfChildren}
                    onChange={handleChange}
                  >
                    {[0,1,2,3,4,5,6,7,8].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Child' : 'Children'}</option>
                    ))}
                  </select>
                  <small className="form-text">Children (under 12) get 50% discount</small>
                </div>
              </div>
              
              <div className="button-group">
                <button type="button" className="prev-btn" onClick={prevStep}>
                  <i className="fas fa-arrow-left"></i> Back
                </button>
                <button type="button" className="next-btn" onClick={nextStep}>
                  Next: Payment Options <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Step 3: Payment Options */}
        {step === 3 && (
          <div className="booking-step">
            <h2>Payment Options</h2>
            <p>Choose how you'd like to proceed with your booking</p>
            
            <form className="booking-form" onSubmit={(e) => e.preventDefault()}>
              {/* Special Requests */}
              <div className="form-group full-width">
                <label htmlFor="specialRequests">Special Requests & Preferences</label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  value={bookingData.specialRequests}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us about any dietary requirements, accessibility needs, accommodation preferences, specific activities you're interested in, or special occasions you're celebrating..."
                ></textarea>
              </div>
              
              {/* Payment Options */}
              <div className="payment-options">
                <h3>How would you like to proceed?</h3>
                
                <div className={`payment-option-card ${paymentChoice === 'payNow' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    id="payNow"
                    name="paymentChoice"
                    value="payNow"
                    checked={paymentChoice === 'payNow'}
                    onChange={(e) => setPaymentChoice(e.target.value)}
                  />
                  <label htmlFor="payNow">
                    <strong>Pay Now via M-Pesa (Instant Confirmation)</strong>
                    <p>Pay immediately via M-Pesa Buy Goods & Services. Your booking will be submitted after payment.</p>
                  </label>
                </div>
                
                <div className={`payment-option-card ${paymentChoice === 'payLater' ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    id="payLater"
                    name="paymentChoice"
                    value="payLater"
                    checked={paymentChoice === 'payLater'}
                    onChange={(e) => setPaymentChoice(e.target.value)}
                  />
                  <label htmlFor="payLater">
                    <strong>Book Now, Pay Later (Pending Confirmation)</strong>
                    <p>We'll hold your spot and contact you within 24 hours to confirm details and arrange payment.</p>
                  </label>
                </div>
              </div>

              {/* M-Pesa Details (shown only if Pay Now selected) */}
              {paymentChoice === 'payNow' && (
                <div className="mpesa-details">
                  <h3>M-Pesa Payment Details</h3>
                  <div className="mpesa-info">
                    <div className="mpesa-card">
                      <i className="fas fa-store"></i>
                      <div className="mpesa-info-text">
                        <span className="label">Paybill/Till Number:</span>
                        <span className="value">{MPESA_TILL_NUMBER}</span>
                      </div>
                    </div>
                    <div className="mpesa-note">
                      <i className="fas fa-info-circle"></i>
                      <p>Open your M-Pesa app, go to Lipa Na M-Pesa, select Buy Goods & Services, enter Till Number <strong>{MPESA_TILL_NUMBER}</strong>, enter the amount, and complete payment.</p>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="mpesaNumber">M-Pesa Phone Number (for payment reference)</label>
                    <input
                      type="tel"
                      id="mpesaNumber"
                      name="mpesaNumber"
                      value={mpesaNumber}
                      onChange={(e) => setMpesaNumber(e.target.value)}
                      placeholder="e.g., 0712345678"
                    />
                    <small>Enter the M-Pesa number you'll use for payment (optional but helpful for tracking)</small>
                  </div>
                </div>
              )}
              
              {/* Price Summary */}
              <div className="price-summary">
                <h3>Price Summary</h3>
                <div className="summary-details">
                  <div className="summary-row">
                    <span>Adults ({bookingData.numberOfAdults})</span>
                    <span>${(parseInt(bookingData.numberOfAdults) || 1) * (tours.find(t => t.id === bookingData.destination) ? parseInt(tours.find(t => t.id === bookingData.destination).price.substring(1)) : 1000)}</span>
                  </div>
                  {parseInt(bookingData.numberOfChildren) > 0 && (
                    <div className="summary-row">
                      <span>Children ({bookingData.numberOfChildren}) - 50% off</span>
                      <span>${(parseInt(bookingData.numberOfChildren) || 0) * (tours.find(t => t.id === bookingData.destination) ? parseInt(tours.find(t => t.id === bookingData.destination).price.substring(1)) * 0.5 : 500)}</span>
                    </div>
                  )}
                  <div className="summary-total">
                    <span>Total Estimated Cost (USD)</span>
                    <span className="total-amount">${calculateTotal()}</span>
                  </div>
                  <div className="summary-row kes-estimate">
                    <span>Estimated in KES (~145 KES/USD)</span>
                    <span>KES {(calculateTotal() * 145).toLocaleString()}</span>
                  </div>
                  <p className="summary-note">* Final price may vary based on season and availability</p>
                  <p className="summary-note">* Payment will be via M-Pesa Buy Goods & Services - Till No: {MPESA_TILL_NUMBER}</p>
                </div>
              </div>
              
              <div className="button-group">
                <button type="button" className="prev-btn" onClick={prevStep}>
                  <i className="fas fa-arrow-left"></i> Back
                </button>
                
                {paymentChoice === 'payNow' ? (
                  <button 
                    type="button" 
                    className="submit-btn mpesa-btn" 
                    onClick={handleMpesaPayment}
                    disabled={submitting}
                  >
                    {submitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin"></i> Processing...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-mobile-alt"></i> Pay via M-Pesa & Submit
                      </>
                    )}
                  </button>
                ) : (
                  <button 
                    type="button" 
                    className="submit-btn" 
                    onClick={() => handleSubmit()}
                    disabled={submitting}
                  >
                    {submitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin"></i> Submitting...
                      </>
                    ) : (
                      <>
                        Submit Booking Request <i className="fas fa-paper-plane"></i>
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          </div>
        )}

        {/* Step 4: Confirmation */}
        {step === 4 && (
          <div className="confirmation-step">
            <div className="confirmation-icon">
              <i className="fas fa-check-circle"></i>
            </div>
            <h2>Booking {paymentChoice === 'payNow' ? 'Submitted!' : 'Request Received!'}</h2>
            <p className="confirmation-message">
              {paymentChoice === 'payNow' 
                ? 'Thank you for your booking! Once we verify your M-Pesa payment, we will send a confirmation email within 24 hours.'
                : 'Thank you for booking with AdventureGo! We\'ve received your request and will contact you within 24 hours to confirm the details and arrange payment.'}
            </p>
            
            {paymentChoice === 'payNow' && (
              <div className="payment-reminder">
                <i className="fas fa-info-circle"></i>
                <div>
                  <strong>Payment Reminder:</strong>
                  <p>Please send payment of <strong>KES {(calculateTotal() * 145).toLocaleString()}</strong> to M-Pesa Buy Goods & Services - Till Number <strong>{MPESA_TILL_NUMBER}</strong></p>
                  <p className="small">Use your phone number <strong>{mpesaNumber || bookingData.phone}</strong> for the transaction.</p>
                </div>
              </div>
            )}
            
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
                  <span className="detail-label">Travelers:</span>
                  <span className="detail-value">
                    {bookingData.numberOfAdults} Adults, {bookingData.numberOfChildren} Children
                  </span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Travel Date:</span>
                  <span className="detail-value">{bookingData.travelDate || 'To be confirmed'}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Total Amount:</span>
                  <span className="detail-value total-price">${calculateTotal()}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Payment Status:</span>
                  <span className={`detail-value payment-status ${paymentChoice === 'payNow' ? 'pending' : 'pending'}`}>
                    {paymentChoice === 'payNow' ? 'Awaiting Payment' : 'Pending Confirmation'}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="confirmation-actions">
              <p>We'll send a confirmation email to <strong>{bookingData.email}</strong> shortly.</p>
              <div className="action-buttons">
                <button className="print-btn" onClick={() => window.print()}>
                  <i className="fas fa-print"></i> Print Confirmation
                </button>
                <button className="home-btn" onClick={() => {
                  setStep(1);
                  setBookingData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    destination: '',
                    tourType: '',
                    travelDate: '',
                    numberOfAdults: '1',
                    numberOfChildren: '0',
                    specialRequests: ''
                  });
                  setMpesaNumber('');
                }}>
                  <i className="fas fa-home"></i> Book Another Adventure
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;