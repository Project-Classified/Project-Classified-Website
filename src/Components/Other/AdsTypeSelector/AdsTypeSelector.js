import React, { useState, useContext, useEffect } from 'react'
import "./AdsTypeSelector.css"

import { animated, useSpring } from "react-spring"
import { AdsTypeContext } from "../../../Context/AdsTypeContext"

import { IconButton, Button } from "@material-ui/core"

import ExpandLessIcon from '@material-ui/icons/ExpandLess';

import CancelIcon from '@material-ui/icons/Cancel';


export default function AdsTypeSelector(props) {

    const adsTypeContext = useContext(AdsTypeContext)
    const { loading, AllAdsType } = adsTypeContext;

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
                        {!loading && AllAdsType.map(data => {
                            return (
                                < Button
                                    key={data.id}
                                    className="MainCategories-Div"
                                    onClick={() => {
                                        props.SelectedAdsTypeHandler(data.name)
                                        props.AdsTypeSelectorExitButton()
                                    }}
                                >

                                    {/* <img src={data.Icon} alt="location Icons" /> */}
                                    <h4 style={{ textTransform: "none" }}>{data.name}</h4>
                                    <ExpandLessIcon fontSize="small" style={{
                                        position: "absolute",
                                        right: 10,
                                        transform: "rotate(180deg)",
                                    }} />
                                </ Button>
                            )
                        })}
                    </animated.div>
                </section>
            </div>
            <IconButton className="ExitButton" onClick={() => props.AdsTypeSelectorExitButton()}><CancelIcon /></IconButton >

        </animated.div >
    )
}