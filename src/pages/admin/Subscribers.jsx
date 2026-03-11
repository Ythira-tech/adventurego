import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';
import './AdminSubscribers.css';

const AdminSubscribers = () => {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSubscribers();
  }, []);

  const fetchSubscribers = async () => {
    try {
      const data = await api.get('/subscribers');
      setSubscribers(data);
    } catch (error) {
      console.error('Error fetching subscribers:', error);
    } finally {
      setLoading(false);
    }
  };

  const exportToCSV = () => {
    const csv = subscribers.map(sub => `${sub.email},${sub.subscribedAt}`).join('\n');
    const blob = new Blob([`Email,Date Subscribed\n${csv}`], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'subscribers.csv';
    a.click();
  };

  if (loading) return <div className="loading">Loading subscribers...</div>;

  return (
    <div className="admin-subscribers">
      <div className="header">
        <h1>Newsletter Subscribers</h1>
        <button onClick={exportToCSV} className="export-btn">
          <i className="fas fa-download"></i> Export CSV
        </button>
      </div>
      
      <div className="subscribers-stats">
        <div className="stat-card">
          <h3>{subscribers.length}</h3>
          <p>Total Subscribers</p>
        </div>
        <div className="stat-card">
          <h3>{subscribers.filter(s => new Date(s.subscribedAt) > new Date(Date.now() - 30*24*60*60*1000)).length}</h3>
          <p>New This Month</p>
        </div>
      </div>

      <div className="table-responsive">
        <table className="subscribers-table">
          <thead>
            <tr>
              <th>Email</th>
              <th>Subscribed Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {subscribers.map(sub => (
              <tr key={sub._id}>
                <td>{sub.email}</td>
                <td>{new Date(sub.subscribedAt).toLocaleDateString()}</td>
                <td>
                  <span className="status-badge active">Active</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminSubscribers;