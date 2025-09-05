"use client";

import ButtonLink from "@/UI/Buttons/ButtonLink";
import House from "@/UI/Icons/House";
import LandLeveling from "@/UI/Icons/LandLeveling";
import SodInstallation from "@/UI/Icons/SodInstallation";
import React, { useRef } from "react";

const howInfo = [
  {
    title: (
      <>
        <House size="sm" /> Name of the perk
      </>
    ),
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet.",
  },
  {
    title: (
      <>
        <House size="sm" /> Name of the perk
      </>
    ),
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet.",
  },
  {
    title: (
      <>
        <House size="sm" /> Name of the perk
      </>
    ),
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet.",
  },
  {
    title: (
      <>
        <House size="sm" /> Name of the perk
      </>
    ),
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet.",
  },
  {
    title: (
      <>
        <House size="sm" /> Name of the perk
      </>
    ),
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet.",
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
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet.",
    link: "/land-leveling",
  },
  {
    title: (
      <>
        <SodInstallation size="sm" /> Sod installation
      </>
    ),
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet.",
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
