"use client";

import React, { useRef, useEffect, useState } from "react";
import ButtonCTA from "@/UI/Buttons/ButtonCTA";
import "./GalleryService.scss";

function GalleryService({ title, highlight, paragraph, images, icon }) {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const animationRef = useRef(null);

  const speed = 1; // px por frame

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const totalScroll = carousel.scrollWidth / 2;

    const animate = () => {
      if (!isDragging && !isHovered) {
        if (carousel.scrollLeft >= totalScroll) {
          carousel.scrollLeft = 0;
        } else {
          carousel.scrollLeft += speed;
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [isDragging, isHovered]);

  // Drag
  const handleMouseDown = (e) => {
    setIsDragging(true);
    startXRef.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeftRef.current = carouselRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    carouselRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  // Hover
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseExit = () => setIsHovered(false);

  return (
    <div className="section-3-container reveal-fade">
      <div className="section-3-box-content">
        {icon}
        <h2>
          {title} <span className="highlight">{highlight}</span>
        </h2>
        <p>{paragraph}</p>
      </div>

      <div className="section-3-box-gallery">
        <div
          className="carousel"
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={() => {
            handleMouseLeave();
            handleMouseExit();
          }}
          onMouseEnter={handleMouseEnter}
        >
          <div className="carousel-track">
            {[...images, ...images].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Gallery item ${index + 1}`}
                draggable={false} // importante para drag normal
              />
            ))}
          </div>
        </div>
      </div>

      <div className="section-3-box-button">
        <ButtonCTA extraClasses={"primary-button-lofi"}>
          Book a free visit today
        </ButtonCTA>
      </div>
    </div>
  );
}

export default GalleryService;
