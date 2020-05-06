import React, { Component, Fragment } from "react";
import "./Header.css";

import { Typography, Button } from "@material-ui/core";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from "../../../../Assets/Logo/LOGOCOLOR.png";

function Header() {
  return (
    <Fragment>
      <div className="RootHeader">

        <div className="ClickableLogo" onClick={() => { window.location.replace("/") }}>
          <div className="Logo">
            <img src={logo} />
          </div>

          <Typography variant="subtitle2" className="title" style={{ fontSize: "25px", fontWeight: 700, color: "rgba(0,0,0,.75)", paddingLeft: "10px", marginTop: -2 }}>
            Clasified BD
          </Typography>
        </div>

        <div className="NavBar">
          <div className="ButtonHolder">

            <Link style={{ textDecoration: "none", color: "#444" }} className="Link" to="/"><Button><h4 style={{ padding: 0, margin: 0 }}>Home</h4></Button></Link>

            <Link style={{ textDecoration: "none", color: "#444" }} className="Link" to="/Blog"><Button><h4 style={{ padding: 0, margin: 0 }}>Blog</h4></Button></Link>

            <Link style={{ textDecoration: "none", color: "#444" }} className="Link" to="/Signup"><Button><h4 style={{ padding: 0, margin: 0 }}>Signup</h4></Button></Link>

            <Link style={{ textDecoration: "none", color: "#444" }} className="Link" to="/Login"><Button><h4 style={{ padding: 0, margin: 0 }}>Login</h4></Button></Link>

            <Link style={{ textDecoration: "none", color: "#444" }} className="Link" to="/About"><Button><h4 style={{ padding: 0, margin: 0 }}>About</h4></Button></Link>

          </div>

        </div>
      </div>

    </Fragment>
  );
};

export default Header;
