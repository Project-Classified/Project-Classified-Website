import React, { Component, createContext } from "react";
import CategorysData from "../Data/CategorysData"
export const CategoriesContext = createContext();

class CategoriesContextProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            MainCategories: [],
            Essentials: [],
            Mobiles: [],
            Electronics: [],
            Vehicles: [],
            Property: [],
            Services: [],

            Home_Living: [],
            Fashion_Health_Beauty: [],
            Hobbies_Sports_Kids: [],
            Business_Industry: [],
            Jobs: [],
            Education: [],
            Pets_Animals: [],
            Food_Agriculture: [],

            loading: true,


        }
        if (this.state.loading === true) {
            console.log(this.state.Services)
        }
    }

    componentDidMount() {
        //let categorysData = this.formatData(CategorysData)

        let MainCategories = CategorysData.filter(category => category.parentID === 0);

        let Essentials = CategorysData.filter(category => category.parentID === 1);
        let Mobiles = CategorysData.filter(category => category.parentID === 2);
        let Electronics = CategorysData.filter(category => category.parentID === 3);
        let Vehicles = CategorysData.filter(category => category.parentID === 4);
        let Property = CategorysData.filter(category => category.parentID === 5);
        let Services = CategorysData.filter(category => category.parentID === 6);


        let Home_Living = CategorysData.filter(category => category.parentID === 7);
        let Fashion_Health_Beauty = CategorysData.filter(category => category.parentID === 8);
        let Hobbies_Sports_Kids = CategorysData.filter(category => category.parentID === 9);
        let Business_Industry = CategorysData.filter(category => category.parentID === 10);
        let Jobs = CategorysData.filter(category => category.parentID === 11);
        let Education = CategorysData.filter(category => category.parentID === 12);
        let Pets_Animals = CategorysData.filter(category => category.parentID === 13);
        let Food_Agriculture = CategorysData.filter(category => category.parentID === 14);



        console.log(MainCategories)

        this.setState({
            MainCategories,
            Essentials,
            Mobiles,
            Electronics,
            Vehicles,
            Property,
            Services,

            Home_Living,
            Fashion_Health_Beauty,
            Hobbies_Sports_Kids,
            Business_Industry,
            Jobs,
            Education,
            Pets_Animals,
            Food_Agriculture,

            loading: false,

        })


    }

    GetCategory = (categoryName) => {
        return this.state[categoryName];
    }



    /*
    
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
            }*//*
tempAd = tempAd.filter(
ad => ad.price >= minPrice && ad.price <= maxPrice
);


this.setState({
sortedAds: tempAd
})
}

<AdsContext.Provider value={{
...this.state, GetAd: this.GetAd, handleChange: this.handleChange
}}>

*/



    render() {
        return (
            <CategoriesContext.Provider value={{
                ...this.state, GetCategory: this.GetCategory
            }}>

                {this.props.children}
            </CategoriesContext.Provider >
        )
    }
}

export default CategoriesContextProvider;