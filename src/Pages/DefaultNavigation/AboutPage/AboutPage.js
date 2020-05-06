import React, { useState, useEffect, useContext } from "react"
import "./AboutPage.css"

function AboutPage(props) {
  useEffect(() => {
    props.IsInHomePageHandlerFalse();
  })

  return (
    <div>
      AboutPage
    </div>
  )
}

export default AboutPage
