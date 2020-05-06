import React, { useEffect } from 'react'

export default function ProfileSettingsPage(props) {
    useEffect(() => {
        props.IsInHomePageHandlerFalse();
    })

    return (
        <div>
            ProfileSettingsPage
        </div>
    )
}
