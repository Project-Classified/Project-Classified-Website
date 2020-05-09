import React, { useEffect, useContext, useState } from 'react'
import { Button } from "@material-ui/core"
import "./PostAdPage.css"
import Beg from "../../../../Assets/Backgrounds/Header-Backgrounds/Beg.jpg"

import ExpandLessIcon from '@material-ui/icons/ExpandLess';

import ImageNoteAdded from "../../../../Assets/Images/ImageNotFound.png"
import AdsTypeSelector from '../../../../Components/Other/AdsTypeSelector/AdsTypeSelector';
import CategorySelector from '../../../../Components/Other/CategorySelector/CategorySelector';
import LocationSelector from '../../../../Components/Other/LocationSelector/LocationSelector';

//import Category from "../../../../Data/Categorys"




export default function PostAdPage(props) {



    useEffect(() => {
        props.IsInHomePageHandlerFalse();
    })


    //SELETCT ADS TYPE
    const [showAdsTypeSelector, setShowAdsTypeSelector] = useState(false)

    const showAdsTypeSelectorHandler = () => {
        console.log("showAdsType : " + showAdsTypeSelector)
        setShowAdsTypeSelector(!showAdsTypeSelector);

    }
    const AdsTypeSelectorExitButton = () => {
        setShowAdsTypeSelector(!showAdsTypeSelector)
    }


    const [selectedAdsType, setSelectedAdsType] = useState("");
    const SelectedAdsTypeHandler = (catName) => {
        setSelectedAdsType(catName)
    }



    //SELECT CATEGORY
    const [showCategorySelector, setShowCategorySelector] = useState(false)

    const showCategorySelectorHandler = () => {
        console.log("showCategory : " + showCategorySelector)
        setShowCategorySelector(!showCategorySelector);

    }
    const CategorySelectorExitButton = () => {
        setShowCategorySelector(!showCategorySelector)
    }


    const [selectedCategory, setSelectedCategory] = useState("");
    const SelectedCategoryHandler = (catName) => {
        setSelectedCategory(catName)
    }


    //SELECT Location
    const [showLocationSelector, setShowLocationSelector] = useState(false)

    const showLocationSelectorHandler = () => {
        console.log("showLocation : " + showLocationSelector)
        setShowLocationSelector(!showLocationSelector);

    }
    const LocationSelectorExitButton = () => {
        setShowLocationSelector(!showLocationSelector)
    }


    const [selectedLocation, setSelectedLocation] = useState("");
    const SelectedLocationHandler = (catName) => {
        setSelectedLocation(catName)
    }

    //SELECT Product Condition
    const [produictCondition, setProduictCondition] = useState("");


    return (
        <div className="PostAdPage">
            <div className="Header">
                <img src={Beg} alt="Beg" />
                <div className="Header-Body">
                    <h6>Sell an item or service</h6>
                </div>
            </div>

            <div className="Body">

                <div className="AdsType-Box">

                    <div className="AdsType-Selector" >
                        <Button className="AdsType-Button" onClick={() =>
                            showAdsTypeSelectorHandler()
                        }>
                            <h4 style={{ textTransform: "none" }}>{selectedAdsType === "" ? "Ads Type" : selectedAdsType}</h4>
                            <div className="icon">
                                <ExpandLessIcon />
                            </div>
                        </Button>
                        {showAdsTypeSelector && <AdsTypeSelector AdsTypeSelectorExitButton={AdsTypeSelectorExitButton} SelectedAdsTypeHandler={SelectedAdsTypeHandler} />}
                    </div>

                    <div className="AdsType-Selector" >
                        <Button className="AdsType-Button" onClick={() =>
                            showCategorySelectorHandler()
                        }>
                            <h4 style={{ textTransform: "none" }}>{selectedCategory === "" ? "Ads Category" : selectedCategory}</h4>
                            <div className="icon">
                                <ExpandLessIcon />
                            </div>
                        </Button>
                        {showCategorySelector && <CategorySelector CategorySelectorExitButton={CategorySelectorExitButton} SelectedCategoryHandler={SelectedCategoryHandler} />}
                    </div>

                    <div className="AdsType-Selector" >
                        {/* <Button className="AdsType-Button" onClick={() => {
                            console.log("Show Categorys")
                        }}>
                            <h4>Ads Location</h4>
                            <div className="icon">
                                <ExpandLessIcon />
                            </div>
                        </Button> */}

                        <Button className="AdsType-Button" onClick={() =>
                            showLocationSelectorHandler()
                        }>
                            <h4 style={{ textTransform: "none" }}>{selectedLocation === "" ? "Ads Location" : selectedLocation}</h4>
                            <div className="icon">
                                <ExpandLessIcon />
                            </div>
                        </Button>
                        {showLocationSelector && <LocationSelector LocationSelectorExitButton={LocationSelectorExitButton} SelectedLocationHandler={SelectedLocationHandler} />}

                    </div>


                </div>

                <div className="PostAds-Selector">
                    <div className="AddPhoto">
                        <div className="AdsInfo-Header">
                            <h4>Add photos (up to 5)</h4>
                        </div>
                        <div className="AddPhoto-Box">
                            <div className="AddPhoto-Button">
                                <img src={ImageNoteAdded} alt="ImageNoteAdded" />
                            </div>

                            <div className="AddPhoto-Button">
                                <img src={ImageNoteAdded} alt="ImageNoteAdded" />
                            </div>

                            <div className="AddPhoto-Button">
                                <img src={ImageNoteAdded} alt="ImageNoteAdded" />
                            </div>

                            <div className="AddPhoto-Button">
                                <img src={ImageNoteAdded} alt="ImageNoteAdded" />
                            </div>

                            <div className="AddPhoto-Button">
                                <img src={ImageNoteAdded} alt="ImageNoteAdded" />
                            </div>
                        </div>
                    </div>

                    <div className="PostAds-Form">
                        <div className="AdsInfo-Header">
                            <h4>Fill in the details</h4>
                        </div>

                        <div className="PostAds-Condition">
                            <div className="AdsInfo-Header">
                                <h4>Condition : </h4>
                            </div>

                            <div className="PostAds-Condition-Data">
                                <Button
                                    onClick={() => {
                                        setProduictCondition("Used")
                                    }}
                                    style={{ backgroundColor: produictCondition === "Used" ? "rgba(220, 20, 60, .75)" : null, color: produictCondition === "Used" ? "#FFF" : null }}
                                    disabled={produictCondition === "Used"}
                                >
                                    <h4>Used</h4>

                                </Button>
                                {/* background-color: rgba(241, 192, 202, 0.75);
                                color: white; */}

                                <Button
                                    onClick={() => {
                                        setProduictCondition("New")
                                    }}
                                    style={{ backgroundColor: produictCondition === "New" ? "rgba(220, 20, 60, .75)" : null, color: produictCondition === "New" ? "#FFF" : null }}
                                    disabled={produictCondition === "New"}
                                >
                                    <h4>New</h4>
                                </Button>
                            </div>
                        </div>



                        <div className="PostAds-Brand">
                            <div className="AdsInfo-Header">
                                <h4>Brand : </h4>
                            </div>

                            <div className="PostAds-Brand-Data">
                                <input placeholder="Brand Name *" maxlength="100" />
                            </div>
                        </div>

                        <div className="PostAds-Brand">
                            <div className="AdsInfo-Header">
                                <h4>Model : </h4>
                            </div>

                            <div className="PostAds-Brand-Data">
                                <input placeholder="Model Name *" maxlength="100" />
                            </div>
                        </div>

                        <div className="PostAds-Brand">
                            <div className="AdsInfo-Header">
                                <h4>Title : </h4>
                            </div>

                            <div className="PostAds-Brand-Data">
                                <input placeholder="Title *" maxlength="100" />
                            </div>
                        </div>

                        <div className="PostAds-Brand">
                            <div className="AdsInfo-Header">
                                <h4>Price (BDT) : </h4>
                            </div>

                            <div className="PostAds-Brand-Data">
                                <input type="number" placeholder="Price *" min="1" max="12" />
                            </div>
                        </div>

                        <div className="PostAds-Brand">
                            <div className="AdsInfo-Header">
                                <h4>Description : </h4>
                            </div>

                            <div className="PostAds-Brand-Data multiline">
                                <textarea
                                    type="text"
                                    rows="5" cols="10" maxlength="5000"
                                    placeholder="Description *"
                                    multiple={true} />
                            </div>
                        </div>



                        {/* Personal Data Section */}

                        <br />
                        <div className="AdsInfo-Header">
                            <h4>Fill in Contact details</h4>
                        </div>

                        <div className="PostAds-Brand">
                            <div className="AdsInfo-Header">
                                <h4>Name : </h4>
                            </div>

                            <div className="PostAds-Brand-Data">
                                <input placeholder="Full Name *" maxlength="100" style={{ textTransform: "capitalize" }} />
                            </div>
                        </div>

                        <div className="PostAds-Brand">
                            <div className="AdsInfo-Header">
                                <h4>Email : </h4>
                            </div>

                            <div className="PostAds-Brand-Data">
                                <input type="email" placeholder="Email Address *" maxlength="100" />
                            </div>
                        </div>

                        <div className="PostAds-Brand">
                            <div className="AdsInfo-Header">
                                <h4>Number : </h4>
                            </div>

                            <div className="PostAds-Brand-Data">
                                <input type="number" placeholder="01XXXXXXXXX *" min="11" max="11" />
                            </div>
                        </div>
                    </div>
                    <Button className="SubmitButton"> Submit Ad </Button>
                </div>


            </div>

        </div >


    )
}
