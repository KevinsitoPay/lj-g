"use client";

import { useState } from 'react';
import faq from '../../data/faq.json';
import './FaqCard.scss';



const categories = ['About LJ&G', 'Our Services', 'Contractors FAQ', 'Billing and Insurance'];

function FaqCard() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const filteredFaq = faq.filter(item => item.category === selectedCategory);

  return (
    <div className="faq-page">
      <div className="navigation">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`nav-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="faq-grid">
        {filteredFaq.map((item, index) => (
          <div key={index} className="faq-card">
            {item.image && <img src={item.image} alt={item.title} />}
            <h6>
              {item.title} <span className="highlight">{item.highlight}</span>
            </h6>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FaqCard;




