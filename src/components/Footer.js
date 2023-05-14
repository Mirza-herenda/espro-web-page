import React from "react";
import {
  TextField,
  Toolbar,
  Button,
  InputAdornment,
  Box,
  IconButton,
} from "@mui/material";
import "../styles/Footer.css";
import whiteLogo from "../components/Assets/images/white espro logo.png";
import FBicon from "../components/Assets/icons/facebook.svg";
import InstIcon from "../components/Assets/icons/instagramIcon.png";
import Twittericon from "../components/Assets/icons/twitter.svg";

function Footer() {
  return (
    <Box sx={{ flexGrow: 1, m: 0 }} className="footerDiv">
      <Toolbar className="TopToolbar">
        <div className="topTextBox">
          <h1 className="footerTitle">NEVER MISS A DROP.</h1>
          <h4 className="footerSubTitle">
            Sign up to be the first to know about exclusive new deals, product
            launches and more.
          </h4>
        </div>
        <TextField
          className="input"
          label="Enter Your Email Adress"
          sx={{ border: "none" }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button disableElevation style={{ color: "#fff" }}>
                  Sign Up
                </Button>
              </InputAdornment>
            ),
          }}
        ></TextField>
      </Toolbar>
      <Toolbar className="BottomToolBar">
        <Box className="middle">
          <div className="middle0">
            <img className="whiteLogo" src={whiteLogo}></img>
            <h3 className="leftTitle">
              We’re here to help. service@espro.com 1.844.377.7622
            </h3>
          </div>
          <div className="middle1">
            <h4 className="titleMiddle1">LEARN</h4>
            <h6 className="subtitleMiddle">Blog</h6>
            <h6 className="subtitleMiddle">Our Story</h6>
            <h6 className="subtitleMiddle"> Brew Guides</h6>
            <h6 className="subtitleMiddle">Retailers</h6>
          </div>

          <div className="middle2">
            <h4 className="titleMiddle1">SUPPORT</h4>
            <h6 className="subtitleMiddle">FAQ Our </h6>
            <h6 className="subtitleMiddle">Shipping & Returns</h6>
            <h6 className="subtitleMiddle">Guarantee</h6>
          </div>
          <div className="middle3">
            <h4 className="titleMiddle1">COMPANY</h4>
            <h6 className="subtitleMiddle">Contact </h6>
            <h6 className="subtitleMiddle">Join Us</h6>
            <h6 className="subtitleMiddle">Press</h6>
          </div>
          <div className="middle4">
            <h4 className="titleMiddle1">CONNECT WITH US</h4>
            <div className="iconsDiv">
              <IconButton
                className="IconBtn"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <img src={FBicon}></img>
              </IconButton>
              <IconButton
                className="IconBtn"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <img src={InstIcon}></img>
              </IconButton>
              <IconButton
                className="IconBtn"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <img src={Twittericon}></img>
              </IconButton>
            </div>
          </div>
        </Box>
      </Toolbar>
      <Toolbar className="bottomToolbar">
        <h4 className="textBottomLeft">Copyright © 2021 Espro Inc.</h4>
        <h4 className="textBottomRight">Terms & Privacy</h4>
        <h4 className="textBottomRight2">Patents</h4>
      </Toolbar>
    </Box>
  );
}

export default Footer;
