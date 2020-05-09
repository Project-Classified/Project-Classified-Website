import React, { useState, useContext, useEffect } from 'react'
import "./CategorySelector.css"

import { animated, useSpring } from "react-spring"
import { CategoriesContext } from "../../../Context/CategoriesContext"

import { IconButton, Button } from "@material-ui/core"

import ExpandLessIcon from '@material-ui/icons/ExpandLess';

import CancelIcon from '@material-ui/icons/Cancel';

export default function CategorySelector(props) {

    const categoriesContext = useContext(CategoriesContext)
    const { loading, GetCategory } = categoriesContext;

    const [section2Categories, setSection2Categories] = useState([]);
    const [category2Loaded, seCategory2Loaded] = useState(false);

    const section2CategoriesAnim = useSpring({
        opacity: category2Loaded ? 1 : 0.0,
        pointerEvents: category2Loaded ? "all" : "none"

    })

    const [laodedSection2Category, setLaodedSection2Category] = useState("");


    const setSection2Category = (catName) => {
        const tempData = GetCategory(catName)

        if (tempData !== null) {
            setSection2Categories(tempData);

            seCategory2Loaded(true)
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
        <animated.div className="CategorySelector" style={PopInAnim}>
            <div className="Container">
                <section className="Section1">
                    <animated.div className="Section1-Data" style={PopInAnimData}>
                        {!loading && GetCategory("MainCategories").map(data => {
                            return (
                                < Button
                                    key={data.id}
                                    className="MainCategories-Div"
                                    style={{
                                        backgroundColor: category2Loaded && laodedSection2Category === data.slug ? "rgba(220, 20, 60, .75)" : undefined,
                                        color: category2Loaded && laodedSection2Category === data.slug ? "#FFF" : undefined

                                    }}
                                    onClick={() => {
                                        if (laodedSection2Category !== data.slug) {
                                            setLaodedSection2Category(data.slug)
                                            setSection2Category(data.slug)
                                        }
                                        else {
                                            seCategory2Loaded(!category2Loaded)
                                        }
                                    }}
                                >

                                    <img src={data.Icon} alt="category Icons" />
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
                    < animated.div className="Section1-Data" style={section2CategoriesAnim}>
                        {!loading && section2Categories.map(data => {
                            return (
                                < Button key={data.id} className="MainCategories-Div" onClick={() => {
                                    props.SelectedCategoryHandler(data.name)
                                    props.CategorySelectorExitButton()
                                }}>
                                    <h4 style={{ textTransform: "none" }}>{data.name}</h4>
                                </ Button>
                            )
                        })}
                    </animated.div>
                </section>
                <section className="Section1"></section>
            </div>
            <IconButton className="ExitButton" onClick={() => props.CategorySelectorExitButton()}><CancelIcon /></IconButton >

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