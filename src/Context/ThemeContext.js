import React, { Component, createContext } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = {
        enableDarkMode: false,
        light: {
            text: "#222",
            text2: "#444",
            button: "rgb(220,20,60)",
            ui: "#ffffff",
            background: "#efeff9",
            whiteBackground: "#fff"
        },

        dark: {
            text: "#ececec",
            text2: "#f2a365",
            button: "rgb(220,20,60)",
            ui: "#30475e",
            background: "#222831"
        },

        smallPage: false
    }

    ToggleDarkMode = (mode) => {
        this.setState({ enableDarkMode: mode })
    }

    ToggleSmallPage = (mode) => {
        this.setState({ smallPage: mode })
    }

    render() {
        return (
            <ThemeContext.Provider value={{ ...this.state, ToggleDarkMode: this.ToggleDarkMode, ToggleSmallPage: this.ToggleSmallPage }}>
                {this.props.children}
            </ThemeContext.Provider >
        )
    }
}

export default ThemeContextProvider;