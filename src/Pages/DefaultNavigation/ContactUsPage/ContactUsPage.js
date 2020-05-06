import React, { useEffect } from 'react'

export default function ContactUsPage(props) {
    useEffect(() => {
        props.IsInHomePageHandlerFalse();
    })

    return (
        <div>
            ContactUsPage
        </div>
    )
}
