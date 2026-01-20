import React from 'react';
import './Privacy.css';

const Privacy = () => {
  return (
    <div className="privacy-page">
      {/* Hero Section */}
      <section className="privacy-hero">
        <div className="hero-overlay">
          <div className="container">
            <div className="hero-content">
              <h1>Privacy Policy</h1>
              <p className="hero-subtitle">Last Updated: December 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="privacy-content">
        <div className="container">
          <div className="content-wrapper">
            <div className="privacy-section">
              <h2>1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us when you make a booking, create an account, 
                contact us, or participate in our promotions. This may include:
              </p>
              <ul>
                <li>Personal identification information (name, email address, phone number)</li>
                <li>Booking details and preferences</li>
                <li>Payment information</li>
                <li>Health information necessary for adventure activities</li>
                <li>Communication preferences</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>2. How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul>
                <li>Process your bookings and payments</li>
                <li>Communicate with you about your adventures</li>
                <li>Provide customer support</li>
                <li>Send you updates and promotional offers (with your consent)</li>
                <li>Improve our services and website</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>3. Information Sharing</h2>
              <p>
                We do not sell your personal information. We may share your information with:
              </p>
              <ul>
                <li>Our licensed guides and partners for trip coordination</li>
                <li>Payment processors to complete transactions</li>
                <li>Government authorities when required by law</li>
                <li>Emergency services when necessary for your safety</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div className="privacy-section">
              <h2>5. Your Rights</h2>
              <p>
                You have the right to:
              </p>
              <ul>
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>6. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us:
              </p>
              <div className="contact-info">
                <p><strong>Email:</strong> privacy@adventurego.co.ke</p>
                <p><strong>Phone:</strong> +254 711 480 765</p>
                <p><strong>Address:</strong> AdventureGo East Africa, Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;