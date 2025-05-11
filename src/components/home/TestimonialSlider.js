import React, { useState, useEffect } from 'react';
import './TestimonialSlider.css';

const TestimonialSlider = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Talendy has transformed our engineering capabilities. We were able to build a world-class team in just weeks instead of months.",
      author: "Akira Tanaka",
      position: "CTO, TechFusion",
      company: "TechFusion",
      image: "https://via.placeholder.com/100"
    },
    {
      id: 2,
      quote: "The quality of engineers we've hired through Talendy has exceeded our expectations. Their technical skills and communication abilities are outstanding.",
      author: "Sarah Chen",
      position: "VP of Engineering",
      company: "InnovateSoft",
      image: "https://via.placeholder.com/100"
    },
    {
      id: 3,
      quote: "Working with Talendy has been seamless. Their EOR service handles all compliance issues, allowing us to focus on our core business.",
      author: "Raj Patel",
      position: "Founder & CEO",
      company: "NextGen Solutions",
      image: "https://via.placeholder.com/100"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  const nextTestimonial = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="testimonial-slider">
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div 
            key={testimonial.id} 
            className={`testimonial-slide ${index === currentIndex ? 'active' : ''}`}
          >
            <div className="testimonial-content">
              <div className="quote-icon">❝</div>
              <p className="testimonial-quote">{testimonial.quote}</p>
              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.author} className="author-image" />
                <div className="author-info">
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="testimonial-controls">
        <button className="control-btn prev" onClick={prevTestimonial} aria-label="Previous testimonial">
          &#8249;
        </button>
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button 
              key={index} 
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToTestimonial(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
        <button className="control-btn next" onClick={nextTestimonial} aria-label="Next testimonial">
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
