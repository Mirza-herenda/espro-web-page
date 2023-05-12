import React from "react";
import "../styles/CoffeePart.css";
import img2 from "../components/Assets/images/section3-1.png";
import img1 from "../components/Assets/images/section3-2.png";
import img3 from "../components/Assets/images/section3-3.png";
import img4 from "../components/Assets/images/section3-4.png";
import img5 from "../components/Assets/images/section3-5.png";

function CoffeePart() {
  return (
    <div className="MainDivCoffee">
      <div className="leftImages">
        <img className="img2" src={img2}></img>
        <img className="img1" src={img1}></img>
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
      </div>

      <div className="RightImages">
        <img className="img3" src={img3}></img>
        <img className="img4" src={img4}></img>
        <img className="img5" src={img5}></img>
      </div>
    </div>
  );
}

export default CoffeePart;
