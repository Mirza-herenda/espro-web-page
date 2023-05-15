import React from "react";
import imgBrew from "../components/Assets/images/brewGuides.png";
import BrewLogo from "../components/Assets/images/brewGuidesLogo.png";
import "../styles/BrewGuides.css";
import { Button } from "@mui/material";

function BrewGuides() {
  return (
    <div className="MainPart">
      <div className="LeftPart">
        <div className="textBox">
          <h3 className="firstTitle">THE ULTIMATE BREW GUIDES</h3>
          <h2 className="bigTitle">
            COFFEE TO WATER RATIOS: HOW TO MEASURE COFFEE LIKE A PRO
          </h2>
          <p className="descParagraph">
            You can taste it when you’ve brewed with the perfect coffee to water
            ratio. The acidity pops every so slightly, enhancing the rich
            flavors and aromas. Your coffee’s mouthfeel is smooth and
            satisfying. And the flavor is just strong enough that you can sense
            all its nuances across your 10,000 taste buds, but not so strong
            that it’s uncomfortable.
            <br />
            <br />
            <br />
            It’s an incredible experience—and too often, a hard one to come by.
          </p>
          <Button className="buttonLearnMore">learn more</Button>
        </div>
      </div>
      <div className="rightPart">
        <img className="imgBrew" alt="imgBrew" src={imgBrew}></img>
        <img className="BrewLogo" alt="brewLogo" src={BrewLogo}></img>
      </div>
      <div />
    </div>
  );
}

export default BrewGuides;
