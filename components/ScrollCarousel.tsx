"use client";
import React, { useState, useRef, useEffect, ReactNode } from "react";

interface CarouselProps {
  children: ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const numSlides = React.Children.count(children);

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const index = Math.round(
          carouselRef.current.scrollLeft / carouselRef.current.offsetWidth
        );
        setCurrentSlide(index);
      }
    };

    if (carouselRef.current) {
      carouselRef.current.addEventListener("scroll", handleScroll);
      return () =>
        carouselRef.current!.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const scrollCarousel = (direction: number) => {
    if (carouselRef.current) {
      let newSlide = currentSlide + direction;
      if (newSlide < 0) {
        newSlide = numSlides - 1; // loop back to the last slide
      } else if (newSlide >= numSlides) {
        newSlide = 0; // loop back to the first slide
      }

      carouselRef.current.scrollTo({
        top: 0,
        left: newSlide * carouselRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="right">
      <div
        className="carousel-container"
        ref={carouselRef}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") {
            scrollCarousel(1);
          } else if (e.key === "ArrowLeft") {
            scrollCarousel(-1);
          }
        }}
      >
        {React.Children.map(children, (child) => {
          return <div>{child}</div>;
        })}
      </div>
      <div className="caption">{children[currentSlide].props.alt}</div>
      <div className="scrollControl">
        <button className="carousel-btn" onClick={() => scrollCarousel(-1)}>
          Previous
        </button>
        <div className="carousel-counter">
          {currentSlide + 1} of {numSlides}
        </div>
        <button className="carousel-btn" onClick={() => scrollCarousel(1)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
