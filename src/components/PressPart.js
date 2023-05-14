import React, { useState } from "react";
import "../styles/PressSection.css";
import { PressLogosList } from "./PressLogosList";

function PressPart() {
  const [quotes, setquotes] = useState(
    "“The result is a richly flavored, super aromatic cup of coffee without the usual silt in the bottom. The press isn’t just for coffee, either—there’s also a tea filter available that isolates tea leaves to prevent oversteeping.”"
  );

  const PickQoute = (index) => {
    setquotes(PressLogosList[index].quote);
  };
  return (
    <div className="pressSection">
      <div className="textPart">
        <h4 className="titlePress fade-in-out">IN THE PRESS</h4>
        <p className="quotes">{quotes}</p>
      </div>
      <div className="logosDiv">
        {PressLogosList.map((obj, index) => {
          return (
            <div className="logo">
              <img src={obj.logo} onClick={() => PickQoute(index)}></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PressPart;
