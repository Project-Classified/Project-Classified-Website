import React from 'react'
import "./AdComponentLoader.css"
import { Link } from "react-router-dom"


import ImageNotFound from "../../../Assets/Images/ImageNotFound.svg"

import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CategoryIcon from '@material-ui/icons/Category';

export default function AdComponentLoader(props) {
    // console.log(props.data)

    return (
        < div style={{ transform: `scale(${props.scale})`, height: "90%" }} >
            {props.data ? <Link to={`/Ads/${props.data.slug}`} style={{ textDecoration: 'none' }}>

                <div className="FeaturedAdsContainer" style={{ backgroundColor: props.backgroundColor && props.backgroundColor }}>
                    <div className="Image">
                        <img src={props.adImage || ImageNotFound} alt="Ad Image" />
                        <div className="ViewDetails">
                            <div className="Details">
                                <h3>View Details</h3>
                            </div>
                        </div>
                    </div>

                    <div className="Data">
                        <h4 className="AdName">{props.adName || props.data.name}</h4>
                        {props.adCatagory ? (
                            <div className="Time">
                                <CategoryIcon className="ClickIcon" style={{ marginRight: 5, fontSize: "1rem" }} />
                                <h4 style={{ margin: 0, padding: 0, fontSize: ".90rem" }}>{props.adCatagory || props.data.adsCatagory}</h4>
                            </div>
                        ) : (<div />)}

                        < div className="Time">
                            <QueryBuilderIcon className="ClickIcon" style={{ marginRight: 5, fontSize: "1rem" }} />
                            <h4 style={{ margin: 0, padding: 0, fontSize: ".90rem" }}>{props.adTime || props.data.publishedAt}</h4>
                        </div>
                        <div className="Location">
                            <LocationOnIcon className="LocationIcon" style={{ marginRight: 5, fontSize: "1rem" }} />
                            <h4 style={{ margin: 0, padding: 0, fontSize: ".80rem" }}>{props.adLocation || props.data.adsLocation}</h4>
                        </div>
                        <h2 className="Price">‎৳ {props.adPrice || props.data.price}</h2>
                    </div>

                </div >
            </Link>
                : <div />
            }
        </div >

    )
}