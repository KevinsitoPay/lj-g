import React from 'react';
import './Button.scss';
import Link from 'next/link';
import ArrowRight from '../Icons/ArrowRight';

const Button = ({ text, size, link, variant, textColor, backgroundColor, iconColor }) => {
  return (
    <Link
      href={link}
      className={`button ${size} ${variant}`}
      style={{ backgroundColor }}
    >
      <span className="text" style={{ color: textColor }}>{text}</span>
      <span className="icon" style={{ backgroundColor: iconColor }}><ArrowRight size='sm' /></span>
    </Link>
  );
};

export default Button;