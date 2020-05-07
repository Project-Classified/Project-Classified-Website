import React, { useContext, useState } from 'react'
import "./AdsFilter.css"
import { AdsContext } from '../../../../Context/AdsContext'
import { Button } from '@material-ui/core'

import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

//Get all unique value
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

export default function AdsFilter(props) {

    const adsContext = useContext(AdsContext)

    const { handleChange, adsType, adsBrand, adsCategory, adsLocation, price, minPrice, maxPrice } = adsContext;

    //Get unique Type
    let getAdsType = getUnique(props.ad, "adsType")
    let getAdsCategory = getUnique(props.ad, "adsCategory")
    let getAdsLocation = getUnique(props.ad, "adsLocation")
    //Add all
    getAdsType = ["All Types", ...getAdsType]
    getAdsCategory = ["All Categories", ...getAdsCategory]
    getAdsLocation = ["All of Bangladesh", ...getAdsLocation]

    // console.log(props.ad)


    const [showAdsType, setShowAdsType] = useState(true)
    const [showCategoryType, setShowCategoryType] = useState(true)
    const [showLocationType, setShowLocationType] = useState(true)

    return (
        <div className="Search-Container">
            <div className="Search-Container-Header">
                <h1>Filter Ads</h1>
            </div>

            <div className="AdsType">
                {/* <div className="AdsType-Header">
                    <h2>Ads Type</h2>
                </div> */}

                <Button className="AdsType-ActiveData" onClick={() => setShowAdsType(!showAdsType)}>
                    <h4>Ads Type : </h4>
                    <h4> {adsType}</h4>
                    {!showAdsType ? <ExpandLessIcon className="icon" /> :
                        <ExpandMoreRoundedIcon className="icon" />}

                </Button>

                <div className={showAdsType ? "AdsType-Data" : "AdsType-Data-Inactive"}>
                    {getAdsType && getAdsType.map(ad => {
                        return (
                            <Button key={ad} className="AdsType-Data-Value" onClick={() => handleChange("adsType", ad)}>
                                <FiberManualRecordIcon style={{ fontSize: ".75rem", color: "#646464", marginRight: 5 }} />
                                <FiberManualRecordIcon style={{ position: "absolute", left: 17, zIndex: 5, fontSize: ".5rem", color: "#fff" }} />

                                <h4>{ad}</h4>
                            </Button>
                        )
                    })

                    }
                </div>
            </div>


            <div className="AdsType">
                {/* <div className="AdsType-Header">
                    <h2>Category</h2>
                </div> */}

                <Button className="AdsType-ActiveData" onClick={() => setShowCategoryType(!showCategoryType)}>
                    <h4>Category : </h4>
                    <h4>{adsCategory}</h4>
                    {!showCategoryType ? <ExpandLessIcon className="icon" /> :
                        <ExpandMoreRoundedIcon className="icon" />}
                </Button>

                <div className={showCategoryType ? "AdsType-Data" : "AdsType-Data-Inactive"}>

                    {getAdsCategory && getAdsCategory.map(ad => {
                        return (
                            <Button key={ad} className="AdsType-Data-Value" onClick={() => handleChange("adsCategory", ad)}>
                                <FiberManualRecordIcon style={{ fontSize: ".75rem", color: "#646464", marginRight: 5 }} />
                                <FiberManualRecordIcon style={{ position: "absolute", left: 17, zIndex: 5, fontSize: ".5rem", color: "#fff" }} />

                                <h4>{ad}</h4>
                            </Button>
                        )
                    })

                    }

                </div>
            </div>







            <div className="AdsType">
                {/* <div className="AdsType-Header">
                    <h2>Location</h2>
                </div> */}

                <Button className="AdsType-ActiveData" onClick={() => setShowLocationType(!showLocationType)}>
                    <h4>Location : </h4>
                    <h4>{adsLocation}</h4>
                    {!showLocationType ? <ExpandLessIcon className="icon" /> :
                        <ExpandMoreRoundedIcon className="icon" />}
                </Button>

                <div className={showLocationType ? "AdsType-Data" : "AdsType-Data-Inactive"}>

                    {getAdsLocation && getAdsLocation.map(ad => {
                        return (
                            <Button key={ad} className="AdsType-Data-Value" onClick={() => handleChange("adsLocation", ad)}>
                                <FiberManualRecordIcon style={{ fontSize: ".75rem", color: "#646464", marginRight: 5 }} />
                                <FiberManualRecordIcon style={{ position: "absolute", left: 17, zIndex: 5, fontSize: ".5rem", color: "#fff" }} />

                                <h4>{ad}</h4>
                            </Button>
                        )
                    })}

                </div>
            </div>




            <div className="AdsPriceRangeType">
                <div className="AdsType-Header">
                    <h2>Price Range</h2>
                </div>

                <div className="AdsPriceRangeType-Data">
                    <div className="Minimum">
                        <input
                            type="number"
                            name="maxSize"

                            placeholder="Min"
                            value={minPrice}
                            onChange={(event) => {
                                const { value } = event.target;
                                handleChange("minPrice", value)
                            }} />
                    </div>
                    <div className="Maximum">
                        <input
                            type="number"
                            name="maxSize"

                            placeholder="Max"
                            value={maxPrice}
                            onChange={(event) => {
                                const { value } = event.target;
                                handleChange("maxPrice", value)
                            }} />

                    </div>
                </div>
            </div>
        </div>

    )
}
