import React, { Fragment, useEffect } from 'react'

import FullScreenSearch from "./FullScreenSearch/FullScreenSearch";
import PopularCategories from "./PopularCategories/PopularCategories";
import FeaturedAds from "./FeaturedAds/FeaturedAds";
import TopLocations from "./TopLocations/TopLocations";
import RegisteredUsersInfo from './RegisteredUsersInfo/RegisteredUsersInfo';
import PricingAndPackages from './PricingAndPackages/PricingAndPackages';

export default function HomePage(props) {

    useEffect(() => {
        props.IsInHomePageHandlerTrue();
    })


    return (
        <Fragment>
            <FullScreenSearch />
            <PopularCategories />
            <FeaturedAds />
            <TopLocations />
            <RegisteredUsersInfo />
            <PricingAndPackages />

        </Fragment>
    )
}
