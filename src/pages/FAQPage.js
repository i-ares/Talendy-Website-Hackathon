import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FAQPage.css';

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How does Talendy source its engineering talent?",
      answer: "We source engineering talent from top Indian technical institutions like IITs and NITs, as well as from leading tech companies. All candidates undergo a rigorous vetting process that includes technical assessments, coding challenges, and communication evaluations."
    },
    {
      question: "What technology specializations do your engineers have?",
      answer: "Our talent pool includes engineers specializing in a wide range of technologies, including frontend development (React, Angular, Vue), backend development (Node.js, Python, Java, .NET), mobile development (iOS, Android, React Native), DevOps, data science, AI/ML, blockchain, and more."
    },
    {
      question: "How does the hiring process work?",
      answer: "The process typically includes: 1) Defining your requirements, 2) Reviewing pre-vetted candidates that match your needs, 3) Conducting interviews, 4) Making a selection, and 5) Onboarding. The entire process can be completed in as little as 2-3 weeks."
    },
    {
      question: "What is the difference between Talendy HUB and Talendy EOR?",
      answer: "Talendy HUB is our talent matching platform that helps you find and hire the right engineers. Talendy EOR (Employer of Record) is our service that handles all legal, compliance, and HR aspects of employing engineers in India while they work for your company."
    },
    {
      question: "How does billing work?",
      answer: "We offer flexible billing options including monthly retainers and project-based billing. For Talendy EOR, we charge a transparent service fee on top of the employee's compensation. We provide detailed invoices that break down all costs."
    },
    {
      question: "How do you ensure quality and reliability?",
      answer: "We maintain quality through a rigorous vetting process, ongoing performance monitoring, regular feedback sessions, and a dedicated success manager assigned to your account. We also offer a 2-week trial period for all placements."
    },
    {
      question: "Can engineers work in my time zone?",
      answer: "Yes, many of our engineers are flexible with their working hours and can accommodate various time zones. We can specifically match you with engineers willing to align with your working hours."
    },
    {
      question: "What if the engineer doesn't work out?",
      answer: "We offer a replacement guarantee. If you're not satisfied with an engineer's performance within the first month, we'll find a replacement at no additional cost."
    }
  ];

  return (
    <main className="faq-page">
      <section className="hero-section dark-section">
        <div className="container">
          <div className="hero-content">
            <h1>Frequently Asked Questions</h1>
            <p className="subtitle">Find answers to common questions about our services</p>
          </div>
        </div>
      </section>
      
      <section className="faq-section">
        <div className="container">
          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              >
                <div 
                  className="faq-question" 
                  onClick={() => toggleFAQ(index)}
                >
                  <h3>{faq.question}</h3>
                  <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="contact-cta">
        <div className="container">
          <h2>Still have questions?</h2>
          <p>Contact our team for more information</p>
          <div className="cta-buttons">
            <Link to="/contact" className="primary-btn">Contact Us</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQPage; 