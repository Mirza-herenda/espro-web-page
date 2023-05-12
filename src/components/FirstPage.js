import React from "react";
import "../styles/FirstPage.css";
import backImage from "../components/Assets/images/2132C2_6.png";
import arrowDown from "../components/Assets/icons/arrow-right-short.svg";
import { Button } from "@mui/material";

function FirstPage() {
  return (
    <div className="mainDiv">
      <img src={backImage} alt="backgroundImage"></img>
      <h1 className="BigTitle">BREW ANYWHERE. BE ANYWHERE.</h1>
      <h4 className="subTitle">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo.
      </h4>
      <Button className="FirstPageButton">POUR ON THE GO</Button>
      <div className="exploreDiv">
        <h4 className="explore">EXPLORE</h4>
        <img src={arrowDown} className="arrow" alt="arrow"></img>
      </div>
    </div>
  );
}

export default FirstPage;
