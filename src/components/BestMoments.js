import { Button } from "@mui/material";
import React from "react";
import "../styles/BestMoments.css";
import instIcon from "../components/Assets/icons/instagramIcon.png";
import drinkImg from "../components/Assets/images/coffee.png";
import menM from "../components/Assets/images/test.png";
import drinkImg2 from "../components/Assets/images/iceCoffee.png";
import womenM from "../components/Assets/images/girlM.png";
import drinkImg3 from "../components/Assets/images/cup.png";

function BestMoments() {
  return (
    <div className="MainDivWrapper">
      <div className="topPart">
        <div className="textSection">
          <h3 className="title_1">SHOW US YOUR BEST POUR.</h3>
          <h2 className="descPart">
            Making coffee better ☕ — one cup at a time. Share your best moments
            with us #ESPRO
          </h2>
        </div>
        <Button className="ButtonFollowUs">
          {" "}
          <img className="InstIcon" src={instIcon}></img> Follow us
        </Button>
      </div>

      <div className="imgSection">
        <img className="drinkImg" src={drinkImg}></img>
        <img className="menM" src={menM}></img>
        <img className="drinkImg2" src={drinkImg2}></img>
        <img className="womenM" src={womenM}></img>
        <img className="drinkImg3" src={drinkImg3}></img>
      </div>
    </div>
  );
}

export default BestMoments;
