import React, { useState } from "react";
import "../styles/MoviePart.css";
import img1 from "../components/Assets/images/suv.jpg";
import { Button } from "@mui/material";
import playBtn from "../components/Assets/icons/play-button.png";
import CloseIcon from "@mui/icons-material/Close";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";

const MoviePart = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [stopZoom, setstopZoom] = useState("zoom 5s infinite alternate;");

  const PlayMovie = () => {
    setOpenModal(true);
    setstopZoom("none");
  };
  return (
    <div className="MainWrapper">
      <div className="textDiv">
        <h1 className="text1">FRESH GROUNDS. 01</h1>
        <h1 className="text1">FRESH GROUNDS. 01</h1>
      </div>
      <div className="imageDiv">
        <img className="img11" src={img1} style={{ animation: stopZoom }}></img>
        <div className="textDiv2">
          <h4 className="text3">EPISODE 01: THE GREAT MIGRATION</h4>
          <h2 className="text4">FRESH GROUNDS</h2>
          <h5 className="text5">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et.
          </h5>

          <Button className="playBtn" onClick={PlayMovie}>
            {" "}
            <img className="img12" src={playBtn}></img> WATCH FILM
          </Button>
        </div>
      </div>
      {openModal && (
        <div className="modalBackground" onClick={() => setOpenModal(false)}>
          <div className="modalContent">
            <img className="modalImage" />
            <Button className="closeBtn" style={{ color: "white" }}>
              X
            </Button>
            <PlayCircleOutlineRoundedIcon className="startMovieBtn"></PlayCircleOutlineRoundedIcon>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoviePart;
