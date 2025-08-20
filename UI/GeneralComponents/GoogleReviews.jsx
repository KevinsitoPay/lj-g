"use client";
import React, { useState, useEffect, useRef } from "react";
import "./GoogleReviews.scss";
import ArrowCornerCircle from "../Icons/ArrowCornerCircle";

function GoogleReviews() {
  const [offset, setOffset] = useState(0);
  const [columns, setColumns] = useState(3);
  const [slideWidth, setSlideWidth] = useState(0);
  const carouselRef = useRef(null);

  const reviews = [
    {
      text: "“Fue un excelente servicio, estoy muy satisfecho”",
      author: "Nadia Quezada ★★★★★",
    },
    {
      text: "“Honestamente se lo recomiendo, son todos unos expertos”",
      author: "Jorge Ortiz ★★★★★",
    },
    {
      text: "“Quedé enamorada de la atención y profesionalismo”",
      author: "Maria Quezada ★★★★",
    },
    {
      text: "“Me los recomendó un amigo y me encantaron”",
      author: "Miriam García ★★★★★",
    },
    {
      text: "“La verdad fue un gran trabajo, además de siempre tener una buena atención”",
      author: "Pepe Perez ★★★★",
    },
  ];

  // Create an extended array for infinite loop
  const extendedReviews = [...reviews, ...reviews, ...reviews];

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1360) {
        setColumns(3);
      } else if (screenWidth >= 820 && screenWidth < 1360) {
        setColumns(2);
      } else {
        setColumns(1);
      }
      
      // Calculate slide width based on columns
      if (carouselRef.current) {
        const containerWidth = carouselRef.current.offsetWidth;
        const gap = 20; // Your gap value
        const width = (containerWidth - (gap * (columns - 1))) / columns;
        setSlideWidth(width);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const interval = setInterval(() => {
      setOffset((prevOffset) => {
        // When we reach the end of the original content, reset to beginning seamlessly
        if (prevOffset >= reviews.length) {
          return 1; // Start from the first real item (not the duplicate)
        }
        return prevOffset + 1;
      });
    }, 4500);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(interval);
    };
  }, [reviews.length, columns]);

  // Calculate transform value for smooth sliding
  const getTransformValue = () => {
    if (slideWidth === 0) return 0;
    return -offset * (slideWidth + 20); // 20px is the gap between items
  };

  return (
    <div className="google-reviews">
      <div className="google-reviews-container">
        <div className="google-reviews-header">
          <p className="google-reviews-logo">Google</p>
          <div className="google-reviews-stars">★★★★★ (4.9)</div>
        </div>
        <div className="google-reviews-carousel" ref={carouselRef}>
          <div
            className="google-reviews-slider"
            style={{
              transform: `translateX(${getTransformValue()}px)`,
              transition: "transform 1s ease-in-out",
            }}
          >
            {extendedReviews.map((review, index) => (
              <div
                className="google-review"
                key={index}
                style={{ width: `${slideWidth}px` }}
              >
                <p>{review.text}</p>
                <span>{review.author}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="google-reviews-button">
          <a href="google.com">
            {" "}
            <ArrowCornerCircle className="google-button" size="lg" />{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default GoogleReviews;