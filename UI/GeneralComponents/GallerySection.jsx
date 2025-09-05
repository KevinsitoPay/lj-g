"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./GallerySection.module.scss";
import Grading from "../Icons/Grading";
import Grass from "../Icons/Grass";
import Plants from "../Icons/Plants";
import Mulch from "../Icons/Mulch";
import Link from "next/link";
import ArrowIcon from "../Icons/ArrowIcon";

const services = [
  {
    name: "Land Leveling",
    images: [
      "service-ai-1.webp",
      "service-ai-2.webp",
      "service-ai-3.webp",
      "service-ai-4.webp",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet.",
    link: "/land-leveling",
    icon: Grading,
  },
  {
    name: "Sod Installation",
    images: [
      "service-ai-5.webp",
      "service-ai-6.webp",
      "service-ai-7.webp",
      "service-ai-2.webp",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet.",
    link: "/sod-installation",
    icon: Grass,
  },
  {
    name: "Functional Plants",
    images: [
      "service-ai-2.webp",
      "service-ai-3.webp",
      "service-ai-1.webp",
      "service-ai-7.webp",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet.",
    link: "/functional-plants",
    icon: Plants,
  },
  {
    name: "Mulch Applications",
    images: [
      "service-ai-2.webp",
      "service-ai-1.webp",
      "service-ai-5.webp",
      "service-ai-3.webp",
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet.",
    link: "/mulch-application",
    icon: Mulch,
  },
];

const GallerySection = () => {
  const [selectedService, setSelectedService] = useState(services[0]);
  const galleryTrackRef = useRef(null);

  const isDragging = useRef(false);
  const startPos = useRef(0);
  const currentTranslate = useRef(0);
  const prevTranslate = useRef(0);

  // Auto-scroll refs
  const autoScrollRef = useRef(null);
  const isPaused = useRef(false);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    prevTranslate.current = 0;
    currentTranslate.current = 0;
    if (galleryTrackRef.current) {
      galleryTrackRef.current.style.transform = "translateX(0px)";
    }
  };

  const setPositionByClientX = (clientX) => {
    const movement = clientX - startPos.current;
    currentTranslate.current = prevTranslate.current + movement;
    galleryTrackRef.current.style.transition = "none";
    galleryTrackRef.current.style.transform = `translateX(${currentTranslate.current}px)`;
  };

  const handleMouseDown = (e) => {
    pauseAutoScroll();
    isDragging.current = true;
    startPos.current = e.clientX;
    galleryTrackRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    setPositionByClientX(e.clientX);
  };

  const handleTouchStart = (e) => {
    pauseAutoScroll();
    isDragging.current = true;
    startPos.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    setPositionByClientX(e.touches[0].clientX);
  };

  const endDrag = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    prevTranslate.current = currentTranslate.current;
    if (galleryTrackRef.current) {
      galleryTrackRef.current.style.cursor = "grab";
    }
    resumeAutoScroll();
  };

  // ----------------
  // AUTO SCROLL LOGIC
  // ----------------
  const startAutoScroll = () => {
    if (autoScrollRef.current) return; // already running
    autoScrollRef.current = setInterval(() => {
      if (!galleryTrackRef.current || isPaused.current) return;
      currentTranslate.current -= 1; // scroll speed
      galleryTrackRef.current.style.transition = "none";
      galleryTrackRef.current.style.transform = `translateX(${currentTranslate.current}px)`;

      const galleryTrack = galleryTrackRef.current;
      const totalWidth = galleryTrack.scrollWidth;

      // reset loop when scrolled 1/3 (since we tripled images)
      if (Math.abs(currentTranslate.current) > totalWidth / 3) {
        currentTranslate.current = 0;
        prevTranslate.current = 0;
        galleryTrack.style.transform = "translateX(0px)";
      }
    }, 20); // smoothness
  };

  const stopAutoScroll = () => {
    clearInterval(autoScrollRef.current);
    autoScrollRef.current = null;
  };

  const pauseAutoScroll = () => {
    isPaused.current = true;
  };

  const resumeAutoScroll = () => {
    isPaused.current = false;
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => endDrag();
    const handleGlobalTouchEnd = () => endDrag();

    window.addEventListener("mouseup", handleGlobalMouseUp);
    window.addEventListener("touchend", handleGlobalTouchEnd);

    startAutoScroll();

    return () => {
      stopAutoScroll();
      window.removeEventListener("mouseup", handleGlobalMouseUp);
      window.removeEventListener("touchend", handleGlobalTouchEnd);
    };
  }, []);

  return (
    <div className="section">
      <div className={styles.gallerySection}>
        <h3>
          Lorem ipsum dolor sit amet consectetur{" "}
          <span className={styles.highlight}>adipiscing elit Ut.</span>
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
          Aliquam in hendrerit urna. Pellentesque sit amet.
        </p>

        <div className={styles.buttons}>
          {services.map((service) => (
            <button
              key={service.name}
              onClick={() => handleServiceClick(service)}
              className={
                selectedService.name === service.name ? styles.activeButton : ""
              }
            >
              <service.icon size="sm" />
              {service.name}
            </button>
          ))}
        </div>

        <div
          className={styles.galleryWrapper}
          onMouseEnter={pauseAutoScroll}
          onMouseLeave={resumeAutoScroll}
          onTouchStart={pauseAutoScroll}
          onTouchEnd={resumeAutoScroll}
        >
          <div className={styles.cta}>
            <div className={styles.ctaContent}>
              <selectedService.icon size="lg" />
              <h5>{selectedService.name}</h5>
              <p>{selectedService.description}</p>
              <Link href={selectedService.link} className={styles.ctaButton}>
                Learn More
                <span className={styles.icon}>
                  <ArrowIcon size="sm" />
                </span>
              </Link>
            </div>
          </div>

          <div
            className={styles.gallery}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            <div className={styles.galleryTrack} ref={galleryTrackRef}>
              {selectedService.images
                .concat(selectedService.images, selectedService.images)
                .map((image, index) => (
                  <div className={styles.imageWrapper} key={index}>
                    <img
                      src={`/images/${image}`}
                      alt={selectedService.name}
                      draggable="false"
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
