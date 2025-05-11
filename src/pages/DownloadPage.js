import React, { useState } from 'react';
import './DownloadPage.css';

const DownloadPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    position: ''
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
    // and then provide the download
    setSubmitted(true);
  };

  return (
    <main className="download-page">
      <section className="hero-section">
        <div className="container">
          <h1>Download Our Company Deck</h1>
          <p className="subtitle">Learn more about Talendy's services and how we can help your business</p>
        </div>
      </section>
      
      <section className="download-content">
        <div className="container">
          {!submitted ? (
            <div className="download-form-container">
              <h2>Complete the form to download</h2>
              <p>Please provide your information to receive our company deck</p>
              
              <form className="download-form" onSubmit={handleSubmit}>
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
                  <label htmlFor="email">Business Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
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
                  <label htmlFor="position">Job Title</label>
                  <input 
                    type="text" 
                    id="position" 
                    name="position" 
                    value={formData.position} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <button type="submit" className="download-btn">Download Company Deck</button>
                
                <p className="privacy-note">
                  By submitting this form, you agree to our 
                  <a href="/privacy-policy"> Privacy Policy</a>.
                </p>
              </form>
            </div>
          ) : (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h2>Thank you for your interest!</h2>
              <p>Your download should begin automatically. If it doesn't, please click the button below.</p>
              <a href="/assets/Talendy-Company-Deck-2023.pdf" download className="download-btn">
                Download Now
              </a>
            </div>
          )}
          
          <div className="deck-preview">
            <h3>What's included in our company deck?</h3>
            <ul>
              <li>Overview of Talendy's services</li>
              <li>Client success stories</li>
              <li>Detailed information about our talent pool</li>
              <li>Comparison with traditional hiring methods</li>
              <li>Pricing information and engagement models</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DownloadPage; 