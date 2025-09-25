"use client";

import ButtonLink from "@/UI/Buttons/ButtonLink";
import House from "@/UI/Icons/House";
import LandLeveling from "@/UI/Icons/LandLeveling";
import SodInstallation from "@/UI/Icons/SodInstallation";
import React, { useRef } from "react";
import Grass from "@/UI/Icons/Grass";
import RiverRock from "@/UI/Icons/RiverRock";
import Schovel from "@/UI/Icons/Shovel";
import Lotus from "@/UI/Icons/Lotus";

const howInfo = [
  {
    title: (
      <>
        <Grass size="sm" /> Property assessment
      </>
    ),
    description:
      "We begin with a thorough assessment of your property, analyzing features, dimensions, and any existing elements. This helps us understand the space we’ll be working with and its potential.",
  },
  {
    title: (
      <>
        <House size="sm" /> Identifying client goals
      </>
    ),
    description:
      "During the evaluation, we focus on your goals and preferences. Whether aesthetic or functional, aligning our insights with your vision is our priority.",
  },
  {
    title: (
      <>
        <RiverRock size="sm" /> Addressing Challenges
      </>
    ),
    description:
      "We identify potential challenges the site may present. Early recognition allows us to plan effective solutions, minimizing any disruptions during implementation.",
  },
  {
    title: (
      <>
        <Schovel size="sm" /> Gathering detailed information
      </>
    ),
    description:
      "We compile a comprehensive overview of your property and desires, laying a solid foundation for the planning and design stages that follow.",
  },
  {
    title: (
      <>
        <Lotus size="sm" /> Planning next steps
      </>
    ),
    description:
      "With all the information gathered, we collaboratively plan the next steps. Clear communication ensures that every aspect aligns with your expectations.",
  },
];

const serviceInfo = [
  {
    title: (
      <>
        <LandLeveling size="sm" /> Land leveling
      </>
    ),
    description:
      "Ensure your outdoor space is perfectly level for optimal functionality and aesthetic appeal. Visit our page to see examples of our precise land leveling projects and the transformation it brings to landscapes.",
    link: "/land-leveling",
  },
  {
    title: (
      <>
        <SodInstallation size="sm" /> Sod installation
      </>
    ),
    description:
      "Ensure your outdoor space is perfectly level for optimal functionality and aesthetic appeal. Visit our page to see examples of our precise land leveling projects and the transformation it brings to landscapes.",
    link: "/land-leveling",
  },
];

const HowCarrousel = ({ type = "how" }) => {
  const containerRef = useRef(null);
  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDown = true;
    containerRef.current.classList.add("grabbing");
    startX = e.pageX - containerRef.current.offsetLeft;
    scrollLeft = containerRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
    containerRef.current.classList.remove("grabbing");
  };

  const handleMouseUp = () => {
    isDown = false;
    containerRef.current.classList.remove("grabbing");
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const data = type === "service" ? serviceInfo : howInfo;

  return (
    <div
      className="how-section-carrousel"
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <div className="carrousel-track">
        {data.map(({ title, description, link }, idx) => (
          <div
            key={idx}
            className={`how-card ${idx === 0 ? "card-first" : ""}`}
          >
            <p className="heading-icon mb-4">{title}</p>
            <p>{description}</p>
            {link && <ButtonLink href={link}>Learn more</ButtonLink>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowCarrousel;
