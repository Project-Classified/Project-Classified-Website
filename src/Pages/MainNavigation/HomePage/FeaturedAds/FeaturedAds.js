import React, { useState } from 'react'
import "./FeaturedAds.css"
import { Link } from "react-router-dom";


import FeaturedAdsLoader from "../../../../Components/DefaultNavigation/FeaturedAdsLoader/FeaturedAdsLoader"




import Ads1 from "../../../../Assets/FeaturedAds/Ads1.png"
import Ads2 from "../../../../Assets/FeaturedAds/Ads2.png"
import Ads3 from "../../../../Assets/FeaturedAds/Ads3.png"
import Ads4 from "../../../../Assets/FeaturedAds/Ads4.png"

export default function FeaturedAds() {
    const [adName, setAdName] = useState("Samsung Galaxy Note 10")
    const [adTime, setAdTime] = useState("6 Hour Ago")
    const [adLocation, setAdLocation] = useState("Mirpur, Dhaka")
    const [adPrice, setAdPrice] = useState("60,000")

    return (
        <div className="FeaturedAdsMain">
            <div className="FeaturedAdsHeader">
                <h1>Featured Ads</h1>
            </div>

            <div className="FeaturedAds">
                <div className="Container">


                    <Link style={{ textDecoration: "none", color: "#444" }} className="Link" to="/AdView" > <FeaturedAdsLoader adImage={Ads1} adName="Canon EOS 60D" adTime="1 Hour Ago" adLocation="Mirpur 10, Dhaka" adPrice="24000" /></Link>

                    <FeaturedAdsLoader adImage={Ads2} adName="Ladies Top" adTime="3 Hour Ago" adLocation="Mirpur 11, Dhaka" adPrice="650" />

                    <FeaturedAdsLoader adImage={Ads3} adName="Samsung Galaxy Note 10 Pro" adTime="6 Hour Ago" adLocation="Mirpur 10, Dhaka" adPrice="65000" />

                    <FeaturedAdsLoader adImage={Ads4} adName="RAK Premium Water Bottle" adTime="12 Hour Ago" adLocation="Mirpur 10, Dhaka" adPrice="450" />

                    <FeaturedAdsLoader adImage={Ads3} adName="Samsung Galaxy Note 10 Pro" adTime="1 Day Ago" adLocation="Mirpur 6, Dhaka" adPrice="62500" />

                    <FeaturedAdsLoader adImage={Ads1} adName="Canon EOS 80D" adTime="2 Days Ago" adLocation="Mirpur 10, Dhaka" adPrice="24000" />

                </div>
            </div>
        </div>
    )
}
