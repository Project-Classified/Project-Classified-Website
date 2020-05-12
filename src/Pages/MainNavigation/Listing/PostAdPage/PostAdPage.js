import React, { useEffect, useContext, useState } from 'react'
import { Button, IconButton } from "@material-ui/core"
import "./PostAdPage.css"
import Axios from 'axios'

import Loading from "../../../../Components/DefaultNavigation/Loading/Loading"
import ApiKeys from "../../../../API/ApiKeys"

import Beg from "../../../../Assets/Backgrounds/Header-Backgrounds/Beg.jpg"

import ImageNotAdded from "../../../../Assets/Images/ImageNotFound.svg"
import ImageAdded from "../../../../Assets/Images/ImageFound.svg"

import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';


import AdsTypeSelector from '../../../../Components/Other/AdsTypeSelector/AdsTypeSelector';
import CategorySelector from '../../../../Components/Other/CategorySelector/CategorySelector';
import LocationSelector from '../../../../Components/Other/LocationSelector/LocationSelector';
import Message from '../../../../Components/DefaultNavigation/Message/Message'



import * as firebase from "firebase"


export default function PostAdPage(props) {



    useEffect(() => {

        if (!firebase.apps.length) {
            firebase.initializeApp(ApiKeys.FirebaseConfig)
        }

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
    const [imageFile1, setImageFile1] = useState()

    const [imageFile2, setImageFile2] = useState()

    const [imageFile3, setImageFile3] = useState()

    const [imageFile4, setImageFile4] = useState()

    const [imageFile5, setImageFile5] = useState()


    const [produictCondition, setProduictCondition] = useState("");

    const [brandName, setBrandName] = useState("");
    const [modelName, setModelName] = useState("");
    const [postTitle, setPostTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [features, setFeatures] = useState([]);
    const [tempFeatures, setTempFeatures] = useState("");

    const [message, setMessage] = useState("");
    const [msgType, setMsgType] = useState(false);

    const [laoding, setLoading] = useState(false)
    const [imageUploaded, setImageUploaded] = useState(true)

    const SubmitAd = async () => {
        setLoading(true)

        // if (!firebase.auth().currentUser) {
        //     setMessage("Please Login !!!")
        //     setMsgType(false)
        //     return
        // }

        // if (produictCondition === "" || brandName === "" || modelName === "" || postTitle === "" || price === "" || description === "" || selectedAdsType === "" || selectedCategory === "" || selectedLocation === "") {
        //     console.log(produictCondition + " +  " + brandName + " +  " + modelName + " + " + postTitle + " +  " + price + " + " + description + " + " + selectedAdsType + " + " + selectedCategory + " + " + selectedLocation)
        //     setMessage("Please fill all of your current informations !")
        //     return
        // }


        // imageFile2 !== "" && formData.append("image2", imageFile2, "hello2.jpg")
        // imageFile3 !== "" && formData.append("image3", imageFile3, "hello3.jpg")
        // imageFile4 !== "" && formData.append("image4", imageFile4, "hello4.jpg")
        // imageFile5 !== "" && formData.append("image5", imageFile5, "hell5o.jpg")


        if (imageFile1 !== undefined && imageUploaded) {
            AxiosUpload(imageFile1, "fieone1.jpg")

        }
        if (imageFile2 !== undefined && imageUploaded) {
            AxiosUpload(imageFile2, "fieone2.jpg")
        }
        if (imageFile3 !== undefined && imageUploaded) {
            AxiosUpload(imageFile3, "fieone3.jpg")

        }
        if (imageFile4 !== undefined && imageUploaded) {
            AxiosUpload(imageFile4, "fieone4.jpg")
        }
        if (imageFile5 !== undefined && imageUploaded) {
            AxiosUpload(imageFile5, "fieone5.jpg")
        }

        setLoading(false)

        //ADD THIS TO PACKEG > JSON
        //,
        // "proxy": "http://localhost:5000"


        //talking with firebase
        firebase.firestore().collection("Ads").doc().set({
            "publisherID": "1",
            "name": postTitle,
            "slug": postTitle.replace(/ /g, '_') + "_",// + _uniqid,
            "price": price,
            "type": selectedAdsType,
            "category": selectedCategory,
            "location": selectedLocation,
            "publishedAt": firebase.database.ServerValue.TIMESTAMP,
            "capacity": 1,
            "condition": produictCondition,
            "brand": brandName,

            "regularAd": true,
            "featuredAd": true,
            "premiumAd": false,


            "description": description,

            "features": features,
            "description": description,

            // "image1URL": imageFile1 ? `${_filesPathUniqID}-file1.${imageFile1.name.replace(/^.*\./, '')}` : null,
            // "image2URL": imageFile2 ? `${_filesPathUniqID}-file2.${imageFile2.name.replace(/^.*\./, '')}` : null,
            // "image3URL": imageFile3 ? `${_filesPathUniqID}-file3.${imageFile3.name.replace(/^.*\./, '')}` : null,
            // "image4URL": imageFile4 ? `${_filesPathUniqID}-file4.${imageFile4.name.replace(/^.*\./, '')}` : null,
            // "image5URL": imageFile5 ? `${_filesPathUniqID}-file5.${imageFile5.name.replace(/^.*\./, '')}` : null,
        }, (error) => {
            setMsgType(error.message)
            setMsgType(false)
        })

    }

    const AxiosUpload = async (file, name) => {
        setImageUploaded(false)
        let formData = new FormData();

        formData.append("image", file, name)

        try {
            const res = await Axios.post("https://about.techsecbd.com/", formData, {
                onUploadProgress: (progressEvent) => {
                    console.log("loaded " + progressEvent.loaded + " / " + progressEvent.total)
                    setImageUploaded(true)

                    // setMessage("Post has been uploaded !!!")
                    // setMsgType(true)

                }
            })


        } catch (err) {
            if (err.response.status === 500) {
                setMessage("There was a problem with the server !!!")
                setMsgType(false)
                throw err
            } else {
                setMessage(err.response.data.msg)
                setMsgType(false)
                throw err
            }
        }

    }



    return (<>{laoding ? <Loading /> :
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
                            <input type="file" accept=".png" id="imageFile1" style={{ display: "none" }} onChange={(e) => { setImageFile1(e.target.files[0]); }} />
                            <div className="AddPhoto-Button" onClick={() => document.getElementById("imageFile1").click()} >
                                <img src={imageFile1 ? ImageAdded : ImageNotAdded} alt="ImageNotAdded" />
                                <label className="Lable">{imageFile1 ? imageFile1.name : "Choose File"}</label>
                            </div>

                            <input type="file" accept="image/png, image/jpeg" id="imageFile2" style={{ display: "none" }} onChange={(e) => { setImageFile2(e.target.files[0]); }} />
                            <div className="AddPhoto-Button" onClick={() => document.getElementById("imageFile2").click()} >
                                <img src={imageFile2 ? ImageAdded : ImageNotAdded} alt="ImageNotAdded" />
                                <label className="Lable">{imageFile2 ? imageFile2.name : "Choose File"}</label>
                            </div>

                            <input type="file" accept="image/png, image/jpeg" id="imageFile3" style={{ display: "none" }} onChange={(e) => { setImageFile3(e.target.files[0]); }} />
                            <div className="AddPhoto-Button" onClick={() => document.getElementById("imageFile3").click()} >
                                <img src={imageFile3 ? ImageAdded : ImageNotAdded} alt="ImageNotAdded" />
                                <label className="Lable">{imageFile3 ? imageFile3.name : "Choose File"}</label>
                            </div>

                            <input type="file" accept="image/png, image/jpeg" id="imageFile4" style={{ display: "none" }} onChange={(e) => { setImageFile4(e.target.files[0]); }} />
                            <div className="AddPhoto-Button" onClick={() => document.getElementById("imageFile4").click()} >
                                <img src={imageFile4 ? ImageAdded : ImageNotAdded} alt="ImageNotAdded" />
                                <label className="Lable">{imageFile4 ? imageFile4.name : "Choose File"}</label>
                            </div>

                            <input type="file" accept="image/png, image/jpeg" id="imageFile5" style={{ display: "none" }} onChange={(e) => { setImageFile5(e.target.files[0]); }} />
                            <div className="AddPhoto-Button" onClick={() => document.getElementById("imageFile5").click()} >
                                <img src={imageFile5 ? ImageAdded : ImageNotAdded} alt="ImageNotAdded" />
                                <label className="Lable">{imageFile5 ? imageFile5.name : "Choose File"}</label>
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
                                <input type="text"
                                    placeholder="Brand Name *"
                                    maxLength="100"
                                    value={brandName}
                                    onChange={event => { const { value } = event.target; setBrandName(value) }} />
                            </div>
                        </div>

                        <div className="PostAds-Brand">
                            <div className="AdsInfo-Header">
                                <h4>Model : </h4>
                            </div>

                            <div className="PostAds-Brand-Data">
                                <input type="text" placeholder="Model Name *" maxLength="100"
                                    value={modelName}
                                    onChange={event => { const { value } = event.target; setModelName(value) }} />
                            </div>
                        </div>

                        <div className="PostAds-Brand">
                            <div className="AdsInfo-Header">
                                <h4>Title : </h4>
                            </div>

                            <div className="PostAds-Brand-Data">
                                <input type="text" placeholder="Title *" maxLength="100"
                                    value={postTitle}
                                    onChange={event => { const { value } = event.target; setPostTitle(value) }} />

                            </div>
                        </div>

                        <div className="PostAds-Brand">
                            <div className="AdsInfo-Header">
                                <h4>Price (BDT) : </h4>
                            </div>

                            <div className="PostAds-Brand-Data">
                                <input type="number" placeholder="Price *" maxLength="12"
                                    value={price}
                                    onChange={event => { const { value } = event.target; setPrice(value) }} />

                            </div>
                        </div>

                        <div className="PostAds-Brand">
                            <div className="AdsInfo-Header">
                                <h4>Description : </h4>
                            </div>

                            <div className="PostAds-Brand-Data multiline">
                                <textarea
                                    type="text"
                                    rows="5" cols="10" maxLength="5000"
                                    placeholder="Description *"
                                    multiple={true}
                                    value={description}
                                    onChange={event => { const { value } = event.target; setDescription(value) }} />

                            </div>
                        </div>


                        <div className="PostAds-Features">
                            <div className="AdsInfo-Header">
                                <h4>Special Features ( upto 10 ) : </h4>
                            </div>

                            <div className="PostAds-Features-Data" style={{ marginLeft: 10 }}>
                                <input type="text" placeholder="Feature" maxLength="30"
                                    value={tempFeatures}
                                    onChange={event => { const { value } = event.target; setTempFeatures(value) }}

                                    onKeyPress={(e) => {
                                        if (e.key == "Enter") {
                                            if (tempFeatures.length <= 2 || features.length >= 10)
                                                return
                                            setFeatures(data => [...data, tempFeatures])
                                            setTempFeatures("")
                                            console.log(features)
                                        }
                                    }}
                                />

                            </div>



                        </div>
                        <div className="PostAds-Features-Data">

                            {features.length > 0 ? features.map((data) => {
                                return (
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: "row",
                                        alignItems: "center",
                                        paddingBottom: 10
                                    }} key={Math.random()} >
                                        <AddCircleIcon style={{ fontSize: "1.5rem", color: "rgba(20, 220, 60, .90)" }} />
                                        <h4 style={{
                                            color: "#646464",
                                            padding: 0,
                                            margin: 0,
                                            marginLeft: 5,
                                            fontWeight: 500,
                                        }}>{data}</h4>
                                    </div>
                                )
                            }) : <div />}
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
                                <input type="text" placeholder="Full Name *" maxLength="100" style={{ textTransform: "capitalize" }} />
                            </div>
                        </div>

                        <div className="PostAds-Brand">
                            <div className="AdsInfo-Header">
                                <h4>Email : </h4>
                            </div>

                            <div className="PostAds-Brand-Data">
                                <input type="email" placeholder="Email Address *" maxLength="100" />
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




                    {message ? <Message msg={message} msgType={msgType} /> : null}
                    <Button className="SubmitButton" onClick={SubmitAd}> Submit Ad </Button>
                </div>


            </div>

        </div >
    }</>
    )
}
