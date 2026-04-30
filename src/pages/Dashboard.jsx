import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is authenticated
    const isAuth = localStorage.getItem('isAuthenticated');
    const userData = localStorage.getItem('user');
    
    if (!isAuth) {
      navigate('/login');
    } else {
      setUser(JSON.parse(userData));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    navigate('/');
  };

  if (!user) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-content">
          <h1>Welcome, {user.name}!</h1>
          <button onClick={handleLogout} className="logout-btn">
            <i className="fas fa-sign-out-alt"></i> Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="dashboard-main">
        <div className="welcome-card">
          <div className="welcome-icon">
            <i className="fas fa-map-marked-alt"></i>
          </div>
          <h2>Your Adventure Awaits!</h2>
          <p>Thank you for joining AdventureGo. We're excited to have you as part of our community.</p>
          <div className="welcome-stats">
            <div className="stat-item">
              <span className="stat-number">0</span>
              <span className="stat-label">Bookings</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">0</span>
              <span className="stat-label">Reviews</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">0</span>
              <span className="stat-label">Points</span>
            </div>
          </div>
        </div>

        <div className="action-cards">
          <Link to="/events" className="action-card">
            <i className="fas fa-calendar-alt"></i>
            <h3>Browse Events</h3>
            <p>Discover upcoming adventures</p>
          </Link>

          <Link to="/safaris" className="action-card">
            <i className="fas fa-paw"></i>
            <h3>Explore Safaris</h3>
            <p>Find your perfect safari</p>
          </Link>

          <Link to="/booking" className="action-card">
            <i className="fas fa-ticket-alt"></i>
            <h3>Make a Booking</h3>
            <p>Start your journey today</p>
          </Link>
        </div>

        <div className="recent-activity">
          <h3>Recent Activity</h3>
          <div className="activity-list">
            <div className="activity-item">
              <i className="fas fa-circle"></i>
              <div className="activity-content">
                <p>Welcome to AdventureGo! Start exploring our adventures.</p>
                <span className="activity-time">Just now</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;