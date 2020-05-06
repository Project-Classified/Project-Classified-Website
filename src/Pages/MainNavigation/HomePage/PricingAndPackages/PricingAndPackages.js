import React from 'react'
import "./PricingAndPackages.css"

import PackageLoader from './PackageLoader'

export default function PricingAndPackages() {
    return (
        <div className="PricingAndPackagesMain">
            <div className="PricingAndPackagesHeader">
                <h1>Our Top Locations</h1>
            </div>

            <div className="PricingAndPackages">
                <div className="Container">

                    <PackageLoader tear="Free" price="0" regularAds="3" featuredAds="No" premiumAds="No" supportType="Limited" />
                    <PackageLoader tear="Gold" price="100" regularAds="10" featuredAds="1" premiumAds="No" supportType="Basic" />
                    <PackageLoader tear="Premium" price="500" regularAds="50" featuredAds="5" premiumAds="3" supportType="Basic" />
                    <PackageLoader tear="Business" price="2000" regularAds="Unlimited" featuredAds="200" premiumAds="50" supportType="Priority" buttonText={"let's talk"} />

                </div>
            </div>
        </div>

    )
}
