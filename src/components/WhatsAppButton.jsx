import React, { useState } from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Your WhatsApp number - UPDATE THIS!
  const phoneNumber = '254711480765'; // Remove spaces
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  
  // Optional: Add a default message
  const defaultMessage = 'Hello AdventureGo! I would like to inquire about your adventure packages.';
  const encodedMessage = encodeURIComponent(defaultMessage);
  
  const handleClick = () => {
    window.open(`${whatsappLink}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="whatsapp-container">
      {/* Floating WhatsApp Button */}
      <button 
        className="whatsapp-button"
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Chat with us on WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </button>
      
      {/* Tooltip/Notification */}
      <div className={`whatsapp-tooltip ${isHovered ? 'visible' : ''}`}>
        <div className="tooltip-content">
          <i className="fas fa-comment-dots"></i>
          <span>Chat with us!</span>
        </div>
        <div className="tooltip-arrow"></div>
      </div>
      
      {/* Pulse Animation */}
      <div className="whatsapp-pulse"></div>
    </div>
  );
};

export default WhatsAppButton;