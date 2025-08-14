"use client";

import React from "react";
import Link from "next/link";
import "./Navbar.scss";
import LJLogo from "./LJLogo";
import ChevronDown from "../Icons/ChevronDown";
import ArrowIcon from "../Icons/ArrowIcon";
import LandLeveling from "../Icons/LandLeveling";

function Navbar() {
  const [showServices, setShowServices] = React.useState(false);

  const handleMouseEnter = () => setShowServices(true);
  const handleMouseLeave = () => setShowServices(false);

  return (
    <>
      {/* Overlay for background tint */}
      <div className={`overlay ${showServices ? "active" : ""}`} />

      <div className="header-bg-wrapper">
        {/* Main navigation */}
        <div className={`menu-container ${showServices ? "active" : ""}`}>
          {/* Left column */}
          <div className="menu-col">
            <Link className="menu-link" href="/how-it-works">
              How It Works
            </Link>

            <div
              className="services-col"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link className="services-link" href="/services">
                Services <ChevronDown size="xm" />
              </Link>
            </div>
          </div>

          {/* Center column - Logo */}
          <div className="menu-col menu-col-center">
            <Link href="/">
              <LJLogo className="lj-logo" />
            </Link>
          </div>

          {/* Right column */}
          <div className="menu-col menu-col-right">
            <Link className="menu-link" href="/contractors">
              Contractors
            </Link>
            <Link className="menu-link" href="/faq">
              FAQ
            </Link>
          </div>
        </div>

        {/* Megamenu */}

        <div
          className={`megamenu ${showServices ? "active" : ""}`}
          onMouseEnter={handleMouseEnter}
        >
          <div className="megamenu-content">
            {/* Column 1 */}
            <div className="megamenu-col1">
              <span>
                <h4>This is our services</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Culpa quasi ad, molestiae dolorum debitis porro.
                </p>
              </span>


              <div className="services-list">
                <h6 className="heading-icon"><LandLeveling /> Land leveling</h6>
                <p>service description</p>
                <Link href="/">
                  Learn more <ArrowIcon size="sm" />
                </Link>
              </div>
            












            </div>

            {/* Column 2 */}
            <div className="megamenu-col2">
              This is the image
            </div>
          </div>
        </div>











      </div>
    </>
  );
}

export default Navbar;
