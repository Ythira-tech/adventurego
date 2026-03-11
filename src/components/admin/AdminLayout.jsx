import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import './AdminLayout.css';

const AdminLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <h2>AdventureGo</h2>
          <p>Admin Dashboard</p>
        </div>
        
        <nav className="sidebar-nav">
          <Link to="/admin" className="nav-link">
            <i className="fas fa-dashboard"></i> Dashboard
          </Link>
          <Link to="/admin/bookings" className="nav-link">
            <i className="fas fa-calendar-check"></i> Bookings
          </Link>
          <Link to="/admin/events" className="nav-link">
            <i className="fas fa-calendar"></i> Events
          </Link>
          <Link to="/admin/activities" className="nav-link">
            <i className="fas fa-hiking"></i> Activities
          </Link>
          <Link to="/admin/safaris" className="nav-link">
            <i className="fas fa-paw"></i> Safaris
          </Link>
        </nav>

        <div className="sidebar-footer">
          <button onClick={handleLogout} className="logout-btn">
            <i className="fas fa-sign-out-alt"></i> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;