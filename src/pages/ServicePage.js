import React from 'react';
import './ServicePage.css';
import ServicesBanner from '../assets/images/services.svg';

const ServicePage = () => {
  return (
    <main className="service-page">
      <section className="hero-section dark-section">
        <div className="container">
          <div className="hero-content">
            <h1>Our Services</h1>
            <p className="subtitle">Comprehensive solutions for accessing India's engineering talent</p>
          </div>
          <div className="hero-banner">
            <img src={ServicesBanner} alt="Talendy Services" />
          </div>
        </div>
      </section>
      
      <section className="services-content">
        <div className="container">
          <div className="service-card">
            <h2>Talendy HUB</h2>
            <p>Our talent matching platform that connects your business with pre-vetted Indian engineers.</p>
            <ul>
              <li>Access to 100,000+ engineers</li>
              <li>Rigorous technical assessments</li>
              <li>Matching based on technical skills and cultural fit</li>
              <li>Integrated interview and hiring process</li>
            </ul>
          </div>
          
          <div className="service-card">
            <h2>Talendy EOR</h2>
            <p>Our Employer of Record service that handles all legal and compliance aspects.</p>
            <ul>
              <li>Legal employment in compliance with Indian regulations</li>
              <li>Payroll management and benefits administration</li>
              <li>Tax compliance and reporting</li>
              <li>HR support and contract management</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicePage; 