import React, { useContext, useState } from 'react'
import "./FeaturedAds.css"
import { Link } from "react-router-dom";
import Loading from "../../../../Components/DefaultNavigation/Loading/Loading"
import { AdsContext } from "../../../../Context/AdsContext"
import AdComponentLoader from "../../../../Components/DefaultNavigation/AdComponentLoader/AdComponentLoader"




export default function FeaturedAds() {
    const adsContext = useContext(AdsContext)

    const [loading, setLoading] = useState(adsContext.loading)
    const [featuredAds, setFeaturedAds] = useState(adsContext.featuredAds)

    const ShowAds = featuredAds.map(ads => {
        return (
            <AdComponentLoader key={ads.id} /*adName={ads.name}*/ adImage={ads.images[0]} data={ads} />
        )
    })

    return (
        <div className="FeaturedAdsMain">
            <div className="FeaturedAdsHeader">
                <h1>Featured Ads</h1>
            </div>

            <div className="FeaturedAds">
                <div className="Container">

                    {loading ? <Loading name="Loading Ads..." /> : ShowAds}

                </div>
            </div>
        </div>
    )
}
