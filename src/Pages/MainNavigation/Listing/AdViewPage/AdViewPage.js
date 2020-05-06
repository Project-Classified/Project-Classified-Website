import React, { useEffect, useContext, useState } from 'react'
import defaultBcg from "../../../../Assets/Images/ImageNotFound.svg"

import "./AdViewPage.css"
import PriceTag from "./Assets/PriceTag3.svg"

import { Button } from "@material-ui/core"
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LanguageIcon from '@material-ui/icons/Language';
import StorefrontRoundedIcon from '@material-ui/icons/StorefrontRounded';

import PhoneIcon from '@material-ui/icons/Phone';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';


import VisibilityIcon from '@material-ui/icons/Visibility';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import WarningIcon from '@material-ui/icons/Warning';
import ShareIcon from '@material-ui/icons/Share';



import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import MessageRoundedIcon from '@material-ui/icons/MessageRounded';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import { AdsContext } from "../../../../Context/AdsContext"
import PageNotFound from '../../../../Components/DefaultNavigation/PageNotFound/PageNotFound'

export default function AdViewPage(props) {
    const [slug] = useState(props.match.params.slug);

    const adsContext = useContext(AdsContext)

    const adData = adsContext.GetAd(slug)

    console.log(adData)


    // useEffect(() => {
    //     console.log(props)
    //     setSlgu()
    // })

    const [imageIndex, setImageIndex] = useState(0);

    const imageIndexUp = () => {
        if (imageIndex >= (adData.images.length - 1)) {
            setImageIndex(0)

        } else {
            setImageIndex(imageIndex + 1)
        }
    }

    const imageIndexDown = () => {
        if (imageIndex <= 0) {
            setImageIndex(adData.images.length - 1)

        }
        else {
            setImageIndex(imageIndex - 1)
        }

        console.log(adData.images.length)
    }

    if (adData != null) {
        return (
            <div className="AdView">
                <div className="Container">

                    <div className="AdDetails">

                        <div className="Ads-Image-Container">
                            <div className="Ads-Image-Src">
                                <ArrowBackIosRoundedIcon className="Arrow" onClick={() => imageIndexDown()} />
                                <img src={adData.images[imageIndex] || defaultBcg} alt="Ads-FirstImage" />
                                <ArrowForwardIosRoundedIcon className="Arrow" onClick={() => imageIndexUp()} />
                            </div>

                            <div className="Ads-Name-Data">
                                <div className="Item-Name"><h2> {adData.adsBrand} {adData.name}</h2></div>

                                <div className="Ads-UploadTime">
                                    <QueryBuilderIcon fontSize="small" />
                                    <h4>{adData.publishedAt}</h4>
                                </div>
                            </div>
                        </div>

                        <div className="Ads-Price">
                            <div className="Price">
                                <img src={PriceTag} alt="price bar bag" />
                                <h3>৳ {adData.price} BDT</h3>

                            </div>
                        </div>


                        <div className="Ads-Details-Bar">
                            <div className="Ads-Details-Container">

                                <p>{adData.description}</p>


                                {adData.features.length > 0 ?
                                    <div className="Features">
                                        <h3>Features:</h3>

                                        {adData.features.map(featureData => {
                                            return (<div className="Features-Data">
                                                <CheckCircleIcon style={{ color: "rgba(20, 220, 60, .90)" }} />
                                                <h5>{featureData}</h5>
                                            </div>
                                            )
                                        })}

                                    </div>
                                    :
                                    <div />
                                }

                            </div>



                            <div className="Ads-Details-Overview">
                                <div className="Ads-Header">
                                    <h2>Overview</h2>
                                </div>
                                <div className="Ads-Section1">

                                    <h4><b>Condition :</b> {adData.adsCondition}</h4>
                                    <h4><b>Brand :</b> {adData.adsBrand}</h4>
                                    <h4><b>Item Type :</b> {adData.adsCategory}</h4>



                                </div>

                                <div className="Ads-Section2">

                                    <div className="Ads-Section2-Data">
                                        <VisibilityIcon style={{ paddingRight: 10 }} />
                                        <h4>13 views</h4>
                                    </div>

                                    <div className="Ads-Section2-Data">
                                        <FavoriteBorderIcon style={{ paddingRight: 10 }} />
                                        <h4>Add to Favourites</h4>
                                    </div>

                                    <div className="Ads-Section2-Data">
                                        <WarningIcon style={{ paddingRight: 10 }} />
                                        <h4>Report Abuse</h4>
                                    </div>

                                    <div className="Ads-Section2-Data">
                                        <ShareIcon style={{ paddingRight: 10 }} />
                                        <h4>Share this Ad:</h4>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>



                    <div className="SellerInfos">
                        <div className="SellerInfos-Header">
                            <h2>Seller Information</h2>
                        </div>

                        <div className="SellerInfos-Datas">

                            <div className="SellerInfos-Data">
                                <LocationOnIcon style={{ paddingRight: 10 }} />
                                <h6>{adData.adsLocation}</h6>
                            </div>

                            {adData.store ?
                                <a style={{ textDecoration: "none", color: "#646464" }} href={`${adData.storeWebsite}`} target="_blank">

                                    <div className="SellerInfos-Data">
                                        <LanguageIcon style={{ paddingRight: 10 }} />
                                        <h6>Visit Website</h6>
                                    </div>
                                </a> : <div />
                            }

                            {adData.store ?
                                <a style={{ textDecoration: "none", color: "#646464" }} href={`${adData.storeWebsite}`} target="_blank">

                                    <div className="SellerInfos-Data">
                                        <StorefrontRoundedIcon style={{ paddingRight: 10 }} />
                                        <h6>View Store</h6>
                                    </div>
                                </a> : <div />
                            }


                        </div>

                        <div className="SellerInfos-ContactInfo">
                            <div className="SellerInfos-PhoneNumber">
                                <div className="NumberBar">

                                    <PhoneIcon style={{ paddingRight: 10, fontSize: "1.5rem" }} />
                                    <h3>{adData.publisherNumber}</h3>
                                </div>
                            </div>


                            <div className="SellerInfos-SendMessage">
                                <MessageRoundedIcon style={{ paddingRight: 10, fontSize: "1.5rem" }} />

                                <h3>Send Message</h3>
                            </div>

                            <a href={`mailto:${adData.publisherEmail}`} style={{ textDecoration: "none", color: "null" }}><div className="SellerInfos-SendEmail">

                                <EmailRoundedIcon style={{ paddingRight: 10, fontSize: "1.5rem" }} />

                                <h3 >Email to Seller</h3>
                            </div></a>

                        </div>


                        <div className="SellerInfos-GoogleAds">
                            <div className="GoogleAds">
                                <h4>This Will be A Google Ad</h4>
                            </div>
                        </div>

                    </div>
                </div>
            </div >
        )
    } else {
        return (

            <PageNotFound />
        )
    }
}
