import React, { useState, useEffect } from "react";
import "../styles/ExpriencePart.css";
import img1 from "../components/Assets/images/mountain.png";
import img2 from "../components/Assets/images/section5-1.png";
import img3 from "../components/Assets/images/section3-4.png";
import img4 from "../components/Assets/images/girlM.png";
import { Button } from "@mui/material";

function ExpriencePart() {
  const [imgSlider, setimgSlider] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setimgSlider((imgSlider) => imgSlider + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const slider = [
    { src: img2, alt: "slika1" },
    { src: img3, alt: "slika2" },
    { src: img4, alt: "slika3" },
  ];
  const slide = slider[imgSlider % slider.length];
  return (
    <div className="WrapperExprience">
      <div className="LeftDiv">
        <img className="img1" src={img1}></img>
        <div className="textContainer">
          <h3 className="titleOne">MAKE EVERY CUP AN EXPERIENCE.</h3>
          <p className="titleTwo">
            Have your French pressed coffee anywhere with ESPRO’s Travel Press.
            A double micro-filter eliminates grit for your smoothest cup on the
            go, and the mug fits right in a car cup holder or bike’s water
            bottle cage.
          </p>
          <Button className="buttonShopTravel">SHOP TRAVEL PRESS</Button>
        </div>
      </div>
      <div className="rightDiv">
        <img className="rightImg" src={slide.src}></img>
        <h4 className="titleAboveImg">PRESS. SIP. ENJOY.</h4>
      </div>
      <div />
    </div>
  );
}

export default ExpriencePart;
