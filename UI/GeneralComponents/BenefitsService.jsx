"use client";

import React, { useState } from 'react';
import ButtonCTA from "@/UI/Buttons/ButtonCTA";
import ArrowRight from '../Icons/ArrowRight';
import ArrowLeft from '../Icons/ArrowLeft';
import './BenefitsService.scss';

function BenefitsService({ testimonials, benefits }) {
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
    <div className="why-service-container">
      <h2>Why name <span className="highlight">service?</span></h2>
      
      <div className="why-service-content">
        <div className="why-service-quote">
          <p>{testimonials[currentTestimonial].quote}</p>
          <p className="author">{testimonials[currentTestimonial].author} <span>★★★★★</span></p>
        </div>
        
        <div className="why-service-benefits">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <img src={benefit.image} alt={`Benefit ${index + 1}`} />
              <h5>{benefit.icon} {benefit.title} <span className="highlight">{benefit.highlight}</span></h5>
              <p>{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="why-service-actions">
        <div className="button-group">
          <button className="prev-btn" onClick={handlePrevClick}> <ArrowLeft/> </button>
          <button className="next-btn" onClick={handleNextClick}> <ArrowRight/> </button>
        </div>
        <ButtonCTA extraClasses={"secondary-button"}> Book a visit today </ButtonCTA>
      </div>
    </div>
  );
}

export default BenefitsService;

