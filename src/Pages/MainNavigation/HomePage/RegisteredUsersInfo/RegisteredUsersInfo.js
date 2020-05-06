import React from 'react'
import "./RegisteredUsersInfo.css"
import Ads from "./Assets/Ads.svg"
import RegisteredUsers from "./Assets/RegisteredUsers.svg"
import VerifiedUsers from "./Assets/VerifiedUsers.svg"


export default function RegisteredUsersInfo() {
    return (
        <div className="RegisteredUsersInfo">
            <div className="RegisteredUsersInfo-Body">
                <div className="Container">

                    <div className="Section">
                        <div className="Image">
                            <img src={Ads} alt="Ads " />
                        </div>
                        <div className="Data">
                            <h1>2000+</h1>
                            <h3>Published Ads</h3>
                        </div>
                    </div>


                    <div className="Section">
                        <div className="Image">
                            <img src={RegisteredUsers} alt="Registered Users" />
                        </div>
                        <div className="Data">
                            <h1>5000+</h1>
                            <h3>Registered Users</h3>
                        </div>
                    </div>

                    <div className="Section">
                        <div className="Image">
                            <img src={VerifiedUsers} alt="Verified Users" />
                        </div>
                        <div className="Data">
                            <h1>2000+</h1>
                            <h3>Verified Users</h3>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
