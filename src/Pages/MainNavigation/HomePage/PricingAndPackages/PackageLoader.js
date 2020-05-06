import React from 'react'
import "./PricingAndPackages.css"

import { Button } from "@material-ui/core"

export default function PackageLoader(props) {

    return (
        <div className="PricingAndPackagesPackages">
            <h3 className="Tear">{props.tear}</h3>

            <div className="Pricing">
                <h1>{props.price} ৳ /</h1>
                <h3>Per month</h3>
            </div>
            <div className="Datas">
                <h4 className="Data">{props.regularAds} Regular Ads</h4>
                <h4 className="Data">{props.featuredAds} Featured Ads</h4>
                <h4 className="Data">{props.premiumAds} Premium Ads</h4>
                <h4 className="Data">{props.supportType} Support</h4>
            </div>

            <div className="Button">
                {props.buttonText ? <Button>{props.buttonText}</Button> : <Button>Register Now</Button>}
            </div>
        </div>

    )
}
