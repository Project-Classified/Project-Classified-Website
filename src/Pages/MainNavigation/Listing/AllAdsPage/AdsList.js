import React from 'react'
import "./AllAdsPage.css"

import AdComponentLoader from "../../../../Components/DefaultNavigation/AdComponentLoader/AdComponentLoader"

export default function AdsList({ ad }) {
    // console.log(ad)

    if (ad.length === 0 || ad == null) {
        return (
            <div className="AdsList" style={{
                marginTop: 5,
                color: "#282828",
                paddingTop: "100px",
                // backgroundColor: "#FFF",
                display: "flex",
                justifyContent: "center",
            }}>
                <h2 >Unfortunately No Ads Matched Your Search Perameters !!!</h2>
            </div>
        )
    }
    return (
        <div className="AdsList">
            <div className="Ads-Container">
                {
                    ad.map(item => {
                        return (
                            <AdComponentLoader scale={.9} className="blabla" key={item.id} /*adName={ads.name}*/ adImage={item.images[0]} data={item} />
                        )
                    })
                }
            </div>
        </div>
    )
}
