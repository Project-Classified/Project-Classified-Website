import React, { Fragment, useContext, useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

/* COMPONENTS */
import Header from "../Components/MainNavigation/Header/Header";
import Footer from "../Components/DefaultNavigation/Footer/Footer";
import PageNotFound from "../Components/DefaultNavigation/PageNotFound/PageNotFound"

/* Home Page */
import HomePage from "../Pages/MainNavigation/HomePage/HomePage"


/* Store */
import AllStoresPage from "../Pages/MainNavigation/Stores/AllStoresPage/AllStoresPage"

import StoreProfilePage from "../Pages/MainNavigation/Stores/StoreProfilePage/StoreProfilePage"
import StoreShopPage from "../Pages/MainNavigation/Stores/StoreShopPage/StoreShopPage"

/* Users */
import UserProfilePage from "../Pages/MainNavigation/Users/UserProfilePage/UserProfilePage"
import ProfileSettingsPage from "../Pages/MainNavigation/Users/ProfileSettingsPage/ProfileSettingsPage"

/* Listing */
import AdViewPage from "../Pages/MainNavigation/Listing/AdViewPage/AdViewPage"
import AllAdsPage from "../Pages/MainNavigation/Listing/AllAdsPage/AllAdsPage"
import PostAddPage from "../Pages/MainNavigation/Listing/PostAddPage/PostAddPage"

/* DefaultNavigation */
import AboutPage from "../Pages/DefaultNavigation/AboutPage/AboutPage"
import FAQsPage from "../Pages/DefaultNavigation/FAQsPage/FAQsPage"
import ContactUsPage from "../Pages/DefaultNavigation/ContactUsPage/ContactUsPage"

import BlogPage from "../Pages/DefaultNavigation/BlogPage/BlogPage"



export default function MainNavigation(props) {

    const [pageNotFound, setPageNotFound] = useState(false)
    const PageNotFoundHandler = () => {
        setPageNotFound(true)
    }

    const [isInHomePage, setIsInHomePage] = useState(false)
    const IsInHomePageHandlerTrue = () => {
        setIsInHomePage(true)
    }
    const IsInHomePageHandlerFalse = () => {
        setIsInHomePage(false)
    }

    console.log(props)

    return (
        <Fragment>
            <Router>
                {pageNotFound ? <div /> :
                    <Header isInHomePage={isInHomePage} />}

                <Switch>
                    <Route exact path="/" component={() => <HomePage IsInHomePageHandlerTrue={IsInHomePageHandlerTrue} />} />

                    <Route exact path="/Stores" component={() => <AllStoresPage IsInHomePageHandlerFalse={IsInHomePageHandlerFalse} />} />

                    <Route exact path="/Stores/StoreProfile" component={() => <StoreProfilePage IsInHomePageHandlerFalse={IsInHomePageHandlerFalse} />} />
                    <Route exact path="/Stores/StoreProfile/StoreShop" component={() => <StoreShopPage IsInHomePageHandlerFalse={IsInHomePageHandlerFalse} />} />


                    <Route exact path="/UserProfile" component={() => <UserProfilePage IsInHomePageHandlerFalse={IsInHomePageHandlerFalse} />} />
                    <Route exact path="/ProfileSettings" component={() => <ProfileSettingsPage IsInHomePageHandlerFalse={IsInHomePageHandlerFalse} />} />


                    <Route exact path="/Ads/:slug" component={AdViewPage} />
                    {/* <Route exact path="/rooms/:slug" component={SingleRoom} /> */}


                    <Route exact path="/AllAds" component={() => <AllAdsPage IsInHomePageHandlerFalse={IsInHomePageHandlerFalse} />} />
                    <Route exact path="/PostAdd" component={() => <PostAddPage IsInHomePageHandlerFalse={IsInHomePageHandlerFalse} />} />


                    <Route exact path="/About" component={() => <AboutPage IsInHomePageHandlerFalse={IsInHomePageHandlerFalse} />} />
                    <Route exact path="/FAQs" component={() => <FAQsPage IsInHomePageHandlerFalse={IsInHomePageHandlerFalse} />} />
                    <Route exact path="/ContactUs" component={() => <ContactUsPage IsInHomePageHandlerFalse={IsInHomePageHandlerFalse} />} />

                    <Route exact path="/Blog" component={() => <BlogPage IsInHomePageHandlerFalse={IsInHomePageHandlerFalse} />} />



                    <Route exact path="/404" component={() => <PageNotFound PageNotFoundHandler={PageNotFoundHandler} />} />
                    <Redirect to="/404" />
                </Switch>
                {pageNotFound ? <Fragment></Fragment> :
                    <Footer />}
            </Router>
        </Fragment>
    )
}
