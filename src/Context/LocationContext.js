import React, { Component, createContext } from "react";
import LocationData from "../Data/LocationData"
export const LocationContext = createContext();

class LocationContextProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            AllLocations: [],

            Cities: [],
            Divisions: [],

            Dhaka: [],
            Chattogram: [],
            Sylhet: [],
            Khulna: [],
            Barishal: [],
            Rajshahi: [],
            Rangpur: [],
            Mymensingh: [],


            loading: true,
        }
    }

    componentDidMount() {
        //let LocationData = this.formatData(LocationData)

        let AllLocations = LocationData.filter(location => location.parentID === 0);


        let Cities = LocationData.filter(location => location.parentID === 1);
        let Divisions = LocationData.filter(location => location.parentID === 2);


        let Dhaka = LocationData.filter(location => location.parentID === 101);
        let Chattogram = LocationData.filter(location => location.parentID === 102);
        let Sylhet = LocationData.filter(location => location.parentID === 103);
        let Khulna = LocationData.filter(location => location.parentID === 104);
        let Barishal = LocationData.filter(location => location.parentID === 105);
        let Rajshahi = LocationData.filter(location => location.parentID === 106);
        let Rangpur = LocationData.filter(location => location.parentID === 107);
        let Mymensingh = LocationData.filter(location => location.parentID === 108);




        // let Essentials = locationsData.filter(location => location.parentID === 1);
        // let Mobiles = locationsData.filter(location => location.parentID === 2);
        // let Electronics = locationsData.filter(location => location.parentID === 3);
        // let Vehicles = locationsData.filter(location => location.parentID === 4);
        // let Property = locationsData.filter(location => location.parentID === 5);
        // let Services = locationsData.filter(location => location.parentID === 6);


        // let Home_Living = locationsData.filter(location => location.parentID === 7);
        // let Fashion_Health_Beauty = locationsData.filter(location => location.parentID === 8);
        // let Hobbies_Sports_Kids = locationsData.filter(location => location.parentID === 9);
        // let Business_Industry = locationsData.filter(location => location.parentID === 10);
        // let Jobs = locationsData.filter(location => location.parentID === 11);
        // let Education = locationsData.filter(location => location.parentID === 12);
        // let Pets_Animals = locationsData.filter(location => location.parentID === 13);
        // let Food_Agriculture = locationsData.filter(location => location.parentID === 14);

        console.log(Cities)

        this.setState({

            AllLocations,

            Cities,
            Divisions,

            Dhaka,
            Chattogram,
            Sylhet,
            Khulna,
            Barishal,
            Rajshahi,
            Rangpur,
            Mymensingh,

            loading: false,

        })


    }

    GetLocation = (locationName) => {
        return this.state[locationName];
    }

    render() {
        return (
            <LocationContext.Provider value={{
                ...this.state, GetLocation: this.GetLocation
            }}>

                {this.props.children}
            </LocationContext.Provider >
        )
    }
}

export default LocationContextProvider;