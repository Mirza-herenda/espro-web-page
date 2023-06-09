import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import "../styles/Header.css";
import logo from "../components/Assets/icons/ESPRO Logo.svg";
import searchlogo from "../components/Assets/icons/search-line.svg";
import Userlogo from "../components/Assets/icons/My Account icon.svg";
import Shoppinglogo from "../components/Assets/icons/Shopping bag icon.svg";
import { IconButton } from "@mui/material";
import { ArrowDownward } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const [ModalIsOpen, setModalIsOpen] = useState(true);

  const OpenListMenu = () => {
    setModalIsOpen(false);
    console.log("test");
  };
  return (
    <Box sx={{ flexGrow: 1, m: 0 }}>
      <AppBar className="firstBox" position="static">
        <p className="title">FREE SHIPPING ON ALL U.S. ORDERS $49+</p>
      </AppBar>
      <AppBar position="static">
        <AppBar position="static">
          <Toolbar
            className="secondBox"
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <div className="leftCorner">
              <Button className="BtnHeader" sx={{ fontSize: 13 }}>
                SHOP
                <ArrowDownward className="arrow2" />
              </Button>
              <Button className="BtnHeader" sx={{ fontSize: 13 }}>
                OUR STORY
              </Button>
            </div>
            <Button className="srcLogo">
              <img src={logo} alt="ESPRO Logo" />
            </Button>
            <div className="rightCorner">
              <Button className="BtnHeader" sx={{ fontSize: 13 }}>
                BREW GUIDES
              </Button>
              <Button className="BtnHeader" sx={{ fontSize: 13 }}>
                BLOG
              </Button>
              <div className="icons">
                <Button className="BtnHeader" sx={{ fontSize: 13 }}></Button>
                <Button sx={{ display: "flex", alignItems: "center" }}>
                  <img
                    className="searchLogo"
                    src={searchlogo}
                    alt="ESPRO Logo"
                  />
                </Button>
                <Button sx={{ display: "flex", alignItems: "center" }}>
                  <img className="UserLogo" src={Userlogo} alt="ESPRO Logo" />
                </Button>
                <Button sx={{ display: "flex", alignItems: "center" }}>
                  <img
                    className="ShoppingLogo"
                    src={Shoppinglogo}
                    alt="ESPRO Logo"
                  />
                </Button>
                <IconButton
                  className="counterBtn"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  0
                </IconButton>
              </div>
              <MenuIcon className="HambMenu" onClick={OpenListMenu} />
              <div className="listInResposive" hidden={ModalIsOpen}>
                <div className="modal">
                  <div>
                    <Button>X</Button>
                    <li>
                      <ui>
                        <Button className="BtnHeader" sx={{ fontSize: 13 }}>
                          BREW GUIDES
                        </Button>
                        <ui>
                          <Button className="BtnHeader" sx={{ fontSize: 13 }}>
                            OUR STORY
                          </Button>
                        </ui>
                        <ui>
                          <Button
                            className="srcLogo"
                            sx={{ display: "flex", alignItems: "center" }}
                          >
                            <img src={logo} alt="ESPRO Logo" />
                          </Button>
                        </ui>
                        <ui>
                          <Button className="BtnHeader" sx={{ fontSize: 13 }}>
                            BREW GUIDES
                          </Button>
                        </ui>
                      </ui>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </AppBar>
    </Box>
  );
}

export default Header;
