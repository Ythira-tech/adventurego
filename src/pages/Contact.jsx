import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would submit to a backend here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-overlay">
          <div className="container">
            <h1>Get In Touch</h1>
            <p>Have questions about your next adventure? We're here to help!</p>
          </div>
        </div>
      </section>

      <div className="container">
        {/* Contact Content */}
        <div className="contact-content">
          <div className="contact-info-section">
            <h2>Contact Information</h2>
            <p>Reach out to us through any of the channels below</p>
            
            <div className="contact-info-grid">
              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <h3>Our Office</h3>
                <p>123 Adventure Street</p>
                <p>Kathmandu, Nepal 44600</p>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <h3>Phone Number</h3>
                <p>+977 1 1234567</p>
                <p>Mon-Fri, 9:00 AM - 6:00 PM</p>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <h3>Email Address</h3>
                <p>info@adventurego.com</p>
                <p>support@adventurego.com</p>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <h3>Working Hours</h3>
                <p>Monday - Friday: 9am - 6pm</p>
                <p>Saturday: 10am - 4pm</p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="contact-form-section">
            <h2>Send Us a Message</h2>
            <p>Fill out the form below and we'll get back to you within 24 hours</p>
            
            {isSubmitted ? (
              <div className="success-message">
                <i className="fas fa-check-circle"></i>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for contacting us. We'll get back to you soon.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is this regarding?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us about your inquiry..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  <i className="fas fa-paper-plane"></i> Send Message
                </button>
              </form>
            )}
          </div>

          {/* FAQ Section */}
          <div className="faq-section">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h3>How do I book a tour?</h3>
                <p>You can book directly through our website, contact us via phone, or visit our office. Online booking is available 24/7.</p>
              </div>
              <div className="faq-item">
                <h3>What payment methods do you accept?</h3>
                <p>We accept credit/debit cards, bank transfers, and digital wallets. Payment plans are available for larger packages.</p>
              </div>
              <div className="faq-item">
                <h3>Can I cancel or reschedule my booking?</h3>
                <p>Yes, most bookings can be canceled or rescheduled up to 7 days before departure. See our cancellation policy for details.</p>
              </div>
              <div className="faq-item">
                <h3>Do you offer group discounts?</h3>
                <p>Absolutely! Groups of 6+ receive special discounts. Contact us directly for customized group packages.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;