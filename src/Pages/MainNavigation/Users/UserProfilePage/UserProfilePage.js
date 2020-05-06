import React, { useEffect } from 'react'

export default function UserProfilePage(props) {
    useEffect(() => {
        props.IsInHomePageHandlerFalse();
    })

    return (
        <div>
            UserProfilePage
        </div>
    )
}
