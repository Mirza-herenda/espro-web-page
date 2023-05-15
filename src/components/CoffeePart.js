import React, { useState, useEffect } from "react";
import "../styles/CoffeePart.css";
import img2 from "../components/Assets/images/section3-1.png";
import img1 from "../components/Assets/images/section3-2.png";
import img3 from "../components/Assets/images/section3-3.png";
import img4 from "../components/Assets/images/section3-4.png";
import img5 from "../components/Assets/images/section3-5.png";

function CoffeePart() {
  const [scrollByY, setScrollByY] = useState(0);
  const numberOfDots = 30;

  const isDesktop = window.innerWidth > 768;

  const leftImagesTransform = isDesktop
    ? `translateX(${scrollByY * 0.2}px)`
    : "";
  const img2Transform = isDesktop ? `translateX(${scrollByY * 0.1}px)` : "";
  const img1Transform = isDesktop ? `translateX(${scrollByY * -0.1}px)` : "";
  const img3Transform = isDesktop
    ? `translateX(${scrollByY * 0.05}px) translateY(${scrollByY * 0.02}px)`
    : "";
  const img4Transform = isDesktop
    ? `translateX(${-scrollByY * 0.08}px) translateY(${scrollByY * 0.02}px)`
    : "";
  const img5Transform = isDesktop
    ? `translateX(${scrollByY * -0.05}px) translateY(${scrollByY * -0.05}px)`
    : "";

  useEffect(() => {
    function handleScroll() {
      if (window.innerWidth > 768) {
        // Check for screen size
        setScrollByY(window.scrollY);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="MainDivCoffee">
      <div className="leftImages" style={{ transform: leftImagesTransform }}>
        <img
          className="img2"
          src={img2}
          style={{ transform: img2Transform }}
          alt="img2"
        />
        <img
          className="img1"
          src={img1}
          style={{ transform: img1Transform }}
          alt="img1"
        />
      </div>
      <div className="titleBox">
        <h3 className="title1">DESIGNED FOR REAL LIFE</h3>
        <h2 className="title2">COFFEE MADE FOR YOUR LIFE ON THE GO.</h2>
        <h6 className="title3">
          We understand coffee is a big part of your busy, active life. That’s
          why we create and develop products that allow you to bring your
          passion for <span className="span1">coffee-when you want it-</span>{" "}
          and wherever life takes you.
        </h6>
        <div className="dotDiv">
          {Array.from({ length: numberOfDots }).map((_, index) => (
            <p key={index} className="dot" style={{ color: "blue" }}>
              .
            </p>
          ))}
        </div>
      </div>

      <div className="RightImages">
        <img
          className="img3"
          src={img3}
          style={{ transform: img3Transform }}
          alt="img3"
        />
        <img
          className="img4"
          src={img4}
          style={{ transform: img4Transform }}
          alt="img4"
        />
        <img
          className="img5"
          src={img5}
          style={{ transform: img5Transform }}
          alt="img5"
        />
      </div>
    </div>
  );
}
export default CoffeePart;
