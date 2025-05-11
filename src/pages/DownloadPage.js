import React, { useState } from 'react';
import './DownloadPage.css';

const LoginSignupContainer = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData({
      ...signupData,
      [name]: value
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
  };

  return (
    <div className="auth-container">
      <div className="auth-tabs">
        <button 
          className={`auth-tab ${isLogin ? 'active' : ''}`}
          onClick={() => setIsLogin(true)}
        >
          Login
        </button>
        <button 
          className={`auth-tab ${!isLogin ? 'active' : ''}`}
          onClick={() => setIsLogin(false)}
        >
          Sign Up
        </button>
      </div>
      
      {isLogin ? (
        <form className="auth-form" onSubmit={handleLoginSubmit}>
          <div className="form-group">
            <label htmlFor="login-email">Email</label>
            <input 
              type="email" 
              id="login-email" 
              name="email" 
              value={loginData.email} 
              onChange={handleLoginChange} 
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="login-password">Password</label>
            <input 
              type="password" 
              id="login-password" 
              name="password" 
              value={loginData.password} 
              onChange={handleLoginChange} 
              required 
            />
          </div>
          
          <button type="submit" className="auth-btn">Login</button>
        </form>
      ) : (
        <form className="auth-form" onSubmit={handleSignupSubmit}>
          <div className="form-group">
            <label htmlFor="signup-name">Full Name</label>
            <input 
              type="text" 
              id="signup-name" 
              name="name" 
              value={signupData.name} 
              onChange={handleSignupChange} 
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="signup-email">Email</label>
            <input 
              type="email" 
              id="signup-email" 
              name="email" 
              value={signupData.email} 
              onChange={handleSignupChange} 
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="signup-password">Password</label>
            <input 
              type="password" 
              id="signup-password" 
              name="password" 
              value={signupData.password} 
              onChange={handleSignupChange} 
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="signup-confirm-password">Confirm Password</label>
            <input 
              type="password" 
              id="signup-confirm-password" 
              name="confirmPassword" 
              value={signupData.confirmPassword} 
              onChange={handleSignupChange} 
              required 
            />
          </div>
          
          <button type="submit" className="auth-btn">Sign Up</button>
        </form>
      )}
    </div>
  );
};

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
          <div className="main-content">
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
          
          <LoginSignupContainer />
        </div>
      </section>
    </main>
  );
};

export default DownloadPage; 