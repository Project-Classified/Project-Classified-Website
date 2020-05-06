import React, { useEffect } from 'react'

export default function PostAddPage(props) {
    useEffect(() => {
        props.IsInHomePageHandlerFalse();
    })

    return (
        <div>
            PostAddPage
        </div>
    )
}
