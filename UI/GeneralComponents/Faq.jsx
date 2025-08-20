"use client";
import './Faq.scss';
import React, { useState } from 'react';
import ButtonCTA from '../Buttons/ButtonCTA';
import ButtonLink from '../Buttons/ButtonLink';
import ChevronRight from '../Icons/ChevronRight';
import ChevronDown from '../Icons/ChevronDown';

function Faq({ title, highlight, children }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (event, index) => {
    event.preventDefault();
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-box-left">
        <h3>{title} <span className="highlight">{highlight}</span></h3>
        <div className="button-container">
          <ButtonCTA extraClasses={"primary-button"}>Book a free visit today</ButtonCTA>
          <ButtonLink>Check our projects</ButtonLink>
        </div>
        <div className="dropdown">
          {children.map((item, index) => (
            <details key={index} open={openIndex === index}>
              <summary onClick={(event) => toggleOpen(event, index)}>
                {item.question}
                {openIndex === index ? <ChevronDown size="m" /> : <ChevronRight size="m" />}
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>

      <div className="faq-box-right">
        <img src="/Images/big-house.webp" alt="Faq" />
        <h4>Your dream garden is possible</h4>
        <p>Book your first visit today. Our consultation is totally free and our promise is that after our visit You will have a clearer plan for Your garden.</p>
        <div className="button-container">
          <ButtonCTA extraClasses={"primary-button"}>Book a free visit today</ButtonCTA>
        </div>
      </div>
    </div>
  );
}

export default Faq;
