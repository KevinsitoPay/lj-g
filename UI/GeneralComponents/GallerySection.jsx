'use client';
import React, { useState, useRef, useEffect } from 'react';
import styles from './GallerySection.module.scss';
import ArrowRight from '../Icons/ArrowRight';
import Grading from '../Icons/Grading';
import Grass from '../Icons/Grass';
import Plants from '../Icons/Plants';
import Mulch from '../Icons/Mulch';
import Link from 'next/link';

const services = [
  {
    name: 'Land Leveling',
    images: ['service-ai-1.webp', 'service-ai-2.webp', 'service-ai-3.webp', 'service-ai-4.webp'],
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet.',
    link: '/land-leveling',
    icon: <Grading size='sm' />
  },
  {
    name: 'Soil Installation',
    images: ['service-ai-5.webp', 'service-ai-6.webp', 'service-ai-7.webp', 'service-ai-2.webp'],
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet.',
    link: '/soil-installation',
    icon: <Grass size='sm' />
  },
  {
    name: 'Functional Plants',
    images: ['service-ai-2.webp', 'service-ai-3.webp', 'service-ai-1.webp', 'service-ai-7.webp'],
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet.',
    link: '/functional-plants',
    icon: <Plants size='sm' />
  },
  {
    name: 'Mulch Applications',
    images: ['service-ai-2.webp', 'service-ai-1.webp', 'service-ai-5.webp', 'service-ai-3.webp'],
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet.',
    link: '/mulch-applications',
    icon: <Mulch size='sm' />
  },
];

const GallerySection = () => {
  const [selectedService, setSelectedService] = useState(services[0]);
  const galleryTrackRef = useRef(null);
  const isDragging = useRef(false);
  const startPos = useRef(0);
  const currentTranslate = useRef(0);
  const prevTranslate = useRef(0);

  const handleServiceClick = (service) => {
    setSelectedService(service);
    prevTranslate.current = 0;
    currentTranslate.current = 0;
    galleryTrackRef.current.style.transform = 'translateX(0px)';
  };

  const setPositionByClientX = (clientX) => {
    const movement = clientX - startPos.current;
    currentTranslate.current = prevTranslate.current + movement;
    galleryTrackRef.current.style.transition = 'none';
    galleryTrackRef.current.style.transform = `translateX(${currentTranslate.current}px)`;
  };

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startPos.current = e.clientX;
    galleryTrackRef.current.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    setPositionByClientX(e.clientX);
  };

  const handleTouchStart = (e) => {
    isDragging.current = true;
    startPos.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    setPositionByClientX(e.touches[0].clientX);
  };

  const endDrag = () => {
    isDragging.current = false;
    prevTranslate.current = currentTranslate.current;
    galleryTrackRef.current.style.cursor = 'grab';

    const galleryTrack = galleryTrackRef.current;
    const totalWidth = galleryTrack.scrollWidth;
    const visibleWidth = galleryTrack.offsetWidth;

    if (currentTranslate.current < -totalWidth / 2) {
      currentTranslate.current = 0;
      prevTranslate.current = 0;
      galleryTrack.style.transform = `translateX(0px)`;
    } else if (currentTranslate.current > visibleWidth) {
      currentTranslate.current = -totalWidth / 2;
      prevTranslate.current = -totalWidth / 2;
      galleryTrack.style.transform = `translateX(${prevTranslate.current}px)`;
    }
  };

  return (
    <div className={styles.gallerySection}>
      <h3>Lorem ipsum dolor sit amet consectetur <span className={styles.highlight}>adipiscing elit Ut.</span></h3>
      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet.</p>

      <div className={styles.buttons}>
        {services.map((service) => (
          <button
            key={service.name}
            onClick={() => handleServiceClick(service)}
            className={selectedService.name === service.name ? styles.activeButton : ''}
          >
            {service.icon}
            {service.name}
          </button>
        ))}
      </div>

      <div className={styles.galleryWrapper}>
        <div className={styles.cta}>
          <div className={styles.ctaContent}>
            {React.cloneElement(selectedService.icon, { size: 'lg' })}
            <h4>{selectedService.name}</h4>
            <p>{selectedService.description}</p>
            <Link href={selectedService.link} className={styles.ctaButton}>
              Learn More
              <span className={styles.icon}><ArrowRight size='sm' /></span>
            </Link>
          </div>
        </div>

        <div
          className={styles.gallery}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={endDrag}
          onMouseLeave={endDrag}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={endDrag}
        >
          <div
            className={styles.galleryTrack}
            ref={galleryTrackRef}
          >
            {selectedService.images.concat(selectedService.images, selectedService.images).map((image, index) => (
              <div className={styles.imageWrapper} key={index}>
                <img src={`/images/${image}`} alt={selectedService.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;














