import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';
import './AdminSettings.css';

const AdminSettings = () => {
  const [settings, setSettings] = useState({
    companyName: 'AdventureGo',
    email: 'hello@adventurego.co.ke',
    phone: '+254 711 480 765',
    address: 'Nairobi, Kenya',
    facebook: '',
    instagram: '',
    twitter: '',
    aboutText: ''
  });
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const data = await api.get('/settings');
      setSettings(data);
    } catch (error) {
      console.error('Error fetching settings:', error);
    }
  };

  const handleChange = (e) => {
    setSettings({
      ...settings,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await api.post('/settings', settings);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error('Error saving settings:', error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="admin-settings">
      <h1>Site Settings</h1>
      
      {success && (
        <div className="success-message">
          Settings saved successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="settings-form">
        <div className="form-section">
          <h2>Company Information</h2>
          
          <div className="form-group">
            <label>Company Name</label>
            <input
              type="text"
              name="companyName"
              value={settings.companyName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Contact Email</label>
            <input
              type="email"
              name="email"
              value={settings.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              value={settings.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={settings.address}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-section">
          <h2>Social Media Links</h2>
          
          <div className="form-group">
            <label>Facebook URL</label>
            <input
              type="url"
              name="facebook"
              value={settings.facebook}
              onChange={handleChange}
              placeholder="https://facebook.com/..."
            />
          </div>

          <div className="form-group">
            <label>Instagram URL</label>
            <input
              type="url"
              name="instagram"
              value={settings.instagram}
              onChange={handleChange}
              placeholder="https://instagram.com/..."
            />
          </div>

          <div className="form-group">
            <label>Twitter URL</label>
            <input
              type="url"
              name="twitter"
              value={settings.twitter}
              onChange={handleChange}
              placeholder="https://twitter.com/..."
            />
          </div>
        </div>

        <div className="form-section">
          <h2>About Page Content</h2>
          
          <div className="form-group">
            <label>About Text</label>
            <textarea
              name="aboutText"
              value={settings.aboutText}
              onChange={handleChange}
              rows="6"
              placeholder="Write about your company..."
            />
          </div>
        </div>

        <button type="submit" className="save-btn" disabled={saving}>
          {saving ? 'Saving...' : 'Save Settings'}
        </button>
      </form>
    </div>
  );
};

export default AdminSettings;