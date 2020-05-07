import React, { useEffect, useContext } from 'react'
import "./AllAdsPage.css"

import { Link } from "react-router-dom"
import SuperSearchBar from "../../../../Components/DefaultNavigation/SuperSearchBar/SuperSearchBar"

import Beg from "../../../../Assets/Backgrounds/Header-Backgrounds/Beg.jpg"
import AdsFilter from './AdsFilter'
import AdsList from './AdsList'

import { AdsContext } from "../../../../Context/AdsContext"


export default function AllAdsPage(props) {
    const adsContext = useContext(AdsContext)
    useEffect(() => {
        props.IsInHomePageHandlerFalse();
    })

    return (
        <div className="AllAdsPage">
            <div className="Header">
                <img src={Beg} alt="Beg" />
                <div className="Header-Body">
                    <div className="Header-Data">
                        <h1>All Ads</h1>
                        <div className="h6">
                            <Link style={{ textDecoration: "none", color: "#FFF" }} className="Link" to="/" draggable="false"  ><h6 className="Home" >Home</h6></Link>
                            <h6>&nbsp;>&nbsp;</h6>
                            <h6 className="AllStoresList">All Ads List</h6>

                        </div>
                    </div>
                </div>
            </div>

            <div className="SuperSearchBar-Container">
                <SuperSearchBar />
            </div>

            <div className="Body">

                <AdsFilter ad={adsContext.allAds} />

                <AdsList ad={adsContext.sortedAds} />
            </div>
        </div>

    )
}
