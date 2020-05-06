import React, { useState, Fragment } from 'react'
import "./PopularCategories.css"
import HomeWorkRoundedIcon from '@material-ui/icons/HomeWorkRounded';
import AccessibilityNewRoundedIcon from '@material-ui/icons/AccessibilityNewRounded';
import ComputerRoundedIcon from '@material-ui/icons/ComputerRounded';
import BusinessCenterRoundedIcon from '@material-ui/icons/BusinessCenterRounded';

import SchoolRoundedIcon from '@material-ui/icons/SchoolRounded';
import SportsSoccerRoundedIcon from '@material-ui/icons/SportsSoccerRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import DevicesOtherRoundedIcon from '@material-ui/icons/DevicesOtherRounded';



export default function PopularCategories() {
    const [propertyAdsLength, setPropertyAdsLength] = useState(52)
    const [homeAppliancesAdsLength, setHomeAppliancesAdsLength] = useState(2)
    const [electroniceAdsLength, setElectroniceAdsLength] = useState(6)
    const [busnessAndIndustryAdsLength, setBusnessAndIndustryAdsLength] = useState(3)

    const [educationAdsLength, setEducationAdsLength] = useState(69)
    const [hobbySportAndKidsAdsLength, setHobbySportAndKidsAdsLength] = useState(9)
    const [healthAndBeautyAdsLength, setHealthAndBeautyAdsLength] = useState(39)
    const [othersAdsLength, setOthersAdsLength] = useState(19)

    return (
        <div className="PopularCategoriesMain">
            <div className="PopularCategoriesHeader">
                <h1>Popular Categories</h1>
            </div>
            <div className="PopularCategories">
                <div className="Container">
                    <div className="CategorieContainer">
                        <HomeWorkRoundedIcon className="Icon" />
                        <h1>Propery</h1>
                        <h4>{propertyAdsLength} Ads</h4>
                    </div>


                    <div className="CategorieContainer">
                        <AccessibilityNewRoundedIcon className="Icon" />
                        <h1>Home Appliances</h1>
                        <h4>{homeAppliancesAdsLength} Ads</h4>
                    </div>


                    <div className="CategorieContainer">
                        <ComputerRoundedIcon className="Icon" />
                        <h1>Electronice</h1>
                        <h4>{electroniceAdsLength} Ads</h4>
                    </div>


                    <div className="CategorieContainer">
                        <BusinessCenterRoundedIcon className="Icon" />
                        <h1>busness & Industry</h1>
                        <h4>{busnessAndIndustryAdsLength} Ads</h4>
                    </div>


                    <div className="CategorieContainer">
                        <SchoolRoundedIcon className="Icon" />
                        <h1>Education</h1>
                        <h4>{educationAdsLength} Ads</h4>
                    </div>

                    <div className="CategorieContainer">
                        <SportsSoccerRoundedIcon className="Icon" />
                        <h1>Hobby, Sport & Kids</h1>
                        <h4>{hobbySportAndKidsAdsLength} Ads</h4>
                    </div>


                    <div className="CategorieContainer">
                        <FavoriteRoundedIcon className="Icon" />
                        <h1>Health & Beauty</h1>
                        <h4>{healthAndBeautyAdsLength} Ads</h4>
                    </div>


                    <div className="CategorieContainer">
                        <DevicesOtherRoundedIcon className="Icon" />
                        <h1>Others</h1>
                        <h4>{othersAdsLength} Ads</h4>
                    </div>


                </div>
            </div>
        </div>
    )
}
