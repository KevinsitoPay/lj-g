'use client';
import React, { useState } from "react";
import "./ServiceGridHome.scss";
import LandLeveling from "../Icons/LandLeveling";
import Grass from "../Icons/Grass";
import FunctionalPlants from "../Icons/FunctionalPlants";
import MulchApplication from "../Icons/MulchApplication";
import RiverRock from "../Icons/RiverRock";
import WallRetaining from "../Icons/WallRetaining";
import IrrigationSystem from "../Icons/IrrigationSystem";
import Link from "next/link";
import ArrowRight from "../Icons/ArrowRight";

const ServiceGridHome = () => {
  const [expandedTop, setExpandedTop] = useState(0);
  const [expandedBottom, setExpandedBottom] = useState(6);
  const [isTextExpanded, setTextExpanded] = useState(Array(7).fill(false)); 

  const topModules = [
    { icon: <LandLeveling size="sm" />, title: "Grating", text: "Prevents water pooling, protects foundations, and ensures a stable base for landscaping or construction.", backgroundImage: "url('/images/white-house.jpg')", link: '/land-leveling' },
    { icon: <Grass size="sm" />, title: "Sod Installation", text: "Gives you an instant, healthy lawn that enhances your outdoor space and increases property value.", backgroundImage: "url('/images/sod-installation-poster.webp')", link: '/sod-installation' },
    { icon: <FunctionalPlants size="sm" />, title: "Functional plants", text: "Creates beautiful, low-maintenance gardens that thrive with minimal care and attract beneficial wildlife.", backgroundImage: "url('/images/plants-poster.webp')", link: '/functional-plants' },
    { icon: <MulchApplication size="sm" />, title: "Mulch application", text: "Helps soil retain moisture, blocks weed growth, and enhances the soil's nutrient levels.", backgroundImage: "url('/images/mulch-poster.webp')", link: '/mulch-application'   },
  ];

  const bottomModules = [
    { icon: <RiverRock size="sm" />, title: "River Rock Installation", text: "Controls erosion, improves drainage, and adds a decorative element to landscapes.", backgroundImage: "url('/images/river-rock-poster.webp')", link: '/river-rock-installation' },
    { icon: <WallRetaining size="sm" />, title: "Wall retaining installation", text: "Stabilizes sloped areas, prevents soil loss, and provides structural support to your landscape.", backgroundImage: "url('/images/wall-poster.webp')", link: '/wall-retaining-installation' },
    { icon: <IrrigationSystem size="sm" />, title: "Irrigation System Installation", text: "Delivers water efficiently, saves time and ensures lush, healthy plant growth with optimal resource use.", backgroundImage: "url('/images/irrigation-system-poster.webp')", link: '/irrigation-system-installation' },
  ];

  const handleExpandTop = (index) => {
    setExpandedTop(index);
    const updatedTextExpanded = Array(7).fill(false);
    updatedTextExpanded[index] = true;
    setTextExpanded(updatedTextExpanded);
  };

  const handleExpandBottom = (index) => {
    setExpandedBottom(index + 4);
    const updatedTextExpanded = Array(7).fill(false);
    updatedTextExpanded[index + 4] = true;
    setTextExpanded(updatedTextExpanded);
  };

  const renderText = (text, index) => {
    return isTextExpanded[index]
      ? text
      : text.substring(0, 30) + '...'; // cantidad de caracteres antes del punto de corte
  };

  return (
    <div className="service-grid-container section reveal-right">
      <div className="service-grid-title">
        <h6>Welcome to LJ&G</h6>
        <h2>Your ideal outdoor <span className="highlight">space starts here</span></h2>
        <p>At LJ&G, we resolve landscape issues with expert services, improving drainage and creating lush lawns to transform your outdoor space.</p>
      </div>
      
      <div className="service-grid">
        <div className="service-grid-row top-row">
          {topModules.map((module, index) => (
            <div
              key={index}
              className={`service-grid-item ${expandedTop === index ? "expanded" : ""}`}
              onClick={() => handleExpandTop(index)}
              style={{ backgroundImage: `linear-gradient(rgba(115, 25, 0, 0.1), rgba(115, 25, 0, 0.3)), ${module.backgroundImage}`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <Link href={module.link} className="expand-button"> <ArrowRight size="sm" /> </Link>
              <div className="content">
                <h6> {module.icon} {module.title}</h6>
                <p>{renderText(module.text, index)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="service-grid-row bottom-row">
          {bottomModules.map((module, index) => (
            <div
              key={index + 4}
              className={`service-grid-item ${expandedBottom === index + 4 ? "expanded" : ""}`}
              onClick={() => handleExpandBottom(index)}
              style={{ backgroundImage: `linear-gradient(rgba(115, 25, 0, 0.1), rgba(115, 25, 0, 0.3)), ${module.backgroundImage}`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <Link href={module.link} className="expand-button"> <ArrowRight size="sm" /> </Link>
              <div className="content">
                <h6> {module.icon} {module.title}</h6>
                <p>{renderText(module.text, index + 4)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceGridHome;