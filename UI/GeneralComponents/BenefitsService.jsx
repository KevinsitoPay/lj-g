"use client";

import React, { useState } from 'react';
import ButtonCTA from "@/UI/Buttons/ButtonCTA";
import ArrowRight from '../Icons/ArrowRight';
import ArrowLeft from '../Icons/ArrowLeft';
import './BenefitsService.scss';

function BenefitsService({ testimonials, benefits,title, highlight  }) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handlePrevClick = () => {
    setCurrentTestimonial(prevIndex =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentTestimonial(prevIndex =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="why-service-container section">
      <h2>{title} <span className="highlight">{highlight}</span></h2>
      
      <div className="why-service-content">
        
        <div className="why-service-col1">

        <div className="why-service-quote">
          <p>{testimonials[currentTestimonial].quote}</p>
          <p className="author">{testimonials[currentTestimonial].author} <span>★★★★★</span></p>
        </div>
        
          <div className="button-group">
          <button className="prev-btn" onClick={handlePrevClick}> <ArrowLeft/> </button>
          <button className="next-btn" onClick={handleNextClick}> <ArrowRight/> </button>
        </div>
        
        </div>

        <div className="why-service-col2">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <img src={benefit.image} alt={`Benefit ${index + 1}`} />
              <div className="text-container">
              <h6 className="heading-icon">{benefit.icon} {benefit.title} <span className="highlight">{benefit.highlight}</span></h6>
              <p>{benefit.text}</p>

              </div>
            </div>
          ))}
        </div>
      </div>
      
     
    </div>
  );
}

export default BenefitsService;

