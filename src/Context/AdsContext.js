import React, { Component, createContext } from "react";
import Data from "../Data/Data"
export const AdsContext = createContext();

class AdsContextProvider extends Component {
    state = {

        allAds: [],
        regularAds: [],
        featuredAds: [],
        premiumAds: [],

        sortedAds: [],

        loading: true,
    }

    componentDidMount() {
        let allAds = this.formatData(Data)

        /*      regularAds: false,
                  featuredAds: false,
                  premiumAds: true,
      */
        let regularAds = allAds.filter(ad => ad.regularAds === true);
        let featuredAds = allAds.filter(ad => ad.featuredAds === true);
        let premiumAds = allAds.filter(ad => ad.premiumAds === true);
        //console.log(featuredAds)

        this.setState({
            allAds,
            regularAds,
            featuredAds,
            premiumAds,
            sortedAds: allAds,
            loading: false
        })
    }



    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url)

            let ad = { ...item.fields, images, id }
            return ad;
        })
        return tempItems
    }

    GetAd = (slug) => {
        let tempAd = [...this.state.allAds];
        const ad = tempAd.find((ad) => ad.slug === slug)
        // console.log("DATA of " + slug + " is : " + ad)
        // console.log("allAds  : " + this.state.allAds)
        return ad;

    }

    render() {
        return (
            <AdsContext.Provider value={{
                ...this.state, GetAd: this.GetAd
            }}>

                {this.props.children}
            </AdsContext.Provider >
        )
    }
}

export default AdsContextProvider;