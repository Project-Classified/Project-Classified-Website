import React from 'react'
import "./FeaturedAdsLoader.css"

import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CategoryIcon from '@material-ui/icons/Category';

export default function FeaturedAdsLoader(props) {
    return (
        <div className="FeaturedAdsContainer">
            <div className="Image">
                <img src={props.adImage} alt="Ad Image" />
                <div className="ViewDetails">
                    <div className="Details">
                        <h3>View Details</h3>
                    </div>
                </div>
            </div>

            <div className="Data">
                <h4 className="AdName">{props.adName}</h4>
                {props.adCatagory ? (
                    <div className="Time">
                        <CategoryIcon className="ClickIcon" style={{ marginRight: 5, fontSize: "1rem" }} />
                        <h4 style={{ margin: 0, padding: 0, fontSize: ".90rem" }}>{props.adCatagory}</h4>
                    </div>
                ) : (<div />)}

                < div className="Time">
                    <QueryBuilderIcon className="ClickIcon" style={{ marginRight: 5, fontSize: "1rem" }} />
                    <h4 style={{ margin: 0, padding: 0, fontSize: ".90rem" }}>{props.adTime}</h4>
                </div>
                <div className="Location">
                    <LocationOnIcon className="LocationIcon" style={{ marginRight: 5, fontSize: "1rem" }} />
                    <h4 style={{ margin: 0, padding: 0, fontSize: ".80rem" }}>{props.adLocation}</h4>
                </div>
                <h2 className="Price">‎৳ {props.adPrice}</h2>
            </div>
        </div >

    )
}
