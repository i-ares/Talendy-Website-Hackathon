import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import TalendyHubPage from './pages/TalendyHubPage';
import TalendyEORPage from './pages/TalendyEORPage';
import FAQPage from './pages/FAQPage';
import AboutUsPage from './pages/AboutUsPage';
import NewsPage from './pages/NewsPage';
import DownloadPage from './pages/DownloadPage';
import ContactPage from './pages/ContactPage';
import CandidatePage from './pages/CandidatePage';
import './styles/variables.css';
import './App.css';
import './styles/typography.css';
import './styles/mobile.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/talendy-hub" element={<TalendyHubPage />} />
        <Route path="/talendy-eor" element={<TalendyEORPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/download" element={<DownloadPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/for-candidates" element={<CandidatePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
