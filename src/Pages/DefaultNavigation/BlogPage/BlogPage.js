import React, { useEffect } from 'react'

export default function BlogPage(props) {
    useEffect(() => {
        props.IsInHomePageHandlerFalse();
    })

    return (
        <div>
            BlogPage
        </div>
    )
}
