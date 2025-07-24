'use client';
import React, { useState, useEffect } from 'react';
import './GoogleReviews.scss';
import ArrowRight from '../Icons/ArrowRight';

function GoogleReviews() {
  const [offset, setOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false); // Inicializa sin `window`

  useEffect(() => {
    // Ejecuta solo en el cliente
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Llama la función para establecer inicialmente el estado
    handleResize();

    // Agrega el listener para el evento resize
    window.addEventListener('resize', handleResize);

    // Limpia el evento en el desmontaje
    return () => window.removeEventListener('resize', handleResize);
  }, []); // La dependencia vacía asegura que solo se ejecute al montar

  const reviews = [
    { text: "“Fue un excelente servicio, estoy muy satisfecho”", author: "Nadia Quezada ★★★★★" },
    { text: "“Fue un excelente servicio, estoy muy satisfecho”", author: "Nadia Quezada ★★★★★" },
    { text: "“Fue un excelente servicio, estoy muy satisfecho”", author: "Nadia Quezada ★★★★★" },
    { text: "“Fue un excelente servicio, estoy muy satisfecho”", author: "Nadia Quezada ★★★★★" },
    { text: "“Honestamente se lo recomiendo, son todos unos expertos”", author: "Jorge Ortiz ★★★★★" }
    // ... otras reseñas
  ];

  const totalReviews = reviews.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prevOffset) => (prevOffset + 1) % totalReviews);
    }, 9000);
    return () => clearInterval(interval);
  }, [totalReviews]);

  return (
    <div className="google-reviews-container">
      <div className="google-reviews-header">
        <span>Google</span>
        <div className="google-reviews-stars">
          ★★★★★ (4.9)
        </div>
      </div>
      <div className="google-reviews-carousel">
        <div 
          className="google-reviews-slider"
          style={{ transform: `translateX(-${offset * (isMobile ? 100 : 100 / 3)}%)` }}
        >
          {reviews.concat(reviews).map((review, index) => (
            <div className="google-review" key={index}>
              <p>{review.text}</p>
              <span>{review.author}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="google-reviews-buttom">
        <button> <ArrowRight size='m' /></button>
      </div>
    </div>
  );
}

export default GoogleReviews;



