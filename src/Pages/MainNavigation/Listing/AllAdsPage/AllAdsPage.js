import React, { useEffect } from 'react'
import "./AllAdsPage.css"

import { Link } from "react-router-dom"
import SuperSearchBar from "../../../../Components/DefaultNavigation/SuperSearchBar/SuperSearchBar"

import Beg from "../../../../Assets/Backgrounds/Header-Backgrounds/Beg.jpg"

export default function AllAdsPage(props) {
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





                <div className="Search-Container">
                    <div className="Search-Container-Header">
                        <h1>Filter Ads</h1>
                    </div>

                    <div className="AdsType">
                        <div className="AdsType-Header">
                            <h2>Ads Type</h2>
                        </div>

                        <div className="AdsType-Data">
                            <h5>Sell</h5>
                            <h5>Buy</h5>
                            <h5>Exchange</h5>
                            <h5>Job</h5>
                            <h5>Rent</h5>
                        </div>
                    </div>

                    <div className="AdsCategoryType">
                        <div className="AdsType-Header">
                            <h2>Category</h2>
                        </div>

                        <div className="AdsCategoryType-Data">
                            <h5>All Categories</h5>
                            <h5>Electronics</h5>
                            <h5>Mobile</h5>
                            <h5>Home % Living</h5>
                            <h5>Vehicles</h5>
                            <h5>Property</h5>
                            <h5>Pets & Animals</h5>
                            <h5>Essentials</h5>
                            <h5>Fashions, Health & Beauty</h5>
                            <h5>Hobbes, Sports & Kids</h5>
                            <h5>Buisness & Industry</h5>
                            <h5>Education</h5>
                            <h5>Services</h5>
                            <h5>Food & Agriculture</h5>
                            <h5>Jobs</h5>
                            <h5>Overseas Jobs</h5>
                            <h5>Classified BD Deals</h5>
                        </div>
                    </div>



                    <div className="AdsLocationType">
                        <div className="AdsType-Header">
                            <h2>Location</h2>
                        </div>

                        <div className="AdsLocationType-Data">
                            <h5>All of Bangladesh</h5>
                            <h5>Dhaka</h5>
                            <h5>Chattogram</h5>
                            <h5>Dhaka Devision</h5>
                            <h5>Sylhet</h5>
                            <h5>Khulna</h5>
                            <h5>Rajshahi</h5>
                            <h5>Barishal</h5>
                            <h5>Rangpur</h5>
                            <h5>Mymensingh</h5>
                        </div>
                    </div>







                <div className="AdsPriceRangeType">
                    <div className="AdsType-Header">
                        <h2>Price Range</h2>
                    </div>

                    <div className="AdsPriceRangeType-Data">
                        <div className="Minimum">Min</div>
                        <div className="Maximum">Max</div>
                    </div>
                </div>
                </div>


                <div className="Ads-Container">
                    ghjhjg
                </div>
            </div>
        </div>

    )
}
