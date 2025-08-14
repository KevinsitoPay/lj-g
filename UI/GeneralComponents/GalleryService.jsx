"use client";

import React, { useEffect } from "react";
import Grading from "@/UI/Icons/Grading";
import Button from "@/UI/Buttons/Button";
import "./GalleryService.scss";

function GalleryService({ title, highlight, paragraph, images }) {
  useEffect(() => {
    const carousel = document.querySelector('.carousel');
    let isDragging = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
      isDragging = true;
      carousel.classList.add('active');
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDragging = false;
      carousel.classList.remove('active');
    };

    const handleMouseUp = () => {
      isDragging = false;
      carousel.classList.remove('active');
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX) * 1.5;
      carousel.scrollLeft = scrollLeft - walk;
    };

    carousel.addEventListener('mousedown', handleMouseDown);
    carousel.addEventListener('mouseleave', handleMouseLeave);
    carousel.addEventListener('mouseup', handleMouseUp);
    carousel.addEventListener('mousemove', handleMouseMove);

    return () => {
      carousel.removeEventListener('mousedown', handleMouseDown);
      carousel.removeEventListener('mouseleave', handleMouseLeave);
      carousel.removeEventListener('mouseup', handleMouseUp);
      carousel.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="section-3-container">
      <div className="section-3-box-content">
        <Grading size="lg" />
        <h2>
          {title} <span className="highlight">{highlight}</span>
        </h2>
        <p>{paragraph}</p>
      </div>
      <div className="section-3-box-gallery">
        <div className="carousel">
          <div className="carousel-track">
            {images.map((src, index) => (
              <img key={index} src={src} alt={`Gallery item ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>
      <div className="section-3-box-button">
        <Button
          text="Check our projects"
          size="medium"
          link="/"
          variant="filled"
          textColor="#28282A"
          backgroundColor="#FDE1D9"
          iconColor="#F1572D"
        />
      </div>
    </div>
  );
}

export default GalleryService;
