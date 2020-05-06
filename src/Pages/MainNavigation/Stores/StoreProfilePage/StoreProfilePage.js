import React, { useEffect } from 'react'
import "./StoreProfilePage.css"
import { Link } from "react-router-dom";

import Beg from "../../../../Assets/Backgrounds/Header-Backgrounds/Beg.jpg"
import UnknownUser from "../AllStoresPage/Assets/UnknownUser.svg"
import UnknownUser2 from "../../../../Assets/Stores/SumashTechLogo.jpg"


import LocationOnIcon from '@material-ui/icons/LocationOn';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import PhoneRoundedIcon from '@material-ui/icons/PhoneRounded';

import FeaturedAdsLoader from "../../../../Components/DefaultNavigation/FeaturedAdsLoader/FeaturedAdsLoader"

import Ads1 from "../../../../Assets/FeaturedAds/Ads1.png"
import Ads2 from "../../../../Assets/FeaturedAds/Ads2.png"
import Ads3 from "../../../../Assets/FeaturedAds/Ads3.png"
import Ads4 from "../../../../Assets/FeaturedAds/Ads4.png"



export default function StoreProfilePage(props) {
    useEffect(() => {
        props.IsInHomePageHandlerFalse();
    })

    return (
        <div className="StoreProfilePage">
            <div className="Header">
                <img src={Beg} alt="Beg" />
                <div className="Header-Body">
                    <div className="Header-Data">
                        {/* <h1>{props.storeName ? props.storeName : <div>Sumash Tech</div>}</h1> */}
                        <div className="h6">
                            <Link style={{ textDecoration: "none", color: "#FFF" }} className="Link" to="/" draggable="false" ><h6 className="StoreLink" >Home&nbsp;</h6></Link>
                            <h6>&nbsp;>&nbsp;</h6>
                            <Link style={{ textDecoration: "none", color: "#FFF" }} className="Link" to="/Stores" draggable="false" ><h6 className="StoreLink">&nbsp;All Stores List&nbsp;</h6></Link>
                            <h6>&nbsp;>&nbsp;</h6>
                            <h6 className="StoreLinkDisable">{props.storeName ? props.storeName : <div>&nbsp;Sumash Tech</div>}</h6>

                        </div>
                    </div>
                </div>
            </div>

            <div className="Body">
                <div className="Cover">
                    <img className="CoverPhoto" src="https://images.unsplash.com/photo-1588097247274-a174dd59f20d?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="CoverPIC" draggable={false} />
                    <div className="ProfileData">
                        <div className="ProfilePhoto">
                            <img src={UnknownUser} alt="ProfilePIC" draggable={false} />

                        </div>

                        <div className="Data">
                            <div className="DataHeader">
                                <h1 style={{ color: "#2a2a2a" }}>{props.storeName ? props.storeName : <div>Sumash Tech</div>}</h1>
                            </div>
                            <div className="DataBody">

                                <h4 style={{ color: "#7c7c7a" }}><LocationOnIcon style={{ paddingRight: 5, fontSize: "1.25rem", color: "#7c7c7a" }} /> Level-5, Block-D, Shop- 68-69, Boshundhora City- Panthopoth Dhaka</h4>

                                &nbsp;&nbsp;&nbsp;
                                <h4 style={{ color: "#7c7c7a" }}><PersonRoundedIcon style={{ paddingRight: 5, fontSize: "1.25rem", color: "#7c7c7a" }} />Member since - August 23, 2019</h4>

                                &nbsp;&nbsp;&nbsp;
                                <h4 style={{ color: "#7c7c7a" }}><PhoneRoundedIcon style={{ paddingRight: 5, fontSize: "1.25rem", color: "#7c7c7a" }} />01625033964</h4>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="Container-Main">
                    <div className="Container">
                        <div className="FeaturedAdsLoader">
                            <FeaturedAdsLoader adImage={Ads1} adCatagory="Camera" adName="Canon EOS 60D" adTime="1 Hour Ago" adLocation="Mirpur 10, Dhaka" adPrice="24000" />
                        </div>
                        <div className="FeaturedAdsLoader">
                            <FeaturedAdsLoader adImage={Ads2} adCatagory="Camera" adName="Ladies Top" adTime="3 Hour Ago" adLocation="Mirpur 11, Dhaka" adPrice="650" />
                        </div>
                        <div className="FeaturedAdsLoader">
                            <FeaturedAdsLoader adImage={Ads3} adCatagory="Camera" adName="Samsung Galaxy Note 10 Pro" adTime="6 Hour Ago" adLocation="Mirpur 10, Dhaka" adPrice="65000" />
                        </div>
                        <div className="FeaturedAdsLoader">
                            <FeaturedAdsLoader adImage={Ads4} adName="RAK Premium Water Bottle" adTime="12 Hour Ago" adLocation="Mirpur 10, Dhaka" adPrice="450" />
                        </div>
                        <div className="FeaturedAdsLoader">
                            <FeaturedAdsLoader adImage={Ads3} adName="Samsung Galaxy Note 10 Pro" adTime="1 Day Ago" adLocation="Mirpur 6, Dhaka" adPrice="62500" />
                        </div>
                        <div className="FeaturedAdsLoader">
                            <FeaturedAdsLoader adImage={Ads1} adName="Canon EOS 80D" adTime="2 Days Ago" adLocation="Mirpur 10, Dhaka" adPrice="24000" />
                        </div>

                        <div className="FeaturedAdsLoader">
                            <FeaturedAdsLoader adImage={Ads1} adName="Canon EOS 60D" adTime="1 Hour Ago" adLocation="Mirpur 10, Dhaka" adPrice="24000" />
                        </div>
                        <div className="FeaturedAdsLoader">
                            <FeaturedAdsLoader adImage={Ads2} adName="Ladies Top" adTime="3 Hour Ago" adLocation="Mirpur 11, Dhaka" adPrice="650" />
                        </div>
                        <div className="FeaturedAdsLoader">
                            <FeaturedAdsLoader adImage={Ads3} adName="Samsung Galaxy Note 10 Pro" adTime="6 Hour Ago" adLocation="Mirpur 10, Dhaka" adPrice="65000" />
                        </div>
                        <div className="FeaturedAdsLoader">
                            <FeaturedAdsLoader adImage={Ads4} adName="RAK Premium Water Bottle" adTime="12 Hour Ago" adLocation="Mirpur 10, Dhaka" adPrice="450" />
                        </div>
                        <div className="FeaturedAdsLoader">
                            <FeaturedAdsLoader adImage={Ads3} adName="Samsung Galaxy Note 10 Pro" adTime="1 Day Ago" adLocation="Mirpur 6, Dhaka" adPrice="62500" />
                        </div>
                        <div className="FeaturedAdsLoader">
                            <FeaturedAdsLoader adImage={Ads1} adName="Canon EOS 80D" adTime="2 Days Ago" adLocation="Mirpur 10, Dhaka" adPrice="24000" />
                        </div>

                        <div className="FeaturedAdsLoader">
                            <FeaturedAdsLoader adImage={Ads1} adName="Canon EOS 60D" adTime="1 Hour Ago" adLocation="Mirpur 10, Dhaka" adPrice="24000" />
                        </div>
                        <div className="FeaturedAdsLoader">
                            <FeaturedAdsLoader adImage={Ads2} adName="Ladies Top" adTime="3 Hour Ago" adLocation="Mirpur 11, Dhaka" adPrice="650" />
                        </div>
                        <div className="FeaturedAdsLoader">
                            <FeaturedAdsLoader adImage={Ads3} adName="Samsung Galaxy Note 10 Pro" adTime="6 Hour Ago" adLocation="Mirpur 10, Dhaka" adPrice="65000" />
                        </div>
                        <div className="FeaturedAdsLoader">
                            <FeaturedAdsLoader adImage={Ads4} adName="RAK Premium Water Bottle" adTime="12 Hour Ago" adLocation="Mirpur 10, Dhaka" adPrice="450" />
                        </div>
                        <div className="FeaturedAdsLoader">
                            <FeaturedAdsLoader adImage={Ads3} adName="Samsung Galaxy Note 10 Pro" adTime="1 Day Ago" adLocation="Mirpur 6, Dhaka" adPrice="62500" />
                        </div>
                        <div className="FeaturedAdsLoader">
                            <FeaturedAdsLoader adImage={Ads1} adName="Canon EOS 80D" adTime="2 Days Ago" adLocation="Mirpur 10, Dhaka" adPrice="24000" />
                        </div>

                        <div className="FeaturedAdsLoader">
                            <FeaturedAdsLoader adImage={Ads1} adName="Canon EOS 60D" adTime="1 Hour Ago" adLocation="Mirpur 10, Dhaka" adPrice="24000" />
                        </div>
                        <div className="FeaturedAdsLoader">
                            <FeaturedAdsLoader adImage={Ads2} adName="Ladies Top" adTime="3 Hour Ago" adLocation="Mirpur 11, Dhaka" adPrice="650" />
                        </div>
                        <div className="FeaturedAdsLoader">
                            <FeaturedAdsLoader adImage={Ads3} adName="Samsung Galaxy Note 10 Pro" adTime="6 Hour Ago" adLocation="Mirpur 10, Dhaka" adPrice="65000" />
                        </div>
                        <div className="FeaturedAdsLoader">
                            <FeaturedAdsLoader adImage={Ads4} adName="RAK Premium Water Bottle" adTime="12 Hour Ago" adLocation="Mirpur 10, Dhaka" adPrice="450" />
                        </div>
                        <div className="FeaturedAdsLoader">
                            <FeaturedAdsLoader adImage={Ads3} adName="Samsung Galaxy Note 10 Pro" adTime="1 Day Ago" adLocation="Mirpur 6, Dhaka" adPrice="62500" />
                        </div>
                        <div className="FeaturedAdsLoader">
                            <FeaturedAdsLoader adImage={Ads1} adName="Canon EOS 80D" adTime="2 Days Ago" adLocation="Mirpur 10, Dhaka" adPrice="24000" />
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}
