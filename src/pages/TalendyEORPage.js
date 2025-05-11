import React from 'react';
import { Link } from 'react-router-dom';
import './TalendyEORPage.css';
import TalendyEORBanner from '../assets/images/talendyeor.svg';

const TalendyEORPage = () => {
  return (
    <main className="talendy-eor-page">
      <section className="hero-section dark-section">
        <div className="container">
          <div className="hero-content">
            <h1>Seamless Employment Solutions for Global Teams</h1>
            <p className="subtitle">Our Employer of Record service handles all legal, compliance, and HR aspects of hiring Indian engineering talent, letting you focus on building great things together.</p>
          </div>
          <div className="hero-banner">
            <img src={TalendyEORBanner} alt="Talendy EOR Platform" />
          </div>
        </div>
      </section>
      
      <section className="eor-benefits light-section">
        <div className="container">
          <h2>Why Choose Talendy EOR</h2>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Legal Compliance</h3>
              <p>We ensure full compliance with all Indian employment laws, regulations, and taxation requirements</p>
            </div>
            
            <div className="benefit-card">
              <h3>Payroll Management</h3>
              <p>We handle salary disbursement, tax withholding, and benefits administration</p>
            </div>
            
            <div className="benefit-card">
              <h3>HR Support</h3>
              <p>Our team provides ongoing HR management for your team members based in India</p>
            </div>
            
            <div className="benefit-card">
              <h3>Risk Mitigation</h3>
              <p>We take on employment liability so you can focus on your business without legal concerns</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="how-it-works light-section">
        <div className="container">
          <h2>How Talendy EOR Works</h2>
          
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Talent Selection</h3>
                <p>You select the ideal candidates through our platform or your own recruitment process</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Contract Setup</h3>
                <p>We create compliant employment contracts and manage the onboarding process</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Ongoing Management</h3>
                <p>We handle payroll, benefits, taxes, and all HR requirements</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Team Building</h3>
                <p>You focus on integrating your new team members while we handle the administrative aspects</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="cta-section dark-section">
        <div className="container">
          <h2>Transform Your Global Hiring Today</h2>
          <p>Experience hassle-free international employment with our comprehensive EOR solution</p>
          <div className="cta-buttons">
            <Link to="/contact" className="primary-btn">Schedule a Consultation</Link>
            <a href="/company-deck.pdf" className="primary-btn">Download Company Deck</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TalendyEORPage; 