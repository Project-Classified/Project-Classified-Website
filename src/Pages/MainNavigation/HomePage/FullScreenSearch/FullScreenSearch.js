import React from 'react'
import "./FullScreenSearch.css"

import bakground1 from "./Assects/Background.jpg"
//                <img src={bakground1} alt={"background Image"}/>


import SuperSearchBar from "../../../../Components/DefaultNavigation/SuperSearchBar/SuperSearchBar"

export default function FullScreenSearch() {
    return (
        <div className="FullScreenSearch" >
            <div className="Bakground" >
                <img src={bakground1} alt="background" />
            </div>
            <div className="Container" >

                <h1>Buy, Sell, Rent & Exchange in one Click</h1>
                <h4>Search from over 2000+ Active Ads in 29+ Categories for Free</h4>

                <div style={{ width: 800 }}>
                    <SuperSearchBar />
                </div>

            </div>
        </div>
    )
}
