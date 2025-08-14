"use client";

import React from "react";
import Link from "next/link";
import "./Navbar.scss";
import LJLogo from "./LJLogo";
import ChevronDown from "../Icons/ChevronDown";
import ArrowIcon from "../Icons/ArrowIcon";
import LandLeveling from "../Icons/LandLeveling";
import SodInstallation from "../Icons/SodInstallation";
import FunctionalPlants from "../Icons/FunctionalPlants";
import MulchApplication from "../Icons/MulchApplication";
import RiverRock from "../Icons/RiverRock";
import WallRetaining from "../Icons/WallRetaining";
import IrrigationSystem from "../Icons/IrrigationSystem";

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
            <div className="megamenu-col1  ">
              <span>
                <h4>This is our services</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Culpa quasi ad, molestiae dolorum debitis porro.
                </p>
              </span>

              <div className="services-list">
                {/* Land Leveling */}
                <Link href={"/land-leveling"} className="service-card">
                  <h6 className="heading-icon">
                    <LandLeveling /> Land Leveling
                  </h6>
                  <p>
                    Prevents water pooling, protects foundations, and ensures a
                    stable base for landscaping or construction.
                  </p>
                </Link>

                {/* Sod Installation */}
                <Link href={"/sod-installation"} className="service-card">
                  <h6 className="heading-icon">
                    <SodInstallation /> Sod Installation
                  </h6>
                  <p>
                    Gives you an instant, healthy lawn that is easy to maintain
                    and looks great in any setting.
                  </p>
                </Link>

                {/* Functional Plants */}
                <Link href={"/functional-plants"} className="service-card">
                  <h6 className="heading-icon">
                    <FunctionalPlants /> Functional Plants
                  </h6>
                  <p>
                    Creates beautiful, low maintenance gardens that add value to
                    your property and enhance the overall aesthetic.
                  </p>
                </Link>

                {/* Mulch Application */}
                <Link href={"/mulch-application"} className="service-card">
                  <h6 className="heading-icon">
                    <MulchApplication /> Mulch Application
                  </h6>
                  <p>
                    Helps soil retain moisture, blocks weeds, and enhances the
                    look of your landscape.
                  </p>
                </Link>

                {/* River Rock Installation */}
                <Link
                  href={"/river-rock-installation"}
                  className="service-card"
                >
                  <h6 className="heading-icon">
                    <RiverRock /> River Rock Installation
                  </h6>
                  <p>
                    Controls erosion, improves drainage, and adds natural
                    beauty.
                  </p>
                </Link>

                {/* Wall Retaining Installation */}
                <Link
                  href={"/wall-retaining-installation"}
                  className="service-card"
                >
                  <h6 className="heading-icon">
                    <WallRetaining /> Wall Retaining Installation
                  </h6>
                  <p>
                    Stabilizes sloped areas, prevents soil loss, and ensures a
                    secure foundation.
                  </p>
                </Link>

                {/* Irrigation System Installation */}
                <Link
                  href={"/irrigation-system-installation"}
                  className="service-card"
                >
                  <h6 className="heading-icon">
                    <IrrigationSystem /> Irrigation System Installation
                  </h6>
                  <p>
                    Delivers water efficiently, saves time, and ensures a
                    healthy garden.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
