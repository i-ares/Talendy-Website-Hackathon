import React from 'react';
import { Link } from 'react-router-dom';
import './CandidatePage.css';

const CandidatePage = () => {
  return (
    <main className="candidate-page">
      <section className="hero-section">
        <div className="container">
          <h1>For People</h1>
          <p className="subtitle">Join our talent pool and connect with exciting opportunities at leading companies across Asia</p>
          <div className="cta-buttons">
            <a href="#join-form" className="primary-btn">Apply Now</a>
            <a href="#benefits" className="primary-btn">Learn More</a>
          </div>
        </div>
      </section>
      
      <section id="benefits" className="benefits-section">
        <div className="container">
          <h2>Why Join Talendy?</h2>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🌏</div>
              <h3>Global Opportunities</h3>
              <p>Access job opportunities with leading tech companies across Asia without the need to relocate</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">💰</div>
              <h3>Competitive Compensation</h3>
              <p>Earn salaries comparable to international standards while working from India</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">🚀</div>
              <h3>Career Growth</h3>
              <p>Work on challenging projects and gain experience with cutting-edge technologies</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">⚖️</div>
              <h3>Work-Life Balance</h3>
              <p>Enjoy flexible working arrangements that respect your time zone and personal life</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">📚</div>
              <h3>Learning Resources</h3>
              <p>Access our training programs and resources to continuously improve your skills</p>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon">🛡️</div>
              <h3>Job Security</h3>
              <p>We handle contracts, payments, and client relationships, so you can focus on your work</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="process-section">
        <div className="container">
          <h2>How It Works</h2>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Apply</h3>
                <p>Submit your application with your resume and technical skills</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Assessment</h3>
                <p>Complete our technical assessment to demonstrate your skills</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Interview</h3>
                <p>Interview with our team to discuss your experience and career goals</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Matching</h3>
                <p>Get matched with companies based on your skills and preferences</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>Onboarding</h3>
                <p>Start your new role with ongoing support from our team</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="join-form" className="join-section">
        <div className="container">
          <div className="join-content">
            <h2>Join Our Talent Pool</h2>
            <p>Fill out the form below to apply. Our team will review your application and get back to you within 3 business days.</p>
            
            <form className="join-form">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input type="text" id="fullName" name="fullName" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="experience">Years of Experience</label>
                <select id="experience" name="experience" required>
                  <option value="">Select experience</option>
                  <option value="0-2">0-2 years</option>
                  <option value="3-5">3-5 years</option>
                  <option value="6-8">6-8 years</option>
                  <option value="9+">9+ years</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="skills">Primary Skills</label>
                <input type="text" id="skills" name="skills" placeholder="e.g., React, Node.js, Java" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="resume">Resume/CV</label>
                <input type="file" id="resume" name="resume" required />
                <p className="file-note">PDF or DOC format, max 5MB</p>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Additional Information</label>
                <textarea id="message" name="message" rows="4"></textarea>
              </div>
              
              <button type="submit" className="submit-btn">Submit Application</button>
            </form>
          </div>
          
          <div className="testimonials">
            <h3>What Engineers Say About Us</h3>
            
            <div className="testimonial-item">
              <p>"Joining Talendy was the best career decision I've made. I'm now working with a Singapore-based startup on cutting-edge projects, earning a competitive salary, and all without leaving India."</p>
              <div className="testimonial-author">
                <p className="author-name">Priya Sharma</p>
                <p className="author-role">Full Stack Developer</p>
              </div>
            </div>
            
            <div className="testimonial-item">
              <p>"The onboarding process was smooth, and the Talendy team was supportive throughout. They handled all the paperwork and made sure I was set up for success with my new team."</p>
              <div className="testimonial-author">
                <p className="author-name">Rahul Patel</p>
                <p className="author-role">Backend Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          
          <div className="faq-list">
            <div className="faq-item">
              <h3>Do I need to relocate for the job?</h3>
              <p>No, you can work remotely from India while being employed by companies across Asia.</p>
            </div>
            
            <div className="faq-item">
              <h3>How does the payment process work?</h3>
              <p>We handle all payments, ensuring you receive your salary in Indian currency, with all taxes properly managed.</p>
            </div>
            
            <div className="faq-item">
              <h3>What types of companies will I work with?</h3>
              <p>We partner with a range of companies from startups to enterprise organizations across various industries in Asia.</p>
            </div>
            
            <div className="faq-item">
              <h3>How long does the application process take?</h3>
              <p>Typically, the entire process from application to job offer takes about 3-4 weeks, though it can vary based on your skills and the available opportunities.</p>
            </div>
          </div>
          
          <div className="more-questions">
            <p>Have more questions? <Link to="/contact">Contact us</Link> for more information.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CandidatePage; 