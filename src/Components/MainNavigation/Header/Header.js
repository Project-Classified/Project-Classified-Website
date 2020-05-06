import React, { useState } from "react";
import "./Header.css";

import { Typography, Button } from "@material-ui/core";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from "../../../Assets/Logo/logo.png";

function Header(props) {

  return (
    <div className="MainHeader" style={{ position: props.isInHomePage ? "absolute" : "relative" }}>
      <div className="HeaderBody">

        <div className="ClickableLogo" onClick={() => { window.location.replace("/") }}>
          <div className="Logo">
            <img src={logo} />
          </div>

          <Typography variant="subtitle2" className="title" style={{
            fontSize: "25px",
            fontWeight: 700,
            color: "rgba(256,256,256,1)",
            paddingLeft: "10px",
            textShadow: "0px 0px 5px rgba(0,0,0,1)",
            marginTop: -2,
            color: props.isInHomePage ? "#fff" : "#444", textShadow: props.isInHomePage ? "0px 0px 5px rgba(0,0,0,1)" : "none"
          }}
          >
            Clasified BD
          </Typography>
        </div>

        <div className="NavBar">
          <div className="ButtonHolder" >

            <Link style={{ textDecoration: "none", color: "#444" }} className="Link" to="/" > <Button><h4 style={{ padding: 0, margin: 0, color: props.isInHomePage ? "#fff" : "#444", textShadow: props.isInHomePage ? "0px 0px 5px rgba(0,0,0,1)" : "none" }}>Home</h4></Button></Link>

            <Link style={{ textDecoration: "none", color: "#444" }} className="Link" to="/AllAds"><Button><h4 style={{ padding: 0, margin: 0, color: props.isInHomePage ? "#fff" : "#444", textShadow: props.isInHomePage ? "0px 0px 5px rgba(0,0,0,1)" : "none" }}>All Ads</h4></Button></Link>

            <Link style={{ textDecoration: "none", color: "#444" }} className="Link" to="/Stores"><Button><h4 style={{ padding: 0, margin: 0, color: props.isInHomePage ? "#fff" : "#444", textShadow: props.isInHomePage ? "0px 0px 5px rgba(0,0,0,1)" : "none" }}>All Stores</h4></Button></Link>

            <Link style={{ textDecoration: "none", color: "#444" }} className="Link" to="/UserProfile"><Button><h4 style={{ padding: 0, margin: 0, color: props.isInHomePage ? "#fff" : "#444", textShadow: props.isInHomePage ? "0px 0px 5px rgba(0,0,0,1)" : "none" }}>My Account</h4></Button></Link>

            <Link style={{ textDecoration: "none", color: "#444" }} className="Link" to="/PostAdd"><Button><h4 style={{ padding: 0, margin: 0, color: props.isInHomePage ? "#fff" : "#444", textShadow: props.isInHomePage ? "0px 0px 5px rgba(0,0,0,1)" : "none" }}>Post an Ad</h4></Button></Link>

          </div>

        </div>
      </div >
    </div >
  );
};

export default Header;
