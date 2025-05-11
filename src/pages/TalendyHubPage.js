import React from 'react';
import { Link } from 'react-router-dom';
import './TalendyHubPage.css';
import ProfileCreationIcon from '../assets/illustrations/profile-creation.svg';
import TalentMatchingIcon from '../assets/illustrations/talent-matching.svg';
import InterviewProcessIcon from '../assets/illustrations/interview-process.svg';
import TeamIntegrationIcon from '../assets/illustrations/team-integration.svg';
import TalendyBanner from '../assets/images/talendyBanner.svg';

const TalendyHubPage = () => {
  return (
    <main className="talendy-hub-page">
      <section className="hero-section dark-section">
        <div className="container">
          <div className="hero-content">
            <h1>A One Stop Platform to Connect with Top 1% Talent from India</h1>
            <p className="subtitle">Discover India's top talent from premier institutions, including IITs, IIMs, NITs, IISc, and IIITs. From pre-recruitment to seamless onboarding, we ensure a smooth hiring journey.</p>
          </div>
          <div className="hero-banner">
            <img src={TalendyBanner} alt="Talendy Hub Platform" />
          </div>
        </div>
      </section>
      
      <section className="hub-features light-section">
        <div className="container">
          <h2>How Talendy HUB Works</h2>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-illustration">
                <img src={ProfileCreationIcon} alt="Profile Creation" />
              </div>
              <div className="feature-number">1</div>
              <h3>Profile Creation</h3>
              <p>Define your project requirements, technical needs, and team structure with our expert consultants</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-illustration">
                <img src={TalentMatchingIcon} alt="Talent Matching" />
              </div>
              <div className="feature-number">2</div>
              <h3>Talent Matching</h3>
              <p>Our hybrid AI-powered system and expert consultants match your needs with pre-vetted talent</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-illustration">
                <img src={InterviewProcessIcon} alt="Interview Process" />
              </div>
              <div className="feature-number">3</div>
              <h3>Interview Process</h3>
              <p>Conduct technical interviews and cultural fit assessments with our comprehensive platform support</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-illustration">
                <img src={TeamIntegrationIcon} alt="Team Integration" />
              </div>
              <div className="feature-number">4</div>
              <h3>Team Integration</h3>
              <p>Get unwavering support throughout the onboarding process for seamless team integration</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="talent-pool light-section">
        <div className="container">
          <h2>Our Talent Pool</h2>
          <p>Access to over 12,000+ active candidates from 16+ premier institutions across India</p>
          
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">12,000+</div>
              <div className="stat-label">Active Candidates</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-number">16+</div>
              <div className="stat-label">Premier Institutions</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-number">95%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="cta-section dark-section">
        <div className="container">
          <h2>Ready to Build Your Dream Team?</h2>
          <p>Get started with Talendy HUB today</p>
          <div className="cta-buttons">
            <Link to="/contact" className="cta-button primary-btn">Schedule a Demo</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TalendyHubPage; 