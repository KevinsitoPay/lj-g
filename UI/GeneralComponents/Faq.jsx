"use client";
import './Faq.scss';
import React, { useState } from 'react';
import Button from '../Buttons/ButtonCTA';
import ChevronRight from '../Icons/ChevronRight';
import ChevronDown from '../Icons/ChevronDown';

const faqData = [
  {
    question: "Question 1: Lorem ipsum dolor sit amet consectetur?",
    answer: "Answer 1: Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet."
  },
  {
    question: "Question 2: Lorem ipsum dolor sit amet consectetur?",
    answer: "Answer 2: Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet."
  },
  {
    question: "Question 3: Lorem ipsum dolor sit amet consectetur?",
    answer: "Answer 3: Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet."
  },
  {
    question: "Question 4: Lorem ipsum dolor sit amet consectetur?",
    answer: "Answer 4: Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet."
  },
  {
    question: "Question 5: Lorem ipsum dolor sit amet consectetur?",
    answer: "Answer 5: Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet."
  }

];

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (event, index) => {
    event.preventDefault(); // Evita el comportamiento predeterminado del summary
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-box-left">
        <h3>This is where we show you the frequently asked <span className="highlight">questions.</span></h3>
        <Button text="Address pain point" size="medium" link="/" variant="filled" textColor="#28282A" backgroundColor="#FDE1D9" iconColor="#F1572D" />
        <Button text="Check our projects" size="medium" link="/" variant="minimal" textColor="#28282A" backgroundColor="transparent" iconSvgColor="#28282A" />

        <div className="dropdown">
          {faqData.map((item, index) => (
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
        <Button text="Book a visit" size="medium" link="/" variant="filled" textColor="#28282A" backgroundColor="#FCFAF8" iconColor="#F1572D" />
      </div>
    </div>
  );
}

export default Faq;
