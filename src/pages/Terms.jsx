import React from 'react';
import './Terms.css';

const Terms = () => {
  return (
    <div className="terms-page">
      {/* Hero Section */}
      <section className="terms-hero">
        <div className="hero-overlay">
          <div className="container">
            <div className="hero-content">
              <h1>Terms & Conditions</h1>
              <p className="hero-subtitle">AdventureGo East Africa</p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="terms-content">
        <div className="container">
          <div className="content-wrapper">
            <div className="terms-section">
              <h2>1. Booking & Payment</h2>
              <ul>
                <li>A 30% deposit is required to confirm your booking</li>
                <li>Full payment is due 30 days before departure</li>
                <li>We accept major credit cards and bank transfers</li>
                <li>All prices are in US Dollars unless specified otherwise</li>
              </ul>
            </div>

            <div className="terms-section">
              <h2>2. Cancellations & Refunds</h2>
              <ul>
                <li>60+ days before departure: Full refund (minus processing fees)</li>
                <li>30-59 days before departure: 50% refund</li>
                <li>15-29 days before departure: 25% refund</li>
                <li>Less than 14 days: No refund</li>
                <li>No-shows are non-refundable</li>
              </ul>
            </div>

            <div className="terms-section">
              <h2>3. Health & Safety</h2>
              <ul>
                <li>All participants must complete a health declaration form</li>
                <li>Some activities require medical clearance</li>
                <li>Travel insurance is mandatory for all international clients</li>
                <li>We reserve the right to refuse participation for safety reasons</li>
              </ul>
            </div>

            <div className="terms-section">
              <h2>4. Changes by AdventureGo</h2>
              <ul>
                <li>We may modify itineraries due to weather, safety, or unforeseen circumstances</li>
                <li>We will provide comparable alternatives when possible</li>
                <li>No refunds for minor itinerary changes</li>
                <li>Major changes may qualify for partial refunds or future credits</li>
              </ul>
            </div>

            <div className="terms-section">
              <h2>5. Client Responsibilities</h2>
              <ul>
                <li>Carry valid travel documents and insurance</li>
                <li>Follow guide instructions at all times</li>
                <li>Respect local cultures and environments</li>
                <li>Inform us of any special requirements in advance</li>
              </ul>
            </div>

            <div className="terms-section">
              <h2>6. Liability</h2>
              <ul>
                <li>Adventure activities involve inherent risks</li>
                <li>We are not liable for personal injury, loss, or damage</li>
                <li>Clients participate at their own risk</li>
                <li>We maintain appropriate liability insurance</li>
              </ul>
            </div>

            <div className="terms-section">
              <h2>7. Photography</h2>
              <ul>
                <li>We may take photos during adventures for promotional use</li>
                <li>Clients can opt out of photography</li>
                <li>Client photos may be shared with consent</li>
              </ul>
            </div>

            <div className="acceptance-box">
              <h3>Acceptance of Terms</h3>
              <p>
                By booking with AdventureGo, you acknowledge that you have read, understood, 
                and agree to these Terms & Conditions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;