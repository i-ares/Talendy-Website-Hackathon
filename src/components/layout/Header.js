import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import TalendyLogo from '../../assets/logos/talendy-logo.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo-container">
          <Link to="/">
            <img src={TalendyLogo} alt="Talendy" />
          </Link>
        </div>
        
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}></span>
        </button>
        
        <nav className={`main-nav ${mobileMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link></li>
            <li><Link to="/talendy-hub" onClick={() => setMobileMenuOpen(false)}>Talendy HUB</Link></li>
            <li><Link to="/talendy-eor" onClick={() => setMobileMenuOpen(false)}>Talendy EOR</Link></li>
            <li><Link to="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link></li>
            <li><Link to="/news" onClick={() => setMobileMenuOpen(false)}>News</Link></li>
            <li><Link to="/faq" onClick={() => setMobileMenuOpen(false)}>FAQ</Link></li>
            <li><Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
        
        <div className="cta-buttons">
          <Link to="/for-candidates" className="candidate-btn">
            <span>For Candidates</span>
          </Link>
          <Link to="/download" className="companies-btn">
            <span>For Companies</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
