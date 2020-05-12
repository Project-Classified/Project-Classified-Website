import React from 'react'
import "./Message.css"
import PropTypes from 'prop-types'

import WarningRoundedIcon from '@material-ui/icons/WarningRounded';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import ErrorOutlineRoundedIcon from '@material-ui/icons/ErrorOutlineRounded';

import { animated, useSpring } from "react-spring"


function Message(props) {

    const anim = useSpring({
        to: { opacity: 1, height: "100px" },
        from: { opacity: 0, height: '0px' }

    })


    return (
        <animated.div className="MessageBox-Main" style={anim}>
            <div
                className="MessageBox"
                style={{
                    marginTop: 50,
                    width: "100%",
                    backgroundColor: props.msgType ? "rgba(20, 220, 60, 1)" : "rgba(220, 20, 60, 1)",
                    color: "#FFF",
                    boxShadow: props.msgType ? "0px 0px 10px rgba(20, 220, 60, .25)" : "0px 0px 10px rgba(220,20,60,.25)",
                }}

            >
                <h4>{props.msgType ? "" : "Error :"} {props.msg}</h4>
                <div className="img">
                    {
                        props.msgType ? <CheckCircleIcon style={{ fontSize: 25, paddingTop: 3 }} /> : <ErrorIcon style={{ fontSize: 25, paddingTop: 3 }} />
                    }
                </div>
            </div>
        </animated.div>
    )
}

Message.propTypes = {
    msg: PropTypes.string.isRequired
}

export default Message

