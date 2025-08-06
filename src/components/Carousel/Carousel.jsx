import React, { useState, useRef, useEffect } from "react";
import "../../styles/Carousel.css";
import recognitionOne from "../../assets/images/carousel/testimonialOne.png";
import recognitionTwo from "../../assets/images/carousel/testimonialTwo.png";
import recognitionThree from "../../assets/images/carousel/testimonialThree.png";
import rightarrow from "../../assets/images/carousel/next-arrow-icon-black.png";
import leftarrow from "../../assets/images/carousel/prev-arrow-icon-black.png";

export const Carousel = () => {
  const data = [
    {
      src: recognitionOne,
      maintitle: "Hexnode is of great value. Works great with Android and iOS!",
      name: "Justin Modrak",
      position: "Technology Coordinator",
      district: "East Troy Community School District",
      alt: "Image 1 for carousel",
    },
    {
      src: recognitionTwo,
      maintitle:
        "Most complete MDM solution I found, and I tested many of them, including major names",
      name: "Dalibor Kruljac",
      position: "KAMELEYA LTD",
      district: "",
      alt: "Image 2 for carousel",
    },
    {
      src: recognitionThree,
      maintitle: "It seemed to be in-line with everything we were looking at.",
      name: "Chris Robinson",
      position: "Executive Account Manager, NCS",
      district: "",
      alt: "Image 3 for carousel",
    },
  ];

  const [slide, setSlide] = useState(0);
  const [direction, setDirection] = useState("");
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef(null);

  const minSwipeDistance = 50;

  const nextSlide = () => {
    setDirection("right");
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setDirection("left");
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <section className="carousel-section">
      <h1 className="carousel-heading">Why should you choose Hexnode?</h1>

      <div
        // ref={carouselRef}
        className="carousel"
        onTouchStart={(e) => e.preventDefault()}
      >
        <button
          onClick={prevSlide}
          disabled={slide == 0}
          className={`arrow arrow-left ${slide == 0 ? "disabled" : ""}`}
          style={{
            border: "none",
            backgroundColor: "white",
            width: "50px",
            height: "50px",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={leftarrow} alt="arrow" />
        </button>
        {data.map((item, idx) => {
          return (
            <div
              key={idx}
              className={`slide 
                ${slide === idx ? "slide-active" : "slide-hidden"}
                ${direction === "right" ? "slide-right" : ""}
                ${direction === "left" ? "slide-left" : ""}
              `}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="image-testimonial"
              />
              <div className="testimonial-card">
                <div className="testimonial-quote">
                  <h4 className="quote-text">"{item.maintitle}"</h4>
                </div>
                <div className="testimonial-details">
                  <span className="divider-testimonial"></span>
                  <p className="name">{item.name}</p>
                  <small className="position">{item.position}</small>
                  <small className="district">{item.district}</small>
                </div>
              </div>
            </div>
          );
        })}
        {/* <BsArrowRightCircleFill
          onClick={nextSlide}
          className="arrow arrow-right"
        /> */}
        <button
          onClick={nextSlide}
          disabled={slide == 2}
          className={`arrow arrow-right ${slide == 2 ? "disabled" : ""}`}
          style={{
            border: "none",
            backgroundColor: "white",
            width: "50px",
            height: "50px",
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={rightarrow} alt="arrow" />
        </button>
      </div>
    </section>
  );
};
