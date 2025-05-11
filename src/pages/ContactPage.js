import React, { useState } from 'react';
import './ContactPage.css';
import ContactBanner from '../assets/images/contact.svg';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    interest: 'general'
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, this would send the data to a server
    setSubmitted(true);
  };

  return (
    <main className="contact-page">
      <section className="hero-section dark-section">
        <div className="container">
          <div className="hero-content">
            <h1>Contact Us</h1>
            <p className="subtitle">Get in touch with our team to discuss how we can help you</p>
          </div>
          <div className="hero-banner">
            <img src={ContactBanner} alt="Contact Talendy" />
          </div>
        </div>
      </section>
      
      <section className="contact-content">
        <div className="container">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>We'd love to hear from you. Please fill out the form or reach out to us directly using the contact information below.</p>
            
            <div className="info-items">
              <div className="info-item">
                <h3>Email</h3>
                <p><a href="mailto:info@talendy.com">info@talendy.com</a></p>
              </div>
              
              <div className="info-item">
                <h3>Phone</h3>
                <p><a href="tel:+6591234567">+65 9123 4567</a></p>
              </div>
              
              <div className="info-item">
                <h3>Office</h3>
                <p>123 Innovation Way, #08-01<br />Tech Park, Singapore 123456</p>
              </div>
              
              <div className="info-item">
                <h3>Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday - Sunday: Closed</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            {!submitted ? (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-header">
                  <h2>Send Us a Message</h2>
                </div>
                
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input 
                      type="text" 
                      id="company" 
                      name="company" 
                      value={formData.company} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="interest">What are you interested in?</label>
                  <select 
                    id="interest" 
                    name="interest" 
                    value={formData.interest} 
                    onChange={handleChange}
                  >
                    <option value="general">General Inquiry</option>
                    <option value="talendy-hub">Talendy HUB</option>
                    <option value="talendy-eor">Talendy EOR</option>
                    <option value="partnership">Partnership Opportunities</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-btn">Send Message</button>
              </form>
            ) : (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h2>Thank you for contacting us!</h2>
                <p>We have received your message and will get back to you within 24 hours.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage; 