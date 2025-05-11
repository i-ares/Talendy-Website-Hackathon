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

  useEffect(() => {
    // Prevent scrolling when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo-container">
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>
            <img src={TalendyLogo} alt="Talendy" />
          </Link>
        </div>
        
        <nav className={`main-nav ${mobileMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link></li>
            <li><Link to="/talendy-hub" onClick={() => setMobileMenuOpen(false)}>Talendy HUB</Link></li>
            <li><Link to="/talendy-eor" onClick={() => setMobileMenuOpen(false)}>Talendy EOR</Link></li>
            <li><Link to="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link></li>
            <li><Link to="/news" onClick={() => setMobileMenuOpen(false)}>News</Link></li>
            <li><Link to="/faq" onClick={() => setMobileMenuOpen(false)}>FAQ</Link></li>
            <li><Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
            <li className="mobile-only"><Link to="/for-candidates" onClick={() => setMobileMenuOpen(false)}>For Candidates</Link></li>
            <li className="mobile-only"><Link to="/download" onClick={() => setMobileMenuOpen(false)}>For Companies</Link></li>
          </ul>
        </nav>
        
        <div className="header-right">
          <div className="cta-buttons desktop-only">
            <Link to="/for-candidates" className="candidate-btn">
              <span>For Candidates</span>
            </Link>
            <Link to="/download" className="companies-btn">
              <span>For Companies</span>
            </Link>
          </div>
          
          <button 
            className="mobile-menu-toggle" 
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
