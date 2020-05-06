import React, { useEffect } from 'react'

export default function FAQsPage(props) {
    useEffect(() => {
        props.IsInHomePageHandlerFalse();
    })

    return (
        <div>
            FAQsPage
        </div>
    )
}
