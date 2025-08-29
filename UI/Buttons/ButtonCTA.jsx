import React from "react";
import "./Button.scss";
import Link from "next/link";
import ArrowIcon2 from "../Icons/ArrowIcon2";

const ButtonCTA = ({
  children,
  variantClass,
  extraClasses,
  href: hrefProp,
}) => {
  const href = hrefProp || "";

  return (
    <Link
      className={`button-link ${variantClass} ${extraClasses || ""}`}
      href={href}
    >
      <span className="bg-circle"></span>
      <span className="button-text">{children}</span>
      <div className="arrow-icon-container">
        <ArrowIcon2 className="arrow-icon" alt="icon of arrow" size="sm" />
      </div>
    </Link>
  );
};

export default ButtonCTA;
