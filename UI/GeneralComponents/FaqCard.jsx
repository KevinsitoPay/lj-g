"use client";

import { useState } from 'react';
import Link from 'next/link';
import faq from '../../data/faq.json';
import './FaqCard.scss';
import Grass from '../Icons/Grass';
import Lotus from '../Icons/Lotus';
import Plants from '../Icons/Plants';
import Mulch from '../Icons/Mulch';

const categories = ['About LJ&G', 'Our Services', 'Contractors FAQ', 'Billing and Insurance'];

const categoryIcons = {
  'About LJ&G': <Lotus />,
  'Our Services': <Grass />,
  'Contractors FAQ': <Plants />,
  'Billing and Insurance': <Mulch />,
};

function FaqCard() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const filteredFaq = faq.filter(item => item.category === selectedCategory);

  return (
    <div className="faq-page">
      <div className="navigation">
        {categories.map((category, index) => {
          const normalizedCategory = category.replace(/\s+/g, '-').replace(/&/g, 'and').toLowerCase();
          return (
            <button
              key={index}
              className={`nav-button ${selectedCategory === category ? 'active' : ''} ${normalizedCategory}`}
              onClick={() => setSelectedCategory(category)}
            >
              {categoryIcons[category]} {category}
            </button>
          );
        })}
      </div>
      <div className="faq-grid">
        {filteredFaq.map((item, index) => (
          <Link key={index} href={`/faq/${item.slug}`}>
            <div className="faq-card">
              {item.image && <img src={item.image} alt={item.title} />}
              <h6>
                {item.title} <span className="highlight">{item.highlight}</span>
              </h6>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FaqCard;





