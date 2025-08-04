import React from 'react';
import './Button.scss';
import Link from 'next/link';
import ArrowRight from '../Icons/ArrowRight';

const Button = ({ text, size, link, variant, textColor, backgroundColor, iconColor, iconSvgColor, className }) => {
  return (
    <Link
      href={link}
      className={`button ${size} ${variant} ${className}`}
      style={{ backgroundColor }}
    >
      <span className="text" style={{ color: textColor }}>{text}</span>
      <span className="icon" style={{ backgroundColor: iconColor }}>
        <ArrowRight size='sm' style={{ color: iconSvgColor }} />
      </span>
    </Link>
  );
};

export default Button;