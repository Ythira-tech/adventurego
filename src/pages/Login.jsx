import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Login.css';
import loginImage from '../assets/register-bg.jpg';

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);

    try {
      // Simple validation - in real app, this would call your backend
      if (loginData.email && loginData.password) {
        localStorage.setItem('user', JSON.stringify({ email: loginData.email, name: 'User' }));
        localStorage.setItem('isAuthenticated', 'true');
        navigate('/dashboard');
      } else {
        setSubmitError('Please enter email and password');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setSubmitError('Login failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoogleAuth = () => {
    localStorage.setItem('user', JSON.stringify({ email: 'user@gmail.com', name: 'Google User' }));
    localStorage.setItem('isAuthenticated', 'true');
    navigate('/dashboard');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-form-container">
          <div className="form-header">
            <h1>Welcome Back to <span className="highlight">AdventureGo</span></h1>
            <p>Log in to continue your adventure</p>
          </div>

          {submitError && (
            <div className="error-message">
              <i className="fas fa-exclamation-circle"></i>
              <p>{submitError}</p>
            </div>
          )}

          <div className="social-signup">
            <button className="google-btn" onClick={handleGoogleAuth} type="button">
              <div className="google-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                  <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                  <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                  <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                  <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
                </svg>
              </div>
              <span>Sign in with Google</span>
            </button>
            <div className="divider">
              <span>or</span>
            </div>
          </div>

          <form className="login-form" onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={loginData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password *</label>
              <input
                type="password"
                id="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="form-group forgot-password">
              <Link to="/forgot-password">Forgot password?</Link>
            </div>

            <button type="submit" className="submit-btn" disabled={submitting}>
              {submitting ? 'Logging in...' : 'Log In'}
            </button>

            <div className="signup-link">
              Don't have an account? <Link to="/register">Sign up</Link>
            </div>
          </form>
        </div>

        <div className="login-image-container">
          <img src={loginImage} alt="Adventure" />
          <div className="image-content">
            <h2>Welcome Back!</h2>
            <p>Continue your journey with us</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;