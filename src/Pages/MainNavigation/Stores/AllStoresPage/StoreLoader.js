import React from 'react'
import "./AllStoresPage.css"

export default function StoreLoader(props) {
    return (
        <div className="AllStoresPage-StoreData">
            <div className="Image">
                <img src={props.storeLogo} alt="" draggable="false" />
            </div>
            <div className="Data">
                <h2>{props.storeName}</h2>
                <h3>{props.publishedAds} ads</h3>

            </div>
        </div>

    )
}
