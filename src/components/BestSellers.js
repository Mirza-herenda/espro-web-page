import React, { useState } from "react";
import "../styles/BestSellers.css";
import { ListOfCups } from "./ListOfCups";
import { IconButton } from "@mui/material";

function BestSellers() {
  //   const [listOFCups, setlistOFCups] = useState(ListOfCups);

  return (
    <div className="titleDiv">
      <h4 className="titleBestCup">POUR YOUR BEST CUP WITH</h4>
      <h2 className="titleBestSellers">OUR BEST SELLERS</h2>
      <div className="List">
        {ListOfCups.map((obj) => {
          console.log(obj.color1);
          return (
            <div key={obj.id} className="wrapper">
              <div className="cup">
                <div className="divImage">
                  <div
                    className="desc"
                    style={{ backgroundColor: obj.descColor }}
                  >
                    {obj.desc}
                  </div>
                  <img className="img" src={obj.img}></img>
                </div>
                <div className="starDiv" style={{ display: "flex" }}>
                  <img className="imgS" src={obj.star1}></img>
                  <img className="imgS" src={obj.star2}></img>
                  <img className="imgS" src={obj.star3}></img>
                  <img className="imgS" src={obj.star4}></img>
                  <img className="imgS" src={obj.star5}></img>
                </div>
                <p style={{ color: "black" }}>{obj.name}</p>
                <p style={{ color: "black" }}>{obj.price}</p>
                <div className="ColorsDiv">
                  <IconButton
                    className="btn"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: obj.color1,
                      border: "black",
                    }}
                  ></IconButton>
                  <IconButton
                    className="btn"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: obj.color2,
                      border: "silver",
                    }}
                  ></IconButton>
                  <IconButton
                    className="btn"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: obj.color3,
                      border: "red",
                    }}
                  ></IconButton>
                  <IconButton
                    className="btn"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: obj.color4,
                    }}
                  ></IconButton>
                  <IconButton
                    className="btn"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: obj.color5,
                    }}
                  ></IconButton>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BestSellers;
