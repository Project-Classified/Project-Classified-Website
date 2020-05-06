import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { Button } from "@material-ui/core";

import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import DesktopMacRoundedIcon from '@material-ui/icons/DesktopMacRounded';
import AccountBalanceRoundedIcon from '@material-ui/icons/AccountBalanceRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import MeetingRoomRoundedIcon from '@material-ui/icons/MeetingRoomRounded';

import "./Sidebar.css";

import * as firebase from "firebase"

import { ThemeContext } from "../../../Context/ThemeContext";

export default function Sidebar() {

    //const { selectedPage, setSelectedPage } = useState(true)
    const themeContext = useContext(ThemeContext)
    const [theme] = useState(themeContext.enableDarkMode ? themeContext.dark : themeContext.light)

    return (
        <div className="Sidebar" style={{ backgroundColor: theme.ui }}>
            <div className="Container">
                <Link style={{ textDecoration: "none", color: "#444", backgroundColor: theme.background }} className="Link" to="/">
                    <Button className="Sidebar-Button" disabled={true} >
                        <PersonRoundedIcon className="Icon" style={{ color: theme.button }} />
                        <h4 className="Text" style={{ color: theme.button }} >Profile</h4>
                    </Button>
                </Link>

                <Link style={{ textDecoration: "none", color: theme.text }} className="Link" to="/MyBets">
                    <Button className="Sidebar-Button">
                        <DashboardRoundedIcon style={{ color: theme.text }} className="Icon" />
                        <h4 style={{ color: theme.text }} className="Text">Dashboard</h4>
                    </Button>
                </Link>

                <Link style={{ textDecoration: "none", color: theme.text }} className="Link" to="/MyBets">
                    <Button className="Sidebar-Button">
                        <DesktopMacRoundedIcon style={{ color: theme.text }} className="Icon" />
                        <h4 style={{ color: theme.text }} className="Text">My Bets</h4>
                    </Button>
                </Link>

                <Link style={{ textDecoration: "none", color: "#444" }} className="Link" to="/Payment">
                    <Button className="Sidebar-Button">
                        <AccountBalanceRoundedIcon style={{ color: theme.text }} className="Icon" />
                        <h4 style={{ color: theme.text }} className="Text">Payment</h4>
                    </Button>
                </Link>

                <Link style={{ textDecoration: "none", color: "#444" }} className="Link" to="/Support">
                    <Button className="Sidebar-Button">
                        <HelpRoundedIcon style={{ color: theme.text }} className="Icon" />
                        <h4 style={{ color: theme.text }} className="Text">Support</h4>
                    </Button>
                </Link>



                <Button className="Sidebar-Button" onClick={() => { firebase.auth().signOut() }}>
                    <MeetingRoomRoundedIcon style={{ color: theme.text }} className="Icon" />
                    <h4 style={{ color: theme.text }} className="Text">Log out</h4>
                </Button>
            </div>
        </div>
    )
}
