'use client';
import React, { useState, useEffect, useRef } from 'react';
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
    images: ['/Images/service-ai-1.png', 'service-ai-2.png', 'service-ai-3.png', 'service-ai-4.png'],
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet.',
    link: '/land-leveling',
    icon: <Grading size='sm' />
  },
  {
    name: 'Soil Installation',
    images: ['service-ai-5.png', 'service-ai-6.png', 'service-ai-7.png', 'service-ai-2.png'],
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet.',
    link: '/soil-installation',
    icon: <Grass size='sm' />
  },
  {
    name: 'Functional Plants',
    images: ['service-ai-2.png', 'service-ai-3.png', 'service-ai-1.png', 'service-ai-7.png'],
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet.',
    link: '/functional-plants',
    icon: <Plants size='sm' />
  },
  {
    name: 'Mulch Applications',
    images: ['service-ai-2.png', 'service-ai-1.png', 'service-ai-5.png', 'service-ai-3.png'],
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet.',
    link: '/mulch-applications',
    icon: <Mulch size='sm' />
  },
];

const GallerySection = () => {
  const [selectedService, setSelectedService] = useState(services[0]);
  const galleryTrackRef = useRef(null);
  const [offset, setOffset] = useState(0);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  useEffect(() => {
    const galleryTrack = galleryTrackRef.current;
    const totalItems = selectedService.images.length;
    const itemWidth = galleryTrack ? galleryTrack.offsetWidth / (window.innerWidth <= 480 ? 1 : 4) : 0;

    const interval = setInterval(() => {
      setOffset((prevOffset) => {
        const newOffset = prevOffset - itemWidth;
        if (Math.abs(newOffset) >= galleryTrack.scrollWidth / 2) {
          return 0;
        }
        return newOffset;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [selectedService]);

  useEffect(() => {
    const galleryTrack = galleryTrackRef.current;
    galleryTrack.style.transition = 'transform 1.5s ease-in-out';
    galleryTrack.style.transform = `translateX(${offset}px)`;
  }, [offset]);

  return (
    <div className={styles.gallerySection}>
      <h3>Lorem ipsum dolor sit amet consectetur<span className={styles.highlight}> adipiscing elit Ut.</span></h3>
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

        <div className={styles.gallery}>
          <div className={styles.galleryTrack} ref={galleryTrackRef}>
            {selectedService.images.concat(selectedService.images).map((image, index) => (
              <div className={styles.imageWrapper} key={index}>
                {console.log(`/images/${image}`)} {/* Imprime la ruta para verificar */}
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












