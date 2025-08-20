import '../GeneralComponents/NavBarMobile2.scss';
import ChevronDown from '../Icons/ChevronDown';
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import "./Navbar.scss";
import LJLogo from "./LJLogo";
import LandLeveling from "../Icons/LandLeveling";
import SodInstallation from "../Icons/SodInstallation";
import FunctionalPlants from "../Icons/FunctionalPlants";
import MulchApplication from "../Icons/MulchApplication";
import RiverRock from "../Icons/RiverRock";
import WallRetaining from "../Icons/WallRetaining";
import IrrigationSystem from "../Icons/IrrigationSystem";

const NavbarMobile = ({ onClose }) => {
  const [showMobileServices, setShowMobileServices] = useState(false);
  const servicesRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = ''; // 
    };
  }, []);

  useEffect(() => {
    if (servicesRef.current) {
      if (showMobileServices) {
        servicesRef.current.style.transition = 'transform 0.3s ease-in-out';
        servicesRef.current.style.transform = 'translateX(0)';
      } else {
        servicesRef.current.style.transition = 'transform 0.3s ease-in-out';
        servicesRef.current.style.transform = 'translateX(-100%)';
      }
    }
  }, [showMobileServices]);

  return (
    <div className="mobile-overlay">
  
   <div className="header-wrapper mobile-header">
        <div
          className="overlay-mobile active"
          
        />

        <div
          className="header-bg-wrapper services-active" 
        >
          <div className="menu-mobile-container">
            <div className="menu-col mobile-col">
              <Link href="/" >
                <LJLogo size="lg" mobile={true} />
              </Link>
            </div>

            <div className="menu-col mobile-col mobile-col-right">
              <div 
                onClick={onClose}
                className="hamburger active"
              >
                <span className="line" />
                <span className="line" />
                <span className="line" />
              </div>
            </div>
          </div>

          
            <div className="mobile-menu-container">
              <Link href="/how-it-works" className="mobile-menu-link heading-6">
                How It Works
              </Link>

              <div className="divider"></div>

              {/* Services toggle */}
              <div
                className="mobile-menu-link heading-6 heading-icon"
                onClick={() => setShowMobileServices(!showMobileServices)}
              >
                Services{" "}
                <ChevronDown className={showMobileServices ? "rotated" : ""} />
              </div>

              {showMobileServices && (
                <div className="services-dropdown" ref={servicesRef}>
                  <Link href="/land-leveling" className="mobile-submenu-link heading-icon">
                  <LandLeveling size="sm" />
                     Land Leveling
                  </Link>
                  <Link href="/sod-installation" className="mobile-submenu-link heading-icon">
                  <SodInstallation size="sm"/>
                    Sod Installation
                  </Link>
                  <Link href="/functional-plants" className="mobile-submenu-link heading-icon">
                  <FunctionalPlants size="sm" />
                    Functional Plants
                  </Link>
                  <Link href="/mulch-applications" className="mobile-submenu-link heading-icon">
                  <MulchApplication size="sm" />
                    Mulch Applications
                  </Link>
                  <Link
                    href="/river-rock-installation"
                    className="mobile-submenu-link heading-icon"
                  >
                    <RiverRock size="sm" />
                    River Rock Installation
                  </Link>
                  <Link href="/wall-retaining" className="mobile-submenu-link heading-icon">
                    <WallRetaining size="sm" />
                    Wall Retaining
                  </Link>
                  <Link href="/irrigation-system" className="mobile-submenu-link heading-icon">
                    <IrrigationSystem size="sm" />
                    Irrigation System
                  </Link>
                </div>
              )}

              <div className="divider"></div>

              <Link href="/contractors" className="mobile-menu-link heading-6">
                Contractors
              </Link>

              <div className="divider"></div>

              <Link href="/faq" className="mobile-menu-link heading-6">
                FAQ
              </Link>
              
            </div>
        
        </div>
      </div>







</div>



  );
};

export default NavbarMobile;

