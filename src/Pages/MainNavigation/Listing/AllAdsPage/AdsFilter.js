import React, { useContext, useState } from 'react'
import "./AdsFilter.css"
import { AdsContext } from '../../../../Context/AdsContext'
import { Button } from '@material-ui/core'

import ExpandLessIcon from '@material-ui/icons/ExpandLess';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';



//ANIMATED
import { animated, useSpring } from "react-spring"
import AdsTypeSelector from '../../../../Components/Other/AdsTypeSelector/AdsTypeSelector';

import { AdsTypeContext } from "../../../../Context/AdsTypeContext"


//Get all unique value
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))]
}

export default function AdsFilter(props) {









    const adsContext = useContext(AdsContext)

    const { handleChange, adsType, adsBrand, adsCategory, adsLocation, price, minPrice, maxPrice } = adsContext;
    console.log(adsType)
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



    const ShowAdsTypeAnim = useSpring({
        height: showAdsType ? "210px" : "0px",
    })
    const ShowAdsTypeAnimR = useSpring({
        transform: showAdsType ? "rotate(180deg)" : "rotate(0deg)",
    })

    const ShowCategoryTypeAnim = useSpring({
        height: showCategoryType ? "225px" : "0px",
    })
    const ShowCategoryTypeAnimR = useSpring({
        transform: showCategoryType ? "rotate(180deg)" : "rotate(0deg)",
    })

    const ShowLocationTypeAnim = useSpring({
        height: showLocationType ? "115px" : "0px",
    })
    const ShowLocationTypeAnimR = useSpring({
        transform: showLocationType ? "rotate(180deg)" : "rotate(0deg)",
    })


    const adsTypeContext = useContext(AdsTypeContext)
    const { loading, AllAdsType } = adsTypeContext;

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
                    {/* <h4> {AllAdsType}</h4> */}




                    {/* <AdsTypeSelector /> */}
                    <animated.div className="icon" style={ShowAdsTypeAnimR}>
                        <ExpandLessIcon />
                    </animated.div>

                </Button>

                {/* <div className={showAdsType ? "AdsType-Data" : "AdsType-Data-Inactive"}> */}
                <animated.div className="AdsType-Data" style={ShowAdsTypeAnim}>

                    {/* rgba(220,20,60,.75); */}

                    {/* {getAdsType && getAdsType.map(ad => {
                        return (
                            <Button key={ad} className="AdsType-Data-Value" onClick={() => handleChange("adsType", ad)}>
                                <FiberManualRecordIcon style={{ fontSize: ".75rem", marginRight: 5, color: adsType === ad ? "rgba(220,20,60,.75)" : "#646464" }} />
                                <FiberManualRecordIcon style={{ position: "absolute", left: 17, zIndex: 5, fontSize: ".5rem", color: adsType === ad ? "rgba(220,20,60,.75)" : "#fff" }} />

                                <h4 style={{ color: adsType === ad ? "rgba(220,20,60,.75)" : "#646464" }} > {ad}</h4>
                            </Button>
                        )
                    })} */}

                    {!loading && AllAdsType.map(data => {
                        return (
                            < Button key={data.id} className="AdsType-Data-Value" onClick={() => handleChange("adsType", data.name)} >
                                <FiberManualRecordIcon style={{ fontSize: ".75rem", marginRight: 5, color: adsType === data.name ? "rgba(220,20,60,.75)" : "#646464" }} />
                                <FiberManualRecordIcon style={{ position: "absolute", left: 17, zIndex: 5, fontSize: ".5rem", color: adsType === data.name ? "rgba(220,20,60,.75)" : "#fff" }} />
                                {/* <img src={data.Icon} alt="location Icons" /> */}
                                <h4 style={{ textTransform: "none" }}>{data.name}</h4>
                            </ Button>
                        )
                    })}
                </animated.div>
            </div>


            <div className="AdsType">
                {/* <div className="AdsType-Header">
                    <h2>Category</h2>
                </div> */}

                <Button className="AdsType-ActiveData" onClick={() => setShowCategoryType(!showCategoryType)}>
                    <h4>Category : </h4>
                    <h4>{adsCategory}</h4>
                    <animated.div className="icon" style={ShowCategoryTypeAnimR}>
                        <ExpandLessIcon />
                    </animated.div>

                </Button>

                <animated.div className="AdsType-Data" style={ShowCategoryTypeAnim}>

                    {getAdsCategory && getAdsCategory.map(ad => {
                        return (
                            <Button key={ad} className="AdsType-Data-Value" onClick={() => handleChange("adsCategory", ad)}>
                                <FiberManualRecordIcon style={{ fontSize: ".75rem", color: adsCategory === ad ? "rgba(220,20,60,.75)" : "#646464", marginRight: 5 }} />
                                <FiberManualRecordIcon style={{ position: "absolute", left: 17, zIndex: 5, fontSize: ".5rem", color: adsCategory === ad ? "rgba(220,20,60,.75)" : "#fff" }} />

                                <h4 style={{ color: adsCategory === ad ? "rgba(220,20,60,.75)" : "#646464" }}>{ad}</h4>
                            </Button>
                        )
                    })

                    }

                </animated.div>
            </div>


            <div className="AdsType">
                {/* <div className="AdsType-Header">
                    <h2>Location</h2>
                </div> */}

                <Button className="AdsType-ActiveData" onClick={() => setShowLocationType(!showLocationType)}>
                    <h4>Location : </h4>
                    <h4>{adsLocation}</h4>
                    <animated.div className="icon" style={ShowLocationTypeAnimR}>
                        <ExpandLessIcon />
                    </animated.div>
                </Button>

                <animated.div className="AdsType-Data" style={ShowLocationTypeAnim}>

                    {getAdsLocation && getAdsLocation.map(ad => {
                        return (
                            <Button key={ad} className="AdsType-Data-Value" onClick={() => handleChange("adsLocation", ad)}>
                                <FiberManualRecordIcon style={{ fontSize: ".75rem", color: adsLocation === ad ? "rgba(220,20,60,.75)" : "#646464", marginRight: 5 }} />
                                <FiberManualRecordIcon style={{ position: "absolute", left: 17, zIndex: 5, fontSize: ".5rem", color: adsLocation === ad ? "rgba(220,20,60,.75)" : "#fff" }} />

                                <h4 style={{ color: adsLocation === ad ? "rgba(220,20,60,.75)" : "#646464" }}>{ad}</h4>
                            </Button>
                        )
                    })}

                </animated.div>
            </div>




            <div className="AdsType">
                <Button className="AdsType-ActiveData" onClick={() => setShowCategoryType(!showCategoryType)}>
                    <h4>Price Range : </h4>
                    <h4> {minPrice} - {maxPrice}</h4>
                    <animated.div className="icon" style={ShowCategoryTypeAnimR}>
                        <ExpandLessIcon />
                    </animated.div>

                </Button>

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
        </div >

    )
}
