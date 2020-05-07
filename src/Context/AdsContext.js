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

        adsType: "All Types",
        adsBrand: "All Brands",
        adsCategory: "All Categories",
        adsLocation: "All of Bangladesh",
        price: 0,
        minPrice: 0,
        maxPrice: 0,

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
        let maxPrice = Math.max(...allAds.map(item => item.price))
        //console.log(featuredAds)

        this.setState({
            allAds,
            regularAds,
            featuredAds,
            premiumAds,
            sortedAds: allAds,
            loading: false,
            price: maxPrice,
            maxPrice,
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

    handleChange = (_name, _value) => {
        // const type = undefined;
        const name = undefined;
        const value = undefined;
        if (this.state[_name] === _value) {
            console.log("Research is not needed !")
            return
        } else {
            // const type = _type;
            const name = _name;
            const value = _value;


            this.setState({
                [name]: value
            }, this.filterRooms)
            console.log(name, value)


        }
    }

    filterRooms = () => {
        console.log("HI")
        let {
            allAds,
            adsType,
            adsBrand,
            adsCategory,
            adsLocation,
            price,
            minPrice,
            maxPrice,
        } = this.state

        let tempAd = [...allAds];

        //Filted by Ads Type
        if (adsType !== "All Types") {
            tempAd = tempAd.filter(ad => ad.adsType === adsType)
        }

        //Filted by Ads Category
        if (adsCategory !== "All Categories") {
            tempAd = tempAd.filter(ad => ad.adsCategory === adsCategory)
        }

        //Filted by Ads Location
        if (adsLocation !== "All of Bangladesh") {
            tempAd = tempAd.filter(ad => ad.adsLocation === adsLocation)
        }

        //Filted by Price
        /*if (adsLocation !== "All of Bangladesh") {
            tempAd = tempAd.filter(ad => ad.adsLocation === adsLocation)
        }*/
        tempAd = tempAd.filter(
            ad => ad.price >= minPrice && ad.price <= maxPrice
        );


        this.setState({
            sortedAds: tempAd
        })
    }

    render() {
        return (
            <AdsContext.Provider value={{
                ...this.state, GetAd: this.GetAd, handleChange: this.handleChange
            }}>

                {this.props.children}
            </AdsContext.Provider >
        )
    }
}

export default AdsContextProvider;