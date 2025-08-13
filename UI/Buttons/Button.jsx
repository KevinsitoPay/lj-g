import React from 'react';
import './Button.scss';
import Link from 'next/link';
import ArrowIcon from '../Icons/ArrowIcon';

const Button = ({ children, variantClass, extraClasses, href: hrefProp }) => {
  const href = hrefProp || '';

  return (
    <Link className={`button-link ${variantClass} ${extraClasses || ''}`} href={href}>
      <span className="bg-circle"></span>
      <span className="button-text">{children}</span>
      <div className="arrow-icon-container">
        <ArrowIcon className="arrow-icon" alt="icon of arrow" size="sm" />
      </div>
    </Link>
  );
};

export default Button;

