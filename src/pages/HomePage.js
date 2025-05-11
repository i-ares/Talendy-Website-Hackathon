import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import HeroImage from '../assets/images/hero-tech-illustration.svg';
import ClientLogos from '../components/home/ClientLogos';
import TestimonialSlider from '../components/home/TestimonialSlider';

const HomePage = () => {
  return (
    <main className="home-page">
      {/* Hero Section */}
      <section className="hero-section dark-section">
        <div className="container">
          <div className="hero-content">
            <h1>Unlocking India's Engineering Talent for Global Innovation</h1>
            <p className="subtitle">
              Connecting world-class Indian engineers with leading companies across Asia
            </p>
            <div className="hero-cta">
              <Link to="/services" className="primary-btn">Explore Our Services</Link>
              <Link to="/contact" className="secondary-btn">Schedule a Consultation</Link>
            </div>
          </div>
          <div className="hero-banner">
            <img src={HeroImage} alt="Talendy Engineering Talent Platform" />
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="trusted-by">
        <div className="container">
          <h2>Trusted by 150+ Companies</h2>
          <ClientLogos />
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="key-benefits">
        <div className="container">
          <h2>Why Choose Talendy</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="icon">🎓</div>
              <h3>Top-tier Engineering Talent</h3>
              <p>Access to 100,000+ engineers from India's premier institutions like IIT</p>
            </div>
            <div className="benefit-card">
              <div className="icon">🔄</div>
              <h3>Seamless Integration</h3>
              <p>Our platform ensures smooth onboarding and team collaboration</p>
            </div>
            <div className="benefit-card">
              <div className="icon">💼</div>
              <h3>Global Compliance</h3>
              <p>Handle all legal, tax, and HR requirements across borders</p>
            </div>
            <div className="benefit-card">
              <div className="icon">📈</div>
              <h3>Scalable Teams</h3>
              <p>Quickly scale your engineering capacity based on project needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <div className="container">
          <h2>Our Solutions</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Talendy HUB</h3>
              <p>A comprehensive platform connecting you with pre-vetted Indian engineering talent</p>
              <Link to="/talendy-hub" className="learn-more">Learn More →</Link>
            </div>
            <div className="service-card">
              <h3>Talendy EOR</h3>
              <p>Our Employer of Record service handles all legal and compliance aspects</p>
              <Link to="/talendy-eor" className="learn-more">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Voice of Consumers */}
      <section className="testimonials">
        <div className="container">
          <h2>What Our Clients Say</h2>
          <TestimonialSlider />
        </div>
      </section>

      {/* Latest News */}
      <section className="latest-news">
        <div className="container">
          <h2>Latest Updates</h2>
          <div className="news-grid">
            {/* News items would be dynamically generated */}
            <div className="news-card">
              <div className="news-date">May 5, 2025</div>
              <h3>Talendy Expands Services to Southeast Asia</h3>
              <p>We're excited to announce our expansion into Singapore, Thailand, and Vietnam, bringing our engineering talent solutions to more companies across Asia.</p>
              <Link to="/news/1" className="read-more">Read More →</Link>
            </div>
            <div className="news-card">
              <div className="news-date">April 28, 2025</div>
              <h3>New Partnership with Leading Tech Institutes in India</h3>
              <p>Talendy has formed strategic partnerships with five additional top engineering institutes in India, expanding our talent pool by over 20,000 engineers.</p>
              <Link to="/news/2" className="read-more">Read More →</Link>
            </div>
          </div>
          <div className="view-all-news">
            <Link to="/news">View All News →</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Transform Your Engineering Capabilities?</h2>
          <p>Discover how Talendy can help you build world-class tech teams</p>
          <div className="cta-buttons">
            <Link to="/download" className="primary-btn">Download Company Deck</Link>
            <Link to="/contact" className="primary-btn">Contact Our Team</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
