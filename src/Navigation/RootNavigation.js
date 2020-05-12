import React, { Fragment, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"


/* COMPONENTS */
import Header from "../Components/RootNavigation/Header/Header";
import Footer from "../Components/DefaultNavigation/Footer/Footer";
import PageNotFound from "../Components/DefaultNavigation/PageNotFound/PageNotFound"

/* Home Page */
import HomePage from "../Pages/MainNavigation/HomePage/HomePage"
import Login from '../Pages/RootNavigation/Login/Login';


export default function RootNavigation() {

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

    return (
        <Fragment>
            <Router>
                {pageNotFound ? <div /> :
                    <Header isInHomePage={isInHomePage} />}

                <Switch>
                    <Route exact path="/" component={() => <HomePage IsInHomePageHandlerTrue={IsInHomePageHandlerTrue} />} />
                    <Route exact path="/Login" component={() => <Login IsInHomePageHandlerFalse={IsInHomePageHandlerFalse} />} />



                    <Route exact path="/404" component={() => <PageNotFound PageNotFoundHandler={PageNotFoundHandler} />} />
                    <Redirect to="/404" />
                </Switch>
                {pageNotFound ? <Fragment></Fragment> :
                    <Footer />}

            </Router>
        </Fragment>
    )
}
