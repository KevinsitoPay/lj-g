"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import "./Navbar.scss";
import LJLogo from "./LJLogo";
import ChevronDown from "../Icons/ChevronDown";
import LandLeveling from "../Icons/LandLeveling";
import SodInstallation from "../Icons/SodInstallation";
import FunctionalPlants from "../Icons/FunctionalPlants";
import MulchApplication from "../Icons/MulchApplication";
import RiverRock from "../Icons/RiverRock";
import WallRetaining from "../Icons/WallRetaining";
import IrrigationSystem from "../Icons/IrrigationSystem";
import NavbarMobile from "../GeneralComponents/NavbarMobile";

function Navbar({ type = "main" }) {
  const [showServices, setShowServices] = useState(false);
  const [showNavBarMobile, setShowNavBarMobile] = useState(false);

  const wrapperRef = useRef(null);
  const menuContainerRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleServicesEnter = () => {
    clearTimeout(timeoutRef.current);
    setShowServices(true);
  };

  Navbar.defaultProps = {
    headerType: "main",
  };

  const handleMouseLeave = (e) => {
    const target = e.relatedTarget;

    const isLeavingToAllowedArea =
      target instanceof Node &&
      (menuContainerRef.current?.contains(target) ||
        wrapperRef.current?.contains(target));

    if (!isLeavingToAllowedArea) {
      clearTimeout(timeoutRef.current);
      setShowServices(false);
    }
  };
  const handleCloseMobileMenu = () => setShowNavBarMobile(false);

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const megamenu = (
    <div className={`megamenu ${showServices ? "active" : ""}`}>
      <div className="megamenu-content">
        <div className="megamenu-col1  ">
          <span>
            <h4>Your ideal outdoor space starts here</h4>
            <p>
              Explore our diverse range of services designed to transform your outdoor space into a beautiful and functional environment. 
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
                Gives you an instant, healthy lawn that is easy to maintain and
                looks great in any setting.
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
                Helps soil retain moisture, blocks weeds, and enhances the look
                of your landscape.
              </p>
            </Link>

            {/* River Rock Installation */}
            <Link href={"/river-rock-installation"} className="service-card">
              <h6 className="heading-icon">
                <RiverRock /> River Rock Installation
              </h6>
              <p>
                Controls erosion, improves drainage, and adds natural beauty.
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
                Delivers water efficiently, saves time, and ensures a healthy
                garden.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  const menuMobile = (
    <div className="header-wrapper mobile-header">
      <div className="menu-mobile-container">
        <div className="menu-col mobile-col">
          <Link href="/">
            <LJLogo size="lg" mobile={true} />
          </Link>
        </div>
        <div className="menu-col mobile-col mobile-col-right">
          <div className="hamburger" onClick={() => setShowNavBarMobile(true)}>
            <span className="line" />
            <span className="line" />
            <span className="line" />
          </div>
        </div>
      </div>
      {showNavBarMobile && <NavbarMobile onClose={handleCloseMobileMenu} />}
    </div>
  );

  const mainHeader = (
    <>
      {/* Main Header */}

      <div className="header-wrapper desktop-header reveal-fade">
        <div
          className={`overlay ${showServices ? "active" : ""}`}
          onClick={() => setShowServices(false)}
        />
        <div
          className={`header-bg-wrapper ${
            showServices ? "services-active" : ""
          }`}
          ref={menuContainerRef}
          onMouseLeave={handleMouseLeave}
        >
          <div className={`menu-container ${showServices ? "active" : ""}`}>
            {/* Columna Izquierda */}
            <div className="menu-col">
              <Link className="menu-link" href="/how-it-works">
                How It Works
              </Link>
              <div
                className={`services-wrapper ${showServices ? "active" : ""}`}
                ref={wrapperRef}
                onMouseEnter={handleServicesEnter}
              >
                <div className="services-col">
                  <div className="services-link">
                    Services <ChevronDown size="xm" />
                  </div>
                </div>

                {/* MEGAMENU */}
                {megamenu}
              </div>
            </div>

            {/* Columna Centro */}
            <div className="menu-col menu-col-center">
              <Link href="/" onMouseEnter={() => setShowServices(false)}>
                <LJLogo className="lj-logo" />
              </Link>
            </div>

            {/* Columna Derecha */}
            <div className="menu-col menu-col-right">
              <Link
                className="menu-link"
                href="/contractors"
                onMouseEnter={() => setShowServices(false)}
              >
                Contractors
              </Link>
              <Link
                className="menu-link"
                href="/faq"
                onMouseEnter={() => setShowServices(false)}
              >
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* --- Mobile Header --- */}

      {menuMobile}
    </>
  );

  const altHeader = (
    <>
      {/* Alt Header */}

      <div className="header-wrapper desktop-header reveal-fade" id="alt-header">
        <div
          className={`overlay ${showServices ? "active" : ""}`}
          onClick={() => setShowServices(false)}
        />
        <div
          className={`header-bg-wrapper ${
            showServices ? "services-active" : ""
          }`}
          ref={menuContainerRef}
          onMouseLeave={handleMouseLeave}
        >
          <div className={`menu-container ${showServices ? "active" : ""}`}>
            <div className="menu-col menu-col-center" id="alt-col">
              <Link href="/" onMouseEnter={() => setShowServices(false)}>
                <LJLogo className="lj-logo" />
              </Link>
            </div>

            {/* Columna Derecha */}
            <div className="menu-col menu-col-right" id="alt-col-right">
              <Link className="menu-link" href="/how-it-works">
                How It Works
              </Link>
              <div
                className={`services-wrapper ${showServices ? "active" : ""}`}
                ref={wrapperRef}
                onMouseEnter={handleServicesEnter}
              >
                <div className="services-col">
                  <div className="services-link">
                    Services <ChevronDown size="xm" />
                  </div>
                </div>

                {/* MEGAMENU */}
                {megamenu}
              </div>
              <Link
                className="menu-link"
                href="/contractors"
                onMouseEnter={() => setShowServices(false)}
              >
                Contractors
              </Link>
              <Link
                className="menu-link"
                href="/faq"
                onMouseEnter={() => setShowServices(false)}
              >
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ---Alt Mobile Header --- */}
      {menuMobile}
    </>
  );

  const altColorHeader = (
    <>
      {/* Alt Colors Header */}

      <div className="header-wrapper desktop-header reveal-fade" id="alt-colors-header">
        <div
          className={`overlay ${showServices ? "active" : ""}`}
          onClick={() => setShowServices(false)}
        />
        <div
          className={`header-bg-wrapper ${
            showServices ? "services-active" : ""
          }`}
          ref={menuContainerRef}
          onMouseLeave={handleMouseLeave}
        >
          <div className={`menu-container ${showServices ? "active" : ""}`}>
            <div className="menu-col menu-col-center" id="alt-col">
              <Link href="/" onMouseEnter={() => setShowServices(false)}>
                <LJLogo className="lj-logo alt-logo" />
              </Link>
            </div>

            {/* Columna Derecha */}
            <div className="menu-col menu-col-right" id="alt-col-right">
              <Link className="menu-link" href="/how-it-works">
                How It Works
              </Link>
              <div
                className={`services-wrapper ${showServices ? "active" : ""}`}
                ref={wrapperRef}
                onMouseEnter={handleServicesEnter}
              >
                <div className="services-col">
                  <div className="services-link">
                    Services <ChevronDown size="xm" />
                  </div>
                </div>

                {/* MEGAMENU */}
                {megamenu}
              </div>

              <Link
                className="menu-link"
                href="/contractors"
                onMouseEnter={() => setShowServices(false)}
              >
                Contractors
              </Link>
              <Link
                className="menu-link"
                href="/faq"
                onMouseEnter={() => setShowServices(false)}
              >
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ---Alt Colors Mobile Header --- */}

      <div className="header-wrapper mobile-header" id="alt-colors-header">
        <div className="menu-mobile-container">
          <div className="menu-col mobile-col">
            <Link href="/">
              <LJLogo className="lj-logo" size="lg" mobile={true} />
            </Link>
          </div>
          <div className="menu-col mobile-col mobile-col-right">
            <div className="menu-col mobile-col mobile-col-right">
              <div
                className="hamburger"
                onClick={() => setShowNavBarMobile(true)}
              >
                <span className="line" />
                <span className="line" />
                <span className="line" />
              </div>
            </div>
          </div>
        </div>
        {showNavBarMobile && <NavbarMobile onClose={handleCloseMobileMenu} />}
      </div>
    </>
  );

  let headerContent;
  if (type === "main") {
    headerContent = mainHeader;
  } else if (type === "alt") {
    headerContent = altHeader;
  } else if (type === "alt-colors") {
    headerContent = altColorHeader;
  }

  return <>{headerContent}</>;
}

export default Navbar;
