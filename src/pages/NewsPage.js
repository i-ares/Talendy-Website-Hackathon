import React from 'react';
import { Link } from 'react-router-dom';
import './NewsPage.css';
import NewsBanner from '../assets/images/news.svg';

const NewsPage = () => {
  // Sample news data
  const newsItems = [
    {
      id: 1,
      title: "Talendy Expands Services to Southeast Asia",
      date: "May 5, 2025",
      summary: "We're excited to announce our expansion into Singapore, Thailand, and Vietnam, bringing our engineering talent solutions to more companies across Asia.",
      image: "https://via.placeholder.com/600x400?text=Talendy+Expansion"
    },
    {
      id: 2,
      title: "New Partnership with Leading Tech Institutes in India",
      date: "April 28, 2025",
      summary: "Talendy has formed strategic partnerships with five additional top engineering institutes in India, expanding our talent pool by over 20,000 engineers.",
      image: "https://via.placeholder.com/600x400?text=Partnership+Announcement"
    },
    {
      id: 3,
      title: "Talendy Launches Enhanced EOR Services",
      date: "April 15, 2025",
      summary: "Our Employer of Record services now include enhanced compliance features, making it even easier for companies to hire and manage remote engineers in India.",
      image: "https://via.placeholder.com/600x400?text=EOR+Services+Update"
    },
    {
      id: 4,
      title: "Talendy Platform Now Supports 30+ Technologies",
      date: "March 22, 2025",
      summary: "Our talent matching algorithm now supports over 30 technology specializations, making it easier to find the perfect engineer for your specific tech stack.",
      image: "https://via.placeholder.com/600x400?text=Technology+Expansion"
    },
    {
      id: 5,
      title: "Talendy Reaches Milestone of 150+ Client Companies",
      date: "March 10, 2025",
      summary: "We're proud to announce that Talendy now serves more than 150 companies across Asia, connecting them with top Indian engineering talent.",
      image: "https://via.placeholder.com/600x400?text=Client+Milestone"
    },
    {
      id: 6,
      title: "Talendy Named in Top 50 HR Tech Solutions in Asia",
      date: "February 28, 2025",
      summary: "We're honored to be recognized as one of the top 50 HR technology solutions in Asia by TechHR Magazine.",
      image: "https://via.placeholder.com/600x400?text=Award+Recognition"
    }
  ];

  return (
    <main className="news-page">
      <section className="hero-section dark-section">
        <div className="container">
          <div className="hero-content">
            <h1>Latest News</h1>
            <p className="subtitle">Stay updated with the latest developments at Talendy</p>
          </div>
          <div className="hero-banner">
            <img src={NewsBanner} alt="Talendy News" />
          </div>
        </div>
      </section>
      
      <section className="news-content">
        <div className="container">
          <div className="news-grid">
            {newsItems.map(item => (
              <div key={item.id} className="news-card">
                <div className="news-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="news-details">
                  <div className="news-date">{item.date}</div>
                  <h2>{item.title}</h2>
                  <p>{item.summary}</p>
                  <Link to={`/news/${item.id}`} className="read-more">Read More →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="newsletter-signup">
        <div className="container">
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter to receive the latest news and updates</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" required />
            <button type="submit" className="subscribe-btn">Subscribe</button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default NewsPage; 