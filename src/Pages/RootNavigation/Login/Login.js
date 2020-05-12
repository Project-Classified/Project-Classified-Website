import React, { useEffect, useState, useContext } from 'react'
import "./Login.css"

import Background from "../../../Assets/Backgrounds/Background.jpg"

export default function Login(props) {
    useEffect(() => {
        props.IsInHomePageHandlerFalse()
    }, [])

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="Login">
            <div className="Background">
                <img src={Background} alt="Background" />
            </div>
            <div className="Container-Main">
                <div className="Container">
                    <div className="Infos">
                        <h1>Buy, Sell, Rent & <br />Exchange in one Click.</h1>
                        <h2>To View Your Ads and Account Details,<br /> Please Login to Your Classified BD Account.</h2>

                    </div>



                    <div className="Inputs">
                        <div className="Header">
                            <h3>Log in to Classified BD</h3>
                        </div>
                        <div className="Datas">
                            <div className="InputFild">
                                <div className="InputFildName" id="InputFildName">
                                    <h4 id="InputFildNameH4">Email *</h4>
                                </div>
                                <div className="InputFildInput">

                                    <input type="text" maxLength="50" />
                                </div>
                            </div>
                            <div className="InputFild">
                                <div className="InputFildName">
                                    <h4>Password *</h4>
                                </div>
                                <div className="InputFildInput">
                                    <input type="text" maxLength="50" />
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
