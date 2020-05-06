import React from 'react'

export default function TopLocationLoader(props) {
    return (
        <div className="TopLocationsContainer">
            <div className="Image">
                <img src={props.localImage} alt="Location" draggable="false" />
            </div>
            <div className="Data">
                <h4 style={{ margin: 0, paddingBottom: 5, fontSize: "1.25rem" }} >{props.localName}</h4>

                <h5 style={{ margin: 0, padding: 0, fontSize: ".80rem", fontWeight: 500 }}>{props.localAds} Ads</h5>
            </div>
        </div>
    )
}
