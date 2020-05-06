import React from 'react'
import "./TopLocations.css"

import Mirpur10 from "../../../../Assets/TopLocations/Mirpur10Dhaka.jpg"
import Mirpur11 from "../../../../Assets/TopLocations/Mirpur11Dhaka.jpg"
import Mirpur6 from "../../../../Assets/TopLocations/Mirpur6Dhaka.jpg"
import Uttora from "../../../../Assets/TopLocations/UttoraDhaka.jpg"
import Gulshan from "../../../../Assets/TopLocations/GulshanDhaka.jpg"
import OldDhaka from "../../../../Assets/TopLocations/OldDhaka.jpg"

import TopLocationLoader from './TopLocationLoader'

export default function TopLocations() {
    return (
        <div>
            <div className="TopLocationsMain">
                <div className="TopLocationsHeader">
                    <h1>Our Top Locations</h1>
                </div>

                <div className="TopLocations">
                    <div className="Container">
                        <div className="SubContainer1">
                            <TopLocationLoader localImage={Mirpur11} localName="Mirpur 11, Dhaka" localAds={3} />
                        </div>

                        <div className="SubContainer2">
                            <TopLocationLoader localImage={Mirpur10} localName="Mirpur 10, Dhaka" localAds={2} />

                        </div>

                        <div className="SubContainer3">
                            <TopLocationLoader localImage={Mirpur6} localName="Mirpur 6, Dhaka" localAds={26} />
                        </div>

                        <div className="SubContainer4">
                            <TopLocationLoader localImage={Gulshan} localName="Gulshan, Dhaka" localAds={73} />

                        </div>

                        <div className="SubContainer5">
                            <TopLocationLoader localImage={Uttora} localName="Uttora, Dhaka" localAds={56} />
                        </div>

                        <div className="SubContainer6">
                            <TopLocationLoader localImage={OldDhaka} localName="Old Dhaka, Dhaka" localAds={5} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
