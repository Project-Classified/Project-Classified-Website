import React from 'react'
import "./Loading.css"
import loading from "../../../Assets/Loading Page/Loading.svg"

export default function Loading(props) {
    return (
        <div className="Loading"
            style={{
                backgroundColor: props.backgroundColor ? props.backgroundColor : "#efeff9",
                height: props.height ? props.height : null,
                width: props.width ? props.width : null,
                position: props.position ? props.position : null
            }}
            draggable={false}
        >
            <img
                src={loading}
                alt={"loading"}
                style={{
                    width: props.size ? props.size : null,
                    height: props.size ? props.size : null
                }}
                draggable={false}
            />

            <h2>{props.name}</h2>
        </div>
    )
}