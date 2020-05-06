import React from 'react'
import "./Loading.css"
import loading from "../../../Assets/Loading Page/Loading.svg"

export default function Loading(props) {
    return (
        <div className="Loading">
            <img src={loading} alt="loading logo" alt={"loading"} />

            <h2>{props.name}</h2>
        </div>
    )
}