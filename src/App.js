import React, { useState, useEffect } from "react"
import ApiKeys from "./API/ApiKeys"

import Loading from "./Components/DefaultNavigation/Loading/Loading"

import MainNavigation from "./Navigation/MainNavigation"
import RootNavigation from "./Navigation/RootNavigation"

import AuthContextProvider from "./Context/AuthContext";
import ThemeContextProvider from "./Context/ThemeContext"
import AdsContextProvider from "./Context/AdsContext";

import AdsTypeContextProvider from "./Context/AdsTypeContext";
import CategoriesContextProvider from "./Context/CategoriesContext";
import LocationContextProvider from "./Context/LocationContext";

export default function App() {

  const [isLoading, setIsLoading] = useState(false);

  const [isAuthenticationReady, setIsAuthenticationReady] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const [skipFirebase, setSkipFirebase] = useState(false);

  /*
    useEffect(() => {
      if (!skipFirebase) {
        if (!firebase.apps.length) {
          firebase.initializeApp(ApiKeys.FirebaseConfig)
        }
        firebase.auth().onAuthStateChanged(onAuthStateChanged);
      }
    }, [])
  
  
    const onAuthStateChanged = async (user) => {
      console.log("Hio")
      setIsAuthenticationReady(true)
      setIsAuthenticated(!!user)
  
      if (user === null) {
        await localStorage.removeItem("User");
  
      }
    }
  */


  if (isAuthenticationReady && !isLoading) {

    if (isAuthenticated === true) {
      return (
        <ThemeContextProvider>
          <AdsTypeContextProvider>
            <LocationContextProvider >
              <CategoriesContextProvider>
                <AdsContextProvider>
                  <AuthContextProvider>
                    <MainNavigation />
                  </AuthContextProvider>
                </AdsContextProvider>
              </CategoriesContextProvider>
            </LocationContextProvider >
          </AdsTypeContextProvider>
        </ThemeContextProvider >
      )
    } else {
      return (
        <ThemeContextProvider>
          <AdsTypeContextProvider>
            <LocationContextProvider>
              <CategoriesContextProvider>
                <AdsContextProvider>
                  <AuthContextProvider>
                    <RootNavigation />
                  </AuthContextProvider>
                </AdsContextProvider>
              </CategoriesContextProvider>
            </LocationContextProvider>
          </AdsTypeContextProvider>
        </ThemeContextProvider >
      )
    }
  } else {
    return (
      <ThemeContextProvider>
        <Loading />
      </ThemeContextProvider>
    )
  }
}