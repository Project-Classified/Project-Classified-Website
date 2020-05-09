import React, { Component, createContext } from "react";
import AdsTypeData from "../Data/AdsTypeData"
export const AdsTypeContext = createContext();

class AdsTypeContextProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            AllAdsType: [],
        }
        if (this.state.loading === true) {
            console.log(this.state.Services)
        }
    }

    componentDidMount() {
        let AllAdsType = AdsTypeData.filter(type => type.parentID === 0);

        this.setState({
            AllAdsType,
            loading: false,
        })


    }

    GetAdsType = () => {
        return this.state.AdsTypeData;
    }

    render() {
        return (
            <AdsTypeContext.Provider value={{
                ...this.state
            }}>

                {this.props.children}
            </AdsTypeContext.Provider >
        )
    }
}

export default AdsTypeContextProvider;