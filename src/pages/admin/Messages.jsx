import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';
import './AdminMessages.css';

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const data = await api.get('/contact');
      setMessages(data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (id) => {
    try {
      await api.patch(`/contact/${id}/read`);
      fetchMessages();
    } catch (error) {
      console.error('Error updating message:', error);
    }
  };

  const deleteMessage = async (id) => {
    if (window.confirm('Are you sure you want to delete this message?')) {
      try {
        await api.delete(`/contact/${id}`);
        fetchMessages();
      } catch (error) {
        console.error('Error deleting message:', error);
      }
    }
  };

  if (loading) return <div className="loading">Loading messages...</div>;

  return (
    <div className="admin-messages">
      <h1>Contact Messages</h1>
      
      <div className="messages-grid">
        {messages.length === 0 ? (
          <p className="no-messages">No messages yet</p>
        ) : (
          messages.map(message => (
            <div key={message._id} className={`message-card ${message.read ? 'read' : 'unread'}`}>
              <div className="message-header">
                <div className="sender-info">
                  <h3>{message.name}</h3>
                  <span className="message-date">
                    {new Date(message.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <div className="message-actions">
                  {!message.read && (
                    <button onClick={() => markAsRead(message._id)} className="mark-read-btn">
                      <i className="fas fa-check"></i> Mark Read
                    </button>
                  )}
                  <button onClick={() => deleteMessage(message._id)} className="delete-btn">
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </div>
              <div className="message-details">
                <p><strong>Email:</strong> {message.email}</p>
                <p><strong>Phone:</strong> {message.phone || 'Not provided'}</p>
                <p><strong>Subject:</strong> {message.subject}</p>
                <div className="message-body">
                  <strong>Message:</strong>
                  <p>{message.message}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminMessages;