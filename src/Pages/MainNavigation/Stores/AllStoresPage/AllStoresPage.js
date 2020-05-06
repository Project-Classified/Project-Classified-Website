import React, { useEffect, Fragment } from 'react'
import "./AllStoresPage.css"
import { Link } from "react-router-dom";

import Beg from "../../../../Assets/Backgrounds/Header-Backgrounds/Beg.jpg"

import SumashTechLogo from "../../../../Assets/Stores/SumashTechLogo.jpg"

import UnknownUser from "./Assets/UnknownUser.svg"



import StoreLoader from './StoreLoader'


export default function AllStoresPage(props) {
    useEffect(() => {
        props.IsInHomePageHandlerFalse();
    })

    return (
        <div className="AllStoresPage">
            <div className="Header">
                <img src={Beg} alt="Beg" />
                <div className="Header-Body">
                    <div className="Header-Data">
                        <h1>All Stores</h1>
                        <div className="h6">
                            <Link style={{ textDecoration: "none", color: "#FFF" }} className="Link" to="/" draggable="false"  ><h6 className="Home" >Home</h6></Link>
                            <h6>&nbsp;>&nbsp;</h6>
                            <h6 className="AllStoresList">All Stores List</h6>

                        </div>
                    </div>
                </div>
            </div>


            <div className="Body">
                <div className="Container">
                    <Link style={{ textDecoration: "none" }} to="/Stores/StoreProfile"  >
                        <StoreLoader storeLogo={SumashTechLogo} storeName="Sumash Tech Official" publishedAds="24" />
                    </Link>

                    <Link style={{ textDecoration: "none" }} to="/"  >
                        <StoreLoader storeLogo={UnknownUser} storeName="Cell Tech BD Official" publishedAds="6" />
                    </Link>

                    <Link style={{ textDecoration: "none" }} to="/"  >
                        <StoreLoader storeLogo={UnknownUser} storeName="Rio International Official" publishedAds="10" />
                    </Link>

                    <Link style={{ textDecoration: "none" }} to="/"  >
                        <StoreLoader storeLogo={UnknownUser} storeName="TechSecBD Official" publishedAds="8" />
                    </Link>

                    <Link style={{ textDecoration: "none" }} to="/"  >
                        <StoreLoader storeLogo={UnknownUser} storeName="Samsung Official" publishedAds="26" />
                    </Link>

                    <Link style={{ textDecoration: "none" }} to="/"  >
                        <StoreLoader storeLogo={UnknownUser} storeName="Xiaomi Official" publishedAds="33" />
                    </Link>

                    <Link style={{ textDecoration: "none" }} to="/"  >
                        <StoreLoader storeLogo={UnknownUser} storeName="Walton Official" publishedAds="24" />
                    </Link>
                </div>

            </div>
        </div >
    )
}
