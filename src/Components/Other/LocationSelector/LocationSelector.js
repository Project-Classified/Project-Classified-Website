import React, { useState, useContext, useEffect } from 'react'
import "./LocationSelector.css"

import { animated, useSpring } from "react-spring"
import { LocationContext } from "../../../Context/LocationContext"

import { IconButton, Button } from "@material-ui/core"

import ExpandLessIcon from '@material-ui/icons/ExpandLess';

import CancelIcon from '@material-ui/icons/Cancel';


export default function LocationSelector(props) {

    const locationContext = useContext(LocationContext)
    const { loading, GetLocation } = locationContext;


    //Section 2
    const [section2Location, setSection2Location] = useState([]);
    const [location2Loaded, seLocation2Loaded] = useState(false);

    const section2LocationAnim = useSpring({
        opacity: location2Loaded ? 1 : 0.0,
        pointerEvents: location2Loaded ? "all" : "none"
    })

    const [laodedSection2Location, setLaodedSection2Location] = useState("");


    const setSection2Locations = (catName) => {
        const tempData = GetLocation(catName)

        if (tempData !== null) {
            setSection2Location(tempData);

            seLocation2Loaded(true)
        }
    }



    //Section 3
    const [section3Location, setSection3Location] = useState([]);
    const [location3Loaded, seLocation3Loaded] = useState(false);

    const section3LocationAnim = useSpring({
        opacity: location3Loaded ? 1 : 0.0,
        pointerEvents: location3Loaded ? "all" : "none"
    })

    const [laodedSection3Location, setLaodedSection3Location] = useState("");


    const setSection3Locations = (catName) => {
        const tempData = GetLocation(catName)

        if (tempData !== null) {
            setSection3Location(tempData);

            seLocation3Loaded(true)
        }
    }



    const PopInAnim = useSpring({
        from: {
            // transform: "scale(0)",
            backdropFilter: "blur(0px)",
            backgroundColor: "rgba(0,0,0,.0)",
        },
        to: {
            // transform: "scale(1)",
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(0,0,0,.25)",

        }
    })
    const PopInAnimData = useSpring({
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1,
        }
    })


    return (
        <animated.div className="LocationSelector" style={PopInAnim}>
            <div className="Container">
                <section className="Section1">
                    <animated.div className="Section1-Data" style={PopInAnimData}>
                        {!loading && GetLocation("AllLocations").map(data => {
                            return (
                                < Button
                                    key={data.id}
                                    className="MainCategories-Div"
                                    style={{
                                        backgroundColor: location2Loaded && laodedSection2Location === data.slug ? "rgba(220, 20, 60, .75)" : undefined,
                                        color: location2Loaded && laodedSection2Location === data.slug ? "#FFF" : undefined

                                    }}
                                    onClick={() => {
                                        if (laodedSection2Location !== data.slug) {
                                            setLaodedSection2Location(data.slug)
                                            setSection2Locations(data.slug)
                                        }
                                        else {
                                            seLocation2Loaded(!location2Loaded)
                                        }
                                    }}
                                >

                                    {/* <img src={data.Icon} alt="location Icons" /> */}
                                    <h4 style={{ textTransform: "none" }}>{data.name}</h4>
                                    <ExpandLessIcon fontSize="small" style={{
                                        position: "absolute",
                                        right: 10,
                                        transform: "rotate(90deg)",
                                    }} />
                                </ Button>
                            )
                        })}
                    </animated.div>
                </section>


                <section className="Section1">
                    < animated.div className="Section1-Data" style={section2LocationAnim}>
                        {!loading && section2Location.map(data => {
                            return (
                                < Button
                                    key={data.id}
                                    className="MainCategories-Div"
                                    style={{
                                        backgroundColor: location3Loaded && laodedSection3Location === data.slug ? "rgba(220, 20, 60, .75)" : undefined,
                                        color: location3Loaded && laodedSection3Location === data.slug ? "#FFF" : undefined

                                    }}

                                    onClick={() => {
                                        if (laodedSection3Location !== data.slug) {
                                            setLaodedSection3Location(data.slug)
                                            setSection3Locations(data.slug)
                                        }
                                        else {
                                            seLocation3Loaded(!location3Loaded)
                                        }
                                    }}>
                                    <h4 style={{ textTransform: "none" }}>{data.name}</h4>
                                </ Button>
                            )
                        })}
                    </animated.div>
                </section>
                <section className="Section1">
                    < animated.div className="Section1-Data" style={section3LocationAnim}>
                        {!loading && section3Location.map(data => {
                            return (
                                < Button key={data.id} className="MainCategories-Div" onClick={() => {
                                    props.SelectedLocationHandler(data.name)
                                    props.LocationSelectorExitButton()
                                }}>
                                    <h4 style={{ textTransform: "none" }}>{data.name}</h4>
                                </ Button>
                            )
                        })}
                    </animated.div>
                </section>
            </div >
            <IconButton className="ExitButton" onClick={() => props.LocationSelectorExitButton()}><CancelIcon /></IconButton >

        </animated.div >
    )
}







    // const [showCategoryType, setShowCategoryType] = useState(true)

    // const ShowCategoryTypeAnim = useSpring({
    //     height: showCategoryType ? "0px" : "-50px",
    //     opacity: showCategoryType ? 1 : 0,
    // })
    // const ShowCategoryTypeAnimR = useSpring({
    //     transform: showCategoryType ? "rotate(180deg)" : "rotate(0deg)",
    // })