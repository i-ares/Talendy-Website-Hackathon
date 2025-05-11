import React from 'react';
import './AboutUsPage.css';
import StoryIllustration from '../assets/illustrations/story-illustration.svg';
import CultureIllustration from '../assets/illustrations/culture-illustration.svg';
import AchievementsIllustration from '../assets/illustrations/achievements-illustration.svg';
import MissionIllustration from '../assets/illustrations/mission-illustration.svg';
import AboutUsBanner from '../assets/images/aboutus.svg';

const AboutUsPage = () => {
  const managementTeam = [
    {
      name: "Naotaka Nishiyama",
      position: "Founder and CEO",
      quote: "Live as if you were to die tomorrow, Learn as if you were to live forever."
    },
    {
      name: "Yukio Takeyari",
      position: "Management Advisor",
      quote: ""
    },
    {
      name: "Kotaro Kataoka",
      position: "Management Advisor",
      quote: ""
    },
    {
      name: "Deb Kumar Mondal",
      position: "Chief Product Officer",
      quote: "It is necessary to be able to move for the time being even if the future cannot be seen"
    }
  ];

  const cultureValues = [
    {
      title: "Respect and Appreciation",
      description: "We work forward with respect and gratitude always. We appreciate inputs and constructive feedback from our team members.",
      icon: "🤝"
    },
    {
      title: "Fail Fast and Learning Agility",
      description: "We fail quickly and apply what we learn to our next challenge. This helps us grow and learn exponentially each day.",
      icon: "🚀"
    },
    {
      title: "Responsibility and Results",
      description: "At our core, we are driven by a sense of speed and responsibility, delivering impactful results with utmost efficiency.",
      icon: "🎯"
    }
  ];

  const achievements = [
    {
      title: "Survey with JETRO",
      description: "Conducted a joint survey with JETRO on 27 companies who have prior experience in hiring talents from India in various domains and industries in 2020.",
      icon: "📊"
    },
    {
      title: "MoU with IIT Hyderabad",
      description: "Signed an MoU with IIT Hyderabad in 2019 to foster an industry-academia collaboration between Japanese tech companies and IIT Hyderabad.",
      icon: "🤝"
    },
    {
      title: "Privacy Mark Certification",
      description: "Obtained the Privacy mark certification from the Japan Information Processing Development Corporation (JIPDEC) in 2023.",
      icon: "🔒"
    },
    {
      title: "ISMS Certification",
      description: "Achieved the Information Security Management System (ISO/IEC 27001:2013, ISMS) Certification based on International Standards in 2022.",
      icon: "🛡️"
    },
    {
      title: "Featured in Nikkei",
      description: "Featured for our initiative on providing Tech education and introducing quality human resources to tech startups in Japan in 2022.",
      icon: "📰"
    },
    {
      title: "Ambassador Company",
      description: "Selected as an ambassador company for City-Tech in Tokyo, a global event held by the Tokyo Metropolitan Government in 2022.",
      icon: "🏆"
    }
  ];

  return (
    <main className="about-page">
      <section className="hero-section dark-section">
        <div className="container">
          <div className="hero-content">
            <h1>About Talendy</h1>
            <p className="subtitle">Diversity is Our Super Power. What's Yours?</p>
          </div>
          <div className="hero-banner">
            <img src={AboutUsBanner} alt="About Talendy" />
          </div>
        </div>
      </section>
      
      <section className="our-story dark-section">
        <div className="container">
          <h2>Our Story</h2>
          <div className="story-content">
            <div className="story-text">
              <p>
                With the creation of a global high-skilled human resource platform, our vision is to achieve a diverse and enriched society. A society where each individual is recognised, fulfilled, and empowered to actively contribute.
              </p>
              <p>
                By connecting talents from all corners of the world, we aim to promote diversity and equal opportunities. Our platform fosters a collaborative environment where everyone can be rewarded for their efforts, find enjoyment in their work, and play a vital role in shaping a brighter future.
              </p>
            </div>
            <div className="story-illustration">
              <img src={StoryIllustration} alt="Our Story Illustration" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="our-culture dark-section">
        <div className="container">
          <h2>Our Culture</h2>
          <div className="culture-grid">
            {cultureValues.map((value, index) => (
              <div key={index} className="culture-card">
                <div className="culture-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="our-achievements dark-section">
        <div className="container">
          <h2>Our Achievements</h2>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-icon">{achievement.icon}</div>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="our-mission dark-section">
        <div className="container">
          <div className="section-illustration">
            <img src={MissionIllustration} alt="Our Mission Illustration" className="mission-illustration" />
          </div>
          <div className="mission-content">
            <div className="mission-item">
              <h3>Our Mission</h3>
              <p>Regardless of nationality, gender, etc. A society where everyone can shine!</p>
            </div>
            <div className="mission-item">
              <h3>Our Vision</h3>
              <p>Accelerating Digitisation with the Power of Diversity!</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="our-team dark-section">
        <div className="container">
          <h2>Management Board</h2>
          <div className="team-grid">
            {managementTeam.map((member, index) => (
              <div key={index} className="team-member">
                <div className="member-photo">
                  <div className="placeholder-photo">{member.name.charAt(0)}</div>
                </div>
                <h3>{member.name}</h3>
                <p className="member-position">{member.position}</p>
                {member.quote && <p className="member-quote">"{member.quote}"</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUsPage; 