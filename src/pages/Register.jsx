import React, { useState } from 'react';
import './Register.css';
import registerImage from '../assets/register-bg.jpg';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    newsletter: true
  });

  const [activeTab, setActiveTab] = useState('traveler');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add registration logic here
  };

  const handleGoogleSignUp = () => {
    console.log('Google sign-up initiated');
    // Add Google OAuth logic here
  };

  const userTypes = [
    { id: 'traveler', label: 'Traveler', icon: 'fas fa-hiking', description: 'Book adventures and explore' },
    { id: 'guide', label: 'Tour Guide', icon: 'fas fa-compass', description: 'List your services and tours' },
    { id: 'partner', label: 'Business Partner', icon: 'fas fa-handshake', description: 'Collaborate with us' }
  ];

  return (
    <div className="register-page">
      <div className="register-container">
        {/* Left Side - Form */}
        <div className="register-form-container">
          <div className="form-header">
            <h1>Join Adventure<span className="highlight">Go</span></h1>
            <p>Create your account to start your East African adventure</p>
          </div>

          {/* User Type Selection */}
          <div className="user-type-selector">
            <div className="type-tabs">
              {userTypes.map(type => (
                <button
                  key={type.id}
                  className={`type-tab ${activeTab === type.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(type.id)}
                >
                  <i className={type.icon}></i>
                  <span className="type-label">{type.label}</span>
                  <span className="type-description">{type.description}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Google Sign Up */}
          <div className="social-signup">
            <button className="google-btn" onClick={handleGoogleSignUp}>
              <div className="google-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                  <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                  <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                  <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                  <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
                </svg>
              </div>
              <span>Sign up with Google</span>
            </button>
            <div className="divider">
              <span>or</span>
            </div>
          </div>

          {/* Registration Form */}
          <form className="registration-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">
                  <i className="fas fa-user"></i> First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">
                  <i className="fas fa-user"></i> Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">
                <i className="fas fa-envelope"></i> Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">
                <i className="fas fa-phone"></i> Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+254 700 123 456"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="password">
                  <i className="fas fa-lock"></i> Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  required
                />
                <div className="password-strength">
                  <div className="strength-bar"></div>
                  <span className="strength-text">Password strength: Weak</span>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">
                  <i className="fas fa-lock"></i> Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  required
                />
              </div>
            </div>

            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="newsletter"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleChange}
              />
              <label htmlFor="newsletter">
                I want to receive updates about new adventures, special offers, and exclusive content
              </label>
            </div>

            <div className="form-group checkbox-group">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                required
              />
              <label htmlFor="terms">
                I agree to the <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>
              </label>
            </div>

            <button type="submit" className="submit-btn">
              Create Account
            </button>

            <div className="login-link">
              Already have an account? <a href="/login">Sign in</a>
            </div>
          </form>

          {/* Registration Benefits */}
          <div className="registration-benefits">
            <h3>Why Register?</h3>
            <div className="benefits-grid">
              <div className="benefit">
                <i className="fas fa-gift"></i>
                <h4>Exclusive Deals</h4>
                <p>Access member-only discounts and early bird offers</p>
              </div>
              <div className="benefit">
                <i className="fas fa-history"></i>
                <h4>Quick Booking</h4>
                <p>Save your details for faster reservations</p>
              </div>
              <div className="benefit">
                <i className="fas fa-star"></i>
                <h4>Reward Points</h4>
                <p>Earn points on every booking for future discounts</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Image/Info */}
        <div className="register-image-container">
          <div className="image-overlay">
            <img src={registerImage} alt="Adventure Registration" />
            <div className="image-content">
              <h2>Start Your Adventure Today</h2>
              <p>Join thousands of adventurers exploring East Africa's wonders</p>
              <div className="stats">
                <div className="stat">
                  <span className="number">10,000+</span>
                  <span className="label">Happy Members</span>
                </div>
                <div className="stat">
                  <span className="number">48</span>
                  <span className="label">Countries</span>
                </div>
                <div className="stat">
                  <span className="number">4.8</span>
                  <span className="label">Average Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;